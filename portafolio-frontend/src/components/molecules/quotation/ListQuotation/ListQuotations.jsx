import React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import axios from 'axios';

export default function ListQuotation({load, setLoad, setIdUpdate}){

    const [rows, setrows] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await axios.get('http://localhost:3000/api/quotation/getQuotations')
            // console.log(response.data.quotations)
            setrows(response.data.quotation)
        }
        fetchData();
    }, [load])

    const handleDelete =async(id)=> {
        const response = await axios.delete(`http://localhost:3000/api/quotation/deleteQuotations/${id}`)
        //  console.log(response)
        setLoad(!load);
    }

    const handleUpdate =async(id)=> {
        setIdUpdate(id)
    }

    return(

    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead className='bgColorPrimary'>
                <TableRow>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Id</TableCell>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Consecutivo</TableCell>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Cliente</TableCell>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Total</TableCell>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Creado por</TableCell>
                    <TableCell sx={{ color: 'rgb(255,255,255)' }}>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{}}
                    >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell>{row.consecutive}</TableCell>
                        <TableCell>{row.idCustomers}</TableCell>
                        <TableCell>{row.Total}</TableCell>
                        <TableCell>{row.idUsers}</TableCell>
                        <ModeEditOutlineTwoToneIcon onClick={()=>{handleUpdate(row.id)}} sx={{ color: 'rgb(45,63,83)'}}/>
                        <DeleteTwoToneIcon onClick={()=>{handleDelete(row.id)}} sx={{ color: 'rgb(45,63,83)'}}/>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )

}