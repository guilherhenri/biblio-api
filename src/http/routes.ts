import { Router } from 'express'

import { createBook } from './controllers/create-book'
import { listBooks } from './controllers/list-books'

export const router = Router({
  mergeParams: true,
})

router.get('/books', listBooks)
router.post('/books', createBook)
