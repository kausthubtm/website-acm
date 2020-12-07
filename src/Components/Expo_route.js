import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Expo_main from './Expo_main';
import Projects from './projects_main';
import Project_details from './project_details';
import {SIGS} from '../Shared/Data/json/expo_sigs';
import Header from './Navbar';
import {PROJECTS} from '../Shared/Data/json/projects';

class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          sigs: SIGS,
          projects: PROJECTS,
        };
      }

    render() {

        const SelectedSig = ({match}) => {
            return(
              <Projects projects = {this.state.projects.filter((project) => project.sig_id === parseInt(match.params.sigId,10))} />
            );
          }
        
          const SelectedProject = ({match}) => {
            return(
              <Project_details project = {this.state.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]} />
            );
          }   

        return(
            <>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/expo' component={() => <Expo_main sigs={this.state.sigs}/>}/>
                        <Route path="/expo/:sigId" component={SelectedSig} />
                        <Route path="/project/:projectId" component={SelectedProject} />
                    </Switch>
                </BrowserRouter>  
        </>
        )
    }
}

export default Main;

