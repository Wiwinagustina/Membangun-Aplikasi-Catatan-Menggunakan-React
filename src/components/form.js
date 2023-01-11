import { useState } from "react"
import Input from "./input"

const Form = ({ updateNotes }) => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const createNote = (event) => {
    event.preventDefault()
    const timestamp = new Date().toISOString()
    updateNotes((notes) => [...notes, { id: timestamp, title, body: note, archived: false, createdAt: timestamp }])
  }

  return (
    <form className='form' onSubmit={createNote}>
      <h2>Create a Note</h2>
      <p className='form_title_char_limit'>Remaining characters: {50 - title.length}</p>
      <Input value={title} onChange={setTitle} type='text' placeholder='Title' id='title' name='title' required/>
      <Input value={note} onChange={setNote} type='textarea' placeholder='Write your note' id='note' name='note' required/>
      <Input type='submit' className='form_submit' id='submit_form' name='submit_form' value='Create'/>
    </form>
  )
}

export default Form
