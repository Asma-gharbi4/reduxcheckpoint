import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../Redux/Actions/todosActions';
import EditTodo from './EditTodo';

const Todo = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-li">
        <p style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
        {task.text}
        </p>
      <div className="todo-container">
        <button className='complete-btn' onClick={() => dispatch(completeTodo(task.id))}>{task.complete? "undo" : "Done" }</button>
        <EditTodo task={task} />
        <button className="delete-btn" onClick={() => dispatch(deleteTodo(task.id))}>
        X
        </button>
      </div>
    </li>
  );
};

export default connect()(Todo);
