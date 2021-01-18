import React from 'react'
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'

import Hidden from '@material-ui/core/Hidden';

function Gallery () {
    return(
        <div>
            <div className="home_space5">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-md-12">
                            <Hidden xsDown>
                            <h3 className="heading"><b>
                                <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> GALLERY <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
                            </b></h3>
                            </Hidden>
                            <Hidden smUp>
                                <h3 className="heading">GALLERY</h3>
                            </Hidden>
                            <hr className="hr"></hr>

                            <h6 className="home_acm_text">We see a world where computing helps solve tomorrow’s problems – where we use our knowledge and skills
                                to advance the profession and make a positive impact. ACM, the world's largest educational and scientific
                                computing society, delivers resources that advance computing as a science and a profession. ACM provides
                                the computing field's premier Digital Library and serves its members and the computing profession with leading-edge
                                publications, conferences, and career resources. ACM NITK plans and organizes a wide range of events that include 
                                echnical workshops, guest lectures, online events and various other competitions at NITK, throughout the year.</h6>

                        </div>  
                        </div>  
                        </div>
                        </div>
                {/*<div className="home_space4">
                    <div class="wrapper">
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg"alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                        <img src="/uploads/sigs/sanga.jpg" alt="" className="gallery_image"/>
                    </div>
                </div>*/}
        </div>
    );
}

export default Gallery;