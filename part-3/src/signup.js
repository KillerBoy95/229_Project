import React, { useState,useEffect } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate(); 
    const handleSubmit = () => {
    navigate('/myProfile'); 
  };

      const[users,setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const[error, setError] = useState(null);

      const [name,setName] = useState('');
      const[email,setEmail] = useState(true);
      const[password,setPassword] = useState('')
  
  
      useEffect(()=>{
          const fetchUsers= async()=>{
              try{
                  const token = sessionStorage.getItem('token');
                  console.log('Token:', token); 
  
                  const response = await fetch('http://localhost:5000/', {
                  method: 'POST',
                  body:{

                  }
                  ,
  
  });
  
                  if(!response.ok){
                      throw new Error('Failed to Fetch User')
                  }   
  
                  const data = await response.json();
                  setUsers(data);
                  setLoading(false);
              }
              catch(error){
                  setError(error.message);
                  setLoading(false);
              }
          }
          fetchUsers();
      },[]);
  
      
  
      if(loading){
          return <div>Loading User....</div>
      }
      if(error){
          return <div>Error:{error}</div>
      }
  

  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text">Sign Up
                <div className="underline"> </div>
            </div>
            <div className="name">
                <div className='label'>
                    Name:
                    <input type="text" className="txtBox" placeholder="Enter your name"/>
                </div>
            </div>
            <div className="name">
                <div className='label'>
                    Email:
                    <input type="text" className="txtBox " placeholder="Enter your Email" />
                </div>
            </div>
            <div className="name">
                <div className='label'>
                    Password:
                    <input type="text" className="txtBox"  placeholder="Enter your password"/>
                </div>
            </div>
            <div className="buttonsOne">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
