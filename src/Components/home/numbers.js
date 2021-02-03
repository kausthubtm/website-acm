import React from 'react';
import '../../Shared/CSS/home2.css';

import { Container, Row } from 'reactstrap';

import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ExtensionIcon from '@material-ui/icons/Extension';
import GroupIcon from '@material-ui/icons/Group';

import CountUp from 'react-countup';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


function Numbers () {
    return(
                <div className="home_space6">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-md-12">

                            <h3 className="heading">ACM at a Glance <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                            <hr className="hr"></hr>
                            <h6 className="home_acm_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tristique nibh 
                            faucibus porta. Cras dignissim enim eu orci pharetra, nec aliquam nisl tincidunt. Nullam commodo risus in varius 
                            scelerisque. Nulla facilisi. Ut at euismod magna. Morbi a dui vitae arcu dapibus imperdiet. Etiam laoreet ut odio 
                            eget efficitur. Nam in maximus odio. Donec non mauris non tortor viverra consectetur vitae non sem. In vehicula a 
                            nibh id convallis. Curabitur vehicula porttitor commodo. Nulla vel congue nulla.</h6> 
                        </div>
                        </div>
                        <div className="cta">
                            <Row>
                                <div className="number_main">
                                    <div className="col-12 col-md-3">
                                        <div className="number_item">
                                            <FaceIcon style={{ fontSize: 80 }}/>
                                            <h1 className="number_no"><CountUp delay={2} end={200} duration={3}/></h1>
                                            <h6 className="number_text">Strength</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="number_main">
                                    <div className="col-md-3">
                                        <div className="number_item">
                                        <EventIcon style={{ fontSize: 80 }}/>
                                        <h1 className="number_no"><CountUp delay={2} end={8} duration={2.75}/></h1>
                                        <h6 className="number_text">Events</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="number_main">
                                    <div className="col-md-3">
                                    <div className="number_item">
                                        <ExtensionIcon style={{ fontSize: 80 }}/>
                                        <h1 className="number_no"><CountUp delay={2} end={28} duration={2.75}/></h1>
                                        <h6 className="number_text">Projects</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="number_main">
                                    <div className="col-md-3">
                                        <div className="number_item">
                                            <GroupIcon style={{ fontSize: 80 }}/>
                                            <h1 className="number_no"><CountUp delay={2} end={6} duration={2.75}/></h1>
                                            <h6 className="number_text">SIG's</h6>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
    );
}

export default Numbers;