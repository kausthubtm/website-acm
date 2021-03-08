import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/numbers.css';

import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ExtensionIcon from '@material-ui/icons/Extension';
import GroupIcon from '@material-ui/icons/Group';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import Fade from 'react-reveal/Fade';


function Numbers () {
    return(
                <div className="home_space6">
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

                            <h2> Numbers @ ACM <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h2>
                            <hr className="hr"></hr>

                            <div class="row">

                                <div class="col-lg-3 p-5">
                                <FaceIcon style={{ fontSize: 80 }}/>
                                <h3>Strength</h3>
                                <p class="pl-4 pr-4">Antivirus software scans every file which comes through the Internet to your computer.</p>
                                </div>

                                <div class="col-lg-3 p-5 ">
                                <EventIcon style={{ fontSize: 80 }}/>
                                <h3>Events</h3>
                                <p class="pl-4 pr-4">High-quality firewalls act as buffers between you, your computer and outside intruders.</p>
                                </div>

                                <div class="col-lg-3 p-5">
                                <ExtensionIcon style={{ fontSize: 80 }}/>
                                <h3>Projects</h3>
                                <p class="pl-4 pr-4">You should never share personal or financially sensitive information over the Internet.</p>
                                </div>

                                <div class="col-lg-3 p-5">
                                <GroupIcon style={{ fontSize: 80 }}/>
                                <h3>SIG's</h3>
                                <p class="pl-4 pr-4">You should never share personal or financially sensitive information over the Internet.</p>
                                </div>

                            </div>

                            <hr className="hr"></hr>

                        </section>
                    </div>
                </div>
    );
}

export default Numbers;