import { Sequelize } from 'sequelize'

import { CustomError } from '@/core/errors/custom-error'
import { env } from '@/env'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  database: env.DATABASE_NAME,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  logging: env.NODE_ENV === 'development',
})

async function connectToDatabase() {
  try {
    await sequelize.authenticate()

    await sequelize.sync({ alter: true })
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
    throw new CustomError('Erro ao conectar ao banco de dados')
  }
}

export { sequelize, connectToDatabase }
