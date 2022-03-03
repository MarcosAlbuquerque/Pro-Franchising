import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../api/auth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <section id='login'>
      <label htmlFor='username'>Faça o login na sua conta</label>
      <input
        type='text'
        name='username'
        id='username'
        placeholder='Usuário'
        autoFocus
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        name='password'
        placeholder='Senha'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        name='entrar'
        value='Entrar'
        onClick={() => {
          auth(username, password).then((res) => {
            try {
              if (document.cookie.split(';')[1].slice(7) === res) {
                navigate('/receitas');
              }
            } catch (e) {
              return;
            }
          });
        }}
      >
        Entrar
      </button>
      <span id='invalidMessage'>&nbsp;</span>
    </section>
  );
}
