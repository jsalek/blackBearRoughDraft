import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
//import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
//import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Link } from 'react-router-dom';
import { daily, weekly, yearly } from "variables/general.jsx";
import imagine2 from "assets/img/PiggyBank.png";
import imagine3 from "assets/img/bag.png";
import imagine4 from "assets/img/medal.png";
import imagine5 from "assets/img/Cash.png";
import imagine6 from "assets/img/0.png";
import {
  dailySalesChart, 
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Checkbox } from "@material-ui/core";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer></GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Minutes Practiced Per Day</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in todays learning.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated some minutes ago..
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Minutes Per Month</h4>
                <p className={classes.cardCategory}>Past Year Performance</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Numbers updated seconds ago..
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Tasks completed this week
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated recently..
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
        <GridContainer>
          
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Daily",
                  tabIcon: Checkbox,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 1]}
                      tasksIndexes={[0, 1]}
                      tasks={daily}
                    />
                  )
                },
                {
                  tabName: "Weekly",
                  tabIcon: Checkbox,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={weekly}
                    />
                  )
                },
                {
                  tabName: "Yearly",
                  tabIcon: Checkbox,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={yearly}
                    />
                  )
                }
              ]}
            />

            <Card>

<CardBody>

  <span className="input-group-btn" style={{display: "flex", justifyContent: "space-around"}}>
    <img src={imagine2} width='50' height='50'alt="Check"></img>
    <img src={imagine3} width='50' height='50'alt="Check"></img>
    <img src={imagine4} width='50' height='50'alt="Check"></img>
    <img src={imagine5} width='50' height='50'alt="Check"></img>
    <img src={imagine6} width='50' height='50'alt="Check"></img>
  </span>
</CardBody>
</Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>
                  Most Missed Questions
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Most missed this week
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={[
                    "Rank",
                    "Question",
                    "Correct Answer",
                    "Your Answer"
                  ]}
                  tableData={[
                    ["1", "What is an ETF?", "Exchange Traded Fund", "iShares"],
                    [
                      "2",
                      "What is AUM?",
                      "Assets Under Management",
                      "Australian Money"
                    ],
                    [
                      "3",
                      "What is a put option?",
                      "A stock market device which gives the owner of a put the right, but not the obligation, to sell an asset, at a specified price, by a predetermined date to a given party",
                      "Gives the owner the right, but not an obligation, to buy at a specified date."
                    ],
                    [
                      "4",
                      "What is Finance?",
                      "A broad term that describes activities associated with banking, leverage or debt, credit, capital markets, money, and investments.",
                      "Trading Stocks"
                    ]
                  ]}
                />
              </CardBody>
            </Card>
            
          </GridItem>
          
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
