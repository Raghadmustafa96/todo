import { useState } from 'react';
import uuid from 'react-uuid'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addItem = (e) => {
    e.preventDefault();
    console.log('.....item......')
    e.target.reset();

    const defaults = { _id: uuid(), complete: false };
    const tdItem = Object.assign({}, item, defaults);
    console.log(tdItem +'.....item......')
    props.setList([...props.list, tdItem]);
    setItem({});
  };

  return (
    <>
      <Card style={{ padding: '2rem' }}>
      <h3>Add To Do Item</h3>

      <Form onSubmit={addItem}>
        <Form.Label>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <button>Add Item</button>
      </Form>
      </Card>
    </>
  );
}

export default TodoForm
