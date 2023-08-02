let count = 0;

function A() {
	return ++count;
}

function B() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(++count);
		}, 1000);
	});
}

function C() {
	console.log(++count);
}

//first method - using then
// A();
// B().then(() => C());

//second method- using async and await (mordern method)
(async function () {
	A();
	await B();
	C();
})();
