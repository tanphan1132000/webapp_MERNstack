import express from 'express';
import { addRoom, deleteRoom, getRoom, updateRoom } from '../controllers/RoomController.js';

const router = express.Router();

router.post('/', addRoom);
router.get('/', getRoom);
router.put('/', updateRoom);
router.delete('/', deleteRoom);

export default router