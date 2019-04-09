/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import EventEmitter from 'events';
import * as MQProtocol from './mq_protocol';
import MQRecvSocket from './mq_recv_socket';

import CustomError from 'service-error/custom_error';
import errorType from 'service-error/type';

export default class MQRecv extends EventEmitter {
  constructor(config) {
    super();
    this.recvSocket = new MQRecvSocket({
      maxMsgSize: config.maxMsgSize,
      port: config.port,
    });

    this.recvSocket.on(
      'message',
      function(identity, messageBuffer) {
        let jsonMessage;
        try {
          jsonMessage = MQProtocol.extractMsg(messageBuffer);
        } catch (error) {
          this.emit(
            'error',
            new CustomError({
              errorType: errorType.WRONG_MESSAGE_QUEUE_PROTOCOL,
              details: {
                messageBuffer: Buffer.isBuffer(messageBuffer)
                  ? messageBuffer.toString('base64')
                  : messageBuffer,
              },
              cause: error,
            })
          );
          return;
        }
        const ackMSG = MQProtocol.generateAckMsg(config.senderId, {
          msgId: jsonMessage.retryspec.msgId,
          seqId: jsonMessage.retryspec.seqId,
        });

        // this.recvSocket.send(identity, ackMSG);
        this.emit('message', {
          message: jsonMessage.message,
          msgId: jsonMessage.retryspec.msgId,
          senderId: jsonMessage.senderId,
          sendAck: () => this.recvSocket.send(identity, ackMSG),
        });
      }.bind(this)
    );

    this.recvSocket.on(
      'error',
      function(error) {
        this.emit(
          'error',
          new CustomError({
            errorType: errorType.MQ_RECV_ERROR,
            cause: error,
          })
        );
      }.bind(this)
    );
  }

  close() {
    this.recvSocket.close();
  }
}