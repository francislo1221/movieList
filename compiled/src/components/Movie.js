import MovieInfo from './MovieInfo.js';

var Movie = ({ movie, key, watchedClick, watched, showInfo, year, runtime, metascore }) => {
  var status = "watch";

  if (watched.includes(movie)) {
    status = "seen";
    movie;
  }

  return React.createElement(
    "div",
    { className: "movie", onClick: showInfo },
    React.createElement(
      "li",
      { title: movie },
      movie,
      React.createElement(
        "span",
        null,
        React.createElement(
          "button",
          {
            value: movie,
            className: "watched_btn",
            onClick: watchedClick },
          status
        )
      ),
      React.createElement(MovieInfo, { title: movie, year: year, runtime: runtime, metascore: metascore })
    )
  );
};

export default Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUluZm8iLCJNb3ZpZSIsIm1vdmllIiwia2V5Iiwid2F0Y2hlZENsaWNrIiwid2F0Y2hlZCIsInNob3dJbmZvIiwieWVhciIsInJ1bnRpbWUiLCJtZXRhc2NvcmUiLCJzdGF0dXMiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUEsSUFBSUMsUUFBUSxDQUFDLEVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxZQUFiLEVBQTJCQyxPQUEzQixFQUFvQ0MsUUFBcEMsRUFBOENDLElBQTlDLEVBQW9EQyxPQUFwRCxFQUE2REMsU0FBN0QsRUFBRCxLQUE2RTtBQUN2RixNQUFJQyxTQUFTLE9BQWI7O0FBRUEsTUFBSUwsUUFBUU0sUUFBUixDQUFpQlQsS0FBakIsQ0FBSixFQUE2QjtBQUMzQlEsYUFBUyxNQUFUO0FBQ0FSO0FBQ0Q7O0FBR0QsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWYsRUFBdUIsU0FBU0ksUUFBaEM7QUFDRTtBQUFBO0FBQUEsUUFBSSxPQUFPSixLQUFYO0FBQW1CQSxXQUFuQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFPQSxLQURUO0FBRUUsdUJBQVUsYUFGWjtBQUdFLHFCQUFTRSxZQUhYO0FBRzBCTTtBQUgxQjtBQURGLE9BREY7QUFRSSwwQkFBQyxTQUFELElBQVcsT0FBT1IsS0FBbEIsRUFBeUIsTUFBTUssSUFBL0IsRUFBcUMsU0FBU0MsT0FBOUMsRUFBdUQsV0FBV0MsU0FBbEU7QUFSSjtBQURGLEdBREE7QUFjRCxDQXZCRDs7QUEwQkEsZUFBZVIsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUluZm8gZnJvbSAnLi9Nb3ZpZUluZm8uanMnXG5cbnZhciBNb3ZpZSA9ICh7bW92aWUsIGtleSwgd2F0Y2hlZENsaWNrLCB3YXRjaGVkLCBzaG93SW5mbywgeWVhciwgcnVudGltZSwgbWV0YXNjb3JlfSkgPT4ge1xuICB2YXIgc3RhdHVzID0gXCJ3YXRjaFwiO1xuXG4gIGlmICh3YXRjaGVkLmluY2x1ZGVzKG1vdmllKSkge1xuICAgIHN0YXR1cyA9IFwic2VlblwiXG4gICAgbW92aWVcbiAgfVxuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnIG9uQ2xpY2s9e3Nob3dJbmZvfT5cbiAgICA8bGkgdGl0bGU9e21vdmllfT57bW92aWV9XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICB2YWx1ZT17bW92aWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwid2F0Y2hlZF9idG5cIlxuICAgICAgICAgIG9uQ2xpY2s9e3dhdGNoZWRDbGlja30+e3N0YXR1c31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgICAgIDxNb3ZpZUluZm8gdGl0bGU9e21vdmllfSB5ZWFyPXt5ZWFyfSBydW50aW1lPXtydW50aW1lfSBtZXRhc2NvcmU9e21ldGFzY29yZX0vPlxuICAgIDwvbGk+XG4gIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7Il19