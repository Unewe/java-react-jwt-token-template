import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import React from 'react'
import './CreateArticle.scss'

const CreateArticle = ({user, article}) => {

    return (
        <div className='article-wrapper row'>
            <div className='side-bar col-8 col-md-2'>
                Меню
            </div>
            <div className='col-md-8'>
                <div className='row article-header pr-5 pl-5'>
                    <h1>{article.name}</h1>
                </div>
                <div className='row article-body pr-5 pl-5'>
                    <h3 className='description p-3'>{article.description}</h3>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        article: state.article,
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(CreateArticle))