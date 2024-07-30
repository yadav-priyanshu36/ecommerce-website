import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route,  Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Navbar from './component/Navbar';
// import { useState } from 'react';
import { ToastContainer,toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserContext1 from './context/UserContext1';
import { useContext } from 'react';



function App() {
  let rtx= useContext(UserContext1)
  console.log(rtx)
  console.log(rtx.user)
   let login=rtx.user.login
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>

     <Routes>
        { login===true && <Route path='/' element={<Home/>}/>}  
        { login===false && <Route path='/' element={<Navigate to ={'/login'}/>} />}
          { login===true && <Route path='/cart' element={<Cart/>}/>}
          {login===false && <Route path='/cart' element={<Navigate to ={'/login'}/>} />}
          <Route path='/single' element={<Single/>}/>
          <Route path='/ragister' element={<Signup/>}/>
         {login===false &&  <Route path='/login' element={<Login/>}/>}
         { login===true && <Route path='/login' element={<Navigate to ={'/'}/>} />}
         {/* <Route path='/*' element={<PageNotFound/>}/> */}
         
          
     </Routes>
     <ToastContainer />
     </BrowserRouter>
    </div>
  );
}

export default App;