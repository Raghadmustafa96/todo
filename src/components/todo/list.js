import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function TodoList(props) {

  const deleteItem = (id) => {
    props.setList(props.list.filter(item => item._id !== id));
  };

  return (
    <ul>
      {props.list.map(item => (
        <ListGroup.Item style={{ margin: '0 4rem 0 4rem', height: '4rem' }}
          variant={(item.complete) ? 'danger' : 'success'}

          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <Button variant="dark" onClick={() => deleteItem(item._id)} style={{ margin: '0 4rem 0 4rem',float: 'right' }}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ul>
  );
}

export default TodoList;
