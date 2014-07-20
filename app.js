$(document).ready(function(){
	
	var item = $('#iteminput').val();
	

	$("#add").on("click", function(){
		$("ul").append("<li>" + (item) + "</li>")
	});
	


	$("#hide").on("click", function() {
		$(this).closest("#app").find("li")
			if($("li").hasClass("complete")) {
				$(".complete").remove()
			}
	});

	
})