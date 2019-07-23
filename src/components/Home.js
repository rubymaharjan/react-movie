import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        movies: [],
        error: null
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=004fe1ee41218ae53e75b9b4b7c47018&language=en-US&page=1`)
            .then(res => {
                this.setState({ movies: res.data.results });
                console.log(this.state)
            })
            .catch(
                err => {
                    this.setState({ error: err })
                }
            )
    }
    render() {
        if (this.state.error) {
            return <h1 className="error">Something went wrong.</h1>;
        }
        else {
            return (

                <div>
                    <ul>
                        {
                            this.state.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
                        }
                    </ul>

                </div>

            )
        }
    }
}

export default Home;