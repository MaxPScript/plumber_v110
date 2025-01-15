const { log } = console;
//
export function slideNow(slider, handlers, data) {
	const dataLeft = [
		[0, 2, 1],
		[0, -1, 1],
		[0, -1, -2],
	];
	const dataRight = [
		[0, 1, 2],
		[0, 1, -1],
		[0, -2, -1],
	];
	let pointerLeft = 0;
	let pointerRight = 0;
	let branchL = false;
	let branchR = false;

	const items = document.querySelectorAll(".slider_1 div");
	log(items);
	//
	const len = items.length;
	const buttons = document.querySelectorAll(".buttons_1 button");
	buttons.forEach((_, index) => {
		_.addEventListener("click", slide);
	});
	function slide(ev) {
		if (ev.target.innerText === "Left") {
			branchR ? (pointerLeft = len - pointerRight) : null;
			pointerLeft++;
			//
			items.forEach((_, index) => {
				index === pointerLeft - 1
					? (_.style.zIndex = "-1")
					: (_.style.zIndex = "auto");
			});
			//
			pointerLeft %= len;
			// log(`pointerLeft: ${pointerLeft}`);
			// log(`pointerRight: ${pointerRight}`);
			items.forEach((_, index) => {
				// _.style.opacity = '0';
				// _.style.zIndex = `${dataLeft[index][pointerLeft]}`;
				translateToX(_, dataLeft[index][pointerLeft]);
				// _.style.opacity = '1';
			});
			branchL = true;
			branchR = false;
		} else {
			branchL ? (pointerRight = len - pointerLeft) : null;
			pointerRight++;
			//
			items.forEach((_, index) => {
				index === len - pointerRight
					? (_.style.zIndex = "-1")
					: (_.style.zIndex = "auto");
			});
			//
			pointerRight %= len;
			// log(`pointerLeft: ${pointerLeft}`);
			// log(`pointerRight: ${pointerRight}`);
			items.forEach((_, index) => {
				translateToX(_, dataRight[index][pointerRight]);
			});
			branchR = true;
			branchL = false;
		}
	}
	//
	function translateToX(item, number) {
		number *= 100;
		item.style.transform = `translateX(${number}%)`;
	}
}
