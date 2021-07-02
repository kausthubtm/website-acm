import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function About () {
    return(
                <div className="home_space1">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h3 className="about_heading">About <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <h6 className="home_acm_text">We envision a world where computing helps solve tomorrow’s problems – where we leverage our knowledge and
                                 skills to advance the profession and make a positive impact. ACM, the world's largest educational and 
                                scientific computing society, delivers resources that advance computing as a science and a profession. ACM provides the computing field's
                                 premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career
                                  resources. Closer to home, ACM NITK plans and organizes a wide range of events that include technical workshops, guest lectures,
                                   online events and various other competitions at NITK, throughout the year.</h6> 
                            </div>   
                            <div className="col-12 col-md-1"></div>
                            <div className="col-12 col-md-5">
                                <h3 className="about_heading">ACM @ NITK <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <h6 className="home_acm_text">ACM NITK is the student chapter of the Association for Computing Machinery’s (ACM) international community located
                                 in NITK Surathkal. We are home to 150 motivated students with a wide array of interests ranging from technical to business as well as creative
                                  pursuits. ACM aims to help its members grow in their respective fields and conducts 40 projects annually across the technical and business spectrums.
                                   Believing in community bonding within and outside the club, ACM NITK plans and organises a number of events including mentorship programmes,
                                    technical workshops, guest lectures, online events, alumni talks and various competitions throughout the year to highlight the importance of knowledge and experience.  </h6> 
                            </div> 
                        </div>
                    </div>
    );
}

export default About;