var Search = ({ value, handleInput, handleSearch, onKeyDown }) => {
  return React.createElement(
    'div',
    { className: 'search-bar form-inline' },
    React.createElement('input', { id: 'search', type: 'text', className: 'form-control', value: value, onChange: handleInput, onKeyDown: onKeyDown, placeholder: 'Search...' }),
    React.createElement(
      'button',
      { className: 'btn', onClick: handleSearch },
      React.createElement('span', { className: 'glyphicon glyphicon-search' })
    )
  );
};

export default Search;

//render Search Bar
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwidmFsdWUiLCJoYW5kbGVJbnB1dCIsImhhbmRsZVNlYXJjaCIsIm9uS2V5RG93biJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxDQUFDLEVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUFxQkMsWUFBckIsRUFBbUNDLFNBQW5DLEVBQUQsS0FBbUQ7QUFDOUQsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0UsbUNBQU8sSUFBRyxRQUFWLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsV0FBVSxjQUF6QyxFQUF3RCxPQUFPSCxLQUEvRCxFQUFzRSxVQUFVQyxXQUFoRixFQUE2RixXQUFXRSxTQUF4RyxFQUFtSCxhQUFZLFdBQS9ILEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLEtBQWxCLEVBQXdCLFNBQVNELFlBQWpDO0FBQ0Usb0NBQU0sV0FBVSw0QkFBaEI7QUFERjtBQUZGLEdBREE7QUFTRCxDQVZEOztBQVlBLGVBQWVILE1BQWY7O0FBRUEiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9ICh7dmFsdWUsIGhhbmRsZUlucHV0LCBoYW5kbGVTZWFyY2gsIG9uS2V5RG93bn0pID0+IHtcbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgaWQ9J3NlYXJjaCcgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlSW5wdXR9IG9uS2V5RG93bj17b25LZXlEb3dufSBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cbi8vcmVuZGVyIFNlYXJjaCBCYXIiXX0=