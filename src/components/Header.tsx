import {Navbar, Container, Nav,Button,Badge} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className="shadow-sm mb-3">
        <Container className="me-auto">
            <Nav>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            <Button>
                Cart{" "}
                <Badge bg="warning">1</Badge>
            </Button>
        </Container>
    </Navbar>
  )
}

export default Header