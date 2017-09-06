function buildGrid (canvasSize, gridLength) {

  var numberOfPixels = gridLength * gridLength;
	var pixelSize = canvasSize / gridLength
  var pixel = "<div class='pixel'></div>"

	$('#canvas').empty();

  for(var i = 0; i < numberOfPixels; i++) {
		$('#canvas').append(pixel);
  }

  $('.pixel').css({
  	height: pixelSize,
    width: pixelSize
  });

  $('#sizeStatus').empty();
  $('#sizeStatus').append("Grid Size: " + gridLength + " x " + gridLength);
}

$(document).ready( () => {

  var canvasSize = 350;
  var defaultGridLength = 10;
  var gridLength = defaultGridLength;

  $('#sizeStatus').css({
    width: canvasSize
  });

  $('#canvas').css({
    height: canvasSize,
    width: canvasSize
  });

	buildGrid(canvasSize, defaultGridLength);

	$('#gridLength').on('click', () => {
  	var newLength = prompt("Enter a new length for the grid:", gridLength);
    if (!newLength)
  		gridLength = defaultGridLength;
    else
    	gridLength = newLength;
    buildGrid(canvasSize, gridLength);
  });

});
