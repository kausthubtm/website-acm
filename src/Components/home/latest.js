import React from 'react'
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import Fade from 'react-reveal/Fade';

import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck, Row, CardImg} from 'reactstrap';

function Latest () {
    return (
        <Fade up>
        <div className="latest">   
            <div className="col-12 col-md-12">                            
                <div className="heading">The Latest <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></div>  
                <hr></hr>
                </div>
                    <Row>
                        <CardDeck className="card_deck">
                        <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://www.techtalkthai.com/wp-content/uploads/2021/09/named_data_network_ndn_banner_01.jpg" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">Named Data Networking (NDN)</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON JANUARY 22, 2023</CardSubtitle>
                                <CardText className="card_text">Named Data Networking (NDN) is a new type of network architecture that is gaining traction among researchers and tech enthusiasts. 
                                NDN operates on a data-centric approach, where data is named by its content, giving you a more secure, flexible, and scalable network…</CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://thumbor.forbes.com/thumbor/fit-in/960x600/https://www.forbes.com/wheels/wp-content/uploads/2023/03/2023_Lucid_Air_Gallery1.jpg" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">The Rise of EVs</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON MARCH 8, 2023</CardSubtitle>
                                <CardText className="card_text">With the increase in Global Warming due to various human activities, burning gasoline for the purpose of transportation is one of the leading factors. 
                                Due to this, Electric Vehicles (EVs) are gaining traction as a sustainable transportation solutions for several reasons, including reducing carbon emissions, improving air quality, 
                                and saving money on fuel... </CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://www.xrtoday.com/wp-content/uploads/2022/10/What_Web3_Going_2023.jpg" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">Dive into Web 3.0</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON MARCH 20, 2021</CardSubtitle>
                                <CardText className="card_text">The universe of networking and web pages has seen multiple phases, wherein the next phase is usually transitioned from the previous phase gradually, thus making it hard always to give clear-cut differences.
                                Few experts say that we are now slowly transitioning into the third phase – Web 3.0, while others are still of the opinion that it’ll be a few years more until Web 3.0 is normalized in our daily online lives... </CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div>
                        {/* <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://nitk.acm.org/blog/wp-content/uploads/2021/08/hello_brainf-edited.jpg" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">The Bizarre World of Esoteric Programming Languages</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON AUGUST 1, 2021</CardSubtitle>
                                <CardText className="card_text">A standard programming language like Python or C++ is often characterized by a well-defined 
                                syntax, bug-free and fast nature, and ease in understanding the language. What if there exists a set of languages that 
                                challenge such norms of programming languages?…</CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://lh3.googleusercontent.com/VU8W677cGYbZZK3NSQbWW5nbZxcyZqLSxkSd1OXH1ZdBLim-U6Z-ytwx_yqwFLHFoXKN6OY_buNf4KrR4yEb_3KoO5GURjiLLzXzx_R9IK8mmn2z6QkWsB6lhYKxH7bTVKzDRmta" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">Pharmaceutical Development</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON APRIL 1, 2021</CardSubtitle>
                                <CardText className="card_text">One of the most important industries in the world that our lives have revolved around is healthcare. Without drugs and medicine, it is not possible to cure ailments no matter how well the doctors diagnose the patient. From ancient times a physician used herbs and bandages to cure injuries and diseases, which is all medicine in one form or the other. Today, the pharmaceutical industry is very big... </CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <br></br>
                            <Card className="blog_card">
                                <CardImg top width="100%" src="https://lh4.googleusercontent.com/3jfI2ND8KOkypYiPZFMzJQUGoQFpWsftgzNvX6mUhFuBX41VLuVjGGlMSA5KdoWYju1C7fFHMbXBzSjoSs7CCKmcur3qRvlkIw4YqDBR-zDz5RKqGCUIFYvd66nYU-4Va-KQbVY" alt="Card image cap" />
                                <CardBody className="card_body">
                                <CardTitle className="card_title">DLSS: The Big leap in AI Rendering</CardTitle>
                                <CardSubtitle tag="h6" className="card_title2">POSTED ON MARCH 20, 2021</CardSubtitle>
                                <CardText className="card_text">In the present decade, games tend to offer a more realistic environment thus pushing corresponding computer hardware to its limits. Here comes DLSS to the rescue. Many people might have heard about Cyberpunk 2077 or Microsoft Flight Simulator is almost impossible to play without... </CardText>
                                <Button className="card_button" href="https://nitk.acm.org/blog/">Read More</Button>
                                </CardBody>
                            </Card>
                        </div> */}
                        </CardDeck>
                    </Row>                              
                </div>
        </Fade>
    );
}

export default Latest;