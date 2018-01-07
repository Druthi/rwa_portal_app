import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link to="/">RWAPORTAL</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}       
      </div>
    );
  }
}

export default App;
