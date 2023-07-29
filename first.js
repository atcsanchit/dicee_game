var d1=Math.floor((Math.random()*5)+1);
var d2=Math.floor((Math.random()*5)+1);

var address=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

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
