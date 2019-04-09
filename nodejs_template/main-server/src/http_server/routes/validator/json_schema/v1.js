/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
export default {
    defsSchema: {
        definitions: {
          url: {
            type: 'string',
            format: 'uri',
            pattern: '^(https?)://',
          },
          keyType: {
            type: 'string',
            enum: ['RSA'],
          },
          signMethod: {
            type: 'string',
            enum: ['RSA-SHA256'],
          },
        },
    },
    GET: {
        '/service': {
            query: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                properties: {

                }
            }
        }
    },
    POST: {
        '/rp/requests/:namespace/:identifier': {
            params: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                properties: {
                namespace: { type: 'string', minLength: 1 },
                identifier: { type: 'string', minLength: 1 },
                },
                required: ['namespace', 'identifier'],
            }
        }
    }
};