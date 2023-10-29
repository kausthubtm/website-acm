
import React, { useState } from 'react';
import { TabContent, TabPane, Row } from 'reactstrap';
import '../../Shared/CSS/Expo_main.css';
import '../../Shared/CSS/main.css';

/* imports for cards */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

/* styles for cards */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    boxShadow: 'rgb(0, 113, 161) 0px 1px 6px',
  },
  space: {
    paddingTop: '10.25%',
  },
});

// function MediaCard1({ sig }) {
//   const classes = useStyles();

//   const link = 'https://nitk.acm.org/media/';
//   const year = 2020;

//   return (
//     <div className={classes.space}>
//       <Card className={classes.root}>
//         <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: 'none' }}>
//           <CardActionArea>
//             <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
//           </CardActionArea>
//         </Link>
//       </Card>
//     </div>
//   );
// }

// function MediaCard2({ sig }) {
//   const classes = useStyles();

//   const link = 'https://nitk.acm.org/media/';
//   const year = 2019;

//   return (
//     <div className={classes.space}>
//       <Card className={classes.root}>
//         <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: 'none' }}>
//           <CardActionArea>
//             <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
//           </CardActionArea>
//         </Link>
//       </Card>
//     </div>
//   );
// }




const Tab = (props) => {
  const link = 'https://nitk.acm.org/media/';
  const year = 2023;

  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const form_links = ['https://forms.gle/1K18cQFjqi3SibFm7', 'https://forms.gle/iZFgaFSfK7g9gUEY6', 'https://forms.gle/P6jjzq64dtvjR7pj7', 'https://forms.gle/3KQLrcXgNDxQZc4c9', 'https://forms.gle/CyHjr2xiByEZN4dV9', 'https://forms.gle/gvcQaM42atcoqYPa6']
  const form_redirect = (id) =>{
    console.log(id)
    window.location.href=form_links[(id-1)]
  }
  const sigs1 = props.sigs.map((sig) => {
    if (sig.image) {
      return (
        <div key={sig.id} className="col-md-3">
          <div className={classes.space}>
            <Card className={classes.root} onClick={(()=>form_redirect(sig.id))}>
              
                <CardActionArea>
                  <img src={link + sig.image} alt={sig.name} height="250" width="100%" crop="fill" />
                </CardActionArea>
              
            </Card>
          </div>
        </div>
      );
    }
    else return (<div></div>)
  });


  return (
    <div> <br></br>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            {/* <h4 className="expo_year">PROJECT EXPO 2021</h4> */}
          </Row>
          <Row>
            {sigs1}
          </Row>
        </TabPane>

      </TabContent>
    </div>
  );
}

export default Tab;