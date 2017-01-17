/*
* 路由配置文件
* */
import React, { Component } from 'react'
import { Router, Route,IndexRoute,Redirect, Link,hashHistory,browserHistory} from 'react-router'

import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import AboutContainer from '../containers/AboutContainer.js'
import MovieListContainer from '../containers/MovieListContainer.js'
import MovieDetailContainer from '../containers/MovieDetailContainer.js'
import MovieSearchContainer from '../containers/MovieSearchContainer.js'



export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer}>
                    {/*渲染首页面*/}
                    <IndexRoute component={HomeContainer} />
                    <Route path="home" component={HomeContainer} />
                    <Route path="movie"
                           component={MovieContainer}
                           onEnter={()=>console.log('进入了movie路由')}
                           onLeave={()=>console.log('离开了movie路由')}
                    >
                        {/*绝对路由*/}
                        <Route path="/movieList" component={MovieListContainer} />
                        <Route path="/movieDetail/:id" component={MovieDetailContainer} />
                        <Route path="/movieSearch" component={MovieSearchContainer} />
                        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
                        <Redirect from="movieList" to="/movieList" />
                        <Redirect from="movieDetail" to="/movieDetail" />
                        <Redirect from="movieSearch" to="/movieSearch" />

                    </Route>
                    <Route path="about" component={AboutContainer}/>
                </Route>
            </Router>
        )
    }
}
