import React, { useContext, useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';


const Home = (props) => {

  let ctx=useContext(CartContext)
  console.log(ctx)
  console.log(ctx.searchItem)

 


  const [allitem , setallitem] = useState([]);

  let getdata=async()=>{
    let ans=await fetch('https://dummyjson.com/products?skip=0&limit=0');
    let data=await ans.json();
    //console.log(data);
    setallitem(data.products)
    console.log(data.products)
}
let searchedItems=allitem.filter((ele)=>ele.category.toLowerCase().includes(ctx.searchItem))
console.log(searchedItems)





useEffect(()=>{
  getdata()
},[])
  
  
  let ele=useContext(CartContext)
  console.log(ele)

  


  return (
    <div>
    
    <div className='row d-flex gap-2 d-flex justify-content-center'>
 
    
      {
      searchedItems.map((ele)=>{
          return    <div key={ele.id} className="card p-2" style={{width: '18rem'}}>
  <img src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <h5 className="card-title">price : $ {ele.price}</h5>
  </div>
  <div className='d-flex gap-2 m-auto p-1'>
  <Link state={ele} to="/single" className="btn btn-info">View Product</Link> 
 <button onClick={()=>ctx.addtoCart(ele)}  className="btn btn-success">Add to cart</button>
  </div>
</div>

      })
      }
     
    </div>
    
</div>

    
  )
}

export default Home