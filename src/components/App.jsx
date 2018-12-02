import MovieList from './MovieList.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: ['movie1', 'movie2', 'movie3']
    }
  }


  render() {

    this.state.movieList.map((movie) => {
      console.log(movie)
    })

    return (
      <div>
        <MovieList
          movieList={this.state.movieList}
          />
      </div>
    )
  }
}

export default App;