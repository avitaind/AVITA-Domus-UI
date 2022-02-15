/*Brightness*/
$("#slider-bright").roundSlider({
    radius: 80,
    circleShape: "half-top",
    sliderType: "min-range",
    showTooltip: false,
    value: 50,
    change: function (args) {
        // console.log(args.value);
        // document.getElementById("main").style.opacity = args.value/100 ;
        $('body').css('opacity', args.value/100);

     }        
});



    $(document).ready(function () {
        // Toggles paragraphs display
        $(".toggle-bright").click(function () {
            $(".brightness").toggle();
            document.getElementById("slider-preset").style.display="none";
            document.getElementById("slider-color").style.display="none";
            document.getElementById("slider-timer").style.display="none";
            // $(".toggle-btn").toggle();
        });
    });


/*Presets*/
$("#slider-preset").roundSlider({
    radius: 80,
    circleShape: "half-top",
    sliderType: "min-range",
    min:0,
    max:255,
    showTooltip: false,
    value: 50,
    change: function (args) {
        red = args.value;
        green = args.value;
        blue = args.value;
        color = "#" + ((1 << 255) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
        console.log(color);
        document.getElementById("main").style.background = color;
    }    
});

$(document).ready(function () {
    // Toggles paragraphs display
    $(".toggle-preset").click(function () {
        $(".presets").toggle();
        // $(".toggle-btn").toggle();
        document.getElementById("slider-bright").style.display="none";
        document.getElementById("slider-color").style.display="none";
        document.getElementById("slider-timer").style.display="none";

    });

    
});



/*Colors*/

$("#slider-color").roundSlider({
    radius: 80,
    circleShape: "half-top",
    sliderType: "min-range",
    min:0,
    max:255,
    showTooltip: false,
    value: 50,
    change: function (args) {
        red =  Math.floor((Math.random(args.value) * 255) + 1);
        green =  Math.floor((Math.random(args.value) * 255) + 1);
        blue =  Math.floor((Math.random(args.value) * 255) + 1);
        // color = `rgb(${red},${green},${blue})`;

        color = `rgb(${red},${green},${blue})`;

        console.log(color);
        document.getElementById("main").style.background = color;
    }    
});


$(document).ready(function () {
    // Toggles paragraphs display
    $(".toggle-color").click(function () {
        $(".colors").toggle();
        // $(".toggle-btn").toggle();
        document.getElementById("slider-preset").style.display="none";
        document.getElementById("slider-bright").style.display="none";
        document.getElementById("slider-timer").style.display="none";

    });

    
});





/*Timers*/

$("#slider-timer").roundSlider({
    radius: 80,
    circleShape: "half-top",
    sliderType: "min-range",
    showTooltip: false,
    min: 0,
    max: 255,
    range: true,
    change: _.debounce(function(event, ui) {
       color = "#" + ((1 << 255) + (event.value << 16) + (event.value << 8) + event.value).toString(16).slice(1);
       console.log('just after three seconds');
       document.getElementById("main").style.background = color;
    },3000)
});




$(document).ready(function () {
    // Toggles paragraphs display
    $(".toggle-timer").click(function () {
        $(".timers").toggle();
        // $(".toggle-btn").toggle();
        document.getElementById("slider-preset").style.display="none";
        document.getElementById("slider-color").style.display="none";
        document.getElementById("slider-bright").style.display="none";

    });

    
});



