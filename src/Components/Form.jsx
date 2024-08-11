import React, { useEffect, useState } from 'react'

const Form = ({ savetodo, edit, updatetodo }) => {
  const [text, setText] = useState("")

  const handelsubmit = (e) => {
    e.preventDefault();

    if (edit.editmode) {
      updatetodo(edit.todo.id, text)
    }
    else {
      savetodo(text)
    }

    setText("")
  }

  useEffect(() => {
    setText(edit.todo.text)
  }, [edit])


  return (
    <form className='my-3 ' onSubmit={(e) => handelsubmit(e)} >
      <input type="text" className="form-control rounded-5 p-3 my-3"

        placeholder='Enter Todo here...'
        onChange={(e) => setText(e.target.value)}
        name='text'
        value={text}
        required

      />
      <button className="btn btn-success w-100 rounded-5">Save</button>
    </form>
  )
}

export default Form