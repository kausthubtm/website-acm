/****************************************************************************
*  Expo main component : Displays all the sigs under project expo           *
*****************************************************************************/




import React, { Component } from 'react';
import '../../Shared/CSS/Expo_main.css';
import '../../Shared/CSS/main.css';
import Tab from './tabs';
import Announcements from '../shared/Announcements';
import axios from 'axios'; 

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';





class Expo_main extends Component{

  state = { 
    sigs : [], 
  } 

  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try{
      const res = await axios.get(`${REACT_APP_URL}expo`) 
      this.setState({ sigs : res.data.sigo }); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }

  

  render () {

  
    return(
      <div>

        {/* banner area */}
        <div className="banner_background">
          <div className="banner">
            <header className="banner_text_area">
              <h1 className="banner_text_others">Project Expo</h1>
            </header>
          </div>
        </div>
        <Announcements items={[
                    {name:'Project Proposal', description:'View Project Proposals !', link:'/proposal'},
                    {name:'Summer Mentorship', description:'Registrations are closed !', link:'/smp'},
                    {name:'Project Expo', description:'View Project Expo 2020 !', link:'/expo'},
        ]}/>

        {/* sigs display area */}
          <div className="project_space">
            <div className="container">
              <div className="row"> 
                <div className="col-12 col-md-12">
                  <h3 className="heading">PROJECT EXPO <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                </div>
              </div>
              <Tab sigs={this.state.sigs}/>
            </div>
          </div>
      </div>
    )
  }
}

export default Expo_main;