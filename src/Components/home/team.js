import React from 'react';
import '../../Shared/CSS/home2.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function People ({person}) {

    return(
      <div className="col-12 col-md-3">
        <div className="img_container">
          <img alt="..."  src= {'/uploads/' + person.image_path } className="img" width="200" height="200" ></img>
          <div className="img_overlay">
            <div className="img_links">
              <a href={person.fb_link} className="img_icon"><FacebookIcon style={{ fontSize: 40 }} /></a>
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
                            <h3 className="heading">Our team <DoubleArrowIcon style={{ fontSize: 30 }} className="heading_icon"/></h3>
                        </div>
                    </div>
                    <hr className="hr"></hr>
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