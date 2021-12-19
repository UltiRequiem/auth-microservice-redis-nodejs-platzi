import { env } from 'node:process';

export const API_PORT = env.API_PORT || 3001;

export const { DB_USERNAME, DB_NAME } = env;
