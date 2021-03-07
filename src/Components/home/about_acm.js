import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function About () {
    return(
                <div className="home_space1">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3 className="about_heading">About <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <h6 className="home_acm_text">We see a world where computing helps solve tomorrow’s problems – where we use our knowledge and skills
                                    to advance the profession and make a positive impact. ACM, the world's largest educational and scientific
                                    computing society, delivers resources that advance computing as a science and a profession. ACM provides
                                    the computing field's premier Digital Library and serves its members and the computing profession with leading-edge
                                    publications, conferences, and career resources.</h6> 
                            </div>   
                            <div className="col-12 col-md-1"></div>
                            <div className="col-12 col-md-5">
                                <h3 className="about_heading">ACM @ NITK <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                                <hr className="hr"></hr>
                                <h6 className="home_acm_text">ACM NITK is a group of enthusiatic students who plan and organize a wide range of
                             events that include technical workshops, guest lectures, online events and various other competitions at NITK, 
                             throughout the year. Students also actively indulge themselves in year long projects to get clear understanding and 
                             explore different domains. </h6> 
                            </div> 
                        </div>
                    </div>
    );
}

export default About;