import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './AppHeader.scss'
import PropTypes from 'prop-types'
import {logout} from "../../store/action"
import {connect} from "react-redux"

const AppHeader = ({user, logout}) => {

    let menuItems;

    if (user.name) {
        menuItems = [
            <div key="0" className="mr-5">
                <Link to="/">Home</Link>
            </div>,
            <div key="1" className="mr-5">
                <Link to="/create-article">Создать пост</Link>
            </div>
        ];
    } else {
        menuItems = [
            <div key="0" className="mr-5">
                <Link to="/login">Login</Link>
            </div>,
            <div key="1" className="mr-5">
                <Link to="/signup">Signup</Link>
            </div>
        ];
    }

    return (
        <div className="app-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-md-3 pl-5">
                        <Link to="/">Circle</Link>
                    </div>
                    <div className="d-none d-md-flex col-7 justify-content-end">
                        {menuItems}
                    </div>
                    <div className="col-6 col-md-2 pr-5 d-flex justify-content-end h-item">
                        <span onClick={logout}>{user.name ? user.name : ""}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

AppHeader.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
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
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader));