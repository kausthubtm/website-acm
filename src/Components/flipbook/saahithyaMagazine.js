import React, {Component} from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/flipbook.css'

class saahithyaMagazine extends Component{
    
    render () {

        return(
           <div>
                
                {/* <div>
                    <h2 className="flipbook-heading">Saahitya Magazine</h2>
                </div> */}
                  
                  {/* <Announcements items={[{name:'Summer Mentorship', description:'Register for courses now !', link:'/smp'},
                    {name:'Project Expo', description:'View the project expo !', link:'/expo'},
                    {name:'Project Proposals', description:'View the project proposals !', link:'/proposal'},
                    ]}/> */}
                <div>
                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tiqtywspma" width="100%" height="1000px" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                </div>

            </div>
        )
    }
}

export default saahithyaMagazine;