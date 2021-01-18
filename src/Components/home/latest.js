import React from 'react'
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck, Row} from 'reactstrap';

function Latest () {
    return (
        <div className="latest">   
            <div className="col-12 col-md-12">                            
                <div className="heading">The latest <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></div>  
                <hr className="hr"></hr>
                </div>
                                    <Row>
                                        <CardDeck className="card_deck">
                                        <div className="col-12 col-md-4">
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="/uploads/sigs/blog.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">Electric Vehicles in India</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON JANUARY 10, 2021</CardSubtitle>
                                                <CardText className="card_text">India has been quite successful in its attempt to implement Electric vehicles (EVs), 
                                                we are not quite there yet. India’s focus on next-gen mobility has taken on legs under the current government, 
                                                but the ‘National Electric Mobility Mission Plan (NEMMP) 2020’ was unveiled in 2013 under the previous Congress-led government. 
                                                That puts into perspective the…</CardText>
                                                <Button className="card_button">Read More</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="/uploads/sigs/blog.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">China’s BRI – Belt and Road Initiative</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON JANUARY 6, 2021</CardSubtitle>
                                                <CardText className="card_text"> Remember the Silk Route? The historic trade route that stretched from Asia to the
                                                 Mediterranean and connected China and the Far East to Europe and the Middle East transformed China into an economic 
                                                 and cultural force to reckon with.  In 2013, Chinese President Xi Jinping announced plans to revive the Silk Route as the Belt…</CardText>
                                                <Button className="card_button">Read More</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <Card className="blog_card">
                                                <CardImg top width="100%" src="/uploads/sigs/blog.jpg" alt="Card image cap" />
                                                <CardBody className="card_body">
                                                <CardTitle className="card_title">Aircraft Carriers</CardTitle>
                                                <CardSubtitle tag="h6" className="card_title2">POSTED ON DECEMBER 28, 2020</CardSubtitle>
                                                <CardText className="card_text">The Centerpiece of Modern Combat Fleets Aircraft carrier is a warship equipped with
                                                    a large open deck for the taking off and landing of warplanes and with facilities to carry,
                                                    service, and arm them. It is an airfield at sea with many special features necessitated by 
                                                    limitations in size and the medium in which it…</CardText>
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
    );
}

export default Latest;