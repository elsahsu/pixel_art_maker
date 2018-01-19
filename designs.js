// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var pixel_canvas = $('#pixel_canvas');
  pixel_canvas.empty();
  for (var x = 0; x < height; x++) {
    var row = document.createElement('tr');
    for (var y = 0; y < width; y++) {
      var cell = document.createElement('td');
      row.append(cell);
    }
    pixel_canvas.append(row);
    console.log(pixel_canvas);
  }
};
//prevent page reloading when submitting values
$('#sizePicker').submit(function(evt){
  console.log(evt);
  event.preventDefault();
  var width = $('#input_width').val();
  var height = $('#input_height').val();
  console.log(width, height);
  makeGrid(height, width);
});

//define currentColor
var currentColor = "#000";

//Change the currentColor to the selected one
$("#colorPicker").change(function() {
  currentColor = $(this).val();
});
