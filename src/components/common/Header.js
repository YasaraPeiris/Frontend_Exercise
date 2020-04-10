
import React from "react";
import {
    Container, Row, Col
  } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
/**
 * Using styled-components you can visual HTML primitives and use props with it!

 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

const Header = props => {
  return (
    <Container className="container-style header-style" style = {{paddingTop:"5%",bachground:'none', display:'block'}}>
       <Row className="d-flex justify-content-center" style={{marginLeft:"0", marginRight:"0", textAlign:"center"}}>
      <h2>Pryv - Data & Privacy,
Managed.</h2>
      </Row>
      <br></br>
      <Row className="d-flex justify-content-center" >
      <img className="pryv-logo" src="https://pryv.com/wp-content/themes/pryv2019/assets/img/Logo-Pryv@3x.svg" scale="0"/>
      </Row>
    </Container>
  );
};

/**
 * Don't forget to export your component!
 */
export default Header;
