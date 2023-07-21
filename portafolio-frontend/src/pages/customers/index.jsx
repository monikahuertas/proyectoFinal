import Container from '@mui/material/Container';
import CreateCustomer from '../../components/molecules/Customers/CreateCustomer/CreateCustomers';
import ListCustomers from '../../components/molecules/Customers/ListCustomers/ListCustomers';
import { useState } from 'react';
import UpdateCustomers from '../../components/molecules/Customers/UpdateCustomers/UpdateCustomers';
import { useNavigate } from 'react-router-dom';

export default function Customers() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false)
  const [idUpdate, setIdUpdate] = useState('');
    
  return (
    <><><h2 className='ColorPrimary'>MODULO CLIENTES</h2></>
    <Container maxWidth="xl" sx={{ mt: 5, mb: 10 }}>
        <CreateCustomer load={load} setLoad={setLoad}/>
        <ListCustomers load={load} setLoad={setLoad} setIdUpdate={setIdUpdate}/>
        <UpdateCustomers idUpdate={idUpdate} load={load} setLoad={setLoad} />
    </Container></>
  );
}