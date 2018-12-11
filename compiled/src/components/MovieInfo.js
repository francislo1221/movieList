var MovieInfo = ({ title, year, runtime, metascore }) => {
  console.log(title);
  return React.createElement(
    "div",
    { id: title, style: { display: "none" } },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        " Year ",
        year,
        " "
      ),
      React.createElement(
        "li",
        null,
        " Runtime ",
        runtime,
        " "
      ),
      React.createElement(
        "li",
        null,
        " Metascore ",
        metascore,
        " "
      )
    )
  );
};

export default MovieInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllSW5mby5qc3giXSwibmFtZXMiOlsiTW92aWVJbmZvIiwidGl0bGUiLCJ5ZWFyIiwicnVudGltZSIsIm1ldGFzY29yZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFZLENBQUMsRUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNDLE9BQWQsRUFBdUJDLFNBQXZCLEVBQUQsS0FBdUM7QUFDckRDLFVBQVFDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBLFNBQ0E7QUFBQTtBQUFBLE1BQUssSUFBSUEsS0FBVCxFQUFnQixPQUFPLEVBQUNNLFNBQVMsTUFBVixFQUF2QjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQVdMLFlBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFjQyxlQUFkO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0JDLGlCQUFoQjtBQUFBO0FBQUE7QUFIRjtBQURGLEdBREE7QUFTRCxDQVhEOztBQWFBLGVBQWVKLFNBQWYiLCJmaWxlIjoiTW92aWVJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllSW5mbyA9ICh7dGl0bGUsIHllYXIsIHJ1bnRpbWUsIG1ldGFzY29yZX0pID0+IHtcbiAgY29uc29sZS5sb2codGl0bGUpXG4gIHJldHVybiAoXG4gIDxkaXYgaWQ9e3RpdGxlfSBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgPHVsPlxuICAgICAgPGxpPiBZZWFyIHt5ZWFyfSA8L2xpPlxuICAgICAgPGxpPiBSdW50aW1lIHtydW50aW1lfSA8L2xpPlxuICAgICAgPGxpPiBNZXRhc2NvcmUge21ldGFzY29yZX0gPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUluZm87Il19