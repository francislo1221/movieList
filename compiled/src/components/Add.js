var Add = ({ value, handleInput, handleAdd, onKeyDown }) => {
  return React.createElement(
    'div',
    { className: 'add-bar form-inline' },
    React.createElement('input', { id: 'add', type: 'text', className: 'form-control', value: value, onChange: handleInput, onKeyDown: onKeyDown, placeholder: 'Add Movie..' }),
    React.createElement(
      'button',
      { className: 'btn', onClick: handleAdd },
      React.createElement('span', { className: 'glyphicon glyphicon-plus' })
    )
  );
};

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwidmFsdWUiLCJoYW5kbGVJbnB1dCIsImhhbmRsZUFkZCIsIm9uS2V5RG93biJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTSxDQUFDLEVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUFxQkMsU0FBckIsRUFBZ0NDLFNBQWhDLEVBQUQsS0FBZ0Q7QUFDeEQsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHFCQUFmO0FBQ0UsbUNBQU8sSUFBRyxLQUFWLEVBQWdCLE1BQUssTUFBckIsRUFBNEIsV0FBVSxjQUF0QyxFQUFxRCxPQUFPSCxLQUE1RCxFQUFtRSxVQUFVQyxXQUE3RSxFQUEwRixXQUFXRSxTQUFyRyxFQUFnSCxhQUFZLGFBQTVILEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLEtBQWxCLEVBQXdCLFNBQVNELFNBQWpDO0FBQ0Usb0NBQU0sV0FBVSwwQkFBaEI7QUFERjtBQUZGLEdBREY7QUFVRCxDQVhEOztBQWFBLGVBQWVILEdBQWYiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZCA9ICh7dmFsdWUsIGhhbmRsZUlucHV0LCBoYW5kbGVBZGQsIG9uS2V5RG93bn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgIDxpbnB1dCBpZD0nYWRkJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH0gb25LZXlEb3duPXtvbktleURvd259IHBsYWNlaG9sZGVyPVwiQWRkIE1vdmllLi5cIi8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2hhbmRsZUFkZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGQ7Il19