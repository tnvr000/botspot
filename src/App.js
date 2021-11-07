import React from "react";
import './App.css';
import Login from './components/login/login';
import './components/login/style.scss'
// import Register from "./components/login/register";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="container">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
