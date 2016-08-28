//Check Off Specific Todos By Clicking
//use .on() as opposed to $("li").click(function(){})... because that only creates
//listeners to already existing lis and doesn't account for
//lis created in the future
$("ul").on("click", "li", function(){
	//if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){ //use rbg color not "gray"
	// 	$(this).css({ //instead of just setting up css individually
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	//turn it black
	// 		$(this).css({ //instead of just setting up css individually
	// 			color: "gray",
	// 			textDecoration: "line-through"
	// 		});
	// }

	$(this).toggleClass("completed");

});

//click on Trash Can to delete Todo
//event bubbling, event goes up to parent elements
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops event bubbling, 
							 //in this case, stops from triggering parent element click (the strikethrough when you click the li)
});

$("input[type='text']").keypress(function(event){
	//13 is the character code for the Enter key
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//remove text from input
		$(this).val("");
		//create a new li for tasks and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

//toggles the input box
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});