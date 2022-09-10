import React, {Component} from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/main.css'
import '../../Shared/CSS/flipbook.css'
// import pdfURL from '../../Shared/magazineFinal.pdf'

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
                <iframe width="100%" height="1000px" src="https://nitk.acm.org/flipbook/magazine.html"  seamless="seamless" scrolling="no" frameborder="0" allowfullscreen="true" ></iframe>
                {/* <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tiqtywspma" width="100%" height="1000px" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe> */}
                {/* <iframe src='https://simplebooklet.com/embed.php?wpKey=1xVRshrfvozHEzQ5AHN8bY&source=embed' allowfullscreen width='100%' height='1000px' scrolling='no'></iframe>
                <iframe src={pdfURL} title="description" allowfullscreen="true" width="100%" height="1000px"></iframe> */}
                </div>

            </div>
        )
    }
}

export default saahithyaMagazine;
