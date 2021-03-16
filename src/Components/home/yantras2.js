import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import grey from '@material-ui/core/colors/grey';

import ComputerIcon from '@material-ui/icons/Computer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SettingsIcon from '@material-ui/icons/Settings';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/yantras.css';

import Fade from 'react-reveal/Fade';
import { Button, Container } from 'reactstrap';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const link = 'https://nitk.acm.org/media/'

  return (
    
        <div className="home_space3">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-12">
                          <h3 className="heading">Yantras <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                          <hr className="hr"></hr>
                      </div>
                    </div>
                  </div>
            <div className="yantra_main">
            <div className="yantras">
            <Container>
            <AppBar position="static" className="yantra_container">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor={grey[900]}
                    aria-label="scrollable force tabs example"
                    className="yantras2"
                >
                <Tab label="Sanganitra" icon={<ComputerIcon />} {...a11yProps(0)} className="yantra_link"/> 
                <Tab label="Yantrika" icon={<SettingsIcon/>} {...a11yProps(1)} className="yantra_link"/>
                <Tab label="Vidyut" icon={<EmojiObjectsIcon/>} {...a11yProps(2)} className="yantra_link"/>
                <Tab label="Kaaryavarta" icon={<MonetizationOnIcon />} {...a11yProps(3)} className="yantra_link"/>
                <Tab label="Saahithya" icon={<MenuBookIcon />} {...a11yProps(4)} className="yantra_link"/>
                <Tab label="Media and Publicity" icon={<CameraAltIcon />} {...a11yProps(5)} className="yantra_link"/>
                </Tabs> 
            </AppBar>
            </Container>
            <Container className="yantra_container">
            <TabPanel value={value} index={0}>
            <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src={link + "uploads/sigs/sanga.jpg"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Sanganitra</h2>
                          <p className="yantra_content">The computer science interest group is one of the broadest categories
                            of work at NITK ACM with projects in widespread fields including but 
                            not limited to Computer Vision, Software Development, Machine Learning 
                            and Big Data. </p>
                            <Button href={`/sigs/1/`} className="yantra_button">
                              Read More
                            </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Yantrika</h2>
                            <p className="yantra_content">Yantrika is a special interest group of ACM-NITK student chapter dedicated to engineering applications in
                          the field of Mechanical, Civil, Chemical and Material Science. The SIG serves as a platform for those interested
                          in shaping their ideas to reality be it in the area of aerospace engineering, robotics, automobile engineering,
                          bio-chemical engineering, structures and materials </p>
                          <Button href={`/sigs/2/`} className="yantra_button">
                            Read More
                          </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src={link +"uploads/sigs/yantrika.jpeg"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src={link + "uploads/sigs/vidyut.png"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Vidyut</h2>
                          <p className="yantra_content">Vidyut is a special interest group of ACM-NITK Student Chapter interested in the broad area of Electronics
                        Engineering.Dealing with Electrical and Electronics Engineering, the purview of Vidyut ranges from Robotics to
                        Power Electronics to Signal Processing to Machine Learning.</p>
                        <Button href={`/sigs/3/`} className="yantra_button">
                          Read More
                        </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Kaaryavarta</h2>
                            <p className="yantra_content">Kaaryavarta is a special interest group (SIG) of the ACM-NITK Student Chapter. Its members are people who are
                          passionate about business, finance, and marketing. It has a collaboration with a few startups and regularly holds
                          Knnew_owledge Exchange Programs (KEPs) for sharing of information between members. It also serves as a platform for taking 
                          forth new business ideas and out of the box marketing strategies.</p>
                          <Button href={`/sigs/4/`} className="yantra_button">
                            Read More
                          </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src={link + "uploads/sigs/karya.jpg"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <div className="yantra_card2-1">
                    <div className="row">
                      <Fade left>
                        <div className="col-12 col-md-3">
                          <img src={"/uploads/sigs/saahitya.jpg"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                      <div className="col-md-6">
                        <h2 className="yantra_heading2">Saahitya</h2>
                          <p className="yantra_content">Saahitya, the literary Special Interest Group (SIG) under ACM-NITK student chapter, has strived to provide a platform 
                          for the literary-oriented and creative minds within the ACM student community and beyond, with the NITK institute. To this end,
                          Saahithya also aims to acquaint students with the in’s and out’s of college life through Cache, and aims to grow on several 
                          fronts through the subsequent years. </p>
                          <Button href={`/sigs/5/`} className="yantra_button">
                            Read More
                          </Button>
                      </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
            <div className="yantra_card2-2">
                    <div className="row">
                      <Fade left>
                        <div className="col-md-6">
                          <h2 className="yantra_heading2">Media and Publicity</h2>
                            <p className="yantra_content">True to the name, we're a group of media and publicity experts who work towards generating content relevant to the 
                            objectives of the club, represent and reflect the club's activities through its various social media handles, and making
                            sure we stay on top of publicity so as to reach out to the crowd for our various and varied events.</p>
                            <Button href={`/sigs/6/`} className="yantra_button">
                              Read More
                            </Button>
                        </div>
                      </Fade>
                      <div className="col-md-1"></div>
                      <Fade right>
                        <div className="col-12 col-md-3">
                          <img src={"/uploads/sigs/saahitya.jpg"} alt='ex' crop="fill" className="yantra_img2"/>
                        </div>
                      </Fade>
                    </div>
                    </div>
            </TabPanel>
        </Container>
        
    </div>
    </div>
    </div>
  );
}
