import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: ['Creed 2', 'Back to the Future', 'Sisterhood of the Traveling Pants'],
      fullList: ['Creed 2', 'Back to the Future', 'Sisterhood of the Traveling Pants'],
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
    for(var i = 0; i < this.state.fullList.length; i++) {
      if (this.state.searchInput === '') {
        this.setState({
          movieList: this.state.fullList
        }) 
        return;
      } else if (this.state.fullList[i].includes(this.state.searchInput)) {
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

  handleAddClick() {
    // when clicked, takes state.input and adds it to fullList
    this.setState({
      fullList: [...this.state.fullList, this.state.addInput],
      movieList: [...this.state.fullList, this.state.addInput]
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
