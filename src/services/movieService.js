import {hashHistory} from 'react-router'

export default {
    getMovieListData(){
        setTimeout(function () {
            hashHistory.push('/home')
        },3000)
    }
}
