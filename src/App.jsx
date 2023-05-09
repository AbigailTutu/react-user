import { useState } from 'react'
import './App.css'
import Users from './Components/Users'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([
    {name: "Ama",
    email: "heyhey@gmail.com",
    gen: "20"},

    {name: "Kofi",
    email: "mowmow@gmail.com",
    gen: "22"},

    {
      name: "Yaw",
      email: "weewee@gmail.com",
      gen: "23"
    }
  ])

  return (
    <>
      <Users usersjsx = {users}/>
    </>
  )
}

export default App
