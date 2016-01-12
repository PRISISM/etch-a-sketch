var grid$ = $('#etchgrid');
var cellSize;
$(document).ready(function() {
    draw_grid(16); // Initialize empty grid  
    
    // Normal 
    $(".button").click(function () {
        var input = prompt("What size grid do you want?")
        draw_grid(input);   
        grid$.on("mouseenter", "div", function() {
            $(this).addClass("color");
        });  
    });
    
    // Random Colors
    $(".random").click(function () {
        var input = prompt("What size grid do you want?")
        draw_grid(input);   
        grid$.on("mouseenter", "div", function() {
            $(this).css("background", randomColor());
        });  
    });

    // Gradient 
    $(".gradient").click(function () {
        var input = prompt("What size grid do you want?")
        draw_grid(input);   
        grid$.on("mouseenter", "div", function() {
            $(this).css("opacity", $(this).css("opacity") * 0.75);
        });  
    });

    // Trail 
    $(".trail").click(function () {
        var input = prompt("What size grid do you want?")
        draw_grid(input);

        grid$.on("mouseenter", "div", function() {
            $(this).css("opacity", 0);
            $(this).fadeTo('fast', 1);  
        });  
    });
    

});


var randomColor = function() {
	var red = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	return "#" + red.toHex() + blue.toHex() + green.toHex();
}

Number.prototype.toHex = function() {
	if (this < 16) { return '0' + this.toString(16); }
	return this.toString(16);
}

var clean = function() {
    grid$.off();
}

var draw_grid = function(size) {
    clean();
    cellSize = Math.floor( 960 / size );
    grid$.off;
    grid$.html(''); // empty grid
    for (var i = 0; i < size * size; i+=1) {
        grid$.append("<div class='cell'></div>");
        }
    var width = (($("#etchgrid").width())/ size);
    $(".cell").css({"width":width, "height":width});
    
    };