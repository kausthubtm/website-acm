import React from 'react';
import '../../Shared/CSS/home2.css'
import '../../Shared/CSS/main.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

function Announcements() {
    return(
    <CardGroup className="announcement_main">        
      <Card className="announce_card_1">
        <CardBody>
          <CardTitle className="announce_card_heading">Project Expo <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <CardText className="announce_card_text">View the project expo !</CardText>
        </CardBody>
      </Card>
      <Card className="announce_card_2">
        <CardBody>
          <CardTitle className="announce_card_heading">Project Proposals <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <CardText className="announce_card_text">View the project proposals !</CardText>
        </CardBody>
      </Card>
      <Card className="announce_card_3">
        <CardBody>
          <CardTitle className="announce_card_heading">Potential New Recruits <DoubleArrowIcon style={{ fontSize: 20 }} className="heading_icon"/></CardTitle>
          <CardText className="announce_card_text">Register now !</CardText>
        </CardBody>
      </Card>
    </CardGroup>
    );
}

export default Announcements;