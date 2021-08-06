/****************************************************************************
*                               Route component                             *
*****************************************************************************/


import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Expo_main from './project_expo/Expo_main';
import Projects from './project_expo/projects_main';
import Details from './project_expo/project_details';

import Header from './Navbar.js';
import Contact from './contact/contact.js';
import Home from './home/home';
import Events from './events/events';
import Footer from './footer';
import Yantra from './yantras/yantras.js';

import Proposal_main from './project_proposal/proposal_main';
import ProposedProjects from './project_proposal/proposals_sig';
import ProposalDetails from './project_proposal/proposal_details';

import SmpSig from './smp/smp_sig';
import Smp_main from './smp/smp_main';
import SmpDetails from './smp/smp_details';

import saahithyaMagazine from './flipbook/saahithyaMagazine';

class Main extends Component {

    render() {  

          const SelectedSig = ({match}) => {
            return(
              <Projects sigId = {match.params.sigId} year={match.params.year}/>
            );
          } 
          
          const SelectedProject = ({match}) => {
            return(
              <Details projectId = {match.params.projectId} />
            );
          } 

          const SelectedYantra = ({match}) => {
            return(
              <Yantra sigId = {match.params.sigId} />
            );
          } 

          const SelectedProposalSig = ({match}) => {
            return(
              <ProposedProjects sigId = {match.params.proposalSigId} />
            );
          }

          const SelectedProposalProject = ({match}) => {
            return(
              <ProposalDetails projectId = {match.params.proposalProjectId} />
            );
          }

          const SelectedSmpSig = ({match}) => {
            return(
              <SmpSig sigId = {match.params.smpSigId} />
            );
          }

          const SelectedSmp = ({match}) => {
            return(
              <SmpDetails sigId = {match.params.smpSigId} smpId = {match.params.smpId}/>
            );
          }          
          
        return(
            <>
              <BrowserRouter>
                  <Header/>
                  <div className="hello">
                    <div className="blah">
                      <Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path="/sigs/:sigId" component={SelectedYantra} />
                          <Route exact path='/expo' component={Expo_main}/>
                          <Route exact path="/expo/:year/:sigId" component={SelectedSig} />
                          <Route exact path="/project/:projectId" component={SelectedProject} />
                          <Route exact path='/proposal' component={Proposal_main}/>
                          <Route exact path='/all_proposals/:proposalSigId' component={SelectedProposalSig}/>
                          <Route exact path='/proposal/:proposalProjectId' component={SelectedProposalProject}/>
                          <Route exact path="/events" component={Events} />
                          <Route exact path="/contact" component={Contact} />
                          <Route exact path='/smp' component={Smp_main}/>
                          <Route exact path='/smp/:smpSigId' component={SelectedSmpSig}/>
                          <Route exact path='/smp/:smpSigId/:smpId' component={SelectedSmp}/>
                          <Route exact path='/saahityaMagazine' component={saahithyaMagazine}/>
                      </Switch>
                      <Footer />
                    </div>
                  </div>
                  
              </BrowserRouter>  
          </>
        )
    }
}

export default Main;

