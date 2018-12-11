import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';
import MovieInfo from './MovieInfo.js';

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
    };
  }

  queryTMDB(query) {
    var query = query.split(' ').join('+');
    var APIKey = "d625af18b14f003c9fc09de5c2f93de8";
    var searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + APIKey + "&query=" + query;

    fetch(searchURL).then(data => {
      return data.json();
    }).then(data => {
      console.log(data.results[0]);
      var id = data.results[0].id;
      var detailURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + APIKey;
      fetch(detailURL).then(body => {
        return body.json();
      }).then(body => {
        console.log(body);
        this.setState({
          year: body.release_date.slice(0, 4),
          runtime: body.runtime,
          metascore: body.vote_average
        });
      });
    });
  }

  showInfo(e) {
    var entry = e.target.title;
    var view = document.getElementById(entry).style.display;
    this.queryTMDB(entry);
    if (view === "none") {
      view = "block";
    } else if (view === "block") {
      view = "none";
    }
    document.getElementById(entry).style.display = view;
  }

  showAll() {
    this.setState({
      movieList: this.state.fullList
    });
  }

  filterWatched() {
    this.setState({
      movieList: this.state.watched
    });
  }

  filterToWatch() {
    var allMovies = this.state.fullList;
    var toWatch = [];

    for (var i = 0; i < allMovies.length; i++) {
      if (!this.state.watched.includes(allMovies[i])) {
        toWatch.push(allMovies[i]);
      }
    }

    this.setState({
      movieList: toWatch
    });
  }

  watchedClick(e) {
    var prevWatched = this.state.watched.slice(0);
    var movie = e.target.value;
    console.log(prevWatched);
    if (!prevWatched.includes(movie)) {
      prevWatched.push(movie);
    } else {
      prevWatched = this.removeMovie(prevWatched, movie);
    }
    this.setState({
      watched: prevWatched
    });
  }

  removeMovie(watched, movie) {
    return watched.filter(function (ele) {
      return ele != movie;
    });
  }

  handleInput(e) {
    if (e.target.id === 'add') {
      this.setState({
        addInput: e.target.value
      });
    } else if (e.target.id === 'search') {
      this.setState({
        searchInput: e.target.value
      });
    }
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      if (e.target.id === 'add') {
        this.handleAdd(this.state.addInput);
      } else if (e.target.id === 'search') {
        this.handleSearch(this.state.searchInput);
      }
    };
  }

  handleSearch() {
    if (this.state.searchInput === '') {
      this.setState({
        movieList: this.state.fullList
      });
      return;
    }

    var matches = [];
    for (var i = 0; i < this.state.fullList.length; i++) {
      if (this.state.fullList[i].toLowerCase().includes(this.state.searchInput.toLowerCase())) {
        matches.push(this.state.fullList[i]);
      }
    }

    if (matches.length > 0) {
      this.setState({
        movieList: matches,
        searchInput: ''
      });
    } else {
      this.setState({
        movieList: ['movie not available'],
        searchInput: ''
      });
    }
  }

  handleAdd() {
    if (this.state.addInput === '') {
      return;
    }
    this.setState({
      fullList: [...this.state.fullList, this.state.addInput],
      movieList: [...this.state.fullList, this.state.addInput],
      addInput: ''
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          React.createElement(
            'button',
            { className: 'filter_watched', onClick: this.filterWatched.bind(this) },
            'watched'
          ),
          React.createElement(
            'button',
            { className: 'filter_not_watched', onClick: this.filterToWatch.bind(this) },
            'watch'
          ),
          React.createElement(
            'button',
            { className: 'show_all', onClick: this.showAll.bind(this) },
            'show all'
          )
        )
      ),
      React.createElement(Add, {
        value: this.state.addInput,
        handleInput: this.handleInput.bind(this),
        handleAdd: this.handleAdd.bind(this),
        onKeyDown: this.keyPress.bind(this)
      }),
      React.createElement(Search, {
        value: this.state.searchInput,
        handleInput: this.handleInput.bind(this),
        handleSearch: this.handleSearch.bind(this),
        onKeyDown: this.keyPress.bind(this)
      }),
      React.createElement(MovieList, {
        movieList: this.state.movieList,
        watchedClick: this.watchedClick.bind(this),
        watched: this.state.watched,
        showInfo: this.showInfo.bind(this),
        year: this.state.year,
        runtime: this.state.runtime,
        metascore: this.state.metascore
      })
    );
  }
};

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiQWRkIiwiTW92aWVJbmZvIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZUxpc3QiLCJmdWxsTGlzdCIsIndhdGNoZWQiLCJzZWFyY2hJbnB1dCIsImFkZElucHV0IiwieWVhciIsInJ1bnRpbWUiLCJtZXRhc2NvcmUiLCJxdWVyeVRNREIiLCJxdWVyeSIsInNwbGl0Iiwiam9pbiIsIkFQSUtleSIsInNlYXJjaFVSTCIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJpZCIsImRldGFpbFVSTCIsImJvZHkiLCJzZXRTdGF0ZSIsInJlbGVhc2VfZGF0ZSIsInNsaWNlIiwidm90ZV9hdmVyYWdlIiwic2hvd0luZm8iLCJlIiwiZW50cnkiLCJ0YXJnZXQiLCJ0aXRsZSIsInZpZXciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0FsbCIsImZpbHRlcldhdGNoZWQiLCJmaWx0ZXJUb1dhdGNoIiwiYWxsTW92aWVzIiwidG9XYXRjaCIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ3YXRjaGVkQ2xpY2siLCJwcmV2V2F0Y2hlZCIsIm1vdmllIiwidmFsdWUiLCJyZW1vdmVNb3ZpZSIsImZpbHRlciIsImVsZSIsImhhbmRsZUlucHV0Iiwia2V5UHJlc3MiLCJrZXlDb2RlIiwiaGFuZGxlQWRkIiwiaGFuZGxlU2VhcmNoIiwibWF0Y2hlcyIsInRvTG93ZXJDYXNlIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixVQUFoQjtBQUNB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LEtBQUttRCxXQUFMLENBQWlCUSxJQUFqQixDQUFzQixJQUF0QixDQUZmO0FBR0Usc0JBQWMsS0FBS0osWUFBTCxDQUFrQkksSUFBbEIsQ0FBdUIsSUFBdkIsQ0FIaEI7QUFJRSxtQkFBVyxLQUFLUCxRQUFMLENBQWNPLElBQWQsQ0FBbUIsSUFBbkI7QUFKYixRQWhCRjtBQXNCRSwwQkFBQyxTQUFEO0FBQ0UsbUJBQVcsS0FBSy9ELEtBQUwsQ0FBV0MsU0FEeEI7QUFFRSxzQkFBYyxLQUFLK0MsWUFBTCxDQUFrQmUsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGaEI7QUFHRSxpQkFBUyxLQUFLL0QsS0FBTCxDQUFXRyxPQUh0QjtBQUlFLGtCQUFVLEtBQUswQixRQUFMLENBQWNrQyxJQUFkLENBQW1CLElBQW5CLENBSlo7QUFLRSxjQUFNLEtBQUsvRCxLQUFMLENBQVdNLElBTG5CO0FBTUUsaUJBQVMsS0FBS04sS0FBTCxDQUFXTyxPQU50QjtBQU9FLG1CQUFXLEtBQUtQLEtBQUwsQ0FBV1E7QUFQeEI7QUF0QkYsS0FERjtBQWtDRDtBQXpNK0IsQ0EyTWpDOztBQUVELGVBQWViLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBBZGQgZnJvbSAnLi9BZGQuanMnO1xuaW1wb3J0IE1vdmllSW5mbyBmcm9tICcuL01vdmllSW5mby5qcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVMaXN0OiBbXSxcbiAgICAgIGZ1bGxMaXN0OiBbXSxcbiAgICAgIHdhdGNoZWQ6IFtdLFxuICAgICAgc2VhcmNoSW5wdXQ6ICcnLFxuICAgICAgYWRkSW5wdXQ6ICcnLFxuICAgICAgeWVhcjogJycsXG4gICAgICBydW50aW1lOiAnJyxcbiAgICAgIG1ldGFzY29yZTogJydcbiAgICB9XG4gIH1cblxuICBxdWVyeVRNREIocXVlcnkpIHtcbiAgICB2YXIgcXVlcnkgPSBxdWVyeS5zcGxpdCgnICcpLmpvaW4oJysnKVxuICAgIHZhciBBUElLZXkgPSBcImQ2MjVhZjE4YjE0ZjAwM2M5ZmMwOWRlNWMyZjkzZGU4XCJcbiAgICB2YXIgc2VhcmNoVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PVwiICsgQVBJS2V5ICsgXCImcXVlcnk9XCIgKyBxdWVyeTtcbiAgICBcbiAgICBmZXRjaChzZWFyY2hVUkwpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzWzBdKVxuICAgICAgdmFyIGlkID0gZGF0YS5yZXN1bHRzWzBdLmlkIFxuICAgICAgdmFyIGRldGFpbFVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9cIiArIGlkICsgXCI/YXBpX2tleT1cIiArIEFQSUtleTtcbiAgICAgIGZldGNoKGRldGFpbFVSTClcbiAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB5ZWFyOiBib2R5LnJlbGVhc2VfZGF0ZS5zbGljZSgwLDQpLFxuICAgICAgICAgIHJ1bnRpbWU6IGJvZHkucnVudGltZSxcbiAgICAgICAgICBtZXRhc2NvcmU6IGJvZHkudm90ZV9hdmVyYWdlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG4gIHNob3dJbmZvKGUpIHtcbiAgICB2YXIgZW50cnkgPSBlLnRhcmdldC50aXRsZVxuICAgIHZhciB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW50cnkpLnN0eWxlLmRpc3BsYXlcbiAgICB0aGlzLnF1ZXJ5VE1EQihlbnRyeSlcbiAgICBpZiAodmlldyA9PT0gXCJub25lXCIpIHtcbiAgICAgIHZpZXcgPSBcImJsb2NrXCJcbiAgICB9IGVsc2UgaWYgKHZpZXcgPT09IFwiYmxvY2tcIikge1xuICAgICAgdmlldyA9IFwibm9uZVwiXG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVudHJ5KS5zdHlsZS5kaXNwbGF5ID0gdmlldztcbiAgfVxuXG4gIHNob3dBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZUxpc3Q6IHRoaXMuc3RhdGUuZnVsbExpc3RcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyV2F0Y2hlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllTGlzdDogdGhpcy5zdGF0ZS53YXRjaGVkXG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclRvV2F0Y2goKSB7XG4gICAgdmFyIGFsbE1vdmllcyA9IHRoaXMuc3RhdGUuZnVsbExpc3RcbiAgICB2YXIgdG9XYXRjaCA9IFtdO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFsbE1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoIXRoaXMuc3RhdGUud2F0Y2hlZC5pbmNsdWRlcyhhbGxNb3ZpZXNbaV0pKSB7XG4gICAgICAgIHRvV2F0Y2gucHVzaChhbGxNb3ZpZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVMaXN0OiB0b1dhdGNoXG4gICAgfSlcbiAgfVxuXG4gIHdhdGNoZWRDbGljayhlKSB7XG4gICAgdmFyIHByZXZXYXRjaGVkID0gdGhpcy5zdGF0ZS53YXRjaGVkLnNsaWNlKDApXG4gICAgdmFyIG1vdmllID0gZS50YXJnZXQudmFsdWVcbiAgICBjb25zb2xlLmxvZyhwcmV2V2F0Y2hlZClcbiAgICBpZiAoIXByZXZXYXRjaGVkLmluY2x1ZGVzKG1vdmllKSkge1xuICAgICAgcHJldldhdGNoZWQucHVzaChtb3ZpZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZXYXRjaGVkID0gdGhpcy5yZW1vdmVNb3ZpZShwcmV2V2F0Y2hlZCwgbW92aWUpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2F0Y2hlZDogcHJldldhdGNoZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgXG5cbiAgcmVtb3ZlTW92aWUod2F0Y2hlZCwgbW92aWUpIHtcbiAgICByZXR1cm4gd2F0Y2hlZC5maWx0ZXIoZnVuY3Rpb24oZWxlKSB7XG4gICAgICByZXR1cm4gZWxlICE9IG1vdmllO1xuICAgIH0pXG4gIH1cbiAgXG4gIGhhbmRsZUlucHV0KGUpIHtcbiAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2FkZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhZGRJbnB1dDogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hJbnB1dDogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICBcbiAga2V5UHJlc3MoZSkge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnYWRkJykge1xuICAgICAgICB0aGlzLmhhbmRsZUFkZCh0aGlzLnN0YXRlLmFkZElucHV0KVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hJbnB1dClcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2hJbnB1dCA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZUxpc3Q6IHRoaXMuc3RhdGUuZnVsbExpc3RcbiAgICAgIH0pIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVzID0gW11cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5mdWxsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZnVsbExpc3RbaV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh0aGlzLnN0YXRlLmZ1bGxMaXN0W2ldKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZUxpc3Q6IG1hdGNoZXMsXG4gICAgICAgIHNlYXJjaElucHV0OiAnJ1xuICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdmllTGlzdDogWydtb3ZpZSBub3QgYXZhaWxhYmxlJ10sXG4gICAgICAgICAgc2VhcmNoSW5wdXQ6ICcnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcblxuICBoYW5kbGVBZGQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWRkSW5wdXQgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZnVsbExpc3Q6IFsuLi50aGlzLnN0YXRlLmZ1bGxMaXN0LCB0aGlzLnN0YXRlLmFkZElucHV0XSxcbiAgICAgIG1vdmllTGlzdDogWy4uLnRoaXMuc3RhdGUuZnVsbExpc3QsIHRoaXMuc3RhdGUuYWRkSW5wdXRdLFxuICAgICAgYWRkSW5wdXQ6ICcnXG4gICAgfSlcbiAgfTtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdGVyX3dhdGNoZWRcIiBvbkNsaWNrPXt0aGlzLmZpbHRlcldhdGNoZWQuYmluZCh0aGlzKX0+d2F0Y2hlZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRlcl9ub3Rfd2F0Y2hlZFwiIG9uQ2xpY2s9e3RoaXMuZmlsdGVyVG9XYXRjaC5iaW5kKHRoaXMpfT53YXRjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNob3dfYWxsXCIgb25DbGljaz17dGhpcy5zaG93QWxsLmJpbmQodGhpcyl9PnNob3cgYWxsPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFkZCBcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRJbnB1dH0gXG4gICAgICAgICAgaGFuZGxlSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgaGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICBvbktleURvd249e3RoaXMua2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaElucHV0fSBcbiAgICAgICAgICBoYW5kbGVJbnB1dD17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9IFxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5rZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8TW92aWVMaXN0XG4gICAgICAgICAgbW92aWVMaXN0PXt0aGlzLnN0YXRlLm1vdmllTGlzdH1cbiAgICAgICAgICB3YXRjaGVkQ2xpY2s9e3RoaXMud2F0Y2hlZENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgd2F0Y2hlZD17dGhpcy5zdGF0ZS53YXRjaGVkfVxuICAgICAgICAgIHNob3dJbmZvPXt0aGlzLnNob3dJbmZvLmJpbmQodGhpcyl9XG4gICAgICAgICAgeWVhcj17dGhpcy5zdGF0ZS55ZWFyfVxuICAgICAgICAgIHJ1bnRpbWU9e3RoaXMuc3RhdGUucnVudGltZX1cbiAgICAgICAgICBtZXRhc2NvcmU9e3RoaXMuc3RhdGUubWV0YXNjb3JlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=