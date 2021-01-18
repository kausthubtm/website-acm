import React from 'react'
import '../../Shared/CSS/home2.css';

import Fade from 'react-reveal/Fade';
import { Button, Container } from 'reactstrap';
import Hidden from '@material-ui/core/Hidden';


function Yantras() {
  return(
    <div>
      <div className="home_space3">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <Hidden xsDown>
                          <h3 className="heading">
                            YANTRAS
                          </h3>
                        </Hidden>
                        <Hidden smUp>
                          <h3 className="heading">
                            <b>YANTRAS</b>
                          </h3>
                        </Hidden>
                      </div>
                    </div>
                    <hr className="hr"></hr>
                  </div>
                </div>

                <div className="yantras2">
                  <Container >

                  <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/sanga.jpg" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Sanganitra</h2>
                        <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350' className="yantra_underline"/> 
                          <p className="yantra_content">The computer science interest group is one of the broadest categories
                            of work at NITK ACM with projects in widespread fields including but 
                            not limited to Computer Vision, Software Development, Machine Learning 
                            and Big Data. </p>
                            <Button href={`/1/`} className="yantra_button">
                              Read More
                            </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>

                    <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Yantrika</h2>
                          <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350'/> 
                            <p className="yantra_content">Yantrika is a special interest group of ACM-NITK student chapter dedicated to engineering applications in
                          the field of Mechanical, Civil, Chemical and Material Science. The SIG serves as a platform for those interested
                          in shaping their ideas to reality be it in the area of aerospace engineering, robotics, automobile engineering,
                          bio-chemical engineering, structures and materials </p>
                          <Button href={`/1/`} className="yantra_button">
                            Read More
                          </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/yantrika.jpeg" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>



                    <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/vidyut.png" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Vidyut</h2>
                        <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350'/> 
                          <p className="yantra_content">Vidyut is a special interest group of ACM-NITK Student Chapter interested in the broad area of Electronics
                        Engineering.Dealing with Electrical and Electronics Engineering, the purview of Vidyut ranges from Robotics to
                        Power Electronics to Signal Processing to Machine Learning.</p>
                        <Button href={`/1/`} className="yantra_button">
                          Read More
                        </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>

                    <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Kaaryavarta</h2>
                          <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350'/> 
                            <p className="yantra_content">Kaaryavarta is a special interest group (SIG) of the ACM-NITK Student Chapter. Its members are people who are
                          passionate about business, finance, and marketing. It has a collaboration with a few startups and regularly holds
                          Knnew_owledge Exchange Programs (KEPs) for sharing of information between members. It also serves as a platform for taking 
                          forth new business ideas and out of the box marketing strategies.</p>
                          <Button href={`/1/`} className="yantra_button">
                            Read More
                          </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/karya.jpg" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>



                    <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/sanga.jpg" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Saahitya</h2>
                        <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350'/> 
                          <p className="yantra_content">Saahitya, the literary Special Interest Group (SIG) under ACM-NITK student chapter, has strived to provide a platform 
                          for the literary-oriented and creative minds within the ACM student community and beyond, with the NITK institute. To this end,
                          Saahithya also aims to acquaint students with the in’s and out’s of college life through Cache, and aims to grow on several 
                          fronts through the subsequent years. </p>
                          <Button href={`/1/`} className="yantra_button">
                            Read More
                          </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>

                    <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Media and Publicity</h2>
                          <img src="/uploads/sigs/underline.png" alt='acm logo' height='25' width='350'/> 
                            <p className="yantra_content">True to the name, we're a group of media and publicity experts who work towards generating content relevant to the 
                            objectives of the club, represent and reflect the club's activities through its various social media handles, and making
                            sure we stay on top of publicity so as to reach out to the crowd for our various and varied events.</p>
                            <Button href={`/1/`} className="yantra_button">
                              Read More
                            </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src="/uploads/sigs/sanga.jpg" alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>
                  </Container>
                </div>
    </div>
  );
}

export default Yantras;