import { useState } from 'react';

 function TodoList(props) {
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const deleteItem = id => {
    props.setList(props.list.filter(item => item._id !== id));
  };

  const toggleDetails = id => {
    let Itdetails = props.list.filter(item => item._id === id)[0] || {};
    let itShowDetails = !showDetails;
    setDetails(Itdetails);
    setShowDetails(itShowDetails);
  };

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button onClick={() => toggleDetails(item._id)}>Details</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
