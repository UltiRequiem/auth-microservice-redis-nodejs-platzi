import process from 'node:process';

export const API_PORT = process.env.API_PORT || 3001;

export const {
  DB_USERNAME,
  DB_NAME,
  REMOTE_DB,
  POST_PORT,
  JWT_SECRET,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB,
  MYSQL_SRV_HOST,
  MYSQL_SRV_PORT,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASS,
} = process.env;

export default {
  remoteDB: REMOTE_DB || false,
  post: {
    port: POST_PORT || 3002,
  },
  jwt: {
    secret: JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: MYSQL_HOST || 'remotemysql.com',
    user: MYSQL_USER || 'vyU7DCqzKX',
    password: MYSQL_PASS || 'hQ8gtxIQ9o',
    database: MYSQL_DB || 'vyU7DCqzKX',
  },
  mysqlService: {
    host: MYSQL_SRV_HOST || 'localhost',
    port: MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: MYSQL_SRV_HOST || 'localhost',
    port: MYSQL_SRV_PORT || 3003,
  },
  redis: {
    host: REDIS_HOST || 'redis-13556.c14.us-east-1-3.ec2.cloud.redislabs.com',
    port: REDIS_PORT || 13_556,
    password: REDIS_PASS || '9sWIItAvlPbkoTcwOXstNm9hDFv7AU2F',
  },
};
