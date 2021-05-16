import { useState } from 'react';
import uuid from 'react-uuid'

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addItem = e => {
    e.preventDefault();
    console.log('...........')
    e.target.reset();

    const defaults = { _id: uuid(), complete: false};
    const tdItem = Object.assign({}, item, defaults);
    console.log(tdItem +'.....item......')
    props.setList([...props.list, tdItem]);
    setItem({});
  };

     return (
      <>
        <h3>Add To Do Item</h3>
        <form onSubmit={addItem}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
}

export default TodoForm




