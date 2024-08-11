import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos, deletetodo ,edittodo}) => {
  return (
    <ul className='list-group '>
      {
        todos.map((todo) =>
        (<ListItem todo={todo}
          key={todo.id}
          deletetodo={deletetodo}
          edittodo={edittodo}
         
        />
        ))
      }
    </ul>
  )
}

export default ListGroup