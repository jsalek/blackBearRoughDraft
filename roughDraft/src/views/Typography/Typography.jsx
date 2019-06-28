import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Link } from 'react-router-dom'

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
  
function TypographyPage(props) {
  const { classes } = props;
  return (
    <div>
      <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Equitites</h4>
        <p className={classes.cardCategoryWhite}>
          Learn about Equities...
        </p>
      </CardHeader>
      <CardBody>
      
        <span className="input-group-btn">
          <Link style={{color:"#00ACC0"}} to={{
          pathname: '/admin/table',
          state: {
            questions: [["1) What are different forms of compensation?", ['a) Base pay, relocation/signing bonus, annual bonus', 'b) Equity compensation', 'c) Financial benefits', 'd) perks', 'e) All of the above']
            , "e) All of the above"],
            ["2) What is equity?", ['a) Value of a share of ownership of the business. Company ownership is divided into shares, and those shares entitle owners to various rights. ',
             'b) Total value of a company’s assets', 'c) Total liabilities of a company'], "a) Value of a share of ownership of the business. Company ownership is divided into shares, and those shares entitle owners to various rights. "],
            ['3) How does holding shares of a private company differ from a public company?', ['a) There is future financing, aka dilution. Your share of the company will decrease as the company issues more shares.', 'b) There is no difference',
          'c) The shares traded from a private company are traded on stock exchanges and has more regulations than a public company.'],'a) There is future financing, aka dilution. Your share of the company will decrease as the company issues more shares.'],
        ["4) What are two common forms of equity compensation?", ['a) annual bonus', 'b) Stock options and restricted stock', 'c) Paid leave'], 'b) Stock options and restricted stock'],
        ['5) What are stock options?', ['a) a "derivative", a security based on another security',
      'b) a fixed income instrument, a loan made by an investor to a borrower', 'c) A broad term for shares in a company that have restriction on their ownership'], 'a) a "derivative", a security based on another security']],
            title: "Equities"
          }
        }}>Get Started</Link>
        </span>
      </CardBody>
    </Card>

    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Macroeconomics</h4>
        <p className={classes.cardCategoryWhite}>
          Learn about Macroeconomics
        </p>
      </CardHeader>
      <CardBody>
      
        <span className="input-group-btn">
          <Link style={{color:"#00ACC0"}} to={{
          pathname: '/admin/table',
          state: {
            questions: [["question", ['answer1', 'answer2', 'answer3'], "answer1"],["question", ['answer1', 'answer2', 'answer3'], "answer2"]],
            title: "Macroeconmics"
          }
        }}>Get Started</Link>
        </span>
      </CardBody>
    </Card>
    <Card>
    <CardHeader color="primary">
      <h4 className={classes.cardTitleWhite}>Personal Finacne</h4>
      <p className={classes.cardCategoryWhite}>
        Learn about Personal Finance
      </p>
    </CardHeader>
    <CardBody>
    
      <span className="input-group-btn">
        <Link style={{color:"#00ACC0"}} to={{
        pathname: '/admin/table',
        state: {
          questions: [["question", ['answer1', 'answer2', 'answer3'], "answer1"],["question", ['answer1', 'answer2', 'answer3'], "answer2"]],
          title: "Personal Finacne"
        }
      }}>Get Started</Link>
      </span>
    </CardBody>
  </Card>
  <Card>

    <CardHeader color="primary">
      <h4 className={classes.cardTitleWhite}>Microeconomcis</h4>
      <p className={classes.cardCategoryWhite}>
        Learn about Microeconomics
      </p>
    </CardHeader>
    <CardBody>
    
      <span className="input-group-btn">
        <Link style={{color:"#00ACC0"}} to={{
        pathname: '/admin/table',
        state: {
          questions: [["question", ['answer1', 'answer2', 'answer3'], "answer1"],["question", ['answer1', 'answer2', 'answer3'], "answer2"]],
          title: "Micro"
        }
      }}>Get Started</Link>
      </span>
    </CardBody>
  </Card>
  </div>
  );
}

TypographyPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(TypographyPage);
