import React from 'react'
import {Route, Redirect, withRouter} from "react-router-dom"
import {connect} from "react-redux"

const PrivateRoute = ({component: Component, user, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            user.name ?
                (
                    <Component {...rest} {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                    />
                )
        }
    />
)

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))