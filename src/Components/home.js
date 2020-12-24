import React, {Component} from 'react';
import '../Shared/CSS/home.css';
import axios from 'axios'; 

import { Card, CardTitle, CardText, CardDeck, CardBody, Button, CardGroup } from 'reactstrap';
import Card2 from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function SimpleAccordion({event}) {

  return (
    <div>
      <Accordion className="home_accordion_main">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="home_expand_button"/>} aria-controls="panel1a-content" id="panel1a-header" className="home_accordion_head">
          <div className="home_accordion_heading">{event.name}</div>
        </AccordionSummary>
        <AccordionDetails className="home_accordion_body">
          <Typography>
            <div>
              <div className="home_accordion_text"> {event.description}</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


class Home extends Component{

  state = { 
    events : [],
    people :[],
    sigs : [], 
  } 

  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/') 
      .then(res => {  
          this.setState({ sigs : res.data.sigo, events : res.data.events, people : res.data.special_people }); 
      }) 
  }

  render () {

      const people = this.state.people.map((person) => {
        if(person.image_path) {
          return (
                <li>{person.name}</li>
          );
        }
        else return(<div></div>)
      });

      const events = this.state.events.map((event) => {
        if(event.name) {
          return (
            <div key={event.id} className="col-md-4">
              <SimpleAccordion event={event}/>
            </div>
          );
        }
        else return(<div></div>)
      });
  
    return(
      <div className="hello">

        <div className="body">
          <section className="banner">
            <div className="home_banner-text1">Association for Computing Machinery</div>
            <div className="home_banner-text2">Advancing Computing as a Science & Profession</div>
          </section>
      </div>

        <div className="home_space1">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-8">
                      <h3 className="home_heading"><b>ACM @ NITK</b></h3>
                      <hr className="hr"></hr>
                      <h6><i>We see a world where computing helps solve tomorrow’s problems – where we use our knowledge and skills
                        to advance the profession and make a positive impact. ACM, the world's largest educational and scientific
                        computing society, delivers resources that advance computing as a science and a profession. ACM provides
                        the computing field's premier Digital Library and serves its members and the computing profession with leading-edge
                        publications, conferences, and career resources. ACM NITK plans and organizes a wide range of events that include 
                        echnical workshops, guest lectures, online events and various other competitions at NITK, throughout the year.</i></h6>
                  </div>
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-3">
                      <img src="/uploads/sigs/logo.png" alt='acm logo' height='200' width='200'/>
                  </div>
              </div>
          </div>
        </div>

        <div className="home_space2">

                <h3 className="home_heading2"><b>YANTRAS</b></h3>
                <hr className="hr"></hr>
                {/*<div className="home_yantra_content">
                  <i className="home_yantra_text">Sanganitra</i>
                  <i className="home_yantra_text">Yantrika</i>
                  <i className="home_yantra_text">Vidyut</i>
                  <i className="home_yantra_text">Kaaryavarta</i>
                  <i className="home_yantra_text">Saahithya</i>
                  <i className="home_yantra_text">Media and Publicity</i>
                  <i className="home_yantra_text"></i>
                </div>
                <hr className="hr"></hr>*/}
                

        <div className="card_blah">
            <CardGroup>
            <Card className="home_sig_card1">
              <CardBody>
                <CardTitle className="home_sig_heading">Sanganitra</CardTitle>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-4">
                    <Card2>
                      <CardActionArea>
                        <img src="/uploads/sigs/sanga.jpg" alt='ex' height="150" width="100%" crop="fill" className="home_sig_img"/>
                      </CardActionArea>
                    </Card2>
                    <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="home_sig_text">The computer science interest group is one of the broadest categories of work at NITK ACM with projects
                      in widespread fields including but not limited to Computer Vision, Software Development, Machine Learning and Big Data. <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="home_sig_card2">
              <CardBody>
                <CardTitle className="home_sig_heading">Yantrika</CardTitle>
                <div className="container">
                  <div className="row">
                      <div className="col-12 col-md-4">
                        <Card2>
                          <CardActionArea>
                            <img src="/uploads/sigs/yantrika.jpeg" alt='ex' height="150" width="100%" crop="fill" />
                          </CardActionArea>
                        </Card2>
                        <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="home_sig_text">Yantrika is a special interest group of ACM-NITK student chapter dedicated to engineering applications in
                        the field of Mechanical, Civil, Chemical and Material Science. The SIG serves as a platform for those interested
                        in shaping their ideas to reality be it in the area of aerospace engineering, robotics, automobile engineering,
                        bio-chemical engineering, structures and materials.<br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="home_sig_card1">
              <CardBody>
                <CardTitle className="home_sig_heading">Vidyut</CardTitle>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Card2>
                        <CardActionArea>
                          <img src="/uploads/sigs/vidyut.png" alt='ex' height="150" width="100%" crop="fill" />
                        </CardActionArea>
                      </Card2>
                      <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="home_sig_text">Vidyut is a special interest group of ACM-NITK Student Chapter interested in the broad area of Electronics
                      Engineering.Dealing with Electrical and Electronics Engineering, the purview of Vidyut ranges from Robotics to
                      Power Electronics to Signal Processing to Machine Learning.<br></br>
                      </div>
                    </div>
                  </div> 
                </div>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="home_sig_card2">
              <CardBody>
                  <CardTitle className="home_sig_heading">Kaaryavarta</CardTitle>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-4">
                      <Card2>
                        <CardActionArea>
                          <img src="/uploads/sigs/karya.jpg" alt='ex' height="150" width="100%" crop="fill" />
                        </CardActionArea>
                      </Card2>
                      <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="home_sig_text">Kaaryavarta is a special interest group (SIG) of the ACM-NITK Student Chapter. Its members are people who are
                        passionate about business, finance, and marketing. It has a collaboration with a few startups and regularly holds
                        Knnew_owledge Exchange Programs (KEPs) for sharing of information between members. It also serves as a platform for taking 
                        forth new business ideas and out of the box marketing strategies.<br></br>
                        </div>
                      </div>
                    </div>
                  </div>               
              </CardBody>
            </Card>
            <Card className="home_sig_card1">
              <CardBody>
                <CardTitle className="home_sig_heading">Saahitya</CardTitle>
                <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-4">
                      <Card2>
                        <CardActionArea>
                          <img src="/uploads/sigs/vidyut.png" alt='ex' height="150" width="100%" crop="fill" />
                        </CardActionArea>
                      </Card2>
                      <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="home_sig_text">Saahitya, the literary Special Interest Group (SIG) under ACM-NITK student chapter, has strived to provide a platform 
                        for the literary-oriented and creative minds within the ACM student community and beyond, with the NITK institute. To this end,
                        Saahithya also aims to acquaint students with the in’s and out’s of college life through Cache, and aims to grow on several 
                        fronts through the subsequent years.<br></br>
                        </div>
                      </div>
                    </div>
                  </div>
              </CardBody>
            </Card>
            <Card className="home_sig_card2">
              <CardBody>
                <CardTitle className="home_sig_heading">Media and Publicity</CardTitle>
                <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-4">
                      <Card2>
                        <CardActionArea>
                          <img src="/uploads/sigs/vidyut.png" alt='ex' height="150" width="100%" crop="fill" />
                        </CardActionArea>
                      </Card2>
                      <Button href={`/1/`} className="home_sig_button">
                        Read More
                      </Button>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="home_sig_text">True to the name, we're a group of media and publicity experts who work towards generating content relevant to the 
                          objectives of the club, represent and reflect the club's activities through its various social media handles, and making
                          sure we stay on top of publicity so as to reach out to the crowd for our various and varied events.<br></br>
                        </div>
                      </div>
                    </div>
                  </div>    
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        </div>

          <div className="home_space">
            <div className="events">
              <div className="container">
                <div className="row"> 
                  <div className="col-12 col-md-12">
                    <h3 className="home_heading1"><b>
                      EVENTS
                      </b>

                    </h3><hr className="hr"></hr>
                  </div>
                    <div className="row"> 
                      <div className="home_card_deck">
                        <CardDeck>
                          {events}
                        </CardDeck>
                      </div> 
                    </div>
                </div>
              </div>
            </div>
          </div>

    </div>
    )
  }
}

export default Home;

