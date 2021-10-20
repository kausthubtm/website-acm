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

import { SRLWrapper } from "simple-react-lightbox";

import SimpleReactLightbox from 'simple-react-lightbox'
import imgURL from '../../uploads/sigs/background.png'

const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false,
  }
}



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
function MediaCard({pic}) {
  const classes = useStyles();   
  const link = 'https://nitk.acm.org/media/'

  return (
  <div className={classes.space}>    
    <Card className={classes.root}>
      <CardActionArea>
        <SRLWrapper options={options}>
          <img src={link + pic.picture} alt={pic.title} height="340" width="100%" crop="fill" />
        </SRLWrapper>
      </CardActionArea>
    </Card>
  </div>
  );
}


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




/* main class */
class Details extends Component {

  state = { 
    details : [], 
    pics : [],
  }


  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try{
      const res = await axios.get(`${REACT_APP_URL}project/${this.props.projectId}`) 
      this.setState({ details : res.data.project }); 
      this.setState({ pics : res.data.pictures }); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }

  render () {

    const pictures = this.state.pics.map((pic) => {
        return (
            <div key={pic.id} className="col-md-4">
                <MediaCard pic={pic} />
            </div>
        );
      }); 

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
                <div className="details_heading">Team</div>
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
                  <img src={link+this.state.details.display_picture}  alt='ex' height="250" width="100%" crop="fill" />
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
          {/* <h2 className="space">
          <div className="details_heading">Method</div>
          </h2>
          <hr></hr> */}
          <Check1 info={this.state.details.method} name='Method' />


          {/* Results section */}
          <Check1 info={this.state.details.results} name='Results' />

          {/* Obstacles section */}
          <Check1 info={this.state.details.obstacles} name='Obstacles' />

          {/* Conclusion section */}
          <Check1 info={this.state.details.conclusion} name='Conclusion' />

          {/* References section */}
          <Check1 info={this.state.details.references} name='References' />

          {/* Pictures section */}
          <h2 className="space">
          <div className="details_heading">Pictures</div>
          </h2><hr></hr>
          <div className="row">
            <SimpleReactLightbox>
                {pictures}
            </SimpleReactLightbox>
          </div>
        </div>
        <div className="space"></div>
      </div>
    )
  }
}

export default Details;