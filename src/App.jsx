import React, { useState, useEffect } from "react"; 
  function App() { 
    const [users, setUsers] = useState([]); 
    useEffect(() => { 
      fetch("https://jsonplaceholder.typicode.com/users") 
        .then(response => response.json()) 
        .then(data => setUsers(data)); 
}, []); 
return ( 
  <div style={{ fontFamily: "Arial", padding: "20px" }}> 
  <h1>User Management App</h1> 
  <h2>Users</h2> 
  {users.map(user => ( 
  <div 
    style={{ 
      border: "1px solid gray", 
      padding: "10px", 
      margin: "10px" 
}} 
> 
  <h3>{user.name}</h3> 
  <p>Email: {user.email}</p> 
  <p>City: {user.address.city}</p> 
  </div> 
))} 
</div> 
); 
} 
export default App; 