import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Notes from "./Pages/Create"
import Create from "./Pages/Notes"

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              {/* <Notes /> */}
              <Create />
            </Route>
            <Route path="/create">
              {/* <Create /> */}
              <Notes />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
