/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import Ajv from 'ajv';

import schemasV1 from './json_schema/v1';

const ajvOptions = {
  allErrors: true,
};

const ajv = new Ajv(ajvOptions);

function validate({ edocApi, apiVersion, method, path, params, query, body }) {
    let data;
    let dataType;
    if (typeof params === 'object') {
      data = params;
      dataType = 'params';
    } else if (typeof query === 'object') {
      data = query;
      dataType = 'query';
    } else if (typeof body === 'object') {
      data = body;
      dataType = 'body';
    }

    ajv.removeSchema('defs');
  
    if (!edocApi) {
      if (apiVersion === 1) {
        ajv.addSchema(schemasV1.defsSchema, 'defs');
      }
    }

    const jsonSchema = getJSONSchema(edocApi, apiVersion, method, path, dataType);
    const validate = ajv.compile(jsonSchema);
    const valid = validate(data);
  
    return {
      valid,
      errors: validate.errors,
    };
  }
  
  function getJSONSchema(edocApi, apiVersion, method, path, dataType) {
    try {
        if (!edocApi) {
          if (apiVersion === 1) {
            return schemasV1[method][path][dataType];
          }
        }

        throw new Error('Cannot find JSON schema apiVersion for validation');
    } catch (error) {
      throw new Error('Cannot find JSON schema for validation');
    }
  }
  
  export default validate;