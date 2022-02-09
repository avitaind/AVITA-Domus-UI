/*Brightness*/
$("#slider-bright").roundSlider({
    radius: 80,
    circleShape: "half-top",
    sliderType: "min-range",
    showTooltip: false,
    value: 50
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
    showTooltip: false,
    value: 50
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
    showTooltip: false,
    value: 50
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
    value: 50
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

