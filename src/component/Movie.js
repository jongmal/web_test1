import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, rating, title, poster}){
    return (
    <div className='Movie'>
        <Link to={
            {
            pathname: '/Detail',
            state:{id, rating,title,poster}
            }}>  
        <h3 className='movie_title'>{title}</h3>
        <img src={poster}></img>
        </Link>
    </div>
        );
}

Movie.prototype={
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};
export default Movie;
