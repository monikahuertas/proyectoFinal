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

export default function ListCustomers({load, setLoad, setIdUpdate}){

    const [rows, setrows] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await axios.get('http://localhost:3000/api/customers/getCustomers')
            // console.log(response.data.customers)
            setrows(response.data.customers)
        }
        fetchData();
    }, [load])
    
    const handleDelete =async(id)=> {
        const response = await axios.delete(`http://localhost:3000/api/customers/deleteCustomer/${id}`)
        // console.log(response)
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
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Documento</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Primer Nombre</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Segundo Nombre</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Primer Apellido</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Segundo Apellido</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Ciudad</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Direccion</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Telefono</TableCell>
                            <TableCell sx={{ color: 'rgb(255,255,255)' }}>Email</TableCell>
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
                                <TableCell>{row.document}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.second_name}</TableCell>
                                <TableCell>{row.first_lastName}</TableCell>
                                <TableCell>{row.second_lastName}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.User.names}</TableCell>
                                <TableCell>
                                    <ModeEditOutlineTwoToneIcon onClick={()=>{handleUpdate(row.id)}} sx={{color: 'rgb(45,63,83)'}}/>
                                    <DeleteTwoToneIcon onClick={()=>{handleDelete(row.id)}} sx={{color: 'rgb(45,63,83)'}} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}