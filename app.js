$(document).ready(function(){

	$("#add").on("click", function(){
		var item = $("#iteminput").val();
		$("ul").append("<li>" + item + "</li>")
		$("input").val(" ");
	});

	$(document).keyup(function(e){
		if (e.which==13) {
			$("#add").click();
		}
	});

	$(document).on("click", "li", function() {
  		$(this).toggleClass("complete");
	});

	$(document).on("dblclick", "li", function() {
		$(this).remove();
	});

	$("#hide").on("click", function() {
		$(this).closest("#app").find("li")
			if($("li").hasClass("complete")) {
				$(".complete").remove()
			}
	});

})