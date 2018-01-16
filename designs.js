// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var pixel_canvas = $('#pixel_canvas');
  for (var x = 1; x < height; x++) {
    var row = document.createElement('tr');
    for (var y = 1; y < width; y++) {
      var cell = document.createElement('td');
      row.append(cell);
    }
    pixel_canvas.append(row);
    console.log(pixel_canvas);
  }
};

makeGrid(15, 25);
