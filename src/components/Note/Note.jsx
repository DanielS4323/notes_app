import React, {useState} from 'react'
import './style.scss'
import pinImg from '../../assets/pin-removebg-preview.png'

function Note({todo, SetTodos}) {

  const [classAdd, setClassAdd] = useState(false)
  let colors = ['#ff7eb9',' #ff65a3', '#7afcff', '#feff9c', '#fff740']

  let getRandom = Math.floor(Math.random() * colors.length)
  


  const doneTodo = () => {
    setClassAdd(!classAdd)
   SetTodos(prev => {
     let copy = [...prev]
     let findTodo = {...todo}
     findTodo.done = !findTodo.done
     let index = copy.findIndex(el=> el.id === todo.id)
     copy[index] = findTodo
     return copy
   })
  }




  return (
    <div className={classAdd ? 'note done' : 'note'}
     onClick={()=>doneTodo()}
     
     >
        <img id='pin' src={pinImg}/>
    <h3>{todo.title}</h3>
    <h4>{todo.content}</h4>
    {todo.done ? <p className='p-done'>&#x2713;</p> : ''}
    </div>
  )
}

export default Note