import React, {useState,useEffect} from 'react';
import Container from '@mui/material/Container';
import CreateQuotation from '../../components/molecules/quotation/CreateQuotation/CreateQuotation';
import ListQuotation from '../../components/molecules/quotation/ListQuotation/ListQuotations';
import UpdateQuotation from '../../components/molecules/quotation/UpdateQuotation/UpdateQuotation';

export default function Quotation(){
    const[load, setLoad] = useState(false)
    const [idUpdate, setIdUpdate] = useState('');

    return(
        <><h2 className='ColorPrimary'>MODULO COTIZACIONES</h2>
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
        <CreateQuotation load={load} setLoad={setLoad}/>
        <ListQuotation load={load} setLoad={setLoad} setIdUpdate={setIdUpdate}/>
        <UpdateQuotation load={load} setLoad={setLoad} idUpdate={idUpdate}/>
    </Container></>
  );
}
//no funcionan los rows iduser y idcustomers