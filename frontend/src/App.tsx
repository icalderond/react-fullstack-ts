import { useEffect, useState } from 'react'
import user from '../../backend/src/models/user'
import './App.css'
import { getUsers } from './services/userService'

function App() {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>User list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} {user.lastName} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
