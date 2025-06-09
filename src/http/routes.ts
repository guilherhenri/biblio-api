import { Router } from 'express'

import { createBook } from './controllers/create-book'
import { getBook } from './controllers/get-book'
import { listBooks } from './controllers/list-books'

export const router = Router({
  mergeParams: true,
})

router.get('/books', listBooks)
router.get('/books/:id', getBook)
router.post('/books', createBook)
