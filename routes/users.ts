import { Router } from "express";
import{consultUsers, consultUserById, consultUserByDocu, saveUsers, updateUsers,deleteUsers} from "../controllers/users"
const router = Router()

router.get('/consultUsers', consultUsers)
router.get('/consultUserById/:id', consultUserById)
router.get('/consultUserByDocu/:document', consultUserByDocu)
router.post('/saveUsers', saveUsers)
router.put('/updateUsers', updateUsers)
router.delete('/deleteUsers/:id', deleteUsers)

export default router