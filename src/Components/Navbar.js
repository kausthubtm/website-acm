/****************************************************************************
*  NAVBAR : Displays NavBar and Announcement sections                       *
*****************************************************************************/

import '../Shared/CSS/Navbar.css'
import '../Shared/CSS/main.css'
import { useLocation } from 'react-router-dom'
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'

let sigs = [
  {id: 1, name:'Sanganitra'},
  {id:2, name:'Yantrika'},
  {id: 3, name:'Vidyut'},
  {id:4, name:'Kaaryavarta'},
  {id: 5, name:'Saahitya'}
];

function HideAppBar () {
  return (
  <div className="hello">
    <div className="blah" style={{overflow:"visible"}}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src="/uploads/sigs/logo.png" height="60" width="60" alt="ACM logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={useLocation().pathname} className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <NavDropdown title="YANTRAS" id="collapsible-nav-dropdown">
                {
                  sigs.map(sig=>(
                    <NavDropdown.Item href={`/sigs/${sig.id}`}>{sig.name.toUpperCase()}</NavDropdown.Item>
                  ))
                }
              </NavDropdown>
              <Nav.Link href="/expo">PROJECT EXPO</Nav.Link>
              <Nav.Link href="https://nitk.acm.org/trails.html">TRAILS</Nav.Link>
              <Nav.Link href="/events">EVENTS</Nav.Link>
              <Nav.Link href="/esp">ESP</Nav.Link>
              <Nav.Link href="https://nitk.acm.org/blog/">BLOG</Nav.Link>
              <Nav.Link href="/contact">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HideAppBar;