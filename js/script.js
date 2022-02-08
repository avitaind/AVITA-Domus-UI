
/*Function 1*/

$(document).ready( function(){
    $('#toggle-button').click( function() {
        var toggleDisplay = $("#toggle").display() == "none" ? "block" : "none";
        $('#toggle').animate({ display: toggleDisplay });
    });
});

// jQuery v3.3.1 is supported
$("#arc-slider").roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 0,
    startAngle: 50,
    editableTooltip: true,
    radius: 360,
    width: 2,
    handleSize: "+32",
    tooltipFormat: function (args) {
    return args.value + " %";
    }
});

/*Function 2*/

function fun2(){
    console.log("Function 2 clicked");
}


/*Function 3*/

function fun3(){
    console.log("Function 3 clicked");
}


/*Function 4*/

function fun4(){
    console.log("Function 4 clicked");
}