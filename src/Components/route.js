/****************************************************************************
*                               Route component                             *
*****************************************************************************/


import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Expo_main from './Expo_main.js';
import Projects from './projects_main.js';
import Details from './project_details.js';
import Header from './Navbar.js';
import Home from './home.js';


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
                  </Switch>
              </BrowserRouter>  
          </>
        )
    }
}

export default Main;

