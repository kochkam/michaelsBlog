import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/Views/home"></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/Views/home">Home</Nav.Link>
        <Nav.Link href="#features">About Me</Nav.Link>
        <Nav.Link href="#pricing">Under Development</Nav.Link>
      </Nav>
    </Navbar>
    </>
  );
  
}

export default App;
