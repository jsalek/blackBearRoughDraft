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
    if (t == a && this.state.attempt) {
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
            
            <h4 className={this.props.classes.cardTitleWhite}>{this.props.question[0]}</h4>

            {/* <p className={this.props.classes.cardCategoryWhite}>
              {this.props.question}
            </p> */}
            
          </CardHeader>
          <CardBody>
        
          { this.props.question[1]
          .map(t => 
            <div>
              <br/>
              <div style={{display: "inline-block"}}>
            <Button style={{backgroundColor: (this.state.id== t) ?
            this.state.bgColor: "white"}} value={t} onClick={() => this.checkAnswer(t, this.props.question[2])}>{t}</Button>
            {/* <h4>{this.state.output}</h4> */}
                <img style={{display: (this.state.id== t && this.state.correct) ?
                "block": "none"}}
                src="TableList/check.jpg" alt="Check"></img>
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
