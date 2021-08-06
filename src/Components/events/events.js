import React, {Component} from 'react';
import axios from 'axios'; 
import { IMG_PATH } from './image_path.js';
import '../../Shared/CSS/home2.css'
import '../../Shared/CSS/events.css'
import '../../Shared/CSS/events2.css'
import Announcements from '../shared/Announcements'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

import Fade from 'react-reveal/Fade';
import Hidden from '@material-ui/core/Hidden';


function Getchip ({id}) {

    if(id===1){
      return(  
        <Chip label="Sangaitra" className="chip"/>
      )
    }
    if(id===2){
        return(
          <Chip label="Yantrika" className="chip"/>
        )
    }
    if(id===3){
        return(
          <Chip label="Vidyut" className="chip"/>
        )
    }
    if(id===4){
        return(
          <Chip label="Kaaryavarta" className="chip"/>
        )
    }
    if(id===5){
        return(
          <Chip label="Saahitya" className="chip"/>
        )
    }
    if(id===6){
      return(
        <Chip label="Abhivyakta" className="chip"/>
      )
  }
    else return(<div></div>)

    
}



function Cards ({event}) {
  if(event.name) {
    return (
      <div className="col-md-6">
        <CardContent className="content">
          <div className="event_name">
            {event.name} <Getchip id={event.sig_id} />
          </div>
          <div className="event_desc">
            {event.description}
          </div>
        </CardContent>
      </div>
        
    );
  }
  else return(<div></div>)
}

function Image ({index, images}) {
  return(
    <div className="col-md-4">
      <img src={images[index]} alt="ACM logo" className="event_pic"/>
    </div>
  )
}

class Events extends Component{

    state = { 
      events : [],
      images : IMG_PATH,
    } 
  
    async componentDidMount() { 
      const res = await axios.get('http://127.0.0.1:8000/') 
      this.setState({events : res.data.events}); 
      window.scrollTo(0, 0);
    }
  
    render () {

        var i = -1;
        var j = -1;
        const events = this.state.events.map((event) => {
          i = i + 1; 
          if(i%2 === 0) {       
          return(
            <Fade up>
              <div className="row">
                <Card className="root">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <Cards event={event} />
                    <div className="col-md-1"></div>
                    <Image index={i} images={this.state.images} />
                  </div>
                </Card>
              </div>
            </Fade>
            )
          }
          else {
            return(
              <Fade up>
                <div className="row">
                  <Card className="root">
                    <div className="row">
                      <Image index={i} images={this.state.images} />
                      <div className="col-md-1"></div>
                      <Cards event={event} />
                      <div className="col-md-1"></div>
                    </div>
                  </Card>
                </div>
              </Fade>
              )
          }
        });

        const events2 = this.state.events.map((event) => {
          j = j + 1; 
          return(
            <Fade up>
              <div className="row">
                <Card className="root">
                  <div className="row">
                    <Image index={j} images={this.state.images} />
                    <div className="col-md-1"></div>
                    <Cards event={event} />
                    <div className="col-md-1"></div>
                  </div>
                </Card>
              </div>
            </Fade>
            )
        })
  
      return(
        <div className="hello">
  
                <div className="banner_background">
                    <div className="banner">
                        <header className="banner_text_area">
                            <h1 className="banner_text_others">Events</h1>
                        </header>
                    </div>
                </div>
  
          <Announcements items={[{name:'Summer Mentorship', description:'Registrations are closed !', link:'/smp'},
                    {name:'Project Expo', description:'View Project Expo 2020 !', link:'/expo'},
                      ]}/>
  
            <div className="events_space">
              <div className="events">
                <div className="container">
                  <div className="row"> 
                    <div className="col-12 col-md-12">
                      <h3 className="events_heading">Events<br></br>
                      <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='250'/></h3>
                    </div>
                  </div>
                  <Hidden smDown>
                    {events}
                  </Hidden>
                  <Hidden mdUp>
                      {events2}
                  </Hidden>
                </div>
              </div>
            </div>
  
      </div>
      )
    }
  }
  
  export default Events;