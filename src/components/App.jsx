import MovieList from './MovieList.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: ['Creed 2', 'Back to the Future', 'Sisterhood of the Traveling Pants'],
      input: ''
    }
  }

  handleSearchInput(e) {
    console.log(e.target.value);
  }
  
  
  render() {
    this.state.movieList.map((movie) => {
      console.log(movie)
    })
    return (
      <div>
        <Search
          value={this.state.input} handleSearchInput={this.handleSearchInput.bind(this)}
        />
        <MovieList
          movieList={this.state.movieList}
        />
      </div>
    )
  }
}

export default App;

//add ability to collect form input information in Search
//compare input to this.movieList 
//only render what matches the search 
