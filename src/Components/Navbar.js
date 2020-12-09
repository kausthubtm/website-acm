import React from 'react';
import '../Shared/CSS/Navbar.css'
import { Link } from 'react-router-dom';

/* imports for main nav-bar */
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';

/* import for toggle button */
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


/* helper function for hiding the navbar on scrolling */
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



function HideAppBar (props) {


  /* stuff for handelling the toggle */ 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className="Navbar">
            <Hidden smDown>
              <img src="/assets/images/logo.png" height="60" width="60" alt="ACM logo"/>
              <Link to="" className="link1"></Link>
              <Link to="" className="nav-link">HOME</Link>
              <Link to="/yantra" className="nav-link">YANTRAS</Link>
              <Link to="/expo" className="nav-link">PROJECT EXPO</Link>
              <Link to="/trails" className="nav-link">TRAILS</Link>
              <Link to="/events" className="nav-link">EVENTS</Link>
              <Link to="/esp" className="nav-link">ESP</Link>
              <Link to="/blog" className="nav-link">BLOG</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </Hidden>
            <Hidden mdUp>
              <img src="/assets/images/logo.png" height="60" width="60" alt="ACM logo" className="toggle" />
              <IconButton aria-label="menu" ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle} >
                <MenuIcon className="toggle_btn" style={{ fontSize: 40 }}/>
              </IconButton>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose} ><Link to="" className="nav-link">HOME</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/yantra" className="nav-link">YANTRAS</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/expo" className="nav-link">PROJECT EXPO</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/trails" className="nav-link">TRAILS</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/events" className="nav-link">EVENTS</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/esp" className="nav-link">ESP</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/blog" className="nav-link">BLOG</Link></MenuItem>
                        <MenuItem onClick={handleClose} ><Link to="/contact" className="nav-link">CONTACT</Link></MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            </Hidden>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default HideAppBar;