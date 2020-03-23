import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss';

class Label extends React.Component {

    render() {
        return (
            <Link className="label" to={this.props.to}>
                <div className="labelName">{this.props.children}</div>
                <i className="material-icons menuIco">{this.props.ico}</i>
            </Link>
        )
    }
}

export default Label;