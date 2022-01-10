
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


const Tab = (props) => {

  const classes = useStyles();
  const [activeTab] = useState('1');
  const form_links = ['https://forms.gle/JT9qrH7wAvUNSwGn9','https://forms.gle/55pQbXUz7gZYrFb18' ,'https://forms.gle/7bF6ktSdPmvoefsF9' , 'https://forms.gle/JgZhGAv1JovxPoi86','https://forms.gle/yUX2i6zbcMGudpUu8','https://forms.gle/wphMDPkPBfx8hNCE6']
  const img_links = ['https://nitk.acm.org/media/uploads/events/cryptic.png','https://nitk.acm.org/media/uploads/events/jugaad.png','https://nitk.acm.org/media/uploads/events/hardwired.png','https://nitk.acm.org/media/uploads/events/strategy_b.png', 'https://nitk.acm.org/media/uploads/events/literati.png', 'https://nitk.acm.org/media/uploads/events/what_if.png']
  const form_redirect = (id) =>{
    // console.log(id)
    window.location.href=form_links[(id-1)]
  }
  const sigs1 = props.sigs.map((sig) => {
    if (sig.image) {
      return (
        <div key={sig.id} className="col-md-3">
          <div className={classes.space}>
            <Card className={classes.root} onClick={(()=>form_redirect(sig.id))}>
              
                <CardActionArea>
                  <img src={img_links[(sig.id-1)]} alt={sig.name} height="250" width="100%" crop="fill" />
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