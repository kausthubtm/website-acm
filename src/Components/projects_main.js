/****************************************************************************
*  PROJECT MAIN : Displays all the projects done under a SIG                *
*****************************************************************************/


import React, { Component } from 'react';
import axios from 'axios'; 
import '../Shared/CSS/projects_main.css';
import '../Shared/CSS/main.css'

/* imports for card and accordion for the project display */
import {CardDeck, Button} from 'reactstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Hidden from '@material-ui/core/Hidden';


  /* function to display the list of projects */
  function SimpleAccordion({project}) {

    return (
      <div>
        <Accordion className="home_accordion_main">
          <AccordionSummary expandIcon={<ExpandMoreIcon className="home_expand_button"/>} aria-controls="panel1a-content" id="panel1a-header" className="home_accordion_head">
            <div className="home_accordion_heading"><i>{project.name}</i></div>
          </AccordionSummary>
          <AccordionDetails className="home_accordion_body">
            <Typography>
              <div>
                <div className="home_accordion_text_head"><i>{project.name}</i></div>
                <div className="home_accordion_text"><i>{project.introduction}</i></div>
                <div className="row">
                <Button href={`/project/${project.id}`} className="project_button">
                  Read More
                </Button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
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
              <div key={project.id} className="col-md-12">
                <SimpleAccordion project={project}/>
              </div>
            );
        });

    return(
        <div>

            {/* banner area */}
            <div className="body">
              <section className="banner">
                <div className="banner-text1">{this.state.sig.name} Project Expo</div>
              </section>
            </div>

            {/* list of projects area */}
            <div className="project_space">
              <div className="container">
                <div className="row"> 
                  <div className="col-12 col-md-12">
                    <Hidden xsDown>
                    <h3 className="heading"><b>
                    <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> PROJECTS <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
                      </b></h3>
                      </Hidden>
                      <Hidden smUp>
                        <h3 className="heading">
                          <b>PROJECTS</b>
                        </h3>
                      </Hidden>  
                    <hr className="hr"></hr>
                    <h6 className="project_heading">List of projects done under {this.state.sig.name} during the year 2019 - 2020.</h6>
                    <div className="row"> 
                      <div className="home_card_deck">
                        <CardDeck>
                          {projects}
                        </CardDeck>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="wave"></div>

        </div>
    )
  }
}

export default Projects;