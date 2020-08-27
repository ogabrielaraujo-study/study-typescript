import React, { useEffect, useState } from 'react'
import api from './services/api'

import User from './components/User'

interface IUser {
  name: string
  email: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get<IUser[]>('/user').then(({ data }) => {
      setUsers(data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello Gabriel</h1>

      <ul>
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </ul>
    </div>
  )
}

export default App
