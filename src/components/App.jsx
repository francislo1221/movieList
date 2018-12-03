import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: ['Creed 2', 'Back to the Future', 'Sisterhood of the Traveling Pants'],
      fullList: ['Creed 2', 'Back to the Future', 'Sisterhood of the Traveling Pants'],
      input: '',
      selected: ''
    }
  }

  handleSearchInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick() {
    for(var i = 0; i < this.state.fullList.length; i++) {
      console.log(this.state.fullList)
      debugger;
      if (this.state.input === '') {
        this.setState({
          movieList: this.state.fullList
        }) 
        return;
      } else if (this.state.fullList[i].includes(this.state.input)) {
        this.setState({
          movieList: [this.state.fullList[i]]
        })
        return;
      } else {
        this.setState({
          movieList: ['movie not available']
        })
      }
    };
  }
  
  
  render() {
    this.state.movieList.map((movie) => {
      console.log(movie)
    })
    return (
      <div>
        <Add />
        <Search
          value={this.state.input} handleSearchInput={this.handleSearchInput.bind(this)} handleClick={this.handleClick.bind(this)}
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
