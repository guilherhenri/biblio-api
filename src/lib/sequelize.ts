import { Sequelize } from 'sequelize'

import { env } from '@/env'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  logging: env.NODE_ENV === 'development',
})

async function connectToDatabase() {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')

    await sequelize.sync({ alter: true })
    console.log('Modelos sincronizados com o banco de dados.')
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
  }
}

export { sequelize, connectToDatabase }
