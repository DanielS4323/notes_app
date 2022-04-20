import React from 'react'
import './style.scss'


function Form({SetTitle, title, content, SetContent, todos, SetTodos}) {

    const saveTitle = (e) => SetTitle(e.target.value)
    const saveContent = (e) => SetContent(e.target.value)

    const colors = ["#ff7eb9", " #ff65a3", "#7afcff", "#feff9c", "#fff740"];
    const getRandom = Math.floor(Math.random() * colors.length);
    const randomColor = colors[getRandom]

    const addNewNote = () => {
        let t = title.trim()
        let c = content.trim();

        if(title.length > 2 && content.length > 2) {
            let newNote = {
                id: todos.length + 1,
                title: t,
                content: c,
                done: false,
                color: randomColor
            }
            SetTodos([...todos, newNote])
            // SetTitle('')
            // SetContent('')
            
        } else {
            console.log('Greska input');
        }
       

    }

  return (
    <div className='form'>
        <input value={title} onChange={(e)=>{saveTitle(e)}} placeholder='Enter title'/>
        <input value={content} onChange={(e)=>{saveContent(e)}} placeholder='Enter content'/>
        <button onClick={addNewNote}>Add note</button>
        </div>
  )
}

export default Form