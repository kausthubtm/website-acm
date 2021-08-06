import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/team.css'

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function People ({person}) {

  const link = 'https://nitk.acm.org/staticfiles/';

    return(
      <div className="col-12 col-md-4">
        <div className="img_container">
          <img alt="..."  src= {link + person.image_path } className="img" width="200" height="200" ></img>
          <div className="img_overlay">
            <div className="img_links">
              <a href={person.fb_link} className="img_icon"><EmailIcon style={{ fontSize: 40 }} /></a>
              <a href={person.linkedin_link} className="img_icon"><LinkedInIcon style={{ fontSize: 40 }} /></a>
            </div>
          </div>
          <div className="img_name">{person.name}</div>
          <div className="img_position">{person.post}</div>
        </div>
      </div>
  
    )
  }


function Team (props) {  
    
    const people = props.people.map((person) => {
        if(person.image_path) {
          return (
            <People person={person}/>
          );
        }
        else return(<div></div>)
    });

    return(
        <div>
                {/* Team area */}
                <div className="home_space2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h3 className="team_heading">Our team<br></br>
                            <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='250'/></h3>
                        </div>
                    </div>
                </div>
                <div className="people">
                    <div className="row">
                        {people}
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Team;