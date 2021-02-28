/****************************************************************************
*  PROJECT DETAILS : Displays all the details of a project                  *
*****************************************************************************/

import React, {Component} from 'react';
import '../../Shared/CSS/project_details.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

/* imports for Table */
import { Table } from 'reactstrap';
import { Hidden } from '@material-ui/core';



/* function to check if the section is null or not */
function Check1({info, name}) {
  if(info) {
    return(
      <div>
        <h2 className="space">
          <div className="details_heading">{name}</div>
        </h2>
        <hr></hr>
        <h6 className="project_text" >{info}</h6>
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
        <th scope="row">{name}</th>
        <td>{info}</td>
      </tr>
    );
  }
  else return (<div></div>)
}




/* main class */
class ProposalDetails extends Component {

  state = { 
    details : [], 
    pics : [],
  }


  componentDidMount() { 
    axios.get('http://127.0.0.1:8000/proposal/' + this.props.projectId) 
    .then(res => {  
      this.setState({ details : res.data.project }); 
    }) 
  }

  render () { 
  
    return(
      <div>

        {/* banner area */}
        <section className="banner">
          <div className="banner-text3">{this.state.details.name}</div>
        </section>


        <div className="container">

          {/* Team section */}
          <div className="space"></div>
          <div className="row">
            <div className="col-12 col-md-7">
              <Hidden xsDown>
                <h2><img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> Team <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/></h2>
              </Hidden>
              <Hidden smUp>
                <h2 className="heading ">Team</h2>
              </Hidden>
              <hr></hr>
              <Table striped>
                <tbody>
                  <Check2 info={this.state.details.mentors} name='Mentors' />
                  <Check2 info={this.state.details.members} name='Members' />  
                  <tr>
                    <th scope="row">Duration</th>
                    <td>{this.state.details.duration_in_months} months</td>
                  </tr>
                </tbody>
                </Table>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-4">
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
              <br></br><br></br>
            </div>
          </div> 


          {/* Method section */}
          <h2 className="space">
          <div className="details_heading">Method</div>
          </h2>
          <hr></hr>
          <h6 className="project_text">{this.state.details.method}</h6>


          {/* Results section */}
          <Check1 info={this.state.details.results} name='Results' />

          {/* Obstacles section */}
          <Check1 info={this.state.details.obstacles} name='Obstacles' />

          {/* Conclusion section */}
          <Check1 info={this.state.details.conclusion} name='Conclusion' />

          {/* References section */}
          <Check1 info={this.state.details.references} name='References' />
          
        </div>
        <div className="space"></div>
      </div>
    )
  }
}

export default ProposalDetails;