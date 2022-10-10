/****************************************************************************
*  PROJECT DETAILS : Displays all the details of a project                  *
*****************************************************************************/

import React, {Component, Fragment } from 'react';
import '../../Shared/CSS/project_details.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

/* imports for Table */
import { Table } from 'reactstrap';
import { Hidden } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import imgURL from '../../uploads/sigs/background.png'



/* function to check if the section is null or not */
function Check1({info, name}) {
  if(info) {
    return(
      <div>
        <h2 className="space">
          <div className="details_heading">{name}</div>
        </h2>
        <hr></hr>
        <h6 className="project_text" >{`${info}`
        .split('\n')
        .map((paragraph, idx) =>
          <Fragment key={idx}>
            {paragraph}<br />
          </Fragment>)}</h6>
      </div>
    );
  }
  else return (<div></div>)
}

/* function to check if the section is there or not in the team section */
function Check2({info, name}) {
  if(info) {
    return(
      <tr>
        <th scope="row" className="project_text_head">{name}</th>
        <td className="project_text">{info}</td>
      </tr>
    );
  }
  else return (<div></div>)
}


function Check3({info}) {
  if(info) {
    return(
      <tr>
        <td className="project_text">{info.phase}</td>
        <td className="project_text">{info.tasks}</td>
        <td className="project_text">{info.start_date}</td>
        <td className="project_text">{info.end_date}</td>
      </tr>
    );
  }
  else return (<div></div>)
}




/* main class */
class ProposalDetails extends Component {

  state = { 
    details : [], 
    timeline : [],
  }


  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try{
      const res = await axios.get(`${REACT_APP_URL}proposal/${this.props.projectId}`) 
      console.log(`${REACT_APP_URL}/proposal/${this.props.projectId}`)
      this.setState({ details : res.data.project , timeline : res.data.timelines}); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }

  render () { 

    const timeline = this.state.timeline.map((phase) => {
        return (
              <Check3 info={phase} />
        );
      })

    const link = 'https://nitk.acm.org/media/';

  
    return(
      <div>

        {/* banner area */}
        <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">{this.state.details.name}</h1>
              </header>
            </div>
          </div>


        <div className="container">

          {/* Team section */}
          <div className="space"></div>
          <div className="row">
            <div className="col-12 col-md-7">
              <Hidden xsDown>
                <h2 className="details_heading"><img src={imgURL} alt='acm logo' height='40' width='100'/> Team <img src={imgURL} alt='acm logo' height='40' width='100'/></h2>
              </Hidden>
              <Hidden smUp>
                <h2 className="heading">Team</h2>
              </Hidden>
              <hr></hr>
              <Table striped>
                <tbody>
                  <Check2 info={this.state.details.mentors} name='Mentors' />
                  <Check2 info={this.state.details.members} name='Members' />  
                  <tr>
                    <th scope="row" className="project_text_head">Duration</th>
                    <td className="project_text">{this.state.details.duration_in_months} months</td>
                  </tr>
                </tbody>
                </Table>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-4">
              <Card>
                <CardActionArea>
                  <img src={link+this.state.details.image}  alt='ex' height="250" width="100%" crop="fill" />
                </CardActionArea>
              </Card>
            </div>
          </div> 


          {/* Description section */}
          <div className="row">
            <div className="col-12 col-md-12">
              <h2 className="space">
              <div className="details_heading">Description</div>
              </h2>
              <hr></hr>
              <h6 className="project_text" >{this.state.details.introduction}</h6>
              <br></br>
            </div>
          </div> 


          {/* Method section */}
          <h2 className="space">
          <div className="details_heading">Method</div>
          </h2>
          <hr></hr>
          <h6 className="project_text">{this.state.details.method}</h6>

          {/* Existing work section */}
          {/* <br></br>
          <Check1 info={this.state.details.existing_work} name='Existing Work' /> */}

          {/* learning outcomes */}
          <br></br>
          <Check1 info={this.state.details.learning_outcomes} name='Learning Outcomes' />


          {/* Results section */}
          <br></br>
          <Check1 info={this.state.details.results} name='Expected Results' />

          {/* <div className="row">
            <div className="col-12 col-md-12">
              <h2 className="space">
              <div className="details_heading">Timeline</div>
              </h2>
              <hr></hr>
              <h6 className="project_text" >
                <Table striped>
                  <tbody>
                      <tr>
                        <th>Phase</th>
                        <th>Tasks</th>
                        <th>Start Date</th>
                        <th>End Date</th>
        </tr> */}
        {/*            {timeline} */}
                    {/* <Check2 info={this.state.details.mentors} name='Mentors' />
                    <Check2 info={this.state.details.members} name='Members' />   */}
                 {/*</div>} </tbody>
                </Table>
              </h6>
              <br></br>
            </div>
          </div> */}

          {/* Obstacles section */}
          <br></br>
          <Check1 info={this.state.details.application} name='Application' />

          {/* References section */}
          <br></br>
          <Check1 info={this.state.details.references} name='References' />
          
        </div>
        <div className="space"></div>
      </div>
    )
  }
}

export default ProposalDetails;
