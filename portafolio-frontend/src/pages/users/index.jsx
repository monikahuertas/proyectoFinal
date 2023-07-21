import Container from '@mui/material/Container';
import CreateUser from '../../components/molecules/Users/CreateUser/CreateUser';
import ListUser from '../../components/molecules/Users/ListUser/ListUser';
import { useState } from 'react';
import UpdateUser from '../../components/molecules/Users/UpdateUser/UpdateUser';

export default function Users() {
    const[load, setLoad] = useState(false)
    const[idUpdate, setIdUpdate] =useState('')
    
  return (
    <><h2 className='ColorPrimary'>MODULO USUARIOS</h2>
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
        <CreateUser load={load} setLoad={setLoad}/>
        <ListUser load={load} setLoad={setLoad} setIdUpdate={setIdUpdate}/>
        <UpdateUser load={load} setLoad={setLoad} idUpdate={idUpdate}/>
    </Container></>
  );
}