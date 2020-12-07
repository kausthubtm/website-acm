import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../Shared/CSS/Navbar.css'
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse} from 'reactstrap';

class HideAppBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    })
  }


  render() {

  return (
    <React.Fragment>
      <Navbar dark expand="md">
      <CssBaseline />
       <NavbarToggler onClick={this.toggleNav} />
       <Collapse isOpen={ this.state.isNavOpen } navbar>
        <AppBar>
          <Toolbar className="Navbar">
            <img src="/assets/images/logo.png" height="60" width="60" alt="ACM logo"/>
            <Link to="" className="nav-link">HOME</Link>
            <Link to="/yantra" className="nav-link">YANTRAS</Link>
            <Link to="/expo" className="nav-link">PROJECT EXPO</Link>
            <Link to="/trails" className="nav-link">TRAILS</Link>
            <Link to="/events" className="nav-link">EVENTS</Link>
            <Link to="/esp" className="nav-link">ESP</Link>
            <Link to="/blog" className="nav-link">BLOG</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </Toolbar>
        </AppBar>
        </Collapse>
      <Toolbar />
      </Navbar>
    </React.Fragment>
  );
}
}

export default HideAppBar;