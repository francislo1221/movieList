import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      fullList: [],
      searchInput: '',
      addInput: ''
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleAddInput(e) {
    this.setState({
      addInput: e.target.value
    })
  }

  handleSearchClick() {
    if (this.state.searchInput === '') {
      this.setState({
        movieList: this.state.fullList
      }) 
      return;
    }

    var matches = []
    for(var i = 0; i < this.state.fullList.length; i++) {
      if (this.state.fullList[i].includes(this.state.searchInput)) {
        matches.push(this.state.fullList[i])
      }
    }

    if (matches.length > 0) {
      this.setState({
        movieList: matches,
        searchInput: ''
      })
      } else {
        this.setState({
          movieList: ['movie not available'],
          searchInput: ''
        })
      }
    };

  handleAddClick() {
    // when clicked, takes state.input and adds it to fullList
    if (this.state.addInput === '') {
      return;
    }
    this.setState({
      fullList: [...this.state.fullList, this.state.addInput],
      movieList: [...this.state.fullList, this.state.addInput],
      addInput: ''
    })
  }
  
  render() {
    return (
      <div>
        <Add value={this.state.addInput} handleAddInput={this.handleAddInput.bind(this)} handleAddClick={this.handleAddClick.bind(this)} />
        <Search
          value={this.state.searchInput} handleSearchInput={this.handleSearchInput.bind(this)} handleSearchClick={this.handleSearchClick.bind(this)}
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


//add - handle user input
  //handle click 
    //update state.fullList with additional movie 
