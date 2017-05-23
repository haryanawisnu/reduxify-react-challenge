import React, { Component } from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';


import Home from './component/Home.js';
import Form from './component/Form.js';
import Header from './component/Header.js';
import store from './store'
import './App.css';


injectTapEventPlugin();
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Router >
      <div className="App" id="App">
            <Header/>
            <div>
              <Route exact path="/" component={Home} />
              <Route  path="/detail/:id" component={(props)=><Form match={props.match.params.id}/>} />
            </div>
          <p className="App-intro">
            Copyright @Hactive8_Dota2.
          </p>
      </div>
  </Router>
    );
  }
}


const newApp=(props)=>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default newApp;
