import ListGroup from 'react-bootstrap/ListGroup';
import { Toast, Badge } from 'react-bootstrap';
import { PaginationContext }  from '../context/paginationPage'
import { useContext } from 'react';


function TodoList(props) {
  const pagination = useContext(PaginationContext);

  return (
    <ListGroup style={{ height: '10rem'}}>
      {pagination.currentItem.map(item => (
        <Toast onClose={() => props.handleDelete(item._id)}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Toast.Header>
            <Badge pill variant={item.complete ? "success" : "danger"}
            >{item.complete ? "Complete" : "Pending..."}</Badge>
            <strong className="mr-auto" style={{ marginLeft: '20px' }}>{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body onClick={() => props.handleComplete(item._id)}
          >
            {item.text}
            <br />
            <div className="difficultly" style={{ float: 'right' }} >Difficulty: {item.difficulty}</div>
          </Toast.Body>
        </Toast>
      ))}
      
    </ListGroup>
  );
}

export default TodoList;
