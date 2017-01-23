function _resize() {
   var gal_item_vidth = $(".gallery-wrap .item").width();
   var body_width = $("body").width();
   if (body_width < 1200){var padR=20;} else{var padR=50;}
   $('.gallery-wrap .item .desc').css({'width':gal_item_vidth, 'paddingRight':padR+'%'});
	
	var top_news_item_height = $('.news .top-news .item .text-block').height();
	$('.news .top-news .item').css({'min-height':top_news_item_height+230+'px'});
	
	 if (body_width < 767){$('.home-page .seq .seq-canvas li').css({'background-position':'70% top'});}
	
	$("[aria-labelledby='dropdownMenuFirst']").css({'width': $('#dropdownMenuFirst').width()+'px'});
	
	$(".dropdown_blocks .item").on('click',function(){
		var item = $(this).width();
		$(this).find(".dropdown-menu").each(function() {
			$(this).css({'width': item+'px'});
		});
	})
	
}

var map;


// Update center
$(document).on('click', '.pan-to-marker', function(e) {
  e.preventDefault();

  var lat, lng;

  var $index = $(this).data('marker-index');
  var $lat = $(this).data('marker-lat');
  var $lng = $(this).data('marker-lng');


    // using coordinates
    lat = $lat;
    lng = $lng;


	map.setCenter(lat, lng);
});

$(document).ready(function() {
	$("#search-field").focus(function(e){$(this).addClass("with-value")}).blur(function(e){""===$(this).val()&&$(this).removeClass("with-value")});
	
	$('#menu-wrap li.nav-item').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
	});
	
	
	 _resize();
     $(window).resize(_resize)
	 
	
		map = new GMaps({  
		  div: '#map',
		  lat: -12.043333,
		  lng: -77.028333, 
		}); 
		
		map.addMarker({
			lat: -12.043333,
			lng: -77.028333,
			title: 'Marker with InfoWindow'
		});
		
		map.addMarker({
			lat: -12.763254229048535,
			lng: -77.4565315246582,
			title: 'Marker with InfoWindow'
		});

 
 
	
	
	if($(document).scrollTop()>120){
        $(".nav-wrapper").addClass("mobile-menu");
		$(".mobile-menu .logo").attr('src', '/image/logo_scroll.png');
		$(".logo-column button").css({
			'background': 'url("../image/resp_menu_btn_scroll.png")',
			'width': '50px',
			'height': '32px',
			'margin-top':'10px'
		});
    } else{
        $(".nav-wrapper").removeClass("mobile-menu");
		$(".nav-wrapper .logo").attr('src', '/image/logo.png');
		$(".logo-column button").removeAttr('style');
    }
}); 

$(document).on("scroll",function(){
   if($(document).scrollTop()>120){
        $(".nav-wrapper").addClass("mobile-menu");
		$(".mobile-menu .logo").attr('src', '/image/logo_scroll.png');
		$(".logo-column button").css({
			'background': 'url("../image/resp_menu_btn_scroll.png")',
			'width': '50px',
			'height': '32px',
			'margin-top':'10px'
		});
    } else{
        $(".nav-wrapper").removeClass("mobile-menu");
		$(".nav-wrapper .logo").attr('src', '/image/logo.png');
		$(".logo-column button").removeAttr('style');
    }
});