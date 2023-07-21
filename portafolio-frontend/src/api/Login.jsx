import React,{useState, useEffect} from 'react';//revisa el estado que este
import Avatar from '@mui/material/Avatar';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/molecules/ResponsiveAppBar/ResponsiveAppBar';
import axios from 'axios';
import Home from '../pages/home';


export default function Login ({}) {
    const[login, setLogin]=useState(false)
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    
    // const[user, setUser]=useState(null)
    // const [rows, setrows] = useState([])

    // const fetchData = async(email, password)=>{
    //             const data ={
    //                 username: email,
    //                  password: password
    //             }
    //             const response = await axios.post('http://localhost:3000/api/auth/login')
    //             console.log(data)
    //         }
    //         fetchData();
    
    // useEffect(()=>{

    //     const fetchData = async()=>{
    //         const response = await axios.post('http://localhost:3000/api/auth/login')
    //         console.log(response.data)
    //         setrows(response)
    //     }
    //     fetchData();
    // }, [load])

    // const iniciaSesion= async credentials => {
    //     const res = await axios.post('http://localhost:3000/api/auth/login', credentials)
    //     return res.data
    // }

    // const fetchLogin = createAsyncThunk('auth/login', async (formData)=>{
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/auth/login', formData)
    //         return response.data   
    //     } catch (error) {
    //         return isRejectedWithValue(error)
    //     }
    // })
    

    const handleLogin = (e) =>{
        e.preventDefault()
        const fetchData = async(email, password)=>{
            const data ={
                email,
                password
            }
            return await axios.post('http://localhost:3000/api/auth/login', data)
            console.log(res)
           
            // setEmail('')
            // setPassword('')
        }
    }
    
        
        // var user = document.getElementById("user").value
        // var password = document.getElementById("password").value
        // if (user.length===0 || password.length===0) {
        //     alert("complete los campos")
        // }else{
        //     if (email==="Admin" && password==="123456") {
        //         setLogin(true)
        //         document.getElementById("form").style.display="none"
        //     }else{
        //         setLogin(false)
        //         alert("error de usuario y/o contraseña")
        //         document.getElementById("user").value =""
        //         document.getElementById("password").value=""
        //     }
        // }
    

  return (
    <div style={{textAlign:"center",margin:'100px', padding:'50px', backgroundColor:'#2D3F53', color:'white', borderRadius: '16px'}}>
        <div id='form'>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon  />
        </Avatar>

        <Typography component="h1" variant="h5" sx={{margin:'10px'}}>
            Iniciar Sesión
        </Typography>
        </div>
        <form id='form' onSubmit={handleLogin} action='auth.ts' method='post' >
            <div>
                <label style={{font:'icon', padding:'10px', margin:'14px'}} htmlFor=""><strong>Email</strong></label>
                <Input 
                    type='text' 
                    id='user' 
                    value={email}
                    name= 'email'
                    onChange={(e)=>setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label style={{font:'icon', padding:'10px', margin:'1px'}} htmlFor=""><strong>Contraseña</strong></label>
                <Input 
                    type='password' 
                    id='password' 
                    value={password}
                    name= 'Password'
                    onChange={(e)=>setPassword(e.target.value)} 
                    required
                />
            </div>
            <div>
                <button type="submit" >login</button>
            </div>
            {/* <Input type="submit"  sx={{color:'white'}}/> */}
        </form>

        {/* {login===true && <ResponsiveAppBar users={users} />} */}
    </div>
  );
}

// export default Login