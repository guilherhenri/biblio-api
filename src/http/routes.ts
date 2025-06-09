import { Router } from 'express'

import { createBook } from './controllers/create-book'

export const router = Router({
  mergeParams: true,
})

router.post('/books', createBook)
