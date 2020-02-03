import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import AddTodo from './todos/AddTodo';
import VisibleTodoList from './todos/VisibleTodoList';
import Footer from './todos/Footer';
import DashboardContainer from './dashboard/DashboardContainer';
import * as todostatus from './todos/status';

import './todos/todos.css';

class AppContainer extends Component {
  state = {
    newTodo: '',
    todos: [],
    currentFilter: todostatus.ALL
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ newTodo: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTodo === '') return;
    this.setState({
      newTodo: ''
    });
    this.addTodo({
      id: uuid(),
      text: this.state.newTodo,
      status: todostatus.ACTIVE,
      completed: false
    });
  };

  addTodo = todo => {
    // Don't mutate the state while updating array
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  deleteTodo = todoId => {
    // Don't mutate the state while updating array
    const filteredItems = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({
      todos: filteredItems
    });
  };

  filterTodo = status => {
    this.setState({
      currentFilter: status
    });
  };

  toggleTodo = id => {
    const { todos } = this.state;
    const modifiedTodos = todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            status: todo.completed ? todostatus.ACTIVE : todostatus.COMPLETED,
            completed: !todo.completed
          }
        : todo
    );
    this.setState({
      todos: modifiedTodos
    });
  };

  render() {
    return (
      <Row className="app-container">
        <Col md={6} id="todo-container">
          {/* Todo Form Component */}
          <h1 className="heading">My Todo</h1>
          <AddTodo
            newTodo={this.state.newTodo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {/* Todo List Component */}
          <VisibleTodoList
            todos={this.state.todos}
            currentFilter={this.state.currentFilter}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />
          {/* Filter Panel */}
          <Footer
            todoLength={this.state.todos.length}
            currentFilter={this.state.currentFilter}
            filterTodo={this.filterTodo}
          />
        </Col>
        <Col md={6} id="dash-container">
          <DashboardContainer data={this.state.todos} />
        </Col>
      </Row>
    );
  }
}

export default AppContainer;
