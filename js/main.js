window.onload = function () {
	document.querySelector('body').style.opacity = '1'
};
$(function () {
	$('.nav-top__item').click(function () {
		$('body,html').animate({ scrollTop: $('#' + $(this).data('value')).offset().top }, 1000)
	})
});
/* --------tabs-------------- */
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let labelTab1 = document.getElementById('labelTab1');
let labelTab2 = document.getElementById('labelTab2');

let tabFun = function() {
	if (tab1.checked) {
		labelTab1.style.borderRight = 'none';
		labelTab2.style.borderRight = '1px solid #000';
	}
	if (tab2.checked) {
		labelTab1.style.borderRight = 'none';
		labelTab2.style.borderRight = 'none';
	}
	if (tab3.checked) {
		labelTab1.style.borderRight = '1px solid #000';
		labelTab2.style.borderRight = 'none';
	}
}
tabFun();

tab1.addEventListener('change', tabFun);
tab2.addEventListener('change', tabFun);
tab3.addEventListener('change', tabFun);
/* --------tabs end-------------- */

// let secret1 = document.getElementById('secret1');
// let secret2 = document.getElementById('secret2');
// secret1.addEventListener('click', function() {
// 	secret2.classList.toggle('secret-hide');
// })
let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function () {
		this.classList.toggle('is-open');
		this.classList.toggle('rotate');

		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}