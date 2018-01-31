//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

//click on X to delete To Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add to To Do
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo
		var toDoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + toDoText + "</li>");
	}
});

//add listener to plus
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(500);
});
