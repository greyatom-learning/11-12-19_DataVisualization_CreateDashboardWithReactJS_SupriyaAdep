import React, { Component } from 'react';
import Todo from './Todo';
import ListGroup from '../UI/List/ListGroup';

class VisibleTodoList extends Component {
  render() {
    const { todos, currentFilter, toggleTodo, deleteTodo } = this.props;
    const filteredTodos = todos.filter(todo => todo.status === currentFilter);
    return (
      <ListGroup>
        {currentFilter === 'ALL' ? (
          <Todo todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ) : (
          <Todo
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </ListGroup>
    );
  }
}

export default VisibleTodoList;
