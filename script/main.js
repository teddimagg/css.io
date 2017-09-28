$(document).ready( () => {
	$('#editor').focus();

	$("#editor").on("keydown keyup", function(e){
		let code = $('#editor').html();
		if(e.key === "Tab"){
			e.preventDefault();
			// const caret = $("#editor").caret();
			// code = code.substring(0, caret) + `&nbsp &nbsp` + code.substring(caret, code.length);
			// $("#editor").html(code);
			// $("#editor").caret(caret + 6);
		}
		parseCSS();
	});
});

function parseCSS() {
	let code = $("#editor").text().replace(/\s/g, '');
	let styles = code.match(/\{(.*?)\}/g);
	console.log(styles);
	$('#testButton').removeAttr('style');

	styles && styles.forEach((component, index) => {
		styles[index] = component.slice(1,component.length - 1);
		let styleset = styles[index].split(';');
		styleset.forEach((style, index) => {
			let currentStyle = style.split(':');
			// console.log(currentStyle);
			$('#testButton').css(currentStyle[0], currentStyle[1]);
		});
	});
}