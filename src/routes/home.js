import React,{Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from '../component/Movie';


class Home extends React.Component{
  state={
    isLoading: true,
    movies:[]
  };

  getMovies=async()=>{
    const {
      data: {
        data: {movies},
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }

  componentDidMount(){
    this.getMovies();
  };

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section>
        {isLoading? (
          <div class='loader'>
            <span class='loader_text'>Loading..</span>
          </div>
        ) : (
          <div class='movies'>
            {movies.map((curr,index) => (
              <Movie 
                  key={curr.id}
                  title={curr.title}
                  id={index}
                  rating={curr.rating}
                  poster={curr.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
  
    );
  }

}



export default Home;
