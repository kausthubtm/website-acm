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
        <Navbar collapseOnSelect expand="lg" classname="navbar">
          <Navbar.Brand href="/">
            <img src="/uploads/sigs/logo.png" height="60" width="60" alt="ACM logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={useLocation().pathname} className="mr-auto">
              <Nav.Link href="/" className="nav_link">HOME</Nav.Link>
              <NavDropdown title="YANTRAS" id="collapsible-nav-dropdown" className="nav_link">
                {
                  sigs.map(sig=>(
                    <NavDropdown.Item href={`/sigs/${sig.id}`}>{sig.name.toUpperCase()}</NavDropdown.Item>
                  ))
                }
              </NavDropdown>
              <Nav.Link href="/expo" className="nav_link">PROJECT EXPO</Nav.Link>
              <Nav.Link href="https://nitk.acm.org/trails.html" className="nav_link">TRAILS</Nav.Link>
              <Nav.Link href="/events" className="nav_link">EVENTS</Nav.Link>
              <Nav.Link href="/esp" className="nav_link">ESP</Nav.Link>
              <Nav.Link href="https://nitk.acm.org/blog/" className="nav_link">BLOG</Nav.Link>
              <Nav.Link href="/contact" className="nav_link">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HideAppBar;