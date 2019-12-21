import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

import NewClientComponent from './components/NewClient/NewClientComponent';
import Header from './components/Header/Header.jsx';
import OredersComponent from './components/Orders/Orders.jsx';
import EditOrder from './components/Orders/EditOrder/EditOrder';
import SignIn from './components/Sign in/Signin.jsx';

import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Header />
      <Switch>
        <Route path="/newclient" component={NewClientComponent} />
        <Route path="/vieworders" component = {OredersComponent} />
        <Route path="/edit/:id" component={EditOrder} />
        <Route path="/signin" component={SignIn}/>
      </Switch>
       </div> 
    )
  }
}


export default App;
