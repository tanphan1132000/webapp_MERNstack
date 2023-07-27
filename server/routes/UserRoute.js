import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser, addUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/', getAllUsers)
router.post('/', addUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

export default router