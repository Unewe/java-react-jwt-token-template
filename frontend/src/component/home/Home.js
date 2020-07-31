import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './Home.scss'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div>
                        <h1>Right column</h1>
                        <div className={"circle-item-header pt-3 pb-3"}>
                            <div className={"ml-4 c-default"}>
                                <h2>Это может быть интересно :</h2>
                            </div>
                        </div>
                        {listItem.map((item, index) => (
                            <div key={index} className={"circle-item d-flex"}
                                 onClick={() => this.props.history.push("/page/" + item.id)}>
                                <div className={"ml-4 circle-name c-default"}>
                                    <p>{item.name}</p>
                                </div>
                                <div className="circle-description c-default">
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
    {id: 5, name: 'item 5', shortDescription: 'short description 5'}]