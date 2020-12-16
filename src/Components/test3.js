import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../Shared/CSS/Expo_main.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
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


function MediaCard({project}) {
  const classes = useStyles();

  return (
  <div className={classes.space}>    
    <Card className={classes.root}>
      <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={project.name}
            height="340"
            image={project.display_picture}
            title={project.name}
          />
        </CardActionArea>
      </Link>
    </Card>
  </div>
  );
}



class Test3 extends Component{

  state = { 
    project_list : [], 
    sig : [],
  } 

  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/expo/') 
      .then(res => {  
        this.setState({ project_list : res.data.projects }); 
        this.setState({ sig : res.data.sigo[0] }); 
      }) 
  }


    render () {   
      
      const projects = this.state.project_list.map((project) => {
        return (
            <div key={project.id} className="col-12 col-md-3 m-1">
                <MediaCard project={project} />
            </div>
        );
        });

    return(
        <div>
            <div className="body">
              <section className="banner">
                <div className="banner-text">{this.state.sig.name} Project Expo</div>
              </section>
            </div>
            <div className="container">
                <div className="row">
                    {projects}
                </div>
            </div>
            <div className="wave"></div>
        </div>
    )
}
}

export default Test3;