import React from "react";
import Routing from "./routing/Routing";

class App extends React.Component {
  render() {
    return (
      <div className="container bg-slate-100">
        <Routing />
      </div>
    );
  }
}

export default App;
