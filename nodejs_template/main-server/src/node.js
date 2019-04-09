/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import CustomError from 'service-error/custom_error';

import * as config from './config';

export let role;

export async function getNodeRoleFromBlockchain() {
    try {
      const nodeInfo = {
        role: "holder"
      }; // await getNodeInfo(config.nodeId);

      if (nodeInfo == null) {
        throw new CustomError({
          message:
            'Node info is not available. This node ID may have not been registered with EDOC.',
        });
      }
      if (nodeInfo.role == null) {
        throw new CustomError({
          message: 'Role could not be found.',
        });
      }
      role = nodeInfo.role.toLowerCase();
      return role;
    } catch (error) {
      throw new CustomError({
        message: 'Cannot get node role from blockchain',
        cause: error,
      });
    }
}