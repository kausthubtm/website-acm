import React, {Component} from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

import Announcements from './Announcements'
import About from './about_acm'
import TabPanel from './yantras2';
import Numbers from './numbers'
import Latest from './latest'
import Team from './team'
import Footer from '../footer';

import Hidden from '@material-ui/core/Hidden';

class Home extends Component{

    state = { 
        events : [],
        people :[],
        sigs : [], 
    } 

  
    componentDidMount() { 
        axios.get('http://127.0.0.1:8000/') 
        .then(res => {  
            this.setState({ sigs : res.data.sigo, events : res.data.events, people : res.data.special_people }); 
        }) 
    }
  
    render () {

        return(
           <div className="hello">
               <div className="blah">

                <Hidden smDown>
                    <section className="banner_home"></section>
                </Hidden>
                <Hidden mdUp>
                    <section className="banner">
                        <div className="banner-text1">Association for Computing Machinery</div>
                        <div className="home_banner-text2">Advancing Computing as a Science & Profession</div>
                    </section>
                </Hidden>
                

                  
                  <Announcements />
                  <About /> 
                  <Latest />
                  <TabPanel />
                  <Numbers />
                  <Team people={this.state.people} />
                  <Footer />

            </div>
        </div>
        )
    }
}

export default Home;