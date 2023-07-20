import { useState } from "react";



function App () {
  const [newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])


  function handleSubmit(e) {
    e.preventDefault()

    setToDos(currentToDos => {
      return [
        ...currentToDos,
        {id: crypto.getRandomUUID(), title: newItem, completed: false},
      ]
    })


  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="">New Item</label>
      <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>

    </div>
    <button className="btn">Add</button>
      </form>

    <h1 className="header">To-Do List</h1>

    <ul className="list">
        {todos.map(todo => {
          return <li>
        <label>
          <input type="checkbox" checked={todo.completed} />
          {todo.title}
        </label>
        <button className="delete-btn">Delete</button>
      </li>
        })}
      
    </ul>



  </>
  )
}

export default App ;