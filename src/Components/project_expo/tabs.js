import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import "../../Shared/CSS/Expo_main.css";
import "../../Shared/CSS/main.css";

/* imports for cards */
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

/* styles for cards */
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    boxShadow: "rgb(0, 113, 161) 0px 1px 6px",
  },
  space: {
    paddingTop: "10.25%",
  },
});

function MediaCard1({ sig }) {
  const classes = useStyles();

  const link = "https://nitk.acm.org/media/";
  const year = 2021;

  return (
    <div className={classes.space}>
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <img
              src={link + sig.image}
              alt={sig.name}
              height="250"
              width="100%"
              crop="fill"
            />
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

function MediaCard2({ sig }) {
  const classes = useStyles();

  const link = "https://nitk.acm.org/media/";
  const year = 2020;

  return (
    <div className={classes.space}>
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <img
              src={link + sig.image}
              alt={sig.name}
              height="250"
              width="100%"
              crop="fill"
            />
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

function MediaCard3({ sig }) {
  const classes = useStyles();

  const link = "https://nitk.acm.org/media/";
  const year = 2019;

  return (
    <div className={classes.space}>
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <img
              src={link + sig.image}
              alt={sig.name}
              height="250"
              width="100%"
              crop="fill"
            />
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

function MediaCard4({ sig }) {
  const classes = useStyles();

  const link = "https://nitk.acm.org/media/";
  const year = 2022;

  return (
    <div className={classes.space}>
      <Card className={classes.root}>
        <Link to={`/expo/${year}/${sig.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <img
              src={link + sig.image}
              alt={sig.name}
              height="250"
              width="100%"
              crop="fill"
            />
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const sigs1 = props.sigs.map((sig) => {
    if (sig.image && sig.id < 5) {
      return (
        <div key={sig.id} className="col-md-3">
          <MediaCard1 sig={sig} />
        </div>
      );
    } else return <div></div>;
  });

  const sigs2 = props.sigs.map((sig) => {
    if (sig.image && sig.id < 5) {
      return (
        <div key={sig.id} className="col-md-3">
          <MediaCard2 sig={sig} />
        </div>
      );
    } else return <div></div>;
  });

  const sigs3 = props.sigs.map((sig) => {
    if (sig.image && sig.id < 5) {
      return (
        <div key={sig.id} className="col-md-3">
          <MediaCard3 sig={sig} />
        </div>
      );
    } else return <div></div>;
  });

  const sigs4 = props.sigs.map((sig) => {
    if (sig.image && sig.id < 5) {
      return (
        <div key={sig.id} className="col-md-3">
          <MediaCard4 sig={sig} />
        </div>
      );
    } else return <div></div>;
  });

  return (
    <div>
      {" "}
      <br></br>
      <Nav tabs>
      <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <div className="tab_year">EXPO - 2023 </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <div className="tab_year">EXPO - 2022 </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <div className="tab_year"> EXPO - 2021 </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            <div className="tab_year">EXPO - 2020 </div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
          <Row>
            <h4 className="expo_year">PROJECT EXPO 2023</h4>
          </Row>
          <Row>{sigs4}</Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <h4 className="expo_year">PROJECT EXPO 2022</h4>
          </Row>
          <Row>{sigs1}</Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <h4 className="expo_year">PROJECT EXPO 2021</h4>
          </Row>
          <Row>{sigs2}</Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <br></br>
            <h4 className="expo_year">PROJECT EXPO 2020</h4>
          </Row>
          <Row>{sigs3}</Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tab;
