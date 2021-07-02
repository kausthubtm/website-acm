import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'

import Fade from 'react-reveal/Fade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Initiatives () {
    return(
                <Fade up>
                    <div className="home_space1">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <h3 className="initiatives_heading">Initiatives<br></br>
                                <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='250'/></h3>
                                <h6 className="initiatives">A list of initiatives taken up by ACM-NITK <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> Internships and cold mailing talk <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> Perspectives (ACMW Webinar for School Kids) - Pedestal  <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> ACM Distinguished Speakers Program - Dr. Ingmar Weber <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> ACM Embibe - KEP series <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> Resume KEP - Sanganitra <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> Innovision - Cryptic, Hardwired, Jugaad, Strategy-B, Literati <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> ACM FIG talk with freshers <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> ACM Alumni Series - 4 Speakers <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> ACMW Distinguished Speakers Program - Dr. Georgia Koutrika <br />
                                <FiberManualRecordIcon style={{ fontSize: 10 }}/> Summer Mentorship Program<br />
                                </h6> 
                            </div>   
                        </div>
                    </div>
                </Fade>
    );
}

export default Initiatives;