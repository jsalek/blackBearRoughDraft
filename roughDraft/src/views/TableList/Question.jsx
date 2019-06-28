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
      bgcolor: "blue",
      id: null,
      changecol: false
    }
  }
  checkAnswer(t,a){
      if(t==a){
        console.log("correct");
        
        this.setState({correct:true, bgcolor:"green", id: t});
        
      }
  }
  render(){
  
  const title="Macro Economics Class"
  const questions = [["question 1", "a", "b", "c", "d", "a"],["question 2", "a", "b", "c", "d", "b"]]
  
  

  return (
        <Card>
          <CardHeader color="primary">
            <h4 className={this.props.classes.cardTitleWhite}>{this.props.question[0]}</h4>
            <p className={this.props.classes.cardCategoryWhite}>
              {this.props.question}
            </p>
            
          </CardHeader>
          <CardBody>
          { this.props.question[1]
          .map(t => 
            <div>
              <br/>
            <Button style={{backgroundColor: (this.state.correct && this.state.id== t) ?
            "green": "#00ACC0"}} value={t} onClick={() => this.checkAnswer(t, this.props.question[2])}>{t}</Button>
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
