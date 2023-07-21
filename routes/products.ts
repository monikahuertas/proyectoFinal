import { Router } from "express";
import {getProducts, getProductsById, getProductsByProd, saveProduct, updateProduct, deleteProducts} from '../controllers/products'

const router = Router();

router.get('/getProducts', getProducts)
router.get('/getProductsById/:id', getProductsById)
router.get('/getProductsByProd/:product', getProductsByProd)
router.post('/saveProduct', saveProduct);
router.put('/updateProduct', updateProduct);
router.delete('deleteProducts/:id', deleteProducts)

export default router