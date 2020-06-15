import React from 'react';
import './Menu.scss';
import { withRouter } from 'react-router';

import Label from './Label';

class Menu extends React.Component {
  
  render(){
    let path = this.props.location.pathname;
    return (
       <div className="Menu">
        <div className="first label">
          <div className="labelName">Menu</div>
          <i className="material-icons menuIco">dehaze</i>
        </div>
        <Label to="/" ico="home" path={path} >Home</Label>
        <Label to="/two" ico="memory" path={path} >Two</Label>
      </div>
    );

  }
}

export default withRouter(Menu);
