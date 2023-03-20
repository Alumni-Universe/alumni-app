import * as React from 'react';
import './App.css';
import Routing from './routing/Routing';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routing />
      </div>
    );
  }
}

export default App;
