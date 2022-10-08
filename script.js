$(".btn-play").on("click", function (event) {
	document.querySelector('.second-screen').scrollIntoView({
		behavior: 'smooth'
	});
});

$(".btn-back").on("click", function (event) {
	document.querySelector('.first-screen').scrollIntoView({
		behavior: 'smooth'
	});
});