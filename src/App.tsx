import React from 'react';
import Info from "./pages/Info";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Wedding from "./pages/Wedding";

function App() {
  console.log("Host URL"+process.env.PUBLIC_URL);

  return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/info'>
                <Info />
              </Route>
                <Route exact path='/wedding'>
                    <Wedding />
                </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
