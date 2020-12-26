/****************************************************************************
*  NAVBAR : Displays NavBar and Announcement sections                       *
*****************************************************************************/



import React from 'react';
import '../Shared/CSS/Navbar.css'
import { Link } from 'react-router-dom';

/* imports for main nav-bar */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

/* import for toggle button */
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';



/* stuff for handelling the toggle */ 
function HideAppBar (props) {

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

      {/* Navbar section */}
      <CssBaseline />
        <AppBar position="static">
          <Toolbar className="Navbar">
            <Hidden smDown>
              <img src="/uploads/sigs/logo.png" height="60" width="60" alt="ACM logo"/>
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
              <img src="/uploads/sigs/logo.png" height="60" width="60" alt="ACM logo" className="toggle" />
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


        {/* Announcements section */}
        <div>
          <tbody>                    
            <tr className="announcements">
              <Hidden smDown>
                <th className="announce_heading">Announcements</th>
              </Hidden>
              <Hidden mdUp>
                <th className="announce_heading_small"> Announcements</th>
              </Hidden>
              <td className="announce_content">
                <marquee scrollamount="12">
                  <div> 
                    <Link to={'/expo'} className="announce_item"><i>Project Expo 2020</i></Link> 
                    <Link to={'/proposal'}className="announce_item"><i>Project Proposals 2021</i></Link> 
                    <Link to={'/recruitment_forms.html'}className="announce_item"><i>Register Now !</i></Link>
                    <Link to={'https://nitk.acm.org/blog/2020/12/20/is-your-data-really-safe/'}className="announce_item"><i>New article : 'Data is the King'</i></Link>
                    <Link className="announce_item"></Link>
                  </div>
                </marquee>
              </td>
            </tr>
          </tbody>
        </div>
    </React.Fragment>
  );
}

export default HideAppBar;