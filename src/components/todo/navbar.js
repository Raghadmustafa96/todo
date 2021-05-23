import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from '../auth/login';
import SignUp from '../auth/signUp.js';


function Navigation(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Login />
      <SignUp />
    </Navbar>
  );
}

export default Navigation;