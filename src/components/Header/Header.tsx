import * as React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
  title: string;
}
interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="md">
        <Navbar.Brand>{this.props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tools/jsonsorter">
                <NavDropdown.Item>Json Sorter</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://twitter.com/chanLettuce01">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/chanlettuce">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://chan-lettuce.hatenablog.com/">はてなブログ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
