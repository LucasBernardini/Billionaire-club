import React from "react";
import axios from "axios";
import BillionaireHero from "./BillionaireHero/BillionaireHero";
import UserInputInfo from "./UserInputInfo/UserInputInfo";

const url = `https://forbes400.herokuapp.com`;
const allExt = `/api/forbes400/`;

class UIConnectorAPI extends React.Component {
  state = {
    billionaires: [{ person:{name: 'Jeff'} }],
    user: {},
  };

  componentDidMount() {
    axios
      .get(`${url}${allExt}?limit=10`)
      .then((success) => {
        this.setState({ billionaires: success.data });
      })
      .catch((err) => console.log(err));
  }

  submitHandler = (e) => {
      e.preventDefault();
      this.setState({user:{
          name: e.target.name.value,
          salary: e.target.name.salary
      }})
  }

  render() {
    return (
      <div>
        <UserInputInfo submitHandler={this.submitHandler}/>
        {/* <BillionaireHero info={this.state.billionaires} /> */}
        
      </div>
    );
  }
}

export default UIConnectorAPI;
