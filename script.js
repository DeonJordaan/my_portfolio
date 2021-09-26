// Typewriting animation functionality
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

		this.textElement.innerHTML = `<span>${this.text}</span>`;

		let typeSpeed = 75;

		timer = setTimeout(() => this.type(), typeSpeed);

		if (this.text.length === this.phrase.length) {
			clearTimeout(timer);
			this.textElement.classList.remove('cursor');
			navAnimation();
		}
	}
}

// Init on DOM Load
document.addEventListener(
	'DOMContentLoaded',
	setTimeout(() => {
		init();
		scrollLabelFade();
	}, 1500)
);

// Initilisation for the typing and fade-in animation
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

// Activating function for the navigation fade animation
function navAnimation() {
	const logo = document.querySelector('.nav__logo');
	const scrollLabel = document.querySelector('.welcome__scroll--label');
	const navItems = document.querySelectorAll('.nav__item');
	// const welcomeSection = document.querySelector('welcome-section');
	logo.classList.add('appear');
	scrollLabel.classList.add('appear');
	navItems.forEach(item => item.classList.add('appear'));
	// welcomeSection.classList.add('appear	');
}

// Intersection Observer to fade out scroll label
function scrollLabelFade() {
	const headerSection = document.querySelector('.welcome-text--main');
	const scrollLabel = document.querySelector('.welcome__scroll--label');

	const observerCallback = entries => {
		const [entry] = entries;
		console.log(entry);
		if (!entry.isIntersecting) scrollLabel.classList.add('fade');
		else scrollLabel.classList.remove('fade');
	};

	const observerOptions = {
		root: null,
		threshold: 0,
	};

	const headerObserver = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	headerObserver.observe(headerSection);
}
