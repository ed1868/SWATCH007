import React, { Component } from "react";
import SleeperCell from "./empCodes";
export default class launchCodes extends Component {
  constructor() {
    super();

    this.state = {};

    this.sleeperCell = new SleeperCell();
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const messengerAI = this.state;

    this.sleeperCell
      .empDecoder(messengerAI)
      .then(response => {
        console.log("RESPONSE OF FRONT CALLING THE SERVICE", response);
        let sillyHeart = response.secrets[0].key;
        console.log(`silly heart ----- ${sillyHeart}`);
        let decoy = response.secrets[1].key;

        if (sillyHeart == this.state.secretKey) {
          console.log("YOU GOT THE CORRECT ANSWRR");
          this.setState({ "access": "granted" });

          return;
        } else {
          console.log("WRONG");
        }
        // this.setState({ ...this.state, redirect: true });
      })
      .catch(err => {
        if (err) {
          console.log("ERROR: ", err);
        }
      });
  };
  accessChanger = e => {
    this.setState({ "access": "denied" });
    this.setState({ "secretKey": " " });

  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    console.log("this state ------", this.state);
    if (this.state.access == "granted") {
      console.log("entroooooooooo");
      return (
        <div>
          <h1>Hello</h1>
          <button type="submit" onClick={this.accessChanger}>
            Deny Access
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <form onSubmit={this.handleFormSubmit} className="col-sm-12">
              <div className="row">
                <div className="input-field col-sm-6">
                  <label for="vaultDoor">Agent:</label>
                  <input
                    id="vaultDoor"
                    value="Bond,James"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="input-field col-sm-12">
                  <input
                    id="vaultKey"
                    name="secretKey"
                    onChange={e => this.handleChange(e)}
                    placeholder="PASSWORD"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="button">
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-dark btn-block btn-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
