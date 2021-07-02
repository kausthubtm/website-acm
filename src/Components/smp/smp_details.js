/****************************************************************************
*  PROJECT DETAILS : Displays all the details of a project                  *
*****************************************************************************/

import React, {Component, Fragment } from 'react';
import '../../Shared/CSS/project_details.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

/* imports for Card and Table */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Table } from 'reactstrap';
import { Hidden } from '@material-ui/core';


/* Styles for pictures */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    transition: '0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    border: '1px solid black'
  },
  space: {
    paddingTop: '10.25%',
  },
}); 


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
        <th scope="row">{name}</th>
        <td>{info}</td>
      </tr>
    );
  }
  else return (<div></div>)
}




/* main class */
class SmpDetails extends Component {

  state = { 
    details : [], 
    pics : [],
  }


  async componentDidMount() { 
    try {
      const res = await axios.get('http://127.0.0.1:8000/smp/' + this.props.sigId + '/' + this.props.smpId)  
      this.setState({ details : res.data.smp }); 
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

    const descriptions = this.state.details.smp_des.map((des) => {
      return (
        <div>
          <h2 className="space">
            <div className="details_heading">{des.sub_heading}</div>
          </h2>
          <hr></hr>
          {/* <h6 className="project_text" >{`${info}`
          .split('\n')
          .map((paragraph, idx) =>
            <Fragment key={idx}>
              {paragraph}<br />
            </Fragment>)}</h6> */}
      </div>
      )
    })
  
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
                <h2 className="details_heading">Details </h2>
              </Hidden>
              <Hidden smUp>
                <h2 className="details_heading">Details </h2>
              </Hidden>
              <hr></hr>
              <Table striped>
                <tbody>
                  <Check2 info={this.state.details.mentors} name='Mentors' />
                  <Check2 info={this.state.details.members} name='Members' />  
                  <tr>
                    <th scope="row">Platform of tutoring</th>
                    <td>{this.state.details.platform_of_tutoring}</td>
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
              <h6 className="project_text" >{this.state.details.overview}</h6>
              <br></br><br></br>
            </div>
          </div> 


          {/* Method section */}
          <h2 className="space">
          <div className="details_heading">Method</div>
          </h2>
          <hr></hr>
          <h6 className="project_text">{this.state.details.method}</h6>
          {descriptions}


        </div>
        <div className="space"></div>
      </div>
    )
  }
}

export default SmpDetails;