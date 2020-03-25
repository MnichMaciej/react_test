import React from 'react';
import {NavLink } from 'react-router-dom';

import './Menu.scss';


class Label extends React.Component {

  

    render() {
        let path = this.props.path;
        
        return (
            <NavLink className={"label" + (path === this.props.to ? ' current' : '')} to={this.props.to}>
                <div className="labelName">{this.props.children}</div>
                <i className="material-icons menuIco">{this.props.ico}</i>
            </NavLink>
        )
    }
}

export default Label;