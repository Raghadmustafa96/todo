import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import './todo.scss';

export default function ToDo(props) {

  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  ]);

  useEffect(() => {
    document.title = `${
      list.filter(item => !item.complete).length
    } items to complete`;
  });

  const saveItem = updatedItem => {
    setList(
      list.map(item => (item._id === updatedItem._id ? updatedItem : item))
    );
  }; 

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      saveItem(item);
    }
  };

  return (
    <>
      <header>
        <h2>
          To Do List Manager {list.filter(item => !item.complete).length}
      </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm  list = {list} setList={setList} />
        </div>

        <div>
          <TodoList
            handleComplete={toggleComplete} list = {list} setList={setList}
          />
        </div>
      </section>
    </>
  )
}
