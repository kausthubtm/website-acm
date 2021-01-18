import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css';

import { Button } from 'reactstrap';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function Contact () {
    return(
                <div className="home_space7">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3 className="heading">Contact Us <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <h6 className="contact_text"> Wanna say hi (or) queries (or) need help? <a href={`/contact`} >Reach out</a> to us :)
                                </h6>
                            </div>   
                            <div className="col-12 col-md-6"></div>
                            {/*<div className="col-12 col-md-5">
                                <h3 className="heading">Social <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <div className="contact_icon_group">
                                    <a href='https://www.facebook.com/nitkacm/' ><FacebookIcon style={{ fontSize: 35 }} className="contact_first_icon" /></a>
                                    <a href='https://www.linkedin.com/company/acm-nitk/?originalSubdomain=in' ><LinkedInIcon style={{ fontSize: 35 }} className="contact_icon" /></a>
                                    <a href='https://www.instagram.com/acmnitk/?hl=en' ><InstagramIcon style={{ fontSize: 35 }} className="contact_icon" /></a>
                                    <a href='https://github.com/ACM-NITK'><GitHubIcon style={{ fontSize: 35 }} className="contact_icon" /></a>
                                    <a href='https://twitter.com/acmnitk?lang=en'><TwitterIcon style={{ fontSize: 35 }} className="contact_icon" /></a>
                                </div>
                                
    </div> */}
                        </div>
                    </div>
    );
}

export default Contact;