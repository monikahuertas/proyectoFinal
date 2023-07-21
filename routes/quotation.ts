import { Router } from "express";
import{getQuotations, getQuotationById, saveQuotation, updateQuotation} from "../controllers/quotation"
const router = Router()

router.get('/getQuotations', getQuotations)
router.get('/getQuotationById/:id', getQuotationById)
router.post('/saveQuotation', saveQuotation)
router.put('/updateQuotation', updateQuotation)

export default router