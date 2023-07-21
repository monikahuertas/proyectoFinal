import React, {useState} from 'react';
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

export default function CreateQuotation({load, setLoad}){
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button sx={{border:'solid 0.5px rgb(45,63,83)', color: 'rgb(45,63,83)'}} variant="outlined" onClick={handleClickOpen}>
       Crear Cotizacion
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
       initialValues={{ 
            consecutive:'',
            idCustomers: '', 
            Total: '',
            idUsers:'',
            // idRol:''
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
          const response= await axios.post('http://localhost:3000/api/quotation/saveQuotation', values)  
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
            {"Crear Nueva Cotizacion"}
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
                Crear
            </Button>
            </DialogActions>
        </form>
        )}
        </Formik>
      </Dialog>
    </div>
  );
}
