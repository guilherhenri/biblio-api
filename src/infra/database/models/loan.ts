import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'

import { Book } from './book'
import { User } from './user'

@Table({ tableName: 'Loans' })
export class Loan extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bookId!: number

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  borrowDate!: Date

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  giveBackDate!: Date

  @BelongsTo(() => User)
  user!: User

  @BelongsTo(() => Book)
  book!: Book
}

export default Loan
