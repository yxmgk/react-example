/*
 * 电影详细容器组件
 * */
import React, { Component } from 'react'
import service from '../services/movieService.js'

export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    static contextTypes={
        router: React.PropTypes.object
    }

    componentDidMount(){

        // setTimeout(()=>{
        //     console.log(this.context.router)
        //     this.context.router.push('/home')
        // },3000)

        // setTimeout(function () {
        //     console.log(this.context.router)
        //     this.context.router.push('/home')
        // }.bind(this),3000)

        // var _this=this
        // setTimeout(function () {
        //     console.log(_this.context.router)
        //     _this.context.router.push('/home')
        // },3000)

        // service.getMovieListData()
    }

    render() {
        console.log(this.props.params.id)
        return (
            <div>
                这是电影详细容器组件
            </div>
        )
    }
}
