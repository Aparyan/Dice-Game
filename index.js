//Dice 1
var randomnumber1= Math.floor(Math.random()*6)+1;
var random_dice_img= "images/dice" + randomnumber1 + ".png";
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",random_dice_img);

//Dice 2
var randomnumber2= Math.floor(Math.random()*6)+1;
var random_dice_img= "images/dice" + randomnumber2 + ".png";
var img2= document.querySelectorAll("img")[1].setAttribute("src",random_dice_img);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins";
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").innerHTML= "🚩Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML= "Draw!";
}