import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from "./Pages/Create"
import Create from "./Pages/Notes"

function App() {
  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/">
            {/* <Notes /> */}
            <Create />
          </Route>
          <Route path="/create">
            {/* <Create /> */}
            <Notes/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
