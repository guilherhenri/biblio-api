import { Router } from 'express'

import { createBook } from './controllers/create-book'
import { createUser } from './controllers/create-user'
import { deleteBook } from './controllers/delete-book'
import { getBook } from './controllers/get-book'
import { listBooks } from './controllers/list-books'
import { listUsers } from './controllers/list-users'
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
router.post('/users', createUser)
