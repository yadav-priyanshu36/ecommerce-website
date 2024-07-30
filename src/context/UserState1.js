import React, { useState } from 'react'
import UserContext1 from './UserContext1';

const UserState1 = (props) => {
    let details =JSON.parse(localStorage.getItem('userDetails'))
    const [user, setuser] = useState({
        login:details? details.login : false,
        email: details? details.email:""
    });
    console.log(user)
  return (
    <UserContext1.Provider value={{user,setuser}}>
        {props.children}

    </UserContext1.Provider>
    
      

  )
}

export default UserState1
