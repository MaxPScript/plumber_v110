log = console.log;

// const headers = document.querySelectorAll(".header__titles > h1,h3");
const headers = document.querySelectorAll("h1, h2, h3");
log(headers);
// headers.forEach((el) => {
// 	log(el.innerText);
// });

window.addEventListener("load", () => {
	headers.forEach((el, index) => {
		let span = document.createElement("span");
		span.style = `
    position: absolute;
    // top: ${40 * index}px;
    right: 0;
    color: red;
	// font-size
    letter-spacing: 1px;
`;
		let fsz = window.getComputedStyle(el).getPropertyValue("font-size");
		let digits = fsz.match(/[0-9.]+/g).join("");
		let toFixed = (+digits).toFixed(2);
		// 	let span = document.createElement("span");
		// 	span.style = `
		//         position: absolute;
		//         top: ${40 * index}px;
		//         right: 0;
		//         color: orange;
		//         letter-spacing: 1px;
		// `;
		span.textContent = `
            ${el.nodeName} ${toFixed}
        `;
		el.appendChild(span);
	});
});

window.addEventListener("resize", () => {
	const headers = document.querySelectorAll(".header__titles h1, h3");
	headers.forEach((el, index) => {
		let fsz = window.getComputedStyle(el).getPropertyValue("font-size");
		// log(headers[0]);
		let digits = fsz.match(/[0-9.]+/g).join("");
		let toFixed = (+digits).toFixed(2);
		// log(toFixed);
		let span = el.querySelector("span");
		// 	let span = document.createElement("span");
		// 	span.style = `
		//         position: absolute;
		//         top: ${40 * index}px;
		//         right: 0;
		//         color: orange;
		//         letter-spacing: 1px;
		// `;
		span.textContent = `
		        ${toFixed}
		    `;
		// 		span.replaceWith(span);
	});
});
