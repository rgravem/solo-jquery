console.log('js sourced');


var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

$(document).ready(function(){
  $(".red-button").on('click', function(){
    console.log('color-button clicked');
    redclick();
    console.log(red);
  });
  $(".yellow-button").on('click', function(){
    console.log('color-button clicked');
    yellowclick();
    console.log(yellow);
  });
  $(".green-button").on('click', function(){
    console.log('color-button clicked');
    greenclick();
    console.log(green);
  });
  $(".blue-button").on('click', function(){
    console.log('color-button clicked');
    blueclick();
    console.log(blue);
  });
  $('.container').on("click", function () {
    console.log('in remove');
    $(this).children().remove();
});
});

var redclick = function(){
  red ++;
  $('#red').html("Total red: " + red);
  $('.container').append("<div class='color-cube red'></div>");
};

var yellowclick = function(){
  yellow ++;
  $('#yellow').html("Total yellow: " + yellow);
  $('.container').append("<div class='color-cube yellow' id='yellowCube'></div>");
};

var greenclick = function(){
  green ++;
  $('#green').html("Total green: " + green);
  $('.container').append("<div class='color-cube green'></div>");
};

var blueclick = function(){
  blue ++;
  $('#blue').html("Total blue: " + blue);
  $('.container').append("<div class='color-cube blue'></div>");
};
