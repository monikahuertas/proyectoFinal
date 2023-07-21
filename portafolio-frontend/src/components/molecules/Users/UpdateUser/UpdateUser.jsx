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

export default function UpdateUser({load, setLoad, idUpdate}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const consultUserById = async (id)=>{
    const response = await axios.get (`http://localhost:3000/api/users/consultUserById/${id}`)
    setFormData(response.data.user)
  }

  useEffect(()=>{
    if (idUpdate) {
      consultUserById(idUpdate)
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
            document:formData.document||'',
            names:formData.names|| '', 
            email:formData.email|| '',
            password:formData.password||''
           }}
        validationSchema={ Yup.object({
          document: Yup.string()
            .max(15, 'Maximo 15 caracteres o menos')
            .required('Campo Obligatorio'),
          names: Yup.string()
            .required('Campo Obligatorio'),
          email: Yup.string()
            .email('Correo Invalido')
            .required('Campo Obligatorio'),
          password:Yup.string()
            .min(8,'Minimo 8 caracteres')
            .required('Campo Obligatorio'),
          
        })}
        onSubmit={async(values, { setSubmitting }) => {
          const response= await axios.put('http://localhost:3000/api/users/updateUsers', values)  
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
            {"Actualizar Usuario"}
            </DialogTitle>
            <DialogContent sx={{textAlign:'center'}}>
            <DialogContentText id="alert-dialog-description" sx={{}}>
                <TextField 
                    id="outlined-basic" 
                    name="document"
                    label="Documento"
                    type='number' 
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
                    name="names"
                    label="Nombres" 
                    variant="outlined"
                    fullWidth
                    sx={{mt:1}} 
                    onChange={handleChange}
                    value={values.names}
                    error={errors.names}
                    helperText={errors.names}
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
                <TextField 
                    id="outlined-basic" 
                    name="password"
                    label="Contraseña" 
                    variant="outlined"
                    fullWidth
                    sx={{mt:1}} 
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password}
                    helperText={errors.password}
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