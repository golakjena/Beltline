;(function($){
	function mobileMenu(){
		$(".menu-button").on("click", function(){
			$(this).toggleClass("menuClose");
			$(".contentLeft").toggleClass("open");
			$("html, body").toggleClass("hiddenView");
		});
	}

	function bookAppointment(){
		$(".btnAppointment").on("click", function(){
			$(this).addClass("onn");
			$(".frmAppointment").slideDown(300);
		});
		$(".btnClose").on("click", function(){
			$(".btnAppointment").removeClass("onn");
			$(".frmAppointment").slideUp(300);
		});
		$(".btnPopClose").on("click", function(){
			$(".btnAppointment").removeClass("onn");
			$(".frmAppointment").slideUp(300);
		});
	}

	function subNav(){
		$(".subNav").each(function(){
			$(this).on("click", function(){
				$(this).toggleClass("off");
				$(this).next("ul").slideToggle(300);
			});
		});
	}

	function detectBrowser(){
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$(".navigation").css({
				"overflow-y":"auto"
			});
			$(".footer").css({
				'position': 'relative'
			});
		}
	}

	$(function(){
		mobileMenu();
		bookAppointment();
		subNav();
		//detectBrowser();
	});

})(jQuery);




