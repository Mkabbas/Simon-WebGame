in_progress = false;

$(document).keydown(function(e) {
    $("h1").css("font-family","Special Elite");
    $("h1").css("padding-top","6%");
    $(".game_over").css("visibility", "hidden");
    if (! in_progress) {
        levelUp();
    }
    in_progress = true;
})

var pattern = [];
var input = [];
var level = 0;
var colors = ["g", "r", "y", "b"];

$(".box").click(function () {
    if (in_progress) {
        input.push($(this).attr("id"));
        effects($(this).attr("id"));
        check();
	}
})

function check() {
    if (pattern[input.length -1] == input[input.length -1]) {
        if (pattern.length == input.length) {
            //next level
            levelUp();
        }
    }
    else {
        gameOver();
    }
}

function levelUp() {
    level++;
    $("h1").text("Level " + level);
    pattern.push(colors[Math.floor(Math.random() * 4)]);
    setTimeout(function() {
        effects(pattern.at(-1));
    }, 500);
    input = [];
}

function gameOver() {
    $(".game_over").css("visibility", "visible");
    level = 0;
    input = [];
    pattern = [];
    in_progress = false;
}


function effects(to_blip) {
    $("#" + to_blip).fadeOut(100).fadeIn(100);
    play_sound(to_blip);
}

function play_sound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
    sound.volume = 0.1;
}
