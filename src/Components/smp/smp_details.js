/****************************************************************************
*  PROJECT DETAILS : Displays all the details of a project                  *
*****************************************************************************/

import React, {Component, Fragment } from 'react';
import '../../Shared/CSS/project_details.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

/* imports for Card and Table */
import { Table } from 'reactstrap';
import { Hidden } from '@material-ui/core';



/* function to display pictures */
// function MediaCard({pic}) {
//   const classes = useStyles();   
//   const link = 'https://nitk.acm.org/media/'

//   return (
//   <div className={classes.space}>    
//     <Card className={classes.root}>
//       <CardActionArea>
//         <SRLWrapper options={options}>
//           <img src={link + pic.picture} alt={pic.title} height="340" width="100%" crop="fill" />
//         </SRLWrapper>
//       </CardActionArea>
//     </Card>
//   </div>
//   );
// }


/* function to check if the section is null or not */
function Check1({info, name}) {
  const result = info.map((des)=> {
    if(des.sub_heading===name) {
      return (
        <div>
          <li className="project_text" >{`${des.sub_des}`
          .split('\n')
          .map((paragraph, idx) =>
            <Fragment key={idx}>
              {paragraph}<br />
            </Fragment>)}</li>
      </div>
      )
    }
    else {
      return (<div></div>)
    }
  })

  return result;
}

/* function to check if the section is there or not in the team section */
function Check2({info, name}) {
  if(info) {
    return(
      <tr>
        <th scope="row" className="project_text_head" >{name}</th>
        <td className="project_text" >{info}</td>
      </tr>
    );
  }
  else return (<div></div>)
}




/* main class */
class SmpDetails extends Component {

  state = { 
    smp : [], 
    smp_des : [],
  }


  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try {
      const res = await axios.get(`${REACT_APP_URL}smp/${this.props.sigId}/${this.props.smpId}/`)  
      this.setState({ smp : res.data.smp, smp_des : res.data.smp_des }); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }

  render () {

    // const pictures = this.state.pics.map((pic) => {
    //     return (
    //         <div key={pic.id} className="col-md-4">
    //             <MediaCard pic={pic} />
    //         </div>
    //     );
    //   }); 

    //   const link = 'https://nitk.acm.org/media/'

    return(
      <div>

        {/* banner area */}
        <div className="banner_background">
          <div className="banner">
            <header className="banner_text_area">
              <h1 className="banner_text1">{this.state.smp.name}</h1>
            </header>
          </div>
        </div>


        <div className="container">

          {/* Team section */}
          <div className="space"></div>
          <div className="row">
            <div className="col-12 col-md-7">
              <Hidden xsDown>
                <h2 className="details_heading">Details </h2>
              </Hidden>
              <Hidden smUp>
                <h2 className="details_heading">Details </h2>
              </Hidden>
              <hr></hr>
              <Table striped>
                <tbody>
                  <Check2 info={this.state.smp.mentors} name='Mentors' />
                  {/* <Check2 info={this.state.details.members} name='Members' />   */}
                  <tr>
                    <th className="project_text_head" scope="row">Platform of tutoring</th>
                    <td className="project_text" >{this.state.smp.platform_of_tutoring}</td>
                  </tr>
                </tbody>
                </Table>
            </div>
            <div className="col-12 col-md-5"></div>
            {/* <div className="col-12 col-md-4">
              <Card>
                <CardActionArea>
                  <img src={link + this.state.details.display_picture} alt='ex' height="250" width="100%" crop="fill" />
                </CardActionArea>
              </Card>
            </div> */}
          </div> 


          {/* Description section */}
          <div className="row">
            <div className="col-12 col-md-12">
              <h2 className="space">
              <div className="details_heading">Overview</div>
              </h2>
              <hr></hr>
              <ul>
                <li className="project_text" >{this.state.smp.overview}</li>
              </ul>
              <br></br>
            </div>
          </div> 


          {/* Method section */}

          <h2 className="space">
          <div className="details_heading">Exercise</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Exercise' />
          </ul>

          <h2 className="space">
          <div className="details_heading">Prerequisite</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Prerequisite' />
          </ul>

          <h2 className="space">
          <div className="details_heading">Course-content</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Course-content' />
          </ul>

          <h2 className="space">
          <div className="details_heading">Session 1</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Session 1' />
          </ul>

          <h2 className="space">
          <div className="details_heading">Session 2</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Session 2' />
          </ul>

          <h2 className="space">
          <div className="details_heading">Session 3</div>
          </h2>
          <hr></hr>
          <ul>
            <Check1 info={this.state.smp_des} name='Session 3' />
          </ul>


        </div>
        <div className="space"></div>
      </div>
    )
  }
}

export default SmpDetails;