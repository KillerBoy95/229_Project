import React,{useEffect,useState} from 'react'

const Users = () => {
    const[users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);


    useEffect(()=>{
        const fetchUsers= async()=>{
            try{
                const token = localStorage.getItem('token');
                console.log('Token:', token); 

                const response = await fetch('http://localhost:5000/', {
                method: 'GET',
                headers: {
                'Authorization': `Bearer ${token}`,  
                'Content-Type': 'application/json',
    },

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
        <h2>Users List</h2>
        <ul>
            {
                users.map(user=>(
                    <li key = {users._id}>
                        {user.name} - {user.email}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Users
