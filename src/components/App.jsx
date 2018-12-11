import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';
import MovieInfo from './MovieInfo.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      fullList: [],
      watched: [],
      searchInput: '',
      addInput: '',
      year: '',
      runtime: '',
      metascore: ''
    }
  }

  queryTMDB(query) {
    var query = query.split(' ').join('+')
    var APIKey = "d625af18b14f003c9fc09de5c2f93de8"
    var searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + APIKey + "&query=" + query;
    
    fetch(searchURL)
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log(data.results[0])
      var id = data.results[0].id 
      var detailURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + APIKey;
      fetch(detailURL)
      .then(body => {
        return body.json();
      })
      .then(body => {
        console.log(body);
        this.setState({
          year: body.release_date.slice(0,4),
          runtime: body.runtime,
          metascore: body.vote_average
        })
      })
    })
  }


  showInfo(e) {
    var entry = e.target.title
    var view = document.getElementById(entry).style.display
    this.queryTMDB(entry)
    if (view === "none") {
      view = "block"
    } else if (view === "block") {
      view = "none"
    }
    document.getElementById(entry).style.display = view;
  }

  showAll() {
    this.setState({
      movieList: this.state.fullList
    })
  }

  filterWatched() {
    this.setState({
      movieList: this.state.watched
    })
  }

  filterToWatch() {
    var allMovies = this.state.fullList
    var toWatch = [];

    for(var i = 0; i < allMovies.length; i++) {
      if(!this.state.watched.includes(allMovies[i])) {
        toWatch.push(allMovies[i]);
      }
    }

    this.setState({
      movieList: toWatch
    })
  }

  watchedClick(e) {
    var prevWatched = this.state.watched.slice(0)
    var movie = e.target.value
    console.log(prevWatched)
    if (!prevWatched.includes(movie)) {
      prevWatched.push(movie);
    } else {
      prevWatched = this.removeMovie(prevWatched, movie)
      }
      this.setState({
        watched: prevWatched
      });
    }
  

  removeMovie(watched, movie) {
    return watched.filter(function(ele) {
      return ele != movie;
    })
  }
  
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
    if(e.keyCode === 13) {
      if(e.target.id === 'add') {
        this.handleAdd(this.state.addInput)
      } else if (e.target.id === 'search') {
        this.handleSearch(this.state.searchInput)
      }
    };
  };

  handleSearch() {
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

  handleAdd() {
    if (this.state.addInput === '') {
      return;
    }
    this.setState({
      fullList: [...this.state.fullList, this.state.addInput],
      movieList: [...this.state.fullList, this.state.addInput],
      addInput: ''
    })
  };
  
  render() {
    return (
      <div>
        <div>
          <span>
            <button className="filter_watched" onClick={this.filterWatched.bind(this)}>watched
            </button>
            <button className="filter_not_watched" onClick={this.filterToWatch.bind(this)}>watch
            </button>
            <button className="show_all" onClick={this.showAll.bind(this)}>show all</button>
          </span>
        </div>
        <Add 
          value={this.state.addInput} 
          handleInput={this.handleInput.bind(this)} 
          handleAdd={this.handleAdd.bind(this)} 
          onKeyDown={this.keyPress.bind(this)}
        />
        <Search
          value={this.state.searchInput} 
          handleInput={this.handleInput.bind(this)} 
          handleSearch={this.handleSearch.bind(this)} 
          onKeyDown={this.keyPress.bind(this)}
        />
        <MovieList
          movieList={this.state.movieList}
          watchedClick={this.watchedClick.bind(this)}
          watched={this.state.watched}
          showInfo={this.showInfo.bind(this)}
          year={this.state.year}
          runtime={this.state.runtime}
          metascore={this.state.metascore}
        />
      </div>
    )
  };

};

export default App;
