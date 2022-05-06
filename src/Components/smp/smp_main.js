/****************************************************************************
*  Expo main component : Displays all the sigs for SMP                      *
*****************************************************************************/




import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Shared/CSS/Expo_main.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

/* imports for cards */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Button } from '@material-ui/core';

/* styles for cards */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
    boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
  },
  space: {
    paddingTop: '10.25%',
  },
}); 



  /* function for cards */
  function MediaCard({sig}) {
    const classes = useStyles(); 
    const link = 'https://nitk.acm.org/media/'  

    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/smp/${sig.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
          </CardActionArea>
        </Link>
      </Card>
    </div>
    );
  }



class Smp_main extends Component{

  state = { 
    sigs : [], 
  } 

  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try {
      const res = await axios.get(`${REACT_APP_URL}proposal`) 
      this.setState({ sigs : res.data.sigo }); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }

  render () {

      const sigs = this.state.sigs.map((sig) => {
        if(sig.image) {
          return (
              <div key={sig.id} className="col-md-3">
                  <MediaCard sig={sig} />
              </div>
          );
        }
        else return(<div></div>)
      });
  
    return(
      <div>

        {/* banner area */}

        <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">Summer Mentorship Program</h1>
              </header>
              <center style = {{marginTop:'50px'}} >
              <Button variant="contained" color="primary" className="register-now-button" onClick={()=>{window.location.href = 'https://forms.gle/eb29jZZ2SveSCJva6'}} >Register Here !</Button>
                
              </center>
            </div>
          </div>

        {/* sigs display area */}
          <div className="project_space">
            <div className="container">
              <div className="row"> 
                <div className="col-12 col-md-12">
                  <h3 className="heading">SMP 2022 <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                </div>
              </div>
              <div className="row">
                {sigs}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Smp_main;
