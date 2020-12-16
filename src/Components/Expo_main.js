import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../Shared/CSS/Expo_main.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios'; 

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


  function MediaCard({sig}) {
    const classes = useStyles();   

    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/expo/${sig.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <img src={sig.image} alt={sig.name} height="340" width="100%" crop="fill" />
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
  }

  render () {

      const sigs = this.state.sigs.map((sig) => {
        if(sig.image) {
          return (
              <div key={sig.id} className="col-md-4 m-1">
                  <MediaCard sig={sig} />
              </div>
          );
        }
        else {
          return(
            <div></div>
          )
        }
        });
  
    return(
      <div>
        <div className="body">
          <section className="banner">
            <div className="banner-text">Project Expo</div>
          </section>
        </div>
        <div className="container">
          <div className="row">
              {sigs}
          </div>
        </div>
        <div className="wave"></div>
    </div>
    )
  }
}

export default Expo_main;