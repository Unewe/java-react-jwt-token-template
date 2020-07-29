import React, {Component} from 'react';
import './Login.css';
import {withRouter} from 'react-router-dom';
import {logout, login, setUser} from "../../../store/action";
import {connect} from "react-redux";
import {SecurityService} from "../../../service/security.service";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: '',
            password: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        SecurityService.login(this.state)
            .then(response => {
                this.props.login(response)
                this.props.history.push('/')
                SecurityService.getCurrentUser()
                    .then(response => {
                        this.props.setUser(response)
                    }).catch(error => {this.props.logout()});
            }).catch(error => {this.props.logout()});
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    render() {

        return (
            <div className="login-container">
                <form onSubmit={this.onSubmit}>
                    <h1>Авторизация</h1>
                    <div className="un-form-group">
                        <div className="container p-1">
                            <div className="row m-2">
                                <div className="col-5 pt-2">
                                    <label htmlFor="email">Почта / Логин</label>
                                </div>
                                <div className="col-7">
                                    <input type="text" className="form-control"
                                           name="usernameOrEmail" onChange={this.handleUserInput}/>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-5  pt-2">
                                    <label htmlFor="password">Пароль</label>
                                </div>
                                <div className="col-7">
                                    <input type="password" className="form-control"
                                           name="password" onChange={this.handleUserInput}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container p-1">
                        <div className="row m-2">
                            <div className="col-7 offset-5">
                                <button type="submit" className="un-button">
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => {
            dispatch(logout())
        },
        login: (value) => {
            dispatch(login(value))
        },
        setUser: (user) => {
            dispatch(setUser(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));