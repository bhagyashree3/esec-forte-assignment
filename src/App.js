import React from 'react';
import Login from './login'
import Dashboard from './Dashboard'
import AddItem from './AddItem'
import { Router, Route, Link } from 'react-router-dom';
import history from './history';


class App extends React.Component{
  render(){
    return(
      <Router history={history}>
      <div className="App">
      <Route exact path="/home" exact component={Dashboard} />
      <Route path="/" exact component={Login} />
    </div>
    </Router>
    )
  }
}
export default App;
