import React from 'react';
import Hotel from "./pages/Hotel";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Wedding from "./pages/Wedding";
import Information from "./pages/Information";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' >
                        <Wedding />
                    </Route>
                    <Route exact path='/hotel'>
                        <Hotel />
                    </Route>
                    <Route exact path='/infos'>
                        <Information />
                    </Route>
                    <Route component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
