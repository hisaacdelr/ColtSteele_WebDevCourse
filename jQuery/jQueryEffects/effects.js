// $("button").on("click", function(){
// 	$('div').fadeIn(1000, function(){
// 		//code inside is guaranteed to run after the fadeout
// 		$(this).remove();
// 	}); //but doesn't remove div from page, just display: none
// });


// $("button").on("click", function(){
// 	$('div').fadeToggle(500, function(){
// 		//code inside is guaranteed to run after the fadeout
		
// 	}); //but doesn't remove div from page, just display: none
// });

$("button").on("click", function(){
	$('div').slideToggle(500);
		
});

