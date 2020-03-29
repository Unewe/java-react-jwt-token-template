import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {/*Левая часть*/}
                <div className="col-lg-3 col-md-5">
                    <div className="h-padding">
                        <h1>Left column</h1>
                        {listItem.map((item, index) => (
                            <div key={index} className={"circle-item d-flex"}>
                                <div className={"circle-name"}>
                                    <p>{item.name}</p>
                                </div>
                                <div className="circle-description">
                                    <p>{item.shortDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Правая часть*/}
                <div className="col-lg-9 col-md-7">
                    <div className="h-padding pl-0">
                        <h1>Right column</h1>
                        <div className={"circle-item-header pt-3 pb-3"}>
                            <div className={"ml-4"}>
                                <h2>Circle item header</h2>
                            </div>
                        </div>
                        {listItem.map((item, index) => (
                            <div key={index} className={"circle-item d-flex"}>
                                <div className={"ml-4 circle-name"}>
                                    <p>{item.name}</p>
                                </div>
                                <div className="circle-description">
                                    <p className={"text-grey"}>{item.shortDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home)

let listItem = [
    {id: 0, name: 'item 0', shortDescription: 'short description 0'},
    {id: 1, name: 'item 1', shortDescription: 'short description 1'},
    {id: 2, name: 'item 2', shortDescription: 'short description 2'},
    {id: 3, name: 'item 3', shortDescription: 'short description 3'},
    {id: 4, name: 'item 4', shortDescription: 'short description 4'},
    {id: 5, name: 'item 5', shortDescription: 'short description 5'}];