import React, { useState } from 'react'

const Login=()=>{
  
  const [formData,setFormData]=useState({username:"",password:""});
  const [msg,setMsg]=useState(false);
  const [error,setError]=useState("");
  const handleChange=(e)=>{
     setFormData(()=>{
        return {...ProgressEvent,[e.target.name]:e.target.value}
     })
  }
  const handleSubmit=(e)=>{ 
    
    e.preventDefault();
    if(username==='')
    {
      setError("username is required");
    }
    else if(password==='')
    {
        setError('password is required');
    }
    else if(formData.username!=='user'&&formData.password!=='password')
    {
        console.log(formData.username, formData.password);
        console.log("check");
        setError("Invalid username or password");
    }
    else {
        setMsg(true);
    }
  }
  return (<>  
    <h1>Login Page</h1>
    {
        error!==''&&<div>{error}</div>
    }
    {
        !msg&&<form onSubmit={handleSubmit}>
            <label htmlFor="Username">Username:</label>
            <input id="username" type="text" name='username' onChange={handleChange}/><br></br>
            <label htmlFor='password'>Password:</label>
            <input id="Password" type='text' name='password' onChange={handleChange}></input><br></br>
            <button type='submit'>submit</button>
        </form> 
    }   
    {
        msg&&<div>
            Welcome, user!
        </div>
    }

        

  </>)
}

export default Login