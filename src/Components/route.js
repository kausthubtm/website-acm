/****************************************************************************
*                               Route component                             *
*****************************************************************************/


import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Expo_main from './project_expo/Expo_main';
import Projects from './project_expo/projects_main';
import Details from './project_expo/project_details';
import Header from './Navbar.js';
import Home from './home/home'
import Events from './events/events'



class Main extends Component {

    render() {  

        const SelectedSig = ({match}) => {
            return(
              <Projects sigId = {match.params.sigId} />
            );
          } 
          
          const SelectedProject = ({match}) => {
            return(
              <Details projectId = {match.params.projectId} />
            );
          } 

        return(
            <>
              <BrowserRouter>
                  <Header/>
                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/expo' component={Expo_main}/>
                      <Route exact path="/expo/:sigId" component={SelectedSig} />
                      <Route exact path="/project/:projectId" component={SelectedProject} />
                      <Route exact path="/events" component={Events} />
                  </Switch>
              </BrowserRouter>  
          </>
        )
    }
}

export default Main;

