/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */

let maxConn = 0;
let count = 0;

import EventEmitter from 'events';

import zmq from 'zeromq';
import crypto from 'crypto';

import { maxConnectionPerSocket } from '../config';

export default class MQSendSocket extends EventEmitter {
  constructor() {
    super();
    this.socketMap = new Map();
    this.socketUsedBy = {};
    this.socketDestMap = {};
    this.socketListByDest = {};
  }

  send(dest, payload, msgId, seqId) {
    const destKey = dest.ip + ':' + dest.port;
    let currentSocket = null;
    if(!this.socketListByDest[destKey]) {
      this.socketListByDest[destKey] = [];
    }
    for(let i = 0 ; i < this.socketListByDest[destKey].length ; i++) {
      let socket = this.socketListByDest[destKey][i];
      if(
        this.socketUsedBy[socket.id] &&
        this.socketUsedBy[socket.id].length < maxConnectionPerSocket
      ) {
        currentSocket = socket;
        break;
      }
    }
    if(currentSocket == null) {
      const newSocket = this._init(dest, msgId);
      this.socketDestMap[newSocket.id] = destKey;
      count++;
      if(count > maxConn) {
        console.log(count);
        maxConn = count;
      }
      this.socketListByDest[destKey].push(newSocket);
      currentSocket = newSocket;
    }
    if(!this.socketUsedBy[currentSocket.id]) {
      this.socketUsedBy[currentSocket.id] = [];
    }
    this.socketUsedBy[currentSocket.id].push(seqId);
    this.socketMap.set(seqId, currentSocket);
    currentSocket.send(payload);
  }

  cleanUp(seqId) {
    let socketId = this.socketMap.get(seqId).id;
    let index = this.socketUsedBy[socketId].indexOf(seqId);
    if(index !== -1) {
      this.socketUsedBy[socketId].splice(index,1);
      if(this.socketUsedBy[socketId].length === 0) {
        this.socketMap.get(seqId).close();
        count--;
        delete this.socketUsedBy[socketId];
        let destKey = this.socketDestMap[socketId];
        let index = this.socketListByDest[destKey].filter((socket) => {
          return socket.id === socketId;
        })[0];
        if(index === -1) { throw 'Something is wrong'; }
        this.socketListByDest[destKey].splice(index,1);
      }
    }
    this.socketMap.delete(seqId);
  }

  closeAll() {
    const socketsClosed = this.socketMap.size;
    for (let [seqId, sendingSocket] of this.socketMap) {
      sendingSocket.close();
      this.socketMap.delete(seqId);
    }
    return socketsClosed;
  }

  // init socket and connection to destination (init source socket too, which should provide limitation but is cleaner)
  _init(dest, msgId) {
    const sendingSocket = zmq.socket('req');
    // socket option
    // small lingering time ( 50ms ) after socket close. we want to control send by business logic
    sendingSocket.setsockopt(zmq.ZMQ_LINGER, 0);
    //not setting means unlimited number of queueing message
    //sendingSocket.setsockopt(zmq.ZMQ_HWM, 0);
    //ALL in MEMORY --
    //sendingSocket.setsockopt(zmq.ZMQ_SWAP, 0);
    //no block // wait forever until close
    sendingSocket.setsockopt(zmq.ZMQ_RCVTIMEO, 0);
    //no block // wait forever until close
    sendingSocket.setsockopt(zmq.ZMQ_SNDTIMEO, 0);

    sendingSocket.on(
      'error',
      function(err) {
        this.emit('error', msgId, err);
      }.bind(this)
    );

    sendingSocket.on(
      'message',
      function(messageBuffer) {
        this.emit('message', messageBuffer);
      }.bind(this)
    );

    const destUri = `tcp://${dest.ip}:${dest.port}`;
    sendingSocket.connect(destUri);
    sendingSocket.id = crypto.randomBytes(16).toString('base64');
    return sendingSocket;
  }
}