/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
module.exports = {
    // Server Errors
    UNKNOWN_ERROR: {
        code: 10000,
        message: 'Unknown Error',
    },
    BODY_PARSER_ERROR: {
      code: 10009,
      message: 'Body parsing failed',
    },
    // MQ Errors
    WRONG_MESSAGE_QUEUE_PROTOCOL: {
        code: 10027,
        message: 'Received unrecognized message via message queue',
    },
    MQ_SEND_ERROR: {
        code: 10038,
        message: 'Message queue (sender) error',
    },
    MQ_RECV_ERROR: {
        code: 10039,
        message: 'Message queue (receiver) error',
    },
    MQ_SEND_CLEANUP_ERROR: {
        code: 10040,
        message: 'Message queue (sender) clean up error',
    },
    MQ_SEND_TIMEOUT: {
        code: 10041,
        message: 'Message queue send retry timed out. Give up sending.',
    },
    MQ_SEND_ACK_UNKNOWN_MESSAGE_ID: {
        code: 10042,
        message: 'Cannot send ACK for unknown message ID',
    },
    // Client Errors

    // Application Errors
    PATH_PARAMS_VALIDATION_FAILED: {
        code: 20001,
        message: 'Path parameters validation failed',
        clientError: true,
      },
      QUERY_STRING_VALIDATION_FAILED: {
        code: 20002,
        message: 'Query string validation failed',
        clientError: true,
      },
      BODY_VALIDATION_FAILED: {
        code: 20003,
        message: 'Body validation failed',
        clientError: true,
    },
    BODY_PARSE_FAILED: {
      code: 20007,
      message: 'Unable to parse body',
      clientError: true,
    },
    BODY_TOO_LARGE: {
      code: 20036,
      message: 'Body size is too large (greater than limit)',
      clientError: true,
    },
    DATA_VALIDATION_FAILED: {
      code: 20059,
      message: 'Data validation failed',
      clientError: true,
    },
};