import React, { useContext } from 'react';
import ToDo from './components/todo/todo.js';
import { LoginContext } from './components/auth/context.js';


export default function App() {
  const loginContext = useContext(LoginContext);

  return (
    <>
       <ToDo />
    </>
  )
}
