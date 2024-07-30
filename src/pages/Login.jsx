import React, { useContext, useRef } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import {  toast } from 'react-toastify';
import UserContext1 from '../context/UserContext1';

const Login = () => {
  let Navigate =useNavigate()
  let ctx =useContext(UserContext1)
  console.log(ctx)
   let arr = JSON.parse(localStorage.getItem('ragister'))  || []
  
  let emailRef=useRef()
  let passwordRef=useRef()

  const handlesubmit =(e)=>{

    e.preventDefault();
    let obj={
      email:emailRef.current.value,
       password:passwordRef.current.value

    }
    console.log(obj)
    let find = arr.find((ele)=>ele.email===obj.email)
    if(find){
      if(find.password===obj.password){
        console.log("login succesfull")
        toast.success("login successffuly")
        
        

        localStorage.setItem('userDetails',JSON.stringify({login:true,
          email:find.email }))
          ctx.setuser({login:true,email:find.email})
        Navigate('/')

      }else{
        console.log("wrong password")
        toast.error("wrong password",{position:"top-center"})
      }
    }
    else{
      console.log("user not found please signup")
      toast.error("user not found please signup")
    } 
    
  }
  return (
    <div className='authpage2'>
             <form className='col-md-6 m-auto form2 p-5 rounded'>
  <div className="mb-3">
    <h1 className='txt-center'>Login form</h1>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailRef} type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <button onClick={handlesubmit} type="submit" className="btn btn-primary">Submit</button>
  <p>Don't have a account?<Link to={'/ragister'}>Signup</Link></p>
</form>
      
    </div>
  )
}

export default Login
