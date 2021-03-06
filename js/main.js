window.onload = function () {
	document.querySelector('body').style.opacity = '1'
};
/* -----scrollTop------- */
$(function () {
	$('.nav-top__item').click(function () {
		$('body, html').animate({ scrollTop: $('#' + $(this).data('value')).offset().top - 50 }, 1500);
	});
});
/* ------fixed-top------- */
$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.header-top__wrapper').addClass('fixed-top');
		} else {
			$('.header-top__wrapper').removeClass('fixed-top');
		}
	});
});
/* --------tabs-------------- */
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let labelTab1 = document.getElementById('labelTab1');
let labelTab2 = document.getElementById('labelTab2');


let tabFun = function () {
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
};
tabFun();

tab1.addEventListener('change', tabFun);
tab2.addEventListener('change', tabFun);
tab3.addEventListener('change', tabFun);
/* --------tabs end-------------- */


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
	};
}

/* --------------------- */
let modalTitle = document.getElementById('modal-title');
let buttonClick = document.getElementsByClassName('button-click');

let title = function () {
	for (let i = 0; i < buttonClick.length; i++) {
		buttonClick[i].addEventListener('click', function () {
			modalTitle.textContent = buttonClick[i].textContent
		})
	}
};
title();
/* -----------tooltips-------- */
let autoCheck = document.getElementById('autoCheck');
let tooltips = document.getElementsByClassName("tooltip");

let tooltipsClick = function () {
	let wimWidth = window.innerWidth;
	if (wimWidth > 640) {
		for (let i = 0; i < tooltips.length; i++) {
			tooltips[i].onclick = function () {

				this.classList.toggle('is-opens');

				let tooltipsContent = this.firstElementChild;

				if (!tooltips[i].classList.contains('is-opens')) {
					tooltipsContent.style.opacity = '0';
					setTimeout(function () {
						tooltipsContent.style.display = 'none';
						tooltips[i].classList.remove('is-opens');
					}, 301);
				} else {
					tooltipsContent.style.display = 'block';
					setTimeout(function () {
						tooltipsContent.style.opacity = '1';
					}, 1);
				}

				autoCheck.addEventListener('click', function (el) {
					if ((!tooltips[i].classList.contains('is-opens')) || (!el.target.classList.contains('tooltip'))) {
						tooltipsContent.style.opacity = '0';
						setTimeout(function () {
							tooltipsContent.style.display = 'none';
							tooltips[i].classList.remove('is-opens');
						}, 301);
					}
				});
			};
		}

	}
};

tooltipsClick();
/* -----------tooltips-end------- */

/* -------------form send----------- */
$(document).ready(function ($) {

	// Отправляет данные из формы на сервер и получает ответ
	$('form').on('submit', function (event) {

		event.preventDefault();
		var formID = $(this).attr('id'); // Получение ID формы
		var formNm = $('#' + formID);

		// var form = $('#form'),
		// 	// button = $('#button'),
		// 	answer = $('#answer'),
		// 	loader = $('#loader');

		$.ajax({
			url: 'send.php',
			type: 'POST',
			data: formNm.serialize(),
			beforeSend: function () {
				// answer.empty();
				// loader.fadeIn();
			},

			success: function (result) {
				// setTimeout(function () {
				// 	loader.fadeOut();
				// 	answer.css('display', 'flex');
				// 	answer.text('Сообщение успешно отправлено.');
				// 	// });
				// }, 600);
				// setTimeout(function () {
				// 	modalHide();  //см.функции выше
				// 	$('#form').trigger("reset");

				// }, 1500);
				console.log('ok');
			},

			error: function () {
				console.log('хрен');
				loader.fadeOut(600, function () {
					answer.css('display', 'flex');
					answer.text('Произошла ошибка! Попробуйте позже.');
				});
				setTimeout(function () {
					answer.fadeOut(1700, function () {
						answer.hide();
					});
				}, 2800);
			}
		});
	});
});

/* -------------------------- */

// Cache selectors
var lastId,
	topMenu = $(".nav-top__items"),
	topMenuHeight = topMenu.outerHeight() + 15,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

// Bind to scroll
$(window).scroll(function () {

	var fromTop = $(this).scrollTop() + topMenuHeight;

	var cur = scrollItems.map(function () {
		if (($(this).offset().top - 50) < fromTop)
			return this;
	});

	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
		lastId = id;

		menuItems
			.parent().removeClass("active")
			.end().filter("[href='#" + id + "']").parent().addClass("active");
	}
});


function slickifyTop() {
	$('.stat-slide').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		dots: false,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		],
	});
}

function slickifySecret() {
	$('.stat-slide-secret').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		dots: false,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1550,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}



let reportWindowSize = function () {
	let ww = window.innerWidth;
	if (ww < 1600) {
		slickifySecret();
	}
}
let reportWindowSize11 = function () {
	let ww1 = window.innerWidth;
	if (ww1 < 1200) {
		slickifyTop();
	}
}
reportWindowSize();
reportWindowSize11();



/* --------open menu------------ */
let mobileMenuS = document.getElementById('mobileMenuS');
let buttonOpen = document.getElementById('buttonOpen');
let mobileMenu = document.getElementById('mobileMenu');
let body = document.getElementById('body');

let menuActivate = document.querySelectorAll('.mobile-menu__activate');
for (let i = 0; i < menuActivate.length; i++) {
	menuActivate[i].addEventListener('click', function () {
		if (mobileMenu.classList.contains('menu-active')) {
			mobileMenu.classList.remove('menu-active')
			mobileMenuS.classList.remove('mobile-menu__s-active')
			body.style.overflowY = 'auto';
		} else {
			mobileMenu.classList.add('menu-active')
			mobileMenuS.classList.add('mobile-menu__s-active')
			body.style.overflowY = 'hidden';
		};

	})
}

/* ------------------- */

