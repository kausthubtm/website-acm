/****************************************************************************
*  Expo main component : Displays all the sigs under project expo           *
*****************************************************************************/




import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../Shared/CSS/Expo_main.css';
import '../../Shared/CSS/main.css'
import Announcements from '../shared/Announcements'
import axios from 'axios'; 

/* imports for cards */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

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
        <Link to={`/expo/${sig.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
          </CardActionArea>
        </Link>
      </Card>
    </div>
    );
  }



class Expo_main extends Component{

  state = { 
    sigs : [], 
  } 

  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/expo') 
      .then(res => {  
          this.setState({ sigs : res.data.sigo }); 
      }) 
      window.scrollTo(0, 0);
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
                            <h1 className="banner_text1">Project Expo</h1>
                        </header>
                    </div>
                </div>
                <Announcements items={[{name:'Project Expo', description:'View the project expo !', link:'/expo'},
                    {name:'Project Proposals', description:'View the project proposals !', link:'/proposal'},
                    ]}/>

        {/* sigs display area */}
          <div className="project_space">
            <div className="container">
              <div className="row"> 
                <div className="col-12 col-md-12">
                  <h3 className="heading">PROJECT EXPO 2020 <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
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

export default Expo_main;