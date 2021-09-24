class TypeWriter {
	constructor(textElement, phrase) {
		this.textElement = textElement;
		this.phrase = phrase;
		this.text = '';
		this.type();
	}

	type() {
		let timer;
		const fullText = this.phrase;

		this.text = fullText.substring(0, this.text.length + 1);

		this.textElement.classList.add('cursor');

		this.textElement.innerHTML = `<span>${this.text}</span>`; // class="cursor

		let typeSpeed = 75;

		timer = setTimeout(() => this.type(), typeSpeed);

		if (this.text.length === this.phrase.length) {
			clearTimeout(timer);
			this.textElement.classList.remove('cursor');
			navSlideAnimation();
		}
	}
}

// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		init();
	}, 1500)
);

// Init
function init() {
	const greetingElement = document.querySelector('.welcome-text--main');
	const greeting = greetingElement.getAttribute('data-textGreet');
	const introElement = document.querySelector('.welcome-text--intro');
	const introduction = introElement.getAttribute('data-textIntro');
	new TypeWriter(greetingElement, greeting);
	setTimeout(function () {
		new TypeWriter(introElement, introduction);
	}, 2000);
	// introOverlay();
}

function navSlideAnimation() {
	const logo = document.querySelector('.nav__logo');
	const navItems = document.querySelectorAll('.nav__item');
	logo.classList.add('slide-down');
	navItems.forEach(item => item.classList.add('slide-left'));
}

//NOTE - EXTRA INTRO ANIMATION FOR init FUNCTION THAT I CANNOT GET TO WORK

// const introCode = [
// 	'type() {',
// 	'let timer;',
// 	'const fullText = this.phrase;',

// 	'this.text = fullText.substring(0, this.text.length + 1);',

// 	'this.textElement.classList.add("cursor");',

// 	'this.textElement.innerHTML = `<span>${this.text}</span>`;',

// 	'let typeSpeed = 100;',

// 	'timer = setTimeout(() => this.type(), typeSpeed);',

// 	'if (this.text.length === this.phrase.length) {',
// 	'clearTimeout(timer);',
// 	'this.textElement.classList.remove("cursor");',
// 	'}',
// 	'}',
// 	'}',
// ];

// const introOverlay = function () {
// 	let codeElement = [];
// 	let codeSnippet = [];
// 	for (let i = 1; i < 15; i++) {
// 		eval(
// 			`const code${i} = document.querySelector('.code__snippet--${i}')`;
// 			);
// 		eval

// 			const codeSnippet${i} = code${i}.getAttribute('data-text-${i}');
// 			new TypeWriter(code[i], codeSnippet[i])`
// 	}
// };

// const code1 = document.querySelector('.code__snippet--1');
// const code2 = document.querySelector('.code__snippet--2');
// const code3 = document.querySelector('.code__snippet--3');
// const code4 = document.querySelector('.code__snippet--4');
// const code5 = document.querySelector('.code__snippet--5');
// const code6 = document.querySelector('.code__snippet--6');
// const code7 = document.querySelector('.code__snippet--7');
// const code8 = document.querySelector('.code__snippet--8');
// const code9 = document.querySelector('.code__snippet--9');
// const code10 = document.querySelector('.code__snippet--10');
// const code11 = document.querySelector('.code__snippet--11');
// const code12 = document.querySelector('.code__snippet--12');
// const code13 = document.querySelector('.code__snippet--13');
// const code14 = document.querySelector('.code__snippet--14');

// const introOverlay = function () {
// 	for (let i = 1; i < 15; i++) {
// 		new TypeWriter(code1, introCode[i]);
// 	}
// };

// const codeSnippet1 = code1.getAttribute('data-text-1');
// const codeSnippet2 = code2.getAttribute('data-text-2');
// const codeSnippet3 = code3.getAttribute('data-text-3');
// const codeSnippet4 = code4.getAttribute('data-text-4');
// const codeSnippet5 = code5.getAttribute('data-text-5');
// const codeSnippet6 = code6.getAttribute('data-text-6');
// const codeSnippet7 = code7.getAttribute('data-text-7');
// const codeSnippet8 = code8.getAttribute('data-text-8');
// const codeSnippet9 = code9.getAttribute('data-text-9');
// const codeSnippet10 = code10.getAttribute('data-text-10');
// const codeSnippet11 = code11.getAttribute('data-text-11');
// const codeSnippet12 = code12.getAttribute('data-text-12');
// const codeSnippet13 = code13.getAttribute('data-text-13');
// const codeSnippet14 = code14.getAttribute('data-text-14');

// new TypeWriter(code1, codeSnippet1);
// new TypeWriter(code2, codeSnippet2);
// new TypeWriter(code3, codeSnippet3);
// new TypeWriter(code4, codeSnippet4);
// new TypeWriter(code5, codeSnippet5);
// new TypeWriter(code6, codeSnippet6);
// new TypeWriter(code7, codeSnippet7);
// new TypeWriter(code8, codeSnippet8);
// new TypeWriter(code9, codeSnippet9);
// new TypeWriter(code10, codeSnippet10);
// new TypeWriter(code11, codeSnippet11);
// new TypeWriter(code12, codeSnippet12);
// new TypeWriter(code13, codeSnippet13);
// new TypeWriter(code14, codeSnippet14);
