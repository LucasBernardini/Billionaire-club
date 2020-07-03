import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BillionaireHero from "./BillionaireHero/BillionaireHero";
import UserInputInfo from "./UserInputInfo/UserInputInfo";
import UserHero from "./UserHero/UserHero";
import BillionaireList from "./BillionaireList/BillionaireList";
import ViewAllBtn from "./ViewAllBtn/ViewAllBtn";
import "./UIConnectorApi.scss";

const url = `https://forbes400.herokuapp.com`;
const allExt = `/api/forbes400/`;

class UIConnectorAPI extends React.Component {
  state = {
    billionaires: [{ person: { name: "Jeff" } }],
    user: [],
    currentBill: [
      {
        person: { name: "Jeff Bezos" },
        finalWorth: 166347.329,
        industries: "Technology",
        rank: 1,
      },
    ],
  };

  componentDidMount() {
    axios
      .get(`${url}${allExt}?limit=20`)
      .then((success) => {
        this.setState({ billionaires: success.data });
      })
      .catch((err) => console.log(err));
  }



  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      user: {
        name: e.target.name.value,
        salary: e.target.salary.value,
      },
    });
    window.location.hash = "test";
  };

  selectHandler = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({
      currentBill: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <UserInputInfo submitHandler={this.submitHandler} />

              <div className="main-hero" id="test">
                <UserHero
                  user={this.state.user}
                  info={this.state.billionaires}
                  currentBill={this.state.currentBill}
                />
                <BillionaireHero
                  info={this.state.billionaires}
                  selectHandler={this.selectHandler}
                  currentBill={this.state.currentBill}
                />
              </div>
              <ViewAllBtn />
            </Route>
            <Route path="/billionaires">
              <BillionaireList info={this.state.billionaires} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default UIConnectorAPI;
