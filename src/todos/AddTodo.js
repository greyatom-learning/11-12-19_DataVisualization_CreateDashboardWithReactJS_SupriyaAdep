import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const AddTodo = ({ newTodo, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">+ Add</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Text input with checkbox"
          value={newTodo}
          name="newTodo"
          onChange={handleChange}
          autoComplete="off"
        />
      </InputGroup>
    </Form>
  );
};

export default AddTodo;
