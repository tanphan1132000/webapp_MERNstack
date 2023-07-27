import express from 'express'
import { createChat, findChat, updateChat, deleteChat } from '../controllers/ChatController.js';
const router = express.Router()

router.post('/', createChat);
router.put('/', updateChat);
router.get('/', findChat);
router.delete('/', deleteChat);

export default router