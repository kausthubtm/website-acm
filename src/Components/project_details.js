import React, {Component} from 'react';
import '../Shared/CSS/project_details.css';
import '../Shared/CSS/main.css'
import axios from 'axios'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Table } from 'reactstrap';
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    transition: '0.2s',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    border: '1px solid black'
  },
  space: {
    paddingTop: '10.25%',
  },
}); 



function MediaCard({pic}) {
  const classes = useStyles();   

  return (
  <div className={classes.space}>    
    <Card className={classes.root}>
      <CardActionArea>
        <img src={'/' + pic.picture} alt={pic.title} height="340" width="100%" crop="fill" />
      </CardActionArea>
    </Card>
  </div>
  );
}


function Check1({info, name}) {
  if(info) {
    return(
      <div>
        <h2 className="space">
          <Hidden xsDown>
            <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> {name} <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
          </Hidden>
          <Hidden smUp>
            <h2 className="heading ">{name}</h2>
          </Hidden>
        </h2>
        <hr></hr>
        {info}
      </div>
    );
  }
  else return (<div></div>)
}

function Check2({info, name}) {
  if(info) {
    return(
      <tr>
        <th scope="row">{name}</th>
        <td>{info}</td>
      </tr>
    );
  }
  else return (<div></div>)
}

class Details extends Component {

  state = { 
    details : [], 
    pics : [],
  }


  componentDidMount() { 
    axios.get('http://127.0.0.1:8000/project/' + this.props.projectId) 
    .then(res => {  
      this.setState({ details : res.data.project }); 
      this.setState({ pics : res.data.pictures }); 
    }) 
  }

  render () {

    const pictures = this.state.pics.map((pic) => {
        return (
            <div key={pic.id} className="col-md-4">
                <MediaCard pic={pic} />
            </div>
        );
      }); 
  
    return(
      <div>

          <section className="banner">
            <div className="banner-text1">{this.state.details.name}</div>
          </section>

          <div className="container">

          <div className="space"></div>
          <div className="row">
              <div className="col-12 col-md-7">
                <Hidden xsDown>
                  <h2><img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> Team <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/></h2>
                </Hidden>
                <Hidden smUp>
                  <h2 className="heading ">Team</h2>
                </Hidden>
                <hr></hr>
                <Table striped>
                  <tbody>

                    <Check2 info={this.state.details.mentors} name='Mentors' />

                    <Check2 info={this.state.details.members} name='Members' />
                    
                    <tr>
                      <th scope="row">Duration</th>
                      <td>{this.state.details.duration_in_months} months</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </div>

              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-4">
              <Card>
                <CardActionArea>
                  <img src={'/' + this.state.details.display_picture} alt='ex' height="250" width="100%" crop="fill" />
                </CardActionArea>
              </Card>

              </div>

            </div> 


            <div className="row">
              <div className="col-12 col-md-12">
                <h2 className="space">
                  <Hidden xsDown>
                  <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> Description <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
                  </Hidden>
                  <Hidden smUp>
                    <h2 className="heading "> Description </h2>
                  </Hidden>
                  </h2><hr></hr>
                {this.state.details.introduction}
                <br></br><br></br>
              </div>
            </div> 

            <h2 className="space">
              <Hidden xsDown>
                <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> Method <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
              </Hidden>
              <Hidden smUp>
                  <h2 className="heading ">Method</h2>
                </Hidden>
            </h2>
            <hr></hr>
            {this.state.details.method}

            <Check1 info={this.state.details.results} name='Results' />

            <Check1 info={this.state.details.obstacles} name='Obstacles' />
            
            <Check1 info={this.state.details.conclusion} name='Conclusion' />

            <Check1 info={this.state.details.references} name='References' />

            <h2 className="space">
              <Hidden xsDown>
                <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/> Pictures <img src="/uploads/sigs/background.png" alt='acm logo' height='40' width='100'/>
              </Hidden>
              <Hidden smUp>
                  <h2 className="heading "> Pictures </h2>
                </Hidden>
            </h2><hr></hr>
            <div className="row">
                {pictures}
            </div>
          </div>
          <div className="space"></div>
        <div className="wave"></div>
      </div>
    )
  }
}

export default Details;