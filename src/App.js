import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu/Menu';

const PageOne = () =>{
  return <div>WItaj na mojej stronie</div>
}

const PageTwo = () =>{
  return <div>WItaj na drugiej stronie</div>
}


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Route path="/" exact component={PageOne}></Route>
        <Route path="/two" exact component={PageTwo}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
