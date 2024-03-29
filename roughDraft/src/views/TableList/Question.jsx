import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from '@material-ui/core/Button';
import { bgcolor } from "@material-ui/system";
import imagine2 from "assets/img/check.jpg";
import imagine3 from "assets/img/x.jpg";
import { Link } from 'react-router-dom';
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state={
      correct: false,
      bgColor: "blue",
      id: null,
      attempt: true,
      outpt: ""
    };
  }
  checkAnswer(t,a){
    console.log(this.state.attempt);
    if (!this.state.attempt){return;}
    if (t == a) {
      this.setState({
        correct: true,
        bgColor: "#bbf2d0",
        id: t,
        output: "CORRECT",
        attempt: false
      });
        this.props.action();
    } else {
      this.setState({
        attempt: false,
        output: "INCORRECT",
        bgColor: "#edb2b2",
        id: t
      });
      }
  }
  render(){
  return (
        <Card>
          <CardHeader color="primary">
          <h4 className={this.props.classes.cardTitleWhite}>
            {this.props.question[0]}
          </h4>
          </CardHeader>
          <CardBody>
        
          { this.props.question[1]
          .map(t => 
            <div>
              <br/>
              <div style={{display: "inline-block"}}>
            <Button style={{backgroundColor: (this.state.id== t && !this.state.attempt) ?
            this.state.bgColor: "white"}} value={t} onClick={() => this.checkAnswer(t, this.props.question[2])}>{t}</Button>

                 <img style={{visibility: (this.state.id== t && this.state.correct) ?
                "": "hidden"}} src={imagine2} width='10' height='10'alt="Check"></img>
                 <img style={{visibility: (this.state.id== t && !this.state.correct) ?
                "": "hidden"}} src={imagine3} width='20' height='20'alt="Check"></img>
                
            </div>
            <br/>
            </div>)}
        
          </CardBody>
        </Card>
  );
}
}
Question.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Question);
