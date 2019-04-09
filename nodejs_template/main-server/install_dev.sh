#!/bin/sh
NODE_ENV=development NODE_ID=issuer_001 LOG_LEVEL=debug LOG_TARGET=console MQ_CONTACT_IP= npm run build
NODE_ENV=development NODE_ID=issuer_001 LOG_LEVEL=debug LOG_TARGET=console MQ_CONTACT_IP= node build/server.js