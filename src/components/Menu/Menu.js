import React from 'react';
import './Menu.scss';

import Label from './Label';

const Menu = () => {
  
  return (
    <div className="Menu">
        <div className="first label">
            <div className="labelName">Menu</div>
            <i className="material-icons menuIco">dehaze</i>
        </div>
        <Label to="/" ico="home">Home</Label>
        <Label to="/two" ico="memory">Two</Label>
    </div>
  );
}

export default Menu;
