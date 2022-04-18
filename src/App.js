import Notes from './components/Notes/Notes'

import Form from './components/Form/Form';
import { useState } from 'react';


let notes = [
  {
    id: 1,
    title: 'Buy Milk',
    content: 'buy 2L',
    done: false
  },
  {
    id: 2,
    title: 'Buy potatoes',
    content: 'buy 2kg',
    done: false
  },
  {
    id: 3,
    title: 'Buy apples',
    content: 'buy 1.5kg',
    done: false
  }
]

function App() {

  const [todos, SetTodos] = useState([...notes])

  const [title, SetTitle] = useState('')
  const [content, SetContent] = useState('')

  return (
    <div className="App">
      <h1>Notes App</h1>
      <Form SetTitle={SetTitle} title={title} content={content} SetContent={SetContent} todos={todos} SetTodos={SetTodos}/>
      <Notes todos={todos} SetTodos={SetTodos}/>
    </div>
  );
}

export default App;
