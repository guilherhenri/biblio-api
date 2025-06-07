import { Sequelize } from 'sequelize'

import config from '@/config/database'
import { env } from '@/config/env'
import { CustomError } from '@/core/errors/custom-error'

const sequelize = new Sequelize(config)

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
