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
import Question from './Question';
var score=0;
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

class TableList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      score: 0,
      
    }
    this.addScore=this.addScore.bind(this)
  }
  
  addScore(){
    this.setState(state=>({
      score: state.score+1
    }));
    console.log(this.state.score)
}
render(){
  return (
    <div>
        <Card>
          <CardHeader color="primary">
            <h4 className={this.props.classes.cardTitleWhite}>{this.props.location.state.title}</h4>
            <p className={this.props.classes.cardCategoryWhite}>
            </p>
            
          </CardHeader>
          <CardBody>
          { this.props.location.state.questions
          .map(t => 
            <div>
              <Question action={this.addScore} question={t}/>
            
            </div>)}
          </CardBody>
        </Card>
        <Card>
        
          <CardHeader color="primary">
            <h4 className={this.props.classes.cardTitleWhite}>Your score on {this.props.location.state.title}: {this.state.score/5*100} % </h4>
            <p className={this.props.classes.cardCategoryWhite}>
            </p>
            
          </CardHeader>
          </Card>
        </div>
  );
}
}
// TableList.propTypes = {
//   classes: PropTypes.object
// };

export default withStyles(styles)(TableList);
