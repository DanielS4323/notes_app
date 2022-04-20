import Notes from './components/Notes/Notes'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { useState } from 'react';


let notes = [
  {
    id: 1,
    title: 'Buy Milk',
    content: 'buy 2L',
    done: false,
    color: '#ff7eb9'
  },
  {
    id: 2,
    title: 'Buy potatoes',
    content: 'buy 2kg',
    done: true,
    color: '#7afcff'
  },
  {
    id: 3,
    title: 'Buy apples',
    content: 'buy 1.5kg',
    done: false,
    color: '#fff740'
  }
]

function App() {

  const [todos, SetTodos] = useState([...notes])

  const [title, SetTitle] = useState('')
  const [content, SetContent] = useState('')

  return (
    <div className="App">
      <Header/>

      <Form 
      SetTitle={SetTitle} 
      title={title} 
      content={content} 
      SetContent={SetContent} 
      todos={todos} 
      SetTodos={SetTodos}/>

      <Notes 
      todos={todos} 
      SetTodos={SetTodos}/>
    </div>
  );
}

export default App;
