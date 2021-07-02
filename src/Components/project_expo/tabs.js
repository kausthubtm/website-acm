import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import '../../Shared/CSS/Expo_main.css';
import '../../Shared/CSS/main.css';

/* imports for cards */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

/* styles for cards */
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
          transform: 'scale(1.1)',
      },
      boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
    },
    space: {
      paddingTop: '10.25%',
    },
  }); 

function MediaCard1({sig}) {
    const classes = useStyles(); 

    const link = 'https://nitk.acm.org/media/' ;
    const year = 2020;

    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
          </CardActionArea>
        </Link>
      </Card>
    </div>
    );
}

function MediaCard2({sig}) {
    const classes = useStyles(); 

    const link = 'https://nitk.acm.org/media/' ;
    const year = 2019;

    return (
    <div className={classes.space}>    
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
          </CardActionArea>
        </Link>
      </Card>
    </div>
    );
}




const Tab = (props) => {

  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const sigs1 = props.sigs.map((sig) => {
    if(sig.image && sig.id < 5) {
      return (
          <div key={sig.id} className="col-md-3">
              <MediaCard1 sig={sig} />
          </div>
      );
    }
    else return(<div></div>)
  });

  const sigs2 = props.sigs.map((sig) => {
    if(sig.image && sig.id < 5) {
      return (
          <div key={sig.id} className="col-md-3">
              <MediaCard2 sig={sig} />
          </div>
      );
    }
    else return(<div></div>)
  });

  return (
    <div> <br></br>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           <div className="tab_year"> EXPO - 2021 </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           <div className="tab_year">EXPO - 2020 </div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <Row>
                <br></br>
                PROJECT EXPO 2020 - 2021
            </Row>
          <Row>
            {sigs1}
          </Row>
        </TabPane>
        <TabPane tabId="2">
            <Row>
            <br></br>
            PROJECT EXPO 2019 - 2020
            </Row>
          <Row>
            {sigs2}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tab;