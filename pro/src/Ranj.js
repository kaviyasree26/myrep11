import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { useState } from 'react';
import './Ranj.css';
function Ranj() {
  const[name,setname]=useState('');
  const[pass,setpass]=useState('');
  

  const navigate = useNavigate();
  function aa() {
     navigate('/sign');
  }
  function change() {
    // a('/home');
  }
  function cc()
  {
    var c=document.getElementById('s1').value;
    var d=document.getElementById('s2').value;
    console.log(c);
    console.log(d);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,pass)
    axios.get(`http://localhost:3003/user?name=${name}&pass=${pass}`)
    .then(res=>{
      if(res.data.length>0){
        alert("log in Succesful")
          navigate('/home')
      }
      else{
        alert('Invalid username or password')
      }
    })
  }

  return (
    <center>
      <div className='faf'>
        <div className='div'>
          <h2>LOG IN</h2><br />
        </div><br />
        <div className='div1'>
          <form onSubmit={handleSubmit}>
            <table >
              <tr>
                <td><AccountCircleIcon sx={{ width: '40px', height: '40px' }} /></td>
                <TextField id="s1" label="Name" variant="outlined" required onBlur={cc} value={name} onChange={(event)=>{setname(event.target.value)}}/>
              </tr>
              <tr>
                <td><KeyIcon sx={{ width: '40px', height: '40px' }} /></td>
                <TextField id="s2" label="Password" variant="outlined" type='password' required onBlur={cc} value={pass} onChange={(event)=>{setpass(event.target.value)}}/>
              </tr>
            </table><br />
            <button type='submit' style={{ width: '90px', height: '30px' }} className='rrr'>SUBMIT</button>
            <br />
            <p>New User?</p><button onClick={aa} style={{ width: '90px', height: '30px' }} className='rrr'>Signup
            </button>
          </form>
        </div>
      </div>
    </center>
  );
}

export default Ranj;

