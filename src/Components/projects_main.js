import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Shared/CSS/projects_main.css';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
  root: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    border: '1px solid black'
  },
  space: {
    paddingTop: '10.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})); 


  function MediaCard({project}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };    


    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
          <img src={'/' + project.display_picture} alt="project.name" height="300" width="100%" crop="fill" />
        </Link>
        <CardContent className="projectHeading">
        <div>
          {project.name}
        </div>
      </CardContent>
        <CardActions disableSpacing className="card_footer">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className="expand_button"/>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="card_content">
            <Typography paragraph><b>What is it ?</b></Typography>
            <Typography paragraph variant="body2" component="p">
              {project.introduction}
            </Typography>
            <Button variant="outlined" color="primary" href={`/project/${project.id}`} >
              Read More
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
    );
  }



class Projects extends Component {

    state = { 
      project_list : [], 
      sig : [],
    }


  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/expo/' + this.props.sigId) 
      .then(res => {  
        this.setState({ project_list : res.data.projects }); 
        this.setState({ sig : res.data.sig }); 
      }) 
  }


    render () {   
      
      const projects = this.state.project_list.map((project) => {
        return (
            <div key={project.id} className="col-12 col-md-4">
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
              <div className="header">
                <div className="heading">Projects</div>
                <hr></hr>
                <h4 className="headingSpace">Here is the list of projects we completed during the year 2019-2020</h4>
              </div>
                <div className="row">
                    {projects}
                </div>
            </div>
            <div className="wave"></div>
        </div>
    )
  }
}

export default Projects;