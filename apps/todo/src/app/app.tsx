// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Model } from '@emmanueldemey/model'
import {Todo} from '@emmanueldemey/data'
import { useEffect, useState } from 'react';
export function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/api').then(d => d.json()).then((d) => {
      setTodos(d)
    })
  }, [])
  return (
    <ul>
      { todos.map(todo => <li>{todo.label} </li>)}
    </ul>
  );
}

export default App;
