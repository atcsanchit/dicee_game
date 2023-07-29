var d1=Math.floor((Math.random()*5)+1);
var d2=Math.floor((Math.random()*5)+1);

var address=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src",address[d1-1]);
document.querySelector(".img2").setAttribute("src",address[d2-1]);
if(d1>d2)
{
    document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(d2>d1)
{
    document.querySelector("h1").innerHTML="Player 2 won!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}