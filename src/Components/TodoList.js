import React from 'react';
import { connect, useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="Container">
      <div>
        <ul id="myUl">
          {tasks.map((el, i) => (
            <Todo task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default connect()(TodoList);
