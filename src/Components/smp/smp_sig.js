/****************************************************************************
*  PROJECT MAIN : Displays all the projects done under a SIG                *
*****************************************************************************/


import React, { Component } from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/projects_main.css';
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/proposal.css'
import { Link } from 'react-router-dom';

/* imports for card for the project display */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button} from 'reactstrap';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/* styles for cards */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 16,
    transition: '0.2s',
    boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
    height : 250,
  },
  space: {
    paddingTop: '10.25%',
  },
}); 


/* function to display the list of projects */
function MediaCard({smp}) {
  const classes = useStyles();   

  return (
  <div className={classes.space}>    
    <Card className={classes.root}>
      <Link to={`/smp/${smp.sig_id}/${smp.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea style={{height:"100%"}}>
          <div style={{display:'flex', height:'100%',flexDirection:'column', justifyContent:'space-between'}} >
          <h5 className="proposal_name">{smp.name}</h5>
          <div className="proposal_card" style={{marginBottom:'10%'}} >
            <Button href={`/1/`} className="proposal_button">Read More</Button>
          </div>
          </div>
          
        </CardActionArea>
      </Link>
    </Card>
  </div>
  );
} 


class SmpSig extends Component {

    state = { 
      smp_list : [], 
      sig : [],
    }


  async componentDidMount() { 
    const {REACT_APP_URL} = process.env;
    try {
      const res = await axios.get(`${REACT_APP_URL}smp/${this.props.sigId}/`) 
      this.setState({ smp_list : res.data.smps }); 
      this.setState({ sig : res.data.sig }); 
      window.scrollTo(0, 0);
    }
    catch(error) {
      console.log(error);
    }
  }


    render () {   

        const smps = this.state.smp_list.map((smp) => {
            return(
              <div key={smp.id} className="col-md-3" >
                  <MediaCard smp={smp} />
              </div>
          );
        });

    return(
        <div>
          {/* banner area */}
          <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">{this.state.sig.name} SMPs</h1>
              </header>
            </div>
          </div>

          {/* list of projects area */}
          <div className="project_space">
            <div className="container">
              <div className="row"> 
                <div className="col-12 col-md-12">
                  <h3 className="heading"> SMPs <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                  <hr className="hr"></hr>
                  <h6 className="project_heading">List of SMPs by {this.state.sig.name}</h6>
                  </div>
                </div>
                <div className="row">
                    {smps}  
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default SmpSig;