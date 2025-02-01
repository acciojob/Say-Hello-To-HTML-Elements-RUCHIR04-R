document.addEventListener('DOMContentLoaded', function() {
console.log("javaScript is running!");
	const heading = document.querySelector(h1);
	heading.addEventListener('click', function() {
		heading.textContent = "You clicked the heading";
	});
});
