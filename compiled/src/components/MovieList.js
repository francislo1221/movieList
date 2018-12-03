import Movie from './Movie.js';

var MovieList = ({ movieList }) => React.createElement(
  "div",
  { className: "movie-list" },
  React.createElement(
    "ul",
    null,
    movieList.map((title, index) => {
      return React.createElement(Movie, {
        movie: title,
        key: index
      });
    })
  )
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWUiLCJNb3ZpZUxpc3QiLCJtb3ZpZUxpc3QiLCJtYXAiLCJ0aXRsZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLFlBQWxCOztBQUVBLElBQUlDLFlBQVksQ0FBQyxFQUFDQyxTQUFELEVBQUQsS0FDZDtBQUFBO0FBQUEsSUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFDR0EsY0FBVUMsR0FBVixDQUFjLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUNmO0FBQ0UsYUFDRSxvQkFBQyxLQUFEO0FBQ0UsZUFBT0QsS0FEVDtBQUVFLGFBQUtDO0FBRlAsUUFERjtBQU1ELEtBUkE7QUFESDtBQURGLENBREY7O0FBZ0JBLGVBQWVKLFNBQWYiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gJy4vTW92aWUuanMnO1xuXG52YXIgTW92aWVMaXN0ID0gKHttb3ZpZUxpc3R9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgIDx1bD5cbiAgICAgIHttb3ZpZUxpc3QubWFwKCh0aXRsZSwgaW5kZXgpID0+IFxuICAgICAge1xuICAgICAgICByZXR1cm4gKCAgXG4gICAgICAgICAgPE1vdmllIFxuICAgICAgICAgICAgbW92aWU9e3RpdGxlfVxuICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC91bD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDsiXX0=