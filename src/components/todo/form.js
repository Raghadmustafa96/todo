import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import useForm from  './useFormHook'

function TodoForm (props) {

  const { handleInputChange, handleSubmit } = useForm(submitFunction);

  function submitFunction(item) {
    return props.handleSubmit(item);
  }

  return (
    <>
      <Card style={{ padding: '2rem'}}>
      <h3>Add To Do Item</h3>

      <Form onSubmit={handleSubmit}>
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
          <Form.Control defaultValue="1" type="range" min="0" max="5" name="difficulty" onChange={handleInputChange} />
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
