import React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ListUser({load, setLoad, setIdUpdate}){

    const [rows, setrows] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await axios.get('http://localhost:3000/api/users/consultUsers')
            // console.log(response.data)
            setrows(response.data.users)
        }
        fetchData();
    }, [load])

    const handleDelete =async(id)=> {
        const response = await axios.delete(`http://localhost:3000/api/users/deleteUsers/${id}`)
        console.log(response)
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
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Nombres</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Email</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Tipo Usuario</TableCell>
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
                            <TableCell>{row.names}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.Rol.description}</TableCell>
                            <TableCell>
                                <ModeEditOutlineTwoToneIcon onClick={()=>{handleUpdate(row.id)}} sx={{ color: 'rgb(45,63,83)'}}/>
                                <DeleteTwoToneIcon onClick={()=>{handleDelete(row.id)}} sx={{ color: 'rgb(45,63,83)'}}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}