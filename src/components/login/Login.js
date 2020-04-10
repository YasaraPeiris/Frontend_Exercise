import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Pryv from "../../../node_modules/pryv-javascript-light/src/Pryv.js";
import { api, handleError } from "../helpers/api";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.connection = null;
    this.state = {
      connection: null,
    };
  }

  handleStateChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  pryvAuthStateChange(state) {
    // called each time the authentication state changed
    console.log("##pryvAuthStateChange", state);
/* 
    if (state.id === Pryv.Browser.AuthStates.AUTHORIZED) {
      this.connection = new Pryv.Connection(state.apiEndpoint);
      console.log(
        "# Browser succeeded for user " + this.connection.apiEndpoint
      );
      this.handleStateChange("connection", this.connection);
    }
    if (state.id === Pryv.Browser.AuthStates.LOGOUT) {
      this.connection = null;
      console.log("# Logout");
      this.handleStateChange("connection", this.connection);
    } */
    
    if (state.id === Pryv.Browser.AuthStates.AUTHORIZED) {
      this.connection = new Pryv.Connection(state.apiEndpoint);
      console.log('# Browser succeeded for user ' + this.connection.apiEndpoint);
    }
    if (state.id === Pryv.Browser.AuthStates.LOGOUT) {
      this.connection = null;
      console.log('# Logout');
    }
    

  }

  componentDidMount() {
    var authSettings = {
      spanButtonID: 'pryv-button', // span id the DOM that will be replaced by the Service specific button
      onStateChange: this.pryvAuthStateChange, // event Listener for Authentication steps
      FunctionLocation : "login.js",
      authRequest: { // See: https://api.pryv.com/reference/#auth-request
        requestingAppId: 'pryv-interview-exercise',
        languageCode: 'en', // optional (default english)
        requestedPermissions: [
          {
            "streamId": "fitbit",
			"defaultName": "Fitbit",
			"level": "read"
          }
        ],
        clientData: {
          'app-web-auth:description': {
            'type': 'note/txt', 'content': 'This is a consent message.'
          }
        }
      }
    };
    // authSettings.onStateChange = this.pryvAuthStateChange();
    let serviceInfoUrl = "https://reg.pryv.me/service/info";
    // override serviceInfo if provided in the url.
    serviceInfoUrl = Pryv.Browser.serviceInfoFromUrl() || serviceInfoUrl;
    console.log(Pryv.Browser.serviceInfoFromUrl());
    (async function () {
      var service = await Pryv.Browser.setupAuth(authSettings, serviceInfoUrl);
    })();
  }

  render() {
    return (
      <Container className="container-style login-style">
        <br></br>
        <br></br>
        <Row className="d-flex justify-content-center">
          <img
            src="https://pryv.com/wp-content/themes/pryv2019/assets/img/Illustration-hero.svg"
            scale="0"
            style={{ width: "80%" }}
          />
        </Row>

        <br></br>
        <br></br>
        {this.state.errorMessage && (
          <Alert variant="warning">{this.state.errorMessage}</Alert>
        )}
        <Alert variant="info">
          Please login with your pryv account to continue
        </Alert>

        <span
          id="pryv-button"
          style={{ display: "inline-block", position: "relative" }}
        ></span>
      </Container>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);
