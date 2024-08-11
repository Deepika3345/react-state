import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'


const App = () => {
  const [todos, settodos] = useState([])
  const [edit,setedit]=useState({
    todo:{},
    editmode:false,
  })
  
  const deletetodo = (id) => {
    settodos(todos.filter((todo) => (todo.id !== id)))
  }


  const savetodo =(text)=>{
   const newtodo ={
    id:crypto.randomUUID(),
    text:text
  }
   settodos([newtodo,...todos])
  }


  const edittodo =(todo)=>{
   setedit({
    todo:todo,
    editmode:true,
   })
  }

  const updatetodo =(oldId,newText)=>{
  
  settodos(todos.map(item=>item.id===oldId?{...item,text:newText}:item))


  setedit({
    todo:{},
    editmode:false,
  })


  }


  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form  savetodo={savetodo} edit={edit} updatetodo={updatetodo}/>
        <ListGroup todos={todos} deletetodo={deletetodo}  edittodo={edittodo}/>
      </div>
    </>
  )
}

export default App