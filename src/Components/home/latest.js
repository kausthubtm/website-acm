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
                <div className="heading">The latest <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></div>  
                <hr></hr>
                </div>
                                    <Row>
                                        <CardDeck className="card_deck">
                                        <div className="col-12 col-md-4">
                                            <br></br>
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="https://nitk.acm.org/blog/wp-content/uploads/2021/08/hello_brainf-edited.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">The Bizarre World of Esoteric Programming Languages</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON AUGUST 1, 2021</CardSubtitle>
                                                <CardText className="card_text">A standard programming language like Python or C++ is often characterized by a well-defined 
                                                syntax, bug-free and fast nature, and ease in understanding the language. What if there exists a set of languages that 
                                                challenge such norms of programming languages?…</CardText>
                                                <Button className="card_button">Read More</Button>
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
                                                <Button className="card_button">Read More</Button>
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
                                                <Button className="card_button">Read More</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        {/*<div className="col-12 col-md-5">
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="/uploads/sigs/events.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">Innovision</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON JANUARY 7, 2021</CardSubtitle>
                                                <CardText className="card_text">The Centerpiece of Modern Combat Fleets Aircraft carrier is a warship equipped with
                                                    a large open deck for the taking off and landing of warplanes and with facilities to carry,
                                                    service, and arm them. It is an airfield at sea with many special features necessitated by 
                                                    limitations in size and the medium in which it…</CardText>
                                                </CardBody>
                                            </Card>
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="/uploads/sigs/events.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">Innovision</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON DECEMBER 28, 2020</CardSubtitle>
                                                <CardText className="card_text">The Centerpiece of Modern Combat Fleets Aircraft carrier is a warship equipped with
                                                    a large open deck for the taking off and landing of warplanes and with facilities to carry,
                                                    service, and arm them. It is an airfield at sea with many special features necessitated by 
                                                    limitations in size and the medium in which it…</CardText>
                                                </CardBody>
                                            </Card>
    </div>*/}
                                        </CardDeck>
                                    </Row>                              
                            </div>
                            </Fade>
    );
}

export default Latest;