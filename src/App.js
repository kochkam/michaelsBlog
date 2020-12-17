import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import home from './Views/home.js'
import AboutMe from './Views/AboutMe.js'
import UnderDev from './Views/UnderDev'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand ></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/"> Home </Nav.Link>
        <Nav.Link href="/AboutMe">About Me</Nav.Link>
        <Nav.Link href="/UnderDev">Under Development</Nav.Link>
      </Nav>
    </Navbar>
    </BrowserRouter>

    <div className='background'>
    <BrowserRouter>
    <div className="content">
            <Route exact path="/" component={home}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/UnderDev" component={UnderDev}/>
    </div>
    </BrowserRouter>
    </div>
    </>
  );
  
}

export default App;
