import { Router } from 'express';
import { deleteOrder, getOrder, getOrders, postOrder, updateOrder } from '../controllers/order';

const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.delete('/:id', deleteOrder);
router.post('/', postOrder);
router.put('/:id', updateOrder);

export default router;