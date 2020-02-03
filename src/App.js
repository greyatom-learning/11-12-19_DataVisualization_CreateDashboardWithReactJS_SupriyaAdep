import React from 'react';
import { Container } from 'react-bootstrap';
import AppContainer from './AppContainer';
import './App.css';

function App() {
  return (
    <Container fluid className="app-container">
      <AppContainer />
    </Container>
  );
}

export default App;
