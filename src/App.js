import React, { Component } from "react";

import "./App.css";
import GetQuote from "./GetQuote";
import GetQuotes from "./GetQuotes";

class App extends Component {
   render() {
      return (
         <div className="App">
            <GetQuotes />
         </div>
      );
   }
}
//<GetQuote />
export default App;
