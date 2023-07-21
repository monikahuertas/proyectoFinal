import Container from '@mui/material/Container';
import CreateProducts from '../../components/molecules/Products/CreateProducts/CreateProducts';
import ListProducts from '../../components/molecules/Products/ListProducts/ListProducts';
import { useState } from 'react';
import UpdateProducts from '../../components/molecules/Products/UpdateProducts/UpdateProducts';


export default function Products() {
    const [load, setLoad]= useState(false)
    const [idUpdate, setIdUpdate] = useState('');

  return (
    <><h2 className='ColorPrimary'>MODULO PRODUCTOS</h2>
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
        <CreateProducts load={load} setLoad={setLoad}/>
        <ListProducts load={load} setLoad={setLoad} setIdUpdate={setIdUpdate}/>
        <UpdateProducts idUpdate={idUpdate} load={load} setLoad={setLoad}/>
    </Container></>
  );
}