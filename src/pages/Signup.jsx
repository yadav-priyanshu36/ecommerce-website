import React, {  useState, } from 'react'
import { useNavigate,Link} from 'react-router-dom'

const Signup = () => {
  let Navigate=useNavigate()
  let arr = JSON.parse(localStorage.getItem('ragister')) || []

const [userRestration, setuserRestration] = useState({

  name:"",
  email:"",
  password:""
});

console.log(userRestration)
   
  const handlechanger =(e)=>{
    let value = e.target.value;
    console.log(value)
    setuserRestration({...userRestration,[e.target.name]:e.target.value})
  }
  
  const handlesubmit =(e)=>{
    e.preventDefault();
    console.log(userRestration)
    
    let checkExists=arr.find((ele)=>ele.email===userRestration.email)
    if(!checkExists){
      arr.push(userRestration)
      localStorage.setItem('ragister',JSON.stringify(arr))
      Navigate('/Login')
    }
    else{
      alert("aleardy register")
    }
  }

  

  
  return (
    <div className='authpage'>
        
       
       <form className='col-md-6 m-auto form1 p-5 rounded' >
  <div className="mb-3">
  <h1 className='txt-center'> Signup form</h1>
  
  <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input name='name' onChange={handlechanger} type="txt" className="form-control" id="name" />

    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' onChange={handlechanger} type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' onChange={handlechanger} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button onClick={handlesubmit} type="submit" className="btn btn-primary">Submit</button>
  <p>already have an account? <Link to={'/Login'}>Login</Link></p>
  
</form>

    </div>
  )
}

export default Signup
