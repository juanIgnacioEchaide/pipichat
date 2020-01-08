import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams, Redirect} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import ChatScreen from './components/ChatScreen/ChatScreen';
 
function App() {
  return (
    <div className="h-100 app"> 
    <Router>
      <Switch>
        <Route path="/index" component={Home}></Route>
        <Route path="/chat" component={ChatScreen}></Route>

      </Switch>
    <Redirect exact from="/" to="/index" />
    </Router>
    </div>
  );
}
 
export default App;