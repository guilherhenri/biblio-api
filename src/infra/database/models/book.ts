import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'Books' })
export class Book extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  author!: string

  @Column({
    type: DataType.STRING(13),
    allowNull: false,
    unique: true,
  })
  ISBN!: string

  @Column({
    type: DataType.STRING(4),
    allowNull: false,
  })
  year!: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isAvailable!: boolean
}

export default Book
