import React, { Component } from 'react';
import AppRouter from './components/shared/routers/AppRouter.js';
import './App.css';


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
        <AppRouter />
      </div>
    );
  }
}

export default App;