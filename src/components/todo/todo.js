import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import './todo.scss';
import useAjax from './useAjaxhook.js';
import Navigation from './navbar.js';
import Context from '../context/paginationPage'
import Pagination from './pagination'
import ChangPages from './perPageItem'

function ToDo() {
  const url = 'https://api-js401.herokuapp.com/api/v1/todo/';
  const [list, setList] = useState([]);

  useEffect(() => {
    document.title = `To Do List : complete ${list.filter(item => item.complete).length} / incomplete ${list.filter(item => !item.complete).length}`
  })

  const addItem = (item) => {
    item.complete = false;

    async function _add() {
      let results = await useAjax({ url, body: item, method: 'post' })
      item._id = results.data._id;
      setList([...list, item]);
    }
    _add();
  }

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

    async function _Complete() {
      await useAjax({ url: `${url}${item._id}`, body: item, method: 'put' });
    }
    _Complete();
  };

  function handleDelete(id) {
    async function _handleDelete(id) {
      await useAjax({ url: url + id, method: 'delete' });
      let newList = list.filter(item => item._id !== id);
      return setList(newList);
    }
    _handleDelete(id);
  }

  useEffect(() => {
    async function _getData() {
      let res = await useAjax({ url, method: 'get' });
      setList(res.data.results)
    }
    _getData();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Card style={{ width: '75rem', margin: '4rem 4rem 0 4rem' }} bg="dark" text="white">
          <Card.Title as="h2" color="white" style={{ margin: '1rem' }}>
            To Do List Manager {list.filter(item => !item.complete).length}
          </Card.Title>
        </Card>

        <Card style={{ width: '75rem', margin: '0 4rem 0 4rem', overflow: 'scroll' }}>
          <Card.Body bg="white">
            <Container fluid="md">
              <Row className="justify-content-md-center">
                <Col md={3}>
                  <div>
                    <TodoForm list={list} handleSubmit={addItem} />
                  </div>
                </Col>
                <Context list={list}>

                  <Col md={{ span: 7, offset: 0 }}>
                  <ChangPages/>
                  <Pagination totalNum={list.length}/>


                    <div>
                      <TodoList
                        handleComplete={toggleComplete} list={list} handleDelete={handleDelete}
                      />
                    </div>

                  </Col>
                </Context>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </main>
    </>
  )
}

export default ToDo