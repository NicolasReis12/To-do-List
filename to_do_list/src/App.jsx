import { useState } from 'react'

import './App.css'

import Todo from './components/Todo.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidades x no sistema",
      category:"Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Ir para a academia ",
      category:"Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"Estudos",
      isCompleted: false,
    },

  ])

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=>(
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
