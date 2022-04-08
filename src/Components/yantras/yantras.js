import React, {Component} from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/yantras.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Announcements from '../shared/Announcements'
import Events from './events'

class Yantra extends Component {
    constructor(props){
      super(props);
      this.state = {sigo:{}, sig:{}, events:[], data:{}};
    }

    async componentDidMount(){
      const {REACT_APP_URL} = process.env;
      try {
        const res = await axios.get(`${REACT_APP_URL}${this.props.sigId}/`)   
        console.log()
        this.setState(res.data); 
        window.scrollTo(0, 0);
      }
      catch(error) {
        console.log(error);
      }
    }

    render(){

      return (
        <div>
          {/* banner area */}
          <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text_others">{this.state.sig.name}</h1>
                <p className="banner_text2">{this.state.data.sub_head}</p>
              </header>
            </div>
          </div>

          <Announcements items={[
                    {name:'Project Expo 2022', description:'View Projects !', link:'/expo'},
                    {name:'Innovision 2022 ', description:'Register Now !', link:'/innovision'},
                    {name:'Project Proposals', description:'View Project Proposals !', link:'/proposal'},
                    ]}/>

          {/* sigs display area */}
          <div className="sig_space">
            <div className="container">
              <div className="row"> 
                {/* <MediaCard sig={this.state.sig} /> */}
                <div className="col-12 col-md-12">
                  <h3 className="heading">What is {this.state.sig.name}? <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                  <h6 className="sig_description">{this.state.data.description}</h6> 
                </div>
                <div className="col-12 col-md-12">
                  <h3 className="heading">What do we do at {this.state.sig.name}? <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                  <h6 className="sig_description">{this.state.data.long_desc}</h6> 
                </div>
                <div className="col-12 col-md-12">
                  <h3 className="heading">Our Vision <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                  <h6 className="sig_description">{this.state.sig.vision_statement}</h6> 
                </div>
                <div className="col-12 col-md-12">
                  <h3 className="heading">Our Mission <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                  <h6 className="sig_description">{this.state.sig.mission_statement}</h6> 
                </div>
                <div className="col-12 col-md-12">
                  <h3 className="heading">Events<DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3> 
                  <hr className="hr"></hr>
                  <Events events={this.state.events}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    };
}

export default Yantra;
