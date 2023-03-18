import * as React from 'react';
import './App.css';
import AlumniGroups from './pages/AlumniGroups';

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <AlumniGroups/>
      </div>
    );
  }
}

export default App;
