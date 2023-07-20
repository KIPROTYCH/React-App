import { useState } from "react";



function App () {
  const [newItem, setNewItem] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="">New Item</label>
      <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>

    </div>
    <button className="btn">Add</button>

    <h1 className="header">To-Do List</h1>

    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="delete-btn">Delete</button>
      </li>
    </ul>

  </form>

  </>
  )
}

export default App ;