import React from 'react'
import './App.css'
import Login from "./component/security/login/Login"
import Signup from "./component/security/signup/Signup"
import 'bootstrap-4-grid'
import Home from "./component/home/Home"
import Page from "./component/page/Page"
import {withRouter, Route, Switch} from "react-router-dom"
import {connect} from "react-redux"
import AppHeader from "./component/header/AppHeader"

const App = () => {
    let content = (
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/page/:name" component={Page}/>
                {/*<PrivateRoute authenticated={this.state.isAuthenticated}  path="/new-game" component={NewGame}/>*/}
            </Switch>
        </div>
    )

    return (
        <div className="app-container">
            <AppHeader/>
            <div className="app-content">
                {content}
            </div>
        </div>
    );
}

export default withRouter(connect()(App))
