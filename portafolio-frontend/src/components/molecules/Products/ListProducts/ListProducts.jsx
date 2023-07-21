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

export default function ListProducts({load, setLoad, setIdUpdate}){

    const [rows, setrows] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await axios.get('http://localhost:3000/api/products/getProducts')
            // console.log(response.data.products)
            setrows(response.data.products)
        }
        fetchData();
    }, [load])

    const handleDelete =async(id)=> {
        const response = await axios.delete(`http://localhost:3000/api/products/deleteProducts/${id}`)
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
                        {/* <TableCell sx={{ color: 'rgb(255,255,255)' }}>check</TableCell> */}
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Id</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Producto</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Cantidad</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Precio Compra</TableCell>
                        <TableCell sx={{ color: 'rgb(255,255,255)' }}>Precio Venta</TableCell>
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
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.product}</TableCell>
                            <TableCell>{row.Stock}</TableCell>
                            <TableCell>{row.Purchase_Price}</TableCell>
                            <TableCell>{row.Sale_Price}</TableCell>
                            <TableCell>{row.User.names}</TableCell>
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