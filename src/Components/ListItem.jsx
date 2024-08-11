import React from 'react'

const ListItem = ({ todo, deletetodo,edittodo }) => {
  return (
    <li className='list-group-item my-1 rounded-5 '>
      {todo.text}
      <button className="btn btn-danger rounded-5 btn-sm float-end" onClick={() => { deletetodo(todo.id) }}>Delete</button>
      <button className="btn btn-warning btn-sm float-end rounded-5 mx-1" onClick={()=>{edittodo(todo)}} >Edit</button>


    </li>
  )
}

export default ListItem