import React, { Component } from 'react'
import axios from 'axios'
import Banner from './banner'




class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            show: false,
            data: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1`)
            .then(res => {
                this.setState({ movies: res.data.results });

                console.log(this.state)

            })
    }
    handleClick = (e, movie) => {

        console.log('jhgjhgjhgjhgjhg' + e)
        this.setState({ show: true, data: movie })
        // e.preventDefault();

    }

    render() {
        let e;
        if (this.state.show) {
            e = <Banner data={this.state.data} />
        }
        return (
            <div className="container">
                {
                    this.state.movies.map(movie =>
                        <div key={movie.id} className="list" onClick={(e) => this.handleClick(movie, e)} >
                            < img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                className="content-img" id={`${movie.id}`} />
                            <p>{movie.title}</p>
                        </div>
                    )
                }
                {
                    e
                }
            </div>
        )
    }
}

export default Upcoming