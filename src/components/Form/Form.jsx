import React from 'react'
import './style.scss'


function Form({SetTitle, title, content, SetContent, todos, SetTodos}) {

    const saveTitle = (e) => SetTitle(e.target.value)
    const saveContent = (e) => SetContent(e.target.value)

    const addNewNote = () => {
        let t = title.trim()
        let c = content.trim();

        if(title.length > 2 && content.length > 2) {
            let newNote = {
                id: todos.length + 1,
                title: t,
                content: c
            }
            SetTodos([...todos, newNote])
        } else {
            console.log('Greska input');
        }

    }

  return (
    <div className='form'>
        <input onChange={(e)=>{saveTitle(e)}} placeholder='Enter title'/>
        <input onChange={(e)=>{saveContent(e)}} placeholder='Enter content'/>
        <button onClick={addNewNote}>Add new note</button>
        </div>
  )
}

export default Form