import React, {Component} from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'
import axios from 'axios'; 

import Announcements from '../shared/Announcements'
import About from './about_acm'
import TabPanel from './yantras2';
//import Yantras from './yantras'
import Numbers from './numbers'
import Initiatives from './initiatives'
import Latest from './latest'
import Team from './team'

class Home extends Component{

    state = { 
        events : [],
        people :[],
        sigs : [], 
    } 

  
    async componentDidMount() { 
        const {REACT_APP_URL} = process.env;
        try{
            const res = await axios.get(`${REACT_APP_URL}`) 
            this.setState({ sigs : res.data.sigo, events : res.data.events, people : res.data.special_people });  
            window.scrollTo(0, 0);
        }
        catch(error) {
            console.log(error);
          }
    }
  
    render () {

        return(
           <div>
                <div className="banner_background">
                    <div className="banner">
                        <header className="banner_text_area">
                            <h1 className="banner_text1">Association for Computing Machinery</h1>
                            <p className="banner_text2">Advancing Computing as a Science & Profession</p>
                        </header>
                    </div>
                </div>
                  
                  <Announcements items={[
                    {name:'Project Expo 2022', description:'View Projects !', link:'/expo'},
                    {name:'Innovision 2022 ', description:'Register Now !', link:'/innovision'},
                    {name:'Project Proposals', description:'View Project Proposals !', link:'/proposal'},
                    ]}/>
                  <About /> 
                  <TabPanel />
                  <Initiatives /> 
                  {/*<Yantras />*/}
                  <Numbers />
                  <Latest />
                  <Team people={this.state.people} />

            </div>
        )
    }
}

export default Home;