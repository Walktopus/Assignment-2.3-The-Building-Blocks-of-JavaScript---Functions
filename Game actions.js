//This is the FlipCoin function this rolls either 1 or 2 if 1 is rolled than it is heads if it rolls 2 than it is tails
function FlipCoin(){
    var player1 = Math.ceil(Math.random() *2);
    document.getElementById("result").innerHTML = " ";
if (player1 == 1)
    {
    document.getElementById("result").innerHTML = "Heads you won!! Lucky";
    }
    else{
  document.getElementById("result").innerHTML = "Tails better luck next time";
    }
}