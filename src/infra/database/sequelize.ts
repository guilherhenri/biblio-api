import 'reflect-metadata'

import path from 'node:path'

import { Sequelize } from 'sequelize-typescript'

import { env } from '@/config/env'
import { CustomError } from '@/core/errors/custom-error'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  database: env.DATABASE_NAME,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  logging: env.NODE_ENV === 'development',
  models: [path.resolve(__dirname, 'models', '*.ts')],
})

async function connectToDatabase() {
  try {
    await sequelize.authenticate()

    if (env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true })
    }
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
    throw new CustomError('Erro ao conectar ao banco de dados')
  }
}

export { sequelize, connectToDatabase }
