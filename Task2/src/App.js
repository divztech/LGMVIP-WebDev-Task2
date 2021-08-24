import Users from "./cardHolder";
import "./style.css";

import React, { Component } from "react";
document.body.style = "background: black;";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="banner">
            <div className="row">
              <div className="banner-set">
                <h2>LetsGrowMore</h2>
              </div>
              <div className="button-set">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <Users loading={this.state.loading} users={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;
