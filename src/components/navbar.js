import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import cookies from 'react-cookies';




function NavBar(props) {
    
    

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">whiteBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{cookies.load('username')}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Button onClick={props.setLoggedin} className="postButtons" variant="primary" type="submit">
                log out
            </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;