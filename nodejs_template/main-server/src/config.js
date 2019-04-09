/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import path from 'path';

export const env = process.env.NODE_ENV || 'development';

//allow self signed https callback
if (env === 'development') process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const https = process.env.HTTPS === 'true';

export const httpsKeyPath =
  process.env.HTTPS_KEY_PATH != null
    ? process.env.HTTPS_KEY_PATH
    : path.join(__dirname, '..', 'dev_https_key', 'key.pem');

export const httpsCertPath =
  process.env.HTTPS_CERT_PATH != null
    ? process.env.HTTPS_CERT_PATH
    : path.join(__dirname, '..', 'dev_https_key', 'cert.pem');

export const clientHttpErrorCode = process.env.CLIENT_HTTP_ERROR_CODE || 400;

export const serverHttpErrorCode = process.env.SERVER_HTTP_ERROR_CODE || 500;

export const dbIp = process.env.DB_IP || 'localhost';

export const dbPort = process.env.DB_PORT || 6379;

export const dbPassword = process.env.DB_PASSWORD;

export const dataDirectoryPath =
  process.env.DATA_DIRECTORY_PATH || path.join(__dirname, '..', 'data');

export const logLevel =
  process.env.LOG_LEVEL || (env === 'development' ? 'debug' : 'info');

export const logFormat = process.env.LOG_FORMAT || 'default';

export const logTarget = process.env.LOG_TARGET || 'console';

export const logColor =
  process.env.LOG_COLOR == null
    ? logTarget === 'console'
    : process.env.LOG_COLOR === 'true';

export const logOneLine = process.env.LOG_ONE_LINE === 'true';

export const logDirectoryPath =
  process.env.LOG_DIRECTORY_PATH || path.join(__dirname, '..', 'log');

export const logLengthThreshold = Infinity; // 2000

export const replaceForTooLongLog = '<--- Too long, omitted --->';

export const nodeId = process.env.NODE_ID;

export const ndidNode = process.env.NDID_NODE === 'true';

const defaultMqBindingPort = 5555;

export const mqIp = process.env.MQ_CONTACT_IP || 'localhost';

export const mqPort =
  process.env.MQ_BINDING_PORT == null
    ? defaultMqBindingPort
    : parseInt(process.env.MQ_BINDING_PORT);

export const mqServiceServerIp =
  process.env.MQ_SERVICE_SERVER_IP || 'localhost';

export const mqServiceServerPort = process.env.MQ_SERVICE_SERVER_PORT
  ? parseInt(process.env.MQ_SERVICE_SERVER_PORT)
  : 50051;

export const registerMqAtStartup =
  process.env.REGISTER_MQ_AT_STARTUP != null
    ? process.env.REGISTER_MQ_AT_STARTUP === 'true'
    : true;

export const useExternalCryptoService =
  process.env.USE_EXTERNAL_CRYPTO_SERVICE === 'true';

export const privateKeyPath = useExternalCryptoService
  ? null
  : process.env.PRIVATE_KEY_PATH == null && env === 'development'
    ? path.join(__dirname, '..', 'dev_key', 'keys', nodeId)
    : process.env.PRIVATE_KEY_PATH;

export const privateKeyPassphrase = useExternalCryptoService
  ? null
  : process.env.PRIVATE_KEY_PASSPHRASE;

export const masterPrivateKeyPath = useExternalCryptoService
  ? null
  : process.env.MASTER_PRIVATE_KEY_PATH == null && env === 'development'
    ? path.join(__dirname, '..', 'dev_key', 'master_keys', nodeId + '_master')
    : process.env.MASTER_PRIVATE_KEY_PATH;

export const masterPrivateKeyPassphrase = useExternalCryptoService
  ? null
  : process.env.MASTER_PRIVATE_KEY_PASSPHRASE;

//in byte
export const challengeLength = 2;
export const zkRandomLengthForIdp = 128;
export const saltLength = 16;

// Callback retry timeout in seconds
export const callbackRetryTimeout =
  process.env.CALLBACK_RETRY_TIMEOUT == null
    ? 600
    : parseInt(process.env.CALLBACK_RETRY_TIMEOUT);