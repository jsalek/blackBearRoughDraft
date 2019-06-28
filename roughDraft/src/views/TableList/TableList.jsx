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

function TableList(props) {
  const { classes } = props;
  const title="Macro Economics Class"

  const question=["question", ['answer1', 'answer2', 'answer3'], "answer1"]
  const questions=[["question", ['answer1', 'answer2', 'answer3'], "answer1"],["question", ['answer1', 'answer2', 'answer3'], "answer2"]]
  return (
    <div>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>{title}</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
              
            </p>
            
          </CardHeader>
          <CardBody>
          {questions
          .map(t => 
            <div>
              <Question question={t}/>
            
            </div>)}
          </CardBody>
        </Card>
        <Question question={question}/>
        </div>
  );
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
