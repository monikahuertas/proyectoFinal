import { Router } from "express";
import {getCustomers, getCustomerById, getCustomerByName, saveCustomer, updateCustomer, deleteCustomer} from "../controllers/customers"
const router = Router()

router.get('/getCustomers', getCustomers)
router.get('/getCustomerById/:id', getCustomerById)
router.get('/getCustomerByName/:first_name', getCustomerByName)
router.post('/saveCustomer', saveCustomer)
router.put('/updateCustomer', updateCustomer)
router.delete('/deleteCustomer/:id', deleteCustomer) 


export default router