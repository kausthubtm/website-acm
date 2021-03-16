import React, {Component} from 'react';
import axios from 'axios'; 
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/yantras.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Announcements from '../shared/Announcements'

class Yantra extends Component {
    constructor(props){
      super(props);
      console.log(props);
      this.state = {sigo:{}, sig:{}, events:[], data:{}};
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/' + this.props.sigId) 
      .then(res => {  
        this.setState(res.data);
        console.log(res.data);
      }) 
      window.scrollTo(0, 0);
    }

    render(){
      return (
        <div>
          {/* banner area */}
          <div className="banner_background">
            <div className="banner">
              <header className="banner_text_area">
                <h1 className="banner_text1">{this.state.sig.name}</h1>
                <p className="banner_text2">{this.state.data.sub_head}</p>
              </header>
            </div>
          </div>

          <Announcements items={[{name:'Project Expo', description:'View the project expo !', link:'/expo/'+this.state.sig.id},
                    {name:'Project Proposals', description:'View the project proposals !', link:'/all_proposals/' + this.state.sig.id},
                    ]}/>

          {/* sigs display area */}
          <div className="sig_space">
            <div className="container">
              <div className="row"> 
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
                  <h6 className="sig_description">{this.state.data.description}</h6> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    };
}

export default Yantra;
