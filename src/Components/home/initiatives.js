import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'

import Fade from 'react-reveal/Fade';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Initiatives () {
    return(
                <Fade up>
                    <div className="home_space7">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <h3 className="initiatives_heading">Initiatives<br></br>
                                <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='250'/></h3>
                                <h6 className="initiatives">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </h6> 
                            </div>   
                        </div>
                    </div>
                </Fade>
    );
}

export default Initiatives;