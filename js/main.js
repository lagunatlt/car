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