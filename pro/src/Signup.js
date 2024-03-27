import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
import axios from 'axios'
import "./Signup.css";
const Signup=()=>{
    const[name,setname]=useState('');
    const[mail,setmail]=useState('');
    const[pass,setpass]=useState('');
    const[no,setno]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(mail,pass)
        axios.post( 'http://localhost:3003/user',{
            name,mail,no,pass
        })
        .then(res=>{alert('sign up successful')})
        .catch(err=>{console.log(err)})
        navigate('/ran')
      } 
    return(
            <center>
                <div className="div2">
                    <h1 className='header'>Sign up</h1><br/>
                    <div className="div3">
                        <form onSubmit={handleSubmit}>
                            <table cellSpacing={20}>
                                <tr>
                                <td><AccountBoxIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event)=>{setname(event.target.value)}} />
                                </tr>
                                <tr>
                                <td><MailIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="email" variant="outlined" type="email" value={mail} onChange={(event)=>{setmail(event.target.value)}}/>
                                </tr>
                                <tr>
                                <td><KeyIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="password" variant="outlined" type="password" value={pass} onChange={(event)=>{setpass(event.target.value)}}/>
                                </tr>
                                <tr>
                                <td><CallIcon/></td>
                                <TextField id="outlined-basic" label="Mobile" variant="outlined" type="number" value={no} onChange={(event)=>{setno(event.target.value)}}/>
                                </tr>
                            </table>
                            <button  style={{width:'90px',height:'30px'}} className="rrr">Create</button>
                        </form> 
                    </div> 
                </div>          
            </center>   
    )
}
export default Signup