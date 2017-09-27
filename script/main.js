$(document).ready( () => {
	$('#editor').focus();

	$("#editor").on("keydown keyup", function(e){
		if(e.key === "Tab"){
			e.preventDefault();
			$("#editor").text($("#editor").text() + ' ');
		}
		console.log(e.key);
	});
});