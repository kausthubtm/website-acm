import React from 'react';
import { Link } from 'react-router-dom';
import '../Shared/CSS/Expo_main.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
          transform: 'scale(1.1)',
      },
      boxShadow: 'rgba(144, 191, 255) 0px 1px 6px',
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
            alt={project.description}
            height="300"
            image={project.image}
            title={project.description}
          /> 
        </CardActionArea>
        </Link>
      </Card>
    </div>
    );
  }




function Projects (props) {

    const sigs = props.projects.map((project) => {
        return (
            <div key={project.id} className="col-12 col-md-3 m-1">
                <MediaCard project={project} />
            </div>
        );
        });

    return(
        <div>
            <div className="heading">
              <h1><b>PROJECTS</b></h1>
              <hr />
              <h3>Here is a list of projects that we completed in the year 2019-2020</h3>
            </div>
            <div className="container">
                <div className="row">
                    {sigs}
                </div>
            </div>
            <br></br><br></br>
        </div>
    )
}

export default Projects;