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
        try{
            const res = await axios.get('http://127.0.0.1:8000/') 
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
                  
                  <Announcements items={[{name:'Summer Mentorship', description:'Register for courses now !', link:'/smp'},
                    {name:'Project Expo', description:'View the project expo !', link:'/expo'},
                    {name:'Project Proposals', description:'View the project proposals !', link:'/proposal'},
                    ]}/>
                  <About /> 
                  <Numbers />
                  <Initiatives /> 
                  {/*<Yantras />*/}
                  <TabPanel />
                  <Latest />
                  <Team people={this.state.people} />

            </div>
        )
    }
}

export default Home;