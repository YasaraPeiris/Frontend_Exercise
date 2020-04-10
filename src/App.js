import React, { Component } from 'react';
import AppRouter from './components/shared/routers/AppRouter.js';
import './App.css';
import Header from './components/common/Header.js'


class App extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", this.handleWindowBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  }

  handleWindowBeforeUnload()
  {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Header height={"100"} />
        <AppRouter />
      </div>
    );
  }
}

export default App;