import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../../Shared/CSS/yantras.css'
import Hidden from '@material-ui/core/Hidden';

function Image ({path}) {
  const link = 'https://nitk.acm.org/media/';
    return(
      <div className="col-md-4">
        <img src={link + path} alt="ACM logo" className="event_pic"/>
      </div>
    )
  }

function Cards ({event}) {
    if(event.name) {
      return (
        <div className="col-12 col-md-6">
          <CardContent className="content">
            <div className="event_name">
              {event.name}
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

const Events = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.events.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.events.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.events.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        className="carousel"
      >
    <div>

        <div className="row">
          <Image path={props.image}/>
          <Cards event={item}/>
        </div>

    </div>
      </CarouselItem>
    );
  });

  const slides2 = props.events.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        className="carousel2"
      >
    <div>

        <div className="row">
          <Image path={props.image}/>
          <Cards event={item}/>
        </div>

    </div>
      </CarouselItem>
    );
  });

  return (
    <div className="yantra_events_div">
      <Hidden smDown>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={props.events} activeIndex={activeIndex} onClickHandler={goToIndex} className="carousel_indicators"/>       
            {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Hidden>

      <Hidden mdUp>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={props.events} activeIndex={activeIndex} onClickHandler={goToIndex} className="carousel_indicators"/>       
              {slides2}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      </Hidden>

    </div>
    
    
  );
}

export default Events;