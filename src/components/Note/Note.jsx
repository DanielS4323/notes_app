import React from 'react'
import style from './style.scss'
import pinImg from '../../assets/pin-removebg-preview.png'

function Note({todo}) {



  return (
    <div className='note'>
        <img id='pin' src={pinImg}/>
    <h3>{todo.title}</h3>
    <h4>{todo.content}</h4>
    </div>
  )
}

export default Note