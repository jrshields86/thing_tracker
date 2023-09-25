import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';



const App = ()=> {
  const [users, setUsers] = useState([]);
  const [things, setThings] = useState([]);

  useEffect(() => {
    const fetchUsers = async()=>{
      const response = await axios.get('/api/users');
      setUsers(response.data)
    }
    fetchUsers();
  }, []);

  return (
    <div>
    <h1>FullStack Template</h1>
    <main>
      <div>
        <h2>Users ({ users.length })</h2>
        <ul>
          {
            users.map( user => {
              return (
                <li key={ user.id }>
                  { user.name }
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <h2>Things ({ things.length })</h2>
      </div>
    </main>
    </div> 
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
