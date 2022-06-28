import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'
import imgURL from '../../uploads/sigs/underline.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import { CallMade } from '@material-ui/icons';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ACMWButton = styled(Button)({
    boxShadow: 'none',
    backgroundColor: "#021E35",
    marginTop: 35,
    '&:hover': {
        backgroundColor: '#021E39',
        boxShadow: 'none',
        
      }
})

function Initiatives () {
    return(
                <Fade up>
                    <div className="home_space7">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <h3 className="initiatives_heading">ACM-W<br></br>
                                <img src={imgURL} alt='acm logo' height='25' width='250'/></h3>
                                <h6 className="initiatives">
                                <p>ACM-W is an international organisation which supports and empowers women in all aspects of the computing field. Closer to home, ACM-W NITK is a thriving student chapter that was incepted in the summer of 2019. We at ACM-W, NITK chapter wish to inspire and nurture young minds to step up and make a mark in the universe of technology. Our aim is to promote learning and create a workspace where the ideas of young women can take shape and create the future. From providing a wide range of opportunities, to working in a large, supportive community to advance contributions by creative minds, ACM-W NITK aims to be a stepping stone for women to be celebrated, empower one another and create a difference.</p>
                                </h6> 
                                <Box textAlign='center'>
                                <ACMWButton variant="contained" href="https://acmwnitk.hosting.acm.org"  target="_blank" rel="noopener" size="large" endIcon={<CallMade />}>ACM-W NITK Website</ACMWButton>
                                </Box>                            
                            </div>   
                        </div>
                    </div>
                </Fade>
    );
}

export default Initiatives;