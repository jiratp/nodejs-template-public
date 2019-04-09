/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */

import EventEmitter from 'events';

import zmq from 'zeromq';

export default class MQRecvSocket extends EventEmitter {
  constructor(config) {
    super();
    this.receivingSocket = zmq.socket('router');
    // maximum receiver size ( -1 receive all )
    this.receivingSocket.setsockopt(
      zmq.ZMQ_MAXMSGSIZE,
      config.maxMsgSize || -1
    );
    //no lingering time after socket close. we want to control send by business logic
    this.receivingSocket.setsockopt(zmq.ZMQ_LINGER, 0);
    // no socket identity ( every time the app restart, we don't resume)
    //this.receivingSocket.setsockopt(zmq.ZMQ_IDENTITY,{}) ;
    this.receivingSocket.bindSync('tcp://*:' + config.port);

    this.receivingSocket.on(
      'message',
      function(identity, emptyDelimiter, messageBuffer) {
        this.emit('message', identity, messageBuffer);
      }.bind(this)
    );

    this.receivingSocket.on(
      'error',
      function(error) {
        this.emit('error', error);
      }.bind(this)
    );
  }

  send(identity, payload) {
    this.receivingSocket.send([identity, Buffer.alloc(0), payload]);
  }

  close() {
    this.receivingSocket.close();
  }
}
