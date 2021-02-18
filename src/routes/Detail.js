import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location);
        console.log(history);
        if(location.state === undefined){
            history.push('/');
        }
    }
    render() {
        const { location, history  } = this.props;
        if(location.state){
            return (
                <div className='movie-detail'>
                    <h4>{location.state.title}</h4>
                    <h3>{location.state.rating}</h3>
                    <img src={location.state.poster}></img>
                </div>
            );
        }else{
            return null;
        }

    }
}
/*
<div className='movie-detail'>
<h4>{this.state.title}</h4>
<h3>{this.state.rating}</h3>
<img src={this.state.poster}></img>
</div>
*/



export default Detail;