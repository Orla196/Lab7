import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Header from './components/Header';
import Content from './components/Content';
//import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*This is how you comment */}
        {/*Dark nav bar added*/}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/*Added a route to show content, header and footer on different pages*/}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route> 
          <Route path='/create' element={<Create></Create>}></Route>

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
