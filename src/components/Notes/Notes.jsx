import React, {useState} from 'react'
import Note from '../Note/Note'
import './style.scss'






function Notes({todos}) {


    
    
   
    


  return (
    <div className='notes'>
        
        
        {todos.map(todo => <Note key={todo.id} todo={todo}/>)}

    </div>
  )
}

export default Notes