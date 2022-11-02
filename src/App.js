import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Element from './Element';
function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{axios.get('https:jsonplaceholder.typicode.com/users')
  .then((res)=>setUser(res.data))
  .catch((error) => {
    console.error(error);
  })
},[])
    console.log(user,'user')
  return (
    <div className="App">
      {user.map((el)=><Element el={el}/>)}
    </div>
  );
}

export default App;