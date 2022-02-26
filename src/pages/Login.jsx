import { useState } from 'react'
import auth from '../api/auth'

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form method='POST'>
      <input
        type="text"
        name="username"
        autoFocus
        required
        onChange={ (e) => setUsername(e.target.value)} />
      <input
        type="password"
        name="password"
        required
        onChange={ (e) => setPassword(e.target.value)} />
      <input
        type="submit"
        name="entrar"
        value="Entrar"
        onClick={ (e) => {
          auth(username, password);
          e.preventDefault()
        } } />
    </form>
  )
}