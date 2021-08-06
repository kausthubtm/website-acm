import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/numbers.css';

import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ExtensionIcon from '@material-ui/icons/Extension';
import GroupIcon from '@material-ui/icons/Group';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';

// import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


function Numbers () {
    return(
                <div className="home_space6">
                    <Fade up>
                    <div className="container">
                        {/*<div className="row">
                        <div className="col-12 col-md-12">

                            <h3 className="heading">ACM at a Glance <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                            <hr className="hr"></hr>
                            <h6 className="home_acm_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tristique nibh 
                            faucibus porta. Cras dignissim enim eu orci pharetra, nec aliquam nisl tincidunt. Nullam commodo risus in varius 
                            scelerisque. Nulla facilisi. Ut at euismod magna. Morbi a dui vitae arcu dapibus imperdiet. Etiam laoreet ut odio 
                            eget efficitur. Nam in maximus odio. Donec non mauris non tortor viverra consectetur vitae non sem. In vehicula a 
                            nibh id convallis. Curabitur vehicula porttitor commodo. Nulla vel congue nulla.</h6> 
                        </div>
                        </div>*/}

                            <section id="safety">

                                {/* <h2 className="heading">Numbers @ ACM <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h2>
                                <hr></hr> */}

                                <div class="row">
                                    <div class="col-lg-6 p-4">
                                        <Paper className="numbers_card" elevation={5}>
                                            <FaceIcon style={{ fontSize: 90 }} className="icon"/>
                                            <h3>Strength</h3>
                                            <p class="pl-4 pr-4">Our tight-knit community is home to 150 curious and dedicated members who strive to better themselves
                                            by pursuing their interests be it technical, business or creative. Our primary goal has always been to nurture the growth 
                                            of our members and to provide enough opportunities, guidance and impetus to make that happen.</p>
                                        </Paper>
                                    </div>

                                    <div class="col-lg-6 p-4 ">
                                        <Paper className="numbers_card" elevation={5}>
                                            <EventIcon style={{ fontSize: 90 }} className="icon"/>
                                            <h3>Events</h3>
                                            <p class="pl-4 pr-4">ACM NITK believes in adding value through the XY events they organise throughout the year. 
                                            Whether it’s organising challenging events or conducting insightful workshops and talks with renowned experts or our 
                                            very own ACM alumni from all over the world, we work tirelessly to make a positive impact and help the club members 
                                            and the community at large. </p>
                                        </Paper>
                                    </div>
                                </div>

                                <div className="row">

                                    <div class="col-lg-6 p-4">
                                        <Paper className="numbers_card" elevation={5}>
                                            <ExtensionIcon style={{ fontSize: 90 }} className="icon"/>
                                            <h3>Projects</h3>
                                            <p class="pl-4 pr-4">What we learn to do, we learn by doing. It comes as no surprise that ACM members take up around 40 
                                            projects every year across various fields in their Special Interest Groups (SIGs). Drawing from the experience of mentors 
                                            and collaborating with other project members helps further our technical expertise as well as our soft skills. </p>
                                        </Paper>
                                    </div>

                                    <div class="col-lg-6 p-4">
                                        <Paper className="numbers_card" elevation={5}>
                                            <GroupIcon style={{ fontSize: 90 }} className="icon"/>
                                            <h3>SIG's</h3>
                                            <p class="pl-4 pr-4">ACM houses 6 Special Interest Groups whose members are passionate about learning in their specific fields. 
                                            SIG members actively engage in discussion to interact and learn from one another, hold Knowledge Exchange Programs (KEPs), conduct 
                                            fun events and take up projects in the field in order to equip themselves better.</p>
                                        </Paper>
                                    </div>

                                </div>

                            </section>

                    </div>
                    </Fade>
                </div>
    );
}

export default Numbers;