import React, { Component } from 'react';
import '../Shared/CSS/footer.css'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinDropIcon from '@material-ui/icons/PinDrop';
import MailIcon from '@material-ui/icons/Mail';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';


class Footer extends Component {

    state = { 
        temp : [],
        description :[],
        coordi : [], 
      } 
    
    componentDidMount() { 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=13.009231&lon=74.793667&appid=c01ee5e179895cfad1e85c0ce493adbb`) 
        .then(res => {  
            this.setState({ temp : res.data.main, description : res.data.weather[0].description, coordi : res.data.coord }); 
        }) 
    }

    render() {

    return(
        <div>
        <div className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-4">
                        <div className="footer_heading"> <img src="/uploads/sigs/logo.png" height="55" width="55" alt="ACM logo" className="footer_logo" /> ACM @ NITK</div>
                        <div className="footer_text">
                        We are a bunch of enthusiatic students who aim at uniting the computing fraternity at NITK
                        under one tag and allows the students to learn together and share their knowledge to cater the interests
                        of the individuals as well as the institute as a whole. We organize a plethora of events which cover 
                        most of the fields of engineering like KEP's, guest lectures, workshops, coding 
                        contests etc. which give the students an exposure to the computing world as well as allow them to 
                        understand the progress going on in the computing sphere worldwide.
                        </div>
                        <div className="footer_heading">Connect</div>
                        <div className="footer_text2">
                            <a href='https://www.facebook.com/nitkacm/' ><FacebookIcon style={{ fontSize: 30 }} className="footer_first_icon" /></a>
                            <a href='https://www.linkedin.com/company/acm-nitk/?originalSubdomain=in' ><LinkedInIcon style={{ fontSize: 30 }} className="footer_icon" /></a>
                            <a href='https://www.instagram.com/acmnitk/?hl=en' ><InstagramIcon style={{ fontSize: 30 }} className="footer_icon" /></a>
                            <a href='https://github.com/ACM-NITK'><GitHubIcon style={{ fontSize: 30 }} className="footer_icon" /></a>
                            <a href='https://twitter.com/acmnitk?lang=en'><TwitterIcon style={{ fontSize: 30 }} className="footer_icon" /></a>
                        </div>
                    </div>

                    <div className="col-12 col-md-1"></div>

                    <div className="col-md-2">
                        <div className="footer_heading">Quick Links</div>
                            <div className="footer_text">
                                <div className="footer_link_space"><Link to="/" className="footer_link">Home</Link></div>
                                <div className="footer_link_space"><Link to="/expo" className="footer_link">Project Expo</Link></div>
                                <div className="footer_link_space"><Link to="/trails" className="footer_link">Trails</Link></div>
                                <div className="footer_link_space"><Link to="/events" className="footer_link">Events</Link></div>
                                <div className="footer_link_space"><Link to="/esp" className="footer_link">ESP</Link></div>
                                <div className="footer_link_space"><Link to="/blog" className="footer_link">Blog</Link></div>
                                <div className="footer_link_space"><Link to="/contact" className="footer_link">Contact</Link></div>
                        </div>
                    </div>

                    <div className="col-12 col-md-1"></div>

                    <div className="col-md-4">
                        <div className="footer_heading">Contact Us</div>
                        <div className="footer_text">
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <PinDropIcon style={{ fontSize: 30 }} className="footer_first_icon" /> 
                                </div>
                                <div className="col-md-10">
                                    <p>National Institute of Technology Karnataka, Surathkal</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <MailIcon style={{ fontSize: 25 }} className="footer_first_icon" /> 
                                </div>
                                <div className="col-md-10">
                                    <p>acm@nitk.edu.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer_heading">Weather @ NITK</div>
                            <div className="footer_text">
                                <div className="row">
                                    <div className="col-12 col-md-2">
                                        <WbSunnyIcon  style={{ fontSize: 20 }} className="footer_first_icon" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Feels like :  {this.state.temp.temp -273.15 }°C </p>
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <CloudIcon style={{ fontSize: 20 }} className="footer_first_icon" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p> Weather : {this.state.description } </p>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

            </div> 
        </div>
        <div className="footer_footer">

        </div>
        </div>
    );
}
}

export default Footer;