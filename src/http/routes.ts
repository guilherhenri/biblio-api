import { Router } from 'express'

import { createBook } from './controllers/create-book'
import { createUser } from './controllers/create-user'
import { deleteBook } from './controllers/delete-book'
import { getBook } from './controllers/get-book'
import { getUser } from './controllers/get-user'
import { giveBackBook } from './controllers/give-back-book'
import { listActiveLoans } from './controllers/list-active-loans'
import { listBooks } from './controllers/list-books'
import { listUsers } from './controllers/list-users'
import { registerLoan } from './controllers/register-loan'
import { updateBook } from './controllers/update-book'

export const router = Router({
  mergeParams: true,
})

router.get('/books', listBooks)
router.get('/books/:id', getBook)
router.post('/books', createBook)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)

router.get('/users', listUsers)
router.get('/users/:id', getUser)
router.post('/users', createUser)

router.get('/loans', listActiveLoans)
router.post('/loans', registerLoan)
router.patch('/loans', giveBackBook)
