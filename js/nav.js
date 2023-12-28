log = console.log;

window.addEventListener("scroll", (e) => {
	let svgs = document.querySelectorAll(".navbar__logo svg");
	let nav = document.querySelector(".nav");
	if (getWindowScrollY() > 100) {
		svgs.forEach((el) => {
			el.classList.add("opacity_0");
		});
		nav.classList.add("opacity_0");
	} else {
		svgs.forEach((el) => {
			el.classList.remove("opacity_0");
		});
		nav.classList.remove("opacity_0");
	}
});
function getWindowScrollY() {
	return window.scrollY;
}
