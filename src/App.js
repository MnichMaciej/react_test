import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu/Menu';


class PageOne extends React.Component{  
  render(){
    
    return <div>WItaj na mojej stronie</div>
  }
}

class PageTwo extends React.Component{
  render(){
    return <div>WItaj na drugiej stronie</div>
  }
}



class App extends React.Component{


  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Route path="/" exact component={PageOne}  />
          <Route path="/two" exact component={PageTwo}  />
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
