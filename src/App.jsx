// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Thầy Ba nhập giúp em</Form.Label>

        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Bần tăng mời thí chủ nhập.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Bố nhấp liên tục vào để nhớ" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Bài em 10 điểm
      </Button>
    </Form>
  );
}

export default App;
// }

// export default App

