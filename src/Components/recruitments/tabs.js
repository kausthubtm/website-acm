
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
  const year = 2020;

  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const form_links = ['https://docs.google.com/forms/d/e/1FAIpQLSfHh_H2rHym8t1-hmg5kAfr_6SWNVqealofuQs0MWMDqNBKhw/viewform','https://docs.google.com/forms/d/e/1FAIpQLSckKmutJdeYuXSkuKoMlJaY7DnM8o76wkklkl6CnO5pTqElFw/viewform' ,'https://docs.google.com/forms/d/e/1FAIpQLSfwGVsRGxz6v0XYrQH1OIIkHwxvtXKxQ_te0GdQQCwiwx12CQ/viewform' , 'https://docs.google.com/forms/d/e/1FAIpQLSf3BrCqN705eIzB6Of_bMWRC_f5TrmdQo06ke_GoIXH_Ofvag/viewform?usp=sf_link','https://docs.google.com/forms/d/e/1FAIpQLSdcK7NO-QYn-DDyuP4IyEpjocKuTJ6lggkmtcRFlx5j_YBoyg/viewform','https://docs.google.com/forms/d/e/1FAIpQLSfPt6MV5yO9MHkcI2Igo9wz80Z4Ny44EvrggDAg_I_DmCUf0Q/viewform']
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