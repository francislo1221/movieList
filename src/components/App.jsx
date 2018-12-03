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
  
  handleSearchClick() {
    if (this.state.searchInput === '') {
      this.setState({
        movieList: this.state.fullList
      }) 
      return;
    }

    var matches = []
    for(var i = 0; i < this.state.fullList.length; i++) {
      if (this.state.fullList[i].toLowerCase().includes(this.state.searchInput.toLowerCase())) {
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

  handleInput(e) {
    if(e.target.id === 'add') {
      this.setState({
        addInput: e.target.value
      })
    } else if (e.target.id === 'search') {
      this.setState({
        searchInput: e.target.value
      })
    }
  };
  
  keyPress(e) {
    console.log(e.target.id)
    if(e.keyCode === 13) {
      if(e.target.id === 'add') {
        this.handleAddClick(this.state.addInput)
      } else if (e.target.id === 'search') {
        this.handleSearchClick(this.state.searchInput)
      }
    }
  }

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
        <Add value={this.state.addInput} handleInput={this.handleInput.bind(this)} handleAddClick={this.handleAddClick.bind(this)} onKeyDown={this.keyPress.bind(this)}/>
        <Search
          value={this.state.searchInput} handleInput={this.handleInput.bind(this)} handleSearchClick={this.handleSearchClick.bind(this)} onKeyDown={this.keyPress.bind(this)}
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
