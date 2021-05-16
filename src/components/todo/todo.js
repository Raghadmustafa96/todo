import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import './todo.scss';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import {Container,Row,Col} from 'react-bootstrap';


export default function ToDo(props) {

  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  ]);

  useEffect(() => {
    document.title = `toDo List`;
  });

  const saveItem = (updatedItem) => {
    setList(
      list.map(item => (item._id === updatedItem._id ? updatedItem : item))
    );
  };

  const toggleComplete = (id) => {
    let item = list.filter((element) => element._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      saveItem(item);
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <Card style={{ width: '70rem' }, { margin: '4rem 4rem 0 4rem' }} bg="dark" text="white">
          <Card.Title as="h2" color="white" style={{ margin: '1rem' }}>
            To Do List Manager {list.filter(item => !item.complete).length}
          </Card.Title>
        </Card>

        <Card style={{ width: '70rem' }, { margin: '0 4rem 0 4rem' }}>
          <Card.Body bg="white">
            <Container fluid="md">
              <Row className="justify-content-md-center">
                <Col md={3}>

                  <div>
                    <TodoForm list={list} setList={setList} />
                  </div>
                </Col>

                <Col md={{ span: 7, offset: 0 }}>

                <div>
                  <TodoList
                    handleComplete={toggleComplete} list={list} setList={setList}
                  />
                </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </main>
    </>
  )
}
