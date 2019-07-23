import React, { Component } from 'react'
import axios from 'axios'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            id:''
        }
    }

    componentDidMount() {
        console.log('Banner'+this.props.data)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1`)
            .then(res => {
                this.setState({ movies: res.data.results});
                console.log(this.state)
            })
    }
    render() {
        return (

            <div className="side-details">
                <div className="side-banner">
                    {
                        this.state.movies.map(movie =>
                            <div className="container-side-img">
                                < img id={`${movie.id}`} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    className="side-image" />
                                <h3 className="side-topic">{movie.title}</h3>
                                <h4 className="side-date">{movie.release_date}</h4>
                                <p className="side-info">{movie.overview}</p>
                            </div>
                        )

                    }
                </div>
            </div>
        )
    }
}
export default Banner