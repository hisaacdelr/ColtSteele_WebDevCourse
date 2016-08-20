//Select all divs and give them a purple background
$("div").css("background", "purple");

//Select all the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

//Select the div with id "third" and give it a orange border
$("#third").css("border", "1px solid orange");

//Bonus: Select the first div only and change its font color to pink
$("div:nth-child(1)").css("color", "pink");
//div:first-of-type also works, first-of-type is a CSS selector