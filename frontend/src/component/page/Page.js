import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Page.css';

class Page extends Component {

    circleName;

    constructor(props) {
        super(props);
        this.circleName = props.match.params.name;
    }

    render() {
        return (
            <div className="row">
                Hola mundo! name: {this.circleName}
            </div>
        );
    }
}

export default withRouter(Page)