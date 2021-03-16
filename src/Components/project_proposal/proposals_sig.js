/****************************************************************************
*  PROJECT MAIN : Displays all the projects done under a SIG                *
*****************************************************************************/


import React, { Component } from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/projects_main.css';
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/proposal.css'
import { Link } from 'react-router-dom';

/* imports for card for the project display */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button} from 'reactstrap';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/* styles for cards */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 16,
    transition: '0.2s',
    boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
    height : 250,
  },
  root2: {
    maxWidth: 500,
    borderRadius: 16,
    transition: '0.2s',
    boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
    height : 300,
  },
  space: {
    paddingTop: '10.25%',
  },
}); 


/* function to display the list of projects */
function MediaCard({project}) {
  const classes = useStyles();   

  return (
  <div className={classes.space}>    
    <Card className={classes.root}>
      <Link to={`/proposal/${project.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <h5 className="proposal_name">{project.name}</h5>
          <div className="proposal_card">
            <Button href={`/1/`} className="proposal_button">Read More</Button>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  </div>
  );
} 

function MediaCard2({project}) {
  const classes = useStyles();   

  return (
  <div className={classes.space}>    
    <Card className={classes.root2}>
      <Link to={`/proposal/${project.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <h5 className="proposal_name">{project.name}</h5>
          <div className="proposal_card">
            <Button href={`/1/`} className="proposal_button">Read More</Button>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  </div>
  );
} 

class ProposedProjects extends Component {

    state = { 
      project_list : [], 
      sig : [],
    }


  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/all_proposals/' + this.props.sigId) 
      .then(res => {  
        this.setState({ project_list : res.data.projects }); 
        this.setState({ sig : res.data.sig }); 
      }) 
      window.scrollTo(0, 0);
  }


    render () {   

        const projects = this.state.project_list.map((project) => {
          if(this.props.sigId === '4') {
            return (
                <div key={project.id} className="col-md-3" >
                  <MediaCard2 project={project} />
                </div>
            );
          }
          else 
            return(
              <div key={project.id} className="col-md-3" >
                  <MediaCard project={project} />
              </div>
          );
        });

    return(
        <div>
          {/* banner area */}
          <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">{this.state.sig.name} Project Proposals</h1>
              </header>
            </div>
          </div>

          {/* list of projects area */}
          <div className="project_space">
            <div className="container">
              <div className="row"> 
                <div className="col-12 col-md-12">
                  <h3 className="heading"> PROJECTS <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                  <hr className="hr"></hr>
                  <h6 className="project_heading">List of project proposals by {this.state.sig.name} for the year 2020 - 2021.</h6>
                  </div>
                </div>
                <div className="row">
                    {projects}  
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default ProposedProjects;