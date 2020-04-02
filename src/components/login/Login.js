import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Pryv from '../../../node_modules/pryv-javascript-light/src/Pryv.js';
import { api, handleError } from "../helpers/api";
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.connection = null;
    this.state = {
      user: null
    }
  }
  
  

  pryvAuthStateChange(state) { // called each time the authentication state changed
    console.log('##pryvAuthStateChange', state);
    this.state = {
      user: state
    }
    /* if (state.id === Pryv.Browser.AuthStates.AUTHORIZED) {
      this.connection = new Pryv.Connection(state.apiEndpoint);
      console.log('# Browser succeeded for user ' + this.connection.apiEndpoint);
    }
    if (state.id === Pryv.Browser.AuthStates.LOGOUT) {
      this.connection = null;
      console.log('# Logout');
    } */
}

/* componentDidUpdate(nextProps, nextState){
  console.log('##componentdidupdate', nextState);
}
 */
componentDidMount(){
  var authSettings = {
    spanButtonID: 'pryv-button', // span id the DOM that will be replaced by the Service specific button
    onStateChange: this.pryvAuthStateChange, // event Listener for Authentication steps
    authRequest: { // See: https://api.pryv.com/reference/#auth-request
      requestingAppId: "pryv-interview-exercise",
      requestedPermissions: [
  {
    streamId: "fitbit",
    level: "Fitbit",
    defaultName: "read"
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
  var serviceInfoUrl = 'https://api.pryv.com/lib-js/demos/service-info.json';
  (
    async function () {
    var service = await Pryv.Browser.setupAuth(authSettings, serviceInfoUrl);
  })();
}
  

      

  

  

  /* async login() {
    try {
      const requestBody = JSON.stringify({
        requestingAppId: "pryv-interview-exercise",
        requestedPermissions: [
    {
      streamId: "fitbit",
      level: "Fitbit",
      defaultName: "read"
    }
  ]});
      const response = await api.post("/access", requestBody);
      console.log('##pryvAuthStateChange', response.id);
      if (response.id === Pryv.Browser.AuthStates.AUTHORIZED) {
        connection = new Pryv.Connection(state.apiEndpoint);
        console.log('# Browser succeeded for user ');
      }
    }
    catch (error) {
      this.handleInputChange(
        "errorMessage",
        `Something went wrong during the login: \n${handleError(error)}`
      );
    }
  } */
  
  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
   * Initialization that requires DOM nodes should go here.
   * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   * You may call setState() immediately in componentDidMount().
   * It will trigger an extra rendering, but it will happen before the browser updates the screen.
   */


  render() {
    return (
      <Container className="container-style login-style">
        {/* <br></br>
        {this.state.errorMessage && (
          <Alert variant="warning">{this.state.errorMessage}</Alert>
        )}
        <Form>
          <Form.Group controlId="formBasicAppId">
            <Form.Label className="input-label">requestingAppID</Form.Label>
            <Form.Control
              className="input-style"
              onChange={e => {
                this.handleInputChange("requestingAppID", e.target.value);
              }}
              type="text"
              placeholder="Enter requesting app id"
            />
          </Form.Group>
          <Form.Group controlId="formBasicStreamId">
            <Form.Label className="input-label">StreamID</Form.Label>
            <Form.Control
              className="input-style"
              onChange={e => {
                this.handleInputChange("StreamID", e.target.value);
              }}
              type="text"
              placeholder="Enter stream id"
            />
          </Form.Group>
          <Form.Group controlId="formDefaultName">
            <Form.Label className="input-label">defaultName</Form.Label>
            <Form.Control
              className="input-style"
              onChange={e => {
                this.handleInputChange("defaultName", e.target.value);
              }}
              type="text"
              placeholder="Enter default name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicAppId">
            <Form.Label className="input-label">level</Form.Label>
            <Form.Control
              className="input-style"
              onChange={e => {
                this.handleInputChange("level", e.target.value);
              }}
              type="text"
              placeholder="Enter level"
            />
          </Form.Group> */}
          <br></br>
          <Button
            className="button-style-hover"
            variant="light"
            onClick={() => {
              this.test();
            }}
            size="lg"
            style={{ width: "100%", marginBottom: "4%" }}
          >
            Login
          </Button>
          <span id="pryv-button"></span>
        {/* </Form> */}
        <br></br>
      </Container>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);
