import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import React from 'react'
import './CreateArticle.scss'
import {Article} from "../../store/reducer/article";


const CreateArticle = ({user, article}) => {

    console.log(article.constructor === Article.constructor)
    return (
        <div className='article-wrapper row'>
            <div className='side-bar col-8 col-md-2'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <div key={i} className={'menu-item p-2 mt-2'}>Меню</div>)}
            </div>
            <div className='col-md-8'>
                <div className='row article-header pr-5 pl-5'>
                    <h1>{article.name}</h1>
                </div>
                <div className='row article-body pr-5 pl-5 pb-5'>
                    <h5 className='description p-3'>{article.description}</h5>

                    {article.textRows.map(row => (
                        <p key={row.index}
                           className={row.type.toLowerCase()}>{row.segments.map((segment, i) => {
                               return (
                                   <span key={segment.index}>{segment.text}{segment.newLine ? <br/> : null}</span>
                               )
                        })}</p>
                    ))}

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