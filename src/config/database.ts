import path from 'node:path'

import { env } from './env'

module.exports = {
  development: {
    dialect: 'postgres',
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    database: env.DATABASE_NAME,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    logging: env.NODE_ENV === 'development',
    models: [path.resolve('..', 'models', '**', '*.ts')],
  },
}
