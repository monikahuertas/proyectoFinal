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

export default function CreateCustomer({load, setLoad}) {
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
        Crear Cliente
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Formik
        initialValues={{ 
          document:'',
          first_name: '', 
          second_name: '',
          first_lastName:'',
          second_lastName:'',
          city:'',
          address:'',
          phone:'',
          email:''
        }}

        validationSchema={ Yup.object({
          document: Yup.string()
            .max(15, 'Maximo 15 caracteres o menos')
            .required('Campo Obligatorio'),
          first_name: Yup.string()
            .required('Campo Obligatorio'),
          first_lastName: Yup.string()
            .required('Campo Obligatorio'),
          city:Yup.string()
            .required('Campo Obligatorio'),
          address:Yup.string()
            .required('Campo Obligatorio'),
          phone:Yup.string()
            .required('Campo Obligatorio'),  
          email: Yup.string()
            .email('Correo Invalido')
            .required('Campo Obligatorio'),       
        })}
        
        onSubmit={async(values, { setSubmitting }) => {
          const response= await axios.post('http://localhost:3000/api/customers/saveCustomer', values)
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
        }) => (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', color: 'rgb(45,63,83)'}}>
            {"Crear Nuevo Cliente"}
          </DialogTitle>

          <DialogContent sx={{textAlign:'center'}}>
            <DialogContentText id="alert-dialog-description" sx={{}}>
              <TextField 
                id="outlined-basic" 
                name="document"
                label="Documento" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.document}
                error={errors.document}
                helperText={errors.document}
              /> 
              <TextField 
                id="outlined-basic" 
                name="first_name"
                label="Primer Nombre" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.first_name}
                error={errors.first_name}
                helperText={errors.first_name}
              />
              <TextField 
                id="outlined-basic" 
                name="second_name"
                label="Segundo Nombre" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.second_name}
              />
              <TextField 
                id="outlined-basic" 
                name="first_lastName"
                label="Primer Apellido" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.first_lastName}
                error={errors.first_lastName}
                helperText={errors.first_lastName}
              />
              <TextField 
                id="outlined-basic" 
                name="second_lastName"
                label="Segundo Apellido" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.second_lastName}
              />
              <TextField 
                id="outlined-basic" 
                name="city"
                label="Ciudad" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.city}
                error={errors.city}
                helperText={errors.city}
              />
              <TextField 
                id="outlined-basic" 
                name="address"
                label="Direccion" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.address}
                error={errors.address}
                helperText={errors.address}
              />
              <TextField 
                id="outlined-basic" 
                name="phone"
                label="Telefono" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.phone}
                error={errors.phone}
                helperText={errors.phone}
              />
              <TextField 
                id="outlined-basic" 
                name="email"
                label="Email" 
                variant="outlined"
                fullWidth
                sx={{mt:1}} 
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                helperText={errors.email}
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