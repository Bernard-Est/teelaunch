import React from "react";
import {
  Row,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Row>
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">TeeLaunch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#Section-1-">Section -1-</Nav.Link>
                <Nav.Link href="#Section-2-">Section -2-</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Section -3-
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Section -4-
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Section -5-
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Section -6-
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Row>
    </div>
  );
};

export default Header;
