import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": "gold"}}>
                <FontAwesomeIcon icon = {faVideoSlash}/>Tobitube
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto" style={{"maxHeight": "100px"}} navbarScroll>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/watchList" className="nav-link">WatchList</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="info" className="me-2">Register</Button>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header