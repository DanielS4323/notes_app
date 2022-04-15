import React, {useState} from 'react'
import Note from '../Note/Note'
import './style.scss'


let notes = [
    {
      id: 1,
      title: 'Buy Milk',
      content: 'buy 2L'
    },
    {
      id: 2,
      title: 'Buy potatoes',
      content: 'buy 2kg'
    },
    {
      id: 3,
      title: 'Buy apples',
      content: 'buy 1.5kg'
    }
  ]



function Notes() {


    
    
      const [todos, SetTodos] = useState([...notes])
    


  return (
    <div className='notes'>
        
        
        {todos.map(todo => <Note key={todo.id} todo={todo}/>)}

    </div>
  )
}

export default Notes