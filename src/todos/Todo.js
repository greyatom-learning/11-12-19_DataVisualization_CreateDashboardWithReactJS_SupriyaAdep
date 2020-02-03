import React from 'react';
import { Form } from 'react-bootstrap';
import { DeleteIcon } from '../Icons';
import ListItem from '../UI/List/ListItem';

const Todo = ({ todos, toggleTodo, deleteTodo }) =>
  todos.length > 0 ? (
    todos.map(todo => (
      <ListItem className="list-group-custom" key={todo.id}>
        <Form.Check
          key={todo.id}
          custom
          inline
          label=""
          type="checkbox"
          id={`custom-inline-${'checkbox'}-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <p className={`todo-text ${todo.completed ? 'todo-complete' : ''}`}>
          {todo.text}
        </p>
        <div className="todo-action" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </div>
      </ListItem>
    ))
  ) : (
    <ListItem>No todos found</ListItem>
  );

export default Todo;
