import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function UpdateQuotation({load, setLoad, idUpdate}){
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getQuotationById = async (id)=>{
    const response = await axios.get(`http://localhost:3000/api/quotation/getQuotationById/${id}`)
    setFormData(response.data.quotation)
  }

  useEffect(()=>{
    if (idUpdate) {
      getQuotationById(idUpdate)
    }
    setOpen(idUpdate ? true : false)//para abrir la ventana modal
  },[idUpdate])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
        enableReinitialize
       initialValues={{ 
            consecutive:formData.consecutive||'',
            idCustomers:formData.idCustomers|| '', 
            Total:formData.Total|| '',
            idUsers:formData.idUsers||''
           }}
        validationSchema={ Yup.object({
          consecutive: Yup.string()
            .max(15, 'Maximo 15 caracteres o menos')
            .required('Campo Obligatorio'),
          idCustomers: Yup.string()
            .required('Campo Obligatorio'),
          Total: Yup.string()
            .required('Campo Obligatorio'),
          idUsers:Yup.string()
            .min(8,'Minimo 8 caracteres')
            .required('Campo Obligatorio'),
          
        })}
        onSubmit={async(values, { setSubmitting }) => {
          const response= await axios.put('http://localhost:3000/api/quotation/updateQuotation', values)  
          setLoad(!load)
          setOpen(false);

        }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>
            <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', color: 'rgb(45,63,83)'}}>
            {"Actualizar Cotizacion"}
            </DialogTitle>
            <DialogContent sx={{textAlign:'center'}}>
            <DialogContentText id="alert-dialog-description" sx={{}}>
                <TextField 
                    id="outlined-basic" 
                    name="consecutive"
                    label="Consecutivo"
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.consecutive}
                    error={errors.consecutive}
                    helperText={errors.consecutive}
                /> 
                <TextField 
                    id="outlined-basic" 
                    name="idCustomers"
                    label="Nombres Cliente" 
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.idCustomers}
                    error={errors.idCustomers}
                    helperText={errors.idCustomers}
                />
                <TextField 
                    id="outlined-basic" 
                    name="Total"
                    label="Total" 
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.Total}
                    error={errors.Total}
                    helperText={errors.Total}
                />
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button type='submit' sx={{color: 'rgb(45,63,83)'}}>
                Actualizar
            </Button>
            </DialogActions>
        </form>
        )}
        </Formik>
      </Dialog>
    </div>
  );
}
