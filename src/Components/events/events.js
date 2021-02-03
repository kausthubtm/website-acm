import React, {Component} from 'react'
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/events.css'

import Fade from 'react-reveal/Fade';
import Hidden from '@material-ui/core/Hidden';
import axios from 'axios'; 
import EventCard from './event_cards';



class Events extends Component{

    state = { 
        events : [],
    } 


componentDidMount() { 
    axios.get('http://127.0.0.1:8000/') 
    .then(res => {  
        this.setState({ events : res.data.events }); 
    }) 
}


    render() {

        return(
            <div>
                <section className="banner">
                    <div className="banner-text1">Events</div>
                </section>


                <Fade bottom>
                    <div>
                        <Hidden xsDown>
                            <h3 className="heading"><b>
                            <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> EVENTS <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
                            </b></h3>
                        </Hidden>
                        <Hidden smUp>
                            <h3 className="heading">
                                <b>EVENTS</b>
                            </h3>
                        </Hidden>  
                    <hr className="hr"></hr>
                    </div>
                    
                    <EventCard events={this.state.events} />
                </Fade>
            </div>       
        );
    }
}

export default Events;