import { Router } from "express";
import {getDetail, saveDetail, updateDetail, deleteDetail} from "../controllers/detail"
const router = Router()

router.get('/getDetail', getDetail)
// router.get('/getDetailById/:id', getDetailById)
router.post('/saveDetail', saveDetail)
router.put('/updateDetail', updateDetail)
router.delete('/deleteDetail/:id', deleteDetail)

export default router