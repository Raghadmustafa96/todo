import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import './todo.scss';
import useAjax from './useAjaxhook.js';
import Navigation from './navbar.js';


function ToDo(props) {
  const [list, _addItem, _toggleComplete, _getTodoItems, handleDelete] = useAjax();

  useEffect(() => {
    document.title = `To Do List : complete ${list.filter(item => item.complete).length} / incomplete ${list.filter(item => !item.complete).length}`
  })

  useEffect(_getTodoItems,[]);

  return (
    <>
      <Navigation />
      <main>
        <Card style={{ width: '85rem', margin: '4rem 4rem 0 4rem'}} bg="dark" text="white">
          <Card.Title as="h2" color="white" style={{ margin: '1rem' }}>
            To Do List Manager {list.filter(item => !item.complete).length}
          </Card.Title>
        </Card>

        <Card style={{ width: '85rem', margin: '0 4rem 0 4rem' , overflow: 'scroll'}}>
          <Card.Body bg="white">
            <Container fluid="md">
              <Row className="justify-content-md-center">
                <Col md={3}>

                  <div>
                    <TodoForm list={list} handleSubmit={_addItem} />
                  </div>
                </Col>

                <Col md={{ span: 7, offset: 0 }}>

                  <div>
                    <TodoList
                      handleComplete={_toggleComplete} list={list} handleDelete={handleDelete}
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

export default ToDo