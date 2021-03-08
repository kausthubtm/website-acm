import React, {Component} from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/home2.css'
import '../../Shared/CSS/events.css'
import Announcements from '../shared/Announcements'

import {CardDeck} from 'reactstrap';

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
        <div className="home_accordion_heading"><i>{event.name}</i></div>
        </AccordionSummary>
        <AccordionDetails className="home_accordion_body">
          <Typography>
            <div>
            <div className="home_accordion_text_head"><i>// {event.name} //</i></div>
              <div className="home_accordion_text"><i>{event.description}</i></div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


class Events extends Component{

  state = { 
    events : [],
  } 

  componentDidMount() { 
      axios.get('http://127.0.0.1:8000/') 
      .then(res => {  
          this.setState({ sigs : res.data.sigo, events : res.data.events, people : res.data.special_people }); 
      }) 
  }

  render () {

      const events = this.state.events.map((event) => {
        if(event.name) {
          return (
            <div key={event.id} className="col-md-6">
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
          <div className="banner-text1">Events</div>
          </section>
        </div>

        <Announcements items={[{name:'Project Expo', description:'View the project expo !', link:'/expo'},
                    {name:'Project Proposals', description:'View the project proposals !', link:'/proposal'},
                    ]}/>

          <div className="events_space">
            <div className="events">
              <div className="container">
                <div className="row"> 
                  <div className="col-12 col-md-12">
                    <h3 className="events_heading">Events<br></br>
                    <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='350'/></h3>
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

export default Events;