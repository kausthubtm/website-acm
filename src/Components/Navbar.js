/****************************************************************************
*  NAVBAR : Displays NavBar and Announcement sections                       *
*****************************************************************************/

import '../Shared/CSS/Navbar.css'
import '../Shared/CSS/main.css'
import { useLocation } from 'react-router-dom'
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'
import { Link } from 'react-router-dom';
import imgURL from '../uploads/sigs/logo.png'

let sigs = [
  {id: 1, name:'Sanganitra'},
  {id:2, name:'Yantrika'},
  {id: 3, name:'Vidyut'},
  {id:4, name:'Kaaryavarta'},
  {id: 5, name:'Saahitya'},
  {id: 6, name:'Abhivyakta'}
];


function HideAppBar () {
  return (
  <div className="hello">
    <div className="blah" style={{overflow:"visible"}}>
        <Navbar collapseOnSelect expand="lg" classname="navbar">
          <Navbar.Brand ><Link to="/">
            <img src={imgURL} height="60" width="60" alt="ACM logo"/>
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={useLocation().pathname} className="mr-auto">
              <Nav.Link className="nav_link"><Link to="/" className="nav_link2">HOME</Link></Nav.Link>
              <NavDropdown title="YANTRAS" id="collapsible-nav-dropdown" className="nav_link3">
                {
                  sigs.map(sig=>(
                    <NavDropdown.Item ><Link to={`/sigs/${sig.id}`} className="nav_dropdown_link">{sig.name.toUpperCase()}</Link></NavDropdown.Item>
                  ))
                }
              </NavDropdown>
              <Nav.Link className="nav_link2"><Link to="/innovision" className="nav_link">INNOVISION</Link></Nav.Link>
              <Nav.Link className="nav_link2"><Link to="/expo" className="nav_link">PROJECT EXPO</Link></Nav.Link>
              <Nav.Link href="https://nitk.acm.org/trails.html" className="nav_link3">TRAILS</Nav.Link>
              <Nav.Link className="nav_link2"><Link to="/events" className="nav_link">EVENTS</Link></Nav.Link>
              {/* <Nav.Link className="nav_link2"><Link to="/smp" className="nav_link">SMP</Link></Nav.Link> */}
              <Nav.Link href="https://nitk.acm.org/blog/" className="nav_link3">BLOG</Nav.Link>
              <Nav.Link className="nav_link2"><Link to="/contact" className="nav_link">CONTACT US</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HideAppBar;
