;(function(){
	// Сворачивание и разворачивание по клику на МЕНЮ подпунктов меню хедера
    var menuMobileButton = document.querySelector('.header_menu_mobile_item_menu');
    menuMobileButton.addEventListener('click', function(e) {
        e.preventDefault();
        var menu = document.querySelector('.header_menu_content');
        if (menu.style.display != 'flex') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    })

    // Показ и скрытие того, чем занимается каждый юрист с картинки. Мобильная версия.
    var employee_items = document.querySelector('.employee_items');
    var holeList = employee_items.querySelectorAll('.page_form_button');

    for (var i = 0; i < holeList.length; i++) {
        holeList[i].addEventListener('click', function() {
            this.parentNode.nextElementSibling.style.display = 'block';
        })
    }
    var closeExperience = employee_items.querySelectorAll('.close_full_experience');
    for(var i = 0; i < holeList.length; i++) {
        closeExperience[i].addEventListener('click', function(){
            this.parentNode.style.display = 'none';
        })
    }
})();

;(function(){

	// Показывать кнопку "Наверх" при скролле, если скролл больше 300px 
    var toTopButton = document.querySelector('.backTop');
    window.onscroll = function(){
	    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	    if (scrolled > 300) {
	        toTopButton.classList.add('backTop_show');
	    } else {
	        toTopButton.classList.remove('backTop_show');
	    }
	}
})();

$(document).ready(function(){
	// Плавные переходы по ссылкам по клику
    $('#shield_menu').on('click', 'a', function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    })



    // Плавный переход наверх по клику на кнопку "Наверх"
    $('.backTop').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 1000);
    })
});

// Для мобильной версии. пр иклике на "Перезвоните мне" - переход вниз в самый низ где форма

$(document).ready(function(){
    var fiveAnchor = $('#5');
    var fiveAnchorOnPage = fiveAnchor.offset().top;
    $('.header_menu_mobile_item_callMe').on('click', function(){
        $('body, html').animate({scrollTop: fiveAnchorOnPage + 720}, 1500);
    })
})

// Заглушка от 10IE
;(function(){
	if (/MSIE 10.0/i.test(navigator.userAgent)) {
		var site_plug_ie10 = document.querySelector('.site_plug_ie10');
		if(site_plug_ie10){
			site_plug_ie10.classList.toggle('site_plug_ie10');
		}
	}
})();