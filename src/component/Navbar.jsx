import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'
import UserContext1 from '../context/UserContext1'

const Navbar = () => {
  let Navigate=useNavigate()
  let ctx = useContext(CartContext)
  let ctx1=useContext(UserContext1)
  console.log(ctx1)

  const handleSearchChanger=(e)=>{
    let value = e.target.value
    // console.log(value)
    ctx.setsearchItem(value.toLowerCase())
    
  }
  const handlelogout =()=>{
    localStorage.removeItem('userDetails')
    ctx1.setuser({login:false,email:""})
    Navigate('/Login')
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/cart">cart <i class="bi bi-cart"></i>
              <sup id="count"></sup>
              </Link>
              </li>
      </ul>
      <form className="d-flex" role="search">
        <input onChange={handleSearchChanger} className="form-control me-2" type="search" placeholder="Search product here..." aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        
      </form>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <button onClick={handlelogout}  className='nav-link' to="/#">Logout</button>
              </li>
      </ul>
      
    </div>
  </div>
</nav>

     
      
    </div>
  )
}

export default Navbar
