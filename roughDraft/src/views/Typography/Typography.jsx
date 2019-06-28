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
import { Link } from 'react-router-dom';

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
        <h4 className={classes.cardTitleWhite}>Financial Goals</h4>
        <p className={classes.cardCategoryWhite}>
          Learn about Financial Goals...
        </p>
      </CardHeader>
      <CardBody>
      
        <span className="input-group-btn">
          <Link style={{color:"#00ACC0"}} to={{
          pathname: '/admin/table',
          state: {
            questions: [["What is a financial plan?", ['a) A comprehensive evaluation of current and future financial sate',
             'b) A portfolio of your stocks', 'c) An income statement', 'd) Rental income and capital appreciation'], "a) A comprehensive evaluation of current and future financial sate"],
             ["What types of investments have the highest annualized return over long time periods, but also higher volatility?",
              ['a) Bonds', 'b) Stocks', 'c) Commodities', 'd) Real estate'], "b) Stocks"],
              ["What is a bond?", ['a) A bond is a debt investment representing a portion of a loan',
            'b) A bond is a basic good used in commerce', 'c) A bond is a property consisting of land or buildings'], 'a) A bond is a debt investment representing a portion of a loan'],
            ['What are the returns of bonds based on?', ['a) capital appreciation and dividends', 'b) capital appreciation and interest income',
          'c) Appreciation only', 'd) Rental income and capital appreciation'], 'b) capital appreciation and interest income'],
          ['What are the returns on commodities based on?', ['a) Capital appreciation and dividends', 'b) Capital appreciation and interest income', 
          'c) Appreciation only', 'd) Rental income and capital appreciation'], 'c) Appreciation only']
            ],
            title: "Financial Goals"
          }
        }}>Get Started</Link>
        </span>
      </CardBody>
    </Card>
    <Card>
    <CardHeader color="primary">
      <h4 className={classes.cardTitleWhite}>Personal Finance</h4>
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
          title: "Personal Finance"
        }
      }}>Get Started</Link>
      </span>
    </CardBody>
  </Card>
  <Card>

    <CardHeader color="primary">
      <h4 className={classes.cardTitleWhite}>BlackRock</h4>
      <p className={classes.cardCategoryWhite}>
        Learn about BlackRock
      </p>
    </CardHeader>
    <CardBody>
    
      <span className="input-group-btn">
        <Link style={{color:"#00ACC0"}} to={{
        pathname: '/admin/table',
        state: {
          
          questions: [['1) What is Blackrock?', ['a) A multinational investment bank and financial services corporation.', 'b) The world’s largest tax preparation company.', "c) A global investment management corporation and the world's largest asset manager."], "c) A global investment management corporation and the world's largest asset manager."], ["2) What is Aladdin?", ["a) A lovable street urchin who meets Princess Jasmine, the beautiful daughter of the Sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie..", "b) An electronic system by BlackRock Solutions, the risk management division of the largest investment management corporation, BlackRock, Inc.", "c) The aggregation of buyers and sellers of stocks, which represent ownership claims on businesses."], "b) An electronic system by BlackRock Solutions, the risk management division of the largest investment management corporation, BlackRock, Inc."], ["3) How much money does BlackRock manage as of April 2019?", ["a) $21 trillion.", "b) $6.5 trillion.", "c) $3.5 trillion."], "b) $6.5 trillion."], ["4) How much money does Aladdin manage as of April 2019?", ["a) Over $21 trillion.", "b) Over $6.5 trillion.", "c) Over $1 billion."], "a) Over $21 trillion."], ["5) What are the types of clients BlackRock work with?", ["a) Individuals.", "b) Corporations.", "c) Government.", "d) All of the above."], "d) All of the above."]],
          title: "BlackRock"
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
