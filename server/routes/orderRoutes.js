import express from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} from '../controllers/orderController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getUserOrders);
router.get('/admin/all', auth, admin, getAllOrders);
router.get('/:id', auth, getOrderById);
router.put('/:id/status', auth, admin, updateOrderStatus);

export default router;
