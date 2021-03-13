/****************************************************************************
*  PROJECT MAIN : Displays all the projects done under a SIG                *
*****************************************************************************/


import React, { Component } from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/projects_main.css';
import '../../Shared/CSS/main.css'

/* imports for card for the project display */
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import CallMadeIcon from '@material-ui/icons/CallMade';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


  /* function to display the list of projects */
  function SimpleAccordion({project}) {

    const link = 'https://nitk.acm.org/media/'

    return (
      <Fade bottom>
        <Box boxShadow={5} bgcolor="background.paper" m={1} p={1} className="project_box">
          <a href={`/project/${project.id}`} >
            <div className="img_box">
              <img src={link + project.display_picture} alt='ex' height="250" width="100%" crop="fill" className="project_card_img"/>
            </div>
          </a>
          <div className="projects_card_content">
            <div className="project_card_heading">{project.name}</div>
            <div className="project_card_description">{project.introduction}</div>
          </div>
          <div className="card_space"></div>
            <a href={`/project/${project.id}`}  className="card_link"><CallMadeIcon /> Continue reading ...</a>
        </Box>
      </Fade>
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
              <div key={project.id} className="project_card">
                <SimpleAccordion project={project}/>
              </div>
            );
        });

    return(
        <div>
          {/* banner area */}

          <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">{this.state.sig.name} Project Expo</h1>
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
                  <h6 className="project_heading">List of projects done under {this.state.sig.name} during the year 2019 - 2020.</h6>
                  </div>
                  <div className="project_cards_group">
                      {projects}  
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Projects;