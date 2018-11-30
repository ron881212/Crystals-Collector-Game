var targetScore;
var wins = 0;
var losses = 0;
var totalScore = 0;
var counter = 0;

var startGameNum = Math.floor(Math.random() * 120) + 19;

var numberOptions = [8, 13, 4, 9];

console.log(startGameNum);

$(".neededScore").text('Target Score: ' + startGameNum);
$(".winners").text('Wins: ' + wins);
$(".losers").text('Losses: ' + losses);

$("#cryImg1").on("click", function(){
    var crystal1 = numberOptions[0];
    $(".totalScoreText2").text(counter += crystal1);
    game();
});

$("#cryImg2").on("click", function(){
    var crystal2 = numberOptions[1];
    $(".totalScoreText2").text(counter += crystal2);
    game();
});

$("#cryImg3").on("click", function(){
    var crystal3 = numberOptions[2];
    $(".totalScoreText2").text(counter += crystal3);
    game();
});

$("#cryImg4").on("click", function(){
    var crystal4 = numberOptions[3];
    $(".totalScoreText2").text(counter += crystal4);
    game();
});


function reset(){
    startGameNum = Math.floor(Math.random() * 120) + 19;
}

function game(){
    if(counter === startGameNum){      
        wins++;
        $(".winners").text('Wins: ' + wins);
        reset();
        $(".neededScore").text('Target Score: ' + startGameNum);
        counter = 0;
        $(".totalScoreText2").text("0");
        alert("You won");
    } else if(counter > startGameNum){
        losses++;
        $(".losers").text('Losses: ' + losses);
        reset();
        $(".neededScore").text('Target Score: ' + startGameNum);
        counter = 0;
        $(".totalScoreText2").text("0");
        alert("You lose");
    }
};