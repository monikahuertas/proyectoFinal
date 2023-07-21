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

export default function CreateProducts({load, setLoad}) {
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
       Crear Producto
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
        initialValues={{ 
            product:'',
            Stock: '', 
            Purchase_Price: '',
            Sale_Price:'',
                // idRol:''
        }}
        validationSchema={ Yup.object({
            product: Yup.string()
            .required('Campo Obligatorio'),
            Stock: Yup.number()
            .required('Campo Obligatorio'),
            Purchase_Price: Yup.number()
            .required('Campo Obligatorio'),
            Sale_Price:Yup.number()
            .required('Campo Obligatorio'),
          
        })}
        onSubmit={async(values, { setSubmitting }) => {
          const response= await axios.post('http://localhost:3000/api/products/saveProduct', values)  
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
            {"Crear nuevo producto"}
            </DialogTitle>
            <DialogContent sx={{textAlign:'center'}}>
            <DialogContentText id="alert-dialog-description" sx={{}}>
                <TextField 
                    id="outlined-basic" 
                    name="product"
                    label="Producto"
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.product}
                    error={errors.product}
                    helperText={errors.product}
                /> 
                <TextField 
                    id="outlined-basic" 
                    name="Stock"
                    label="Cantidad" 
                    type='number'
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.Stock}
                    error={errors.Stock}
                    helperText={errors.Stock}
                />
                <TextField 
                    id="outlined-basic" 
                    name="Purchase_Price"
                    label="Precio Compra"
                    type='number' 
                    variant="outlined"
                    sx={{mt:1, m: 1}} 
                    onChange={handleChange}
                    value={values.Purchase_Price}
                    error={errors.Purchase_Price}
                    helperText={errors.Purchase_Price}
                />
                <TextField 
                    id="outlined-basic" 
                    name="Sale_Price"
                    label="Precio Venta" 
                    type='number'
                    variant="outlined"
                    sx={{mt:1, m:1}} 
                    onChange={handleChange}
                    value={values.Sale_Price}
                    error={errors.Sale_Price}
                    helperText={errors.Sale_Price}
                />
                {/* <TextField 
                    id="outlined-basic" 
                    name="idRol"
                    label="Rol" 
                    variant="outlined"
                    sx={{mt:1, m:1 }} 
                    onChange={handleChange}
                    value={values.idRol}
                /> */}
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