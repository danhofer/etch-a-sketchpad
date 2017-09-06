$(document).ready( function() {

  var canvasSize = 400;
  var defaultGridLength = 20;
  var gridLength = defaultGridLength;
  var $pixelColor = "black";

  $('#sizeStatus').css({
    width: canvasSize
  });

  $('h1').css({
    width: canvasSize
  });

  $('#canvas').css({
    height: canvasSize,
    width: canvasSize
  });

  $('#black').css("background-color", "hsla(0, 0%, 80%, 1)");
  $('#black').css("color", "black");

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
    pixelColor();
  }

  function pixelColor() {
	  $('.pixel').hover( function() {
    	$(this).css("opacity", "+=0.15");
      if ($pixelColor === "rainbow") {
      	$(this).css("background-color", "hsla(" + Math.floor(Math.random()*360).toString() + "," + Math.floor(Math.random()*100).toString() + "%," + 50 + "%, 1)");
      }
      else {
      	$(this).css("background-color", $pixelColor);
      }
    });
  }

	$('#pixelDensity').on('click', function () {
    var newLength = prompt("Enter a new length for the grid (no larger than 200):", gridLength);
    if (!newLength || !$.isNumeric(newLength) || newLength % 1 != 0 || newLength < 1 || newLength > 200)
      return;
    else
      gridLength = newLength;
    buildGrid(canvasSize, gridLength);
  });

  $('#clear').on('click', function() {
  	$('.pixel').css("background-color","");
  });

  $('#black').on('click', function() {
    $pixelColor = "black";
    $('.button').css("background-color", "");
    $('.button').css("color", "");
    $('#black').css("background-color", "hsla(0, 0%, 80%, 1)");
    $('#black').css("color", "black");
  });

  $('#red').on('click', function() {
  	$pixelColor = "red";
    $('.button').css("background-color", "");
    $('.button').css("color", "");
    $('#red').css("background-color", "hsla(0, 0%, 80%, 1)");
    $('#red').css("color", "black");
  });

  $('#yellow').on('click', function() {
  	$pixelColor = "yellow";
    $('.button').css("background-color", "");
    $('.button').css("color", "");
    $('#yellow').css("background-color", "hsla(0, 0%, 80%, 1)");
    $('#yellow').css("color", "black");
  });

  $('#blue').on('click', function() {
  	$pixelColor = "blue";
    $('.button').css("background-color", "");
    $('.button').css("color", "");
    $('#blue').css("background-color", "hsla(0, 0%, 80%, 1)");
    $('#blue').css("color", "black");
  });

  $('#rainbow').on('click', function() {
  	$pixelColor = "rainbow";
    $('.button').css("background-color", "");
    $('.button').css("color", "");
    $('#rainbow').css("background-color", "hsla(0, 0%, 80%, 1)");
    $('#rainbow').css("color", "black");
  });

  buildGrid(canvasSize, defaultGridLength);

});
