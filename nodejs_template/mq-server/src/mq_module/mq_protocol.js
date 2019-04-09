/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import path from 'path';

import protobuf from 'protobufjs';

const protobufRootInstance = new protobuf.Root();
const protobufRoot = protobufRootInstance.loadSync(
  path.join(__dirname, '..', '..', '..', 'protos', 'mq_protocol_message.proto'),
  { keepCase: true }
);
const MqProtocolMessage = protobufRoot.lookupType('MqProtocolMessage');

function applyRetrySpec(senderId, message, retryspec) {
  const payload = {
    msg_id: retryspec.msgId,
    seq_id: retryspec.seqId,
    message: message,
    sender_id: senderId,
  };
  const errMsg = MqProtocolMessage.verify(payload);
  if (errMsg) {
    throw new Error(errMsg);
  }
  const protoMessage = MqProtocolMessage.create(payload);
  const protoBuffer = MqProtocolMessage.encode(protoMessage).finish();
  return protoBuffer;
}

function extractRetrySpec(message) {
  const decodedMessage = MqProtocolMessage.decode(message);
  return {
    retryspec: {
      msgId: decodedMessage.msg_id.toNumber(),
      seqId: decodedMessage.seq_id,
    },
    message: decodedMessage.message,
    senderId: decodedMessage.sender_id,
  };
}

export function generateSendMsg(senderId, payload, retryspec) {
  let msg = payload;
  msg = applyRetrySpec(senderId, msg, retryspec);
  return msg;
}

export function extractMsg(payload) {
  const msg = payload;
  return extractRetrySpec(msg);
}

export function generateAckMsg(senderId, retryspec) {
  const ack = applyRetrySpec(senderId, Buffer.from(''), retryspec);
  return ack;
}