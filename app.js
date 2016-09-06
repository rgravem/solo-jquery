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

$('body').on('click', '#yellowCube', function(){
  if ($(this).attr('id') === 'yellowCube'){
    $(this).remove();
    yellow--;
    $('#yellow').html("Total yellow: " + yellow);
    console.log('remove event');
  }

});
$('body').on('click', '#redCube', function(){
  if ($(this).attr('id') === 'redCube'){
    $(this).remove();
    red--;
    $('#red').html("Total red: " + red);
    console.log('remove event');
  }

});
$('body').on('click', '#blueCube', function(){
  if ($(this).attr('id') === 'blueCube'){
    $(this).remove();
    blue--;
    $('#blue').html("Total blue: " + blue);
    console.log('remove event');
  }

});
$('body').on('click', '#greenCube', function(){
  if ($(this).attr('id') === 'greenCube'){
    $(this).remove();
    console.log('remove event');
    green--;
    $('#green').html("Total green: " + green);
  }

});
});

var redclick = function(){
  red ++;
  $('#red').html("Total red: " + red);
  $('.container').append("<div class='color-cube red' id='redCube'></div>");
};

var yellowclick = function(){
  yellow ++;
  $('#yellow').html("Total yellow: " + yellow);
  $('.container').append("<div class='color-cube yellow' id='yellowCube'></div>");
};

var greenclick = function(){
  green ++;
  $('#green').html("Total green: " + green);
  $('.container').append("<div class='color-cube green' id='greenCube'></div>");
};

var blueclick = function(){
  blue ++;
  $('#blue').html("Total blue: " + blue);
  $('.container').append("<div class='color-cube blue' id='blueCube'></div>");
};
