import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import { Container, Row } from 'reactstrap';
import '../../Shared/CSS/events.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

class RenderCard extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
     
      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

            <div onClick={this.handleClick} className="event_card_front">
                <Card>
                  <CardActionArea>
                    <img src='/uploads/sigs/sanga.jpg' alt='ex' height="250" width="100%" crop="fill" />
                  </CardActionArea>
                </Card>
            </div>
     
            <div onClick={this.handleClick} className="event_card_back">
              {this.props.event.name}
              {this.props.event.description}
            </div>

          </ReactCardFlip>
        )
      }
}


class Event_card extends Component {
    render() {

        const events = this.props.events.map((event) => {
            if(event.name) {
              return (
                  <div className="col-md-4">
                    <RenderCard event={event} />
                   </div>
              );
            }
            else return(<div></div>)
        });

      return (
        <div className="event_container">
            <Container>
                <Row>
                    {events}
                </Row>
            </Container>
        </div>
      )
    }
}

export default Event_card;