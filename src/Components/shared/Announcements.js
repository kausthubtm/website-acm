import React from 'react';
import '../../Shared/CSS/home2.css'
import '../../Shared/CSS/main.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import { Badge } from 'reactstrap';
import Hidden from '@material-ui/core/Hidden';

function Announcements({items}) {

  var lastitem = items[items.length - 1];

  const card = items.map((item) => {
    if(item.name === 'View Saahitya Magazine !'){
      return (
        <Card className="announce_card">
          <CardBody>
          <Link to={item.link}><CardTitle className="announce_card_heading">{item.name}<DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/><Badge color="danger" pill className="chip">New !</Badge></CardTitle></Link>
            <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
          </CardBody>
        </Card>
        );
    }
    else if(item.name === lastitem.name) {
      return (
        <Card className="announce_card2">
        <CardBody>
          <CardTitle className="announce_card_heading">{item.name} <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
        </CardBody>
      </Card>
      );
    }
    else return(
        <Card className="announce_card">
          <CardBody>
            <CardTitle className="announce_card_heading">{item.name} <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
            <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
          </CardBody>
        </Card>
      )
  });

  const card2 = items.map((item) => {
      return (
        <Card className="announce_card2">
        <CardBody>
          <CardTitle className="announce_card_heading">{item.name} <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <Link to={item.link}><CardText className="announce_card_text">{item.description}</CardText></Link>
        </CardBody>
      </Card>
      );
    }
  );

  return(
    <>
      <Hidden smDown>
        <CardGroup>    
          {card}
        </CardGroup>
      </Hidden>
      <Hidden mdUp>
        <CardGroup>    
          {card2}
        </CardGroup>
      </Hidden>
      
    </>
  );
}

export default Announcements;
