/* ========== nivoSlider js Strat ========== */ 
  $(window).load(function() {
        $('#slider').nivoSlider();
		({
		directionNav: true,
		randomStart: false,	
			})
		
    });

/* ========== Carousel js Strat ========== */
 
 

    $(document).ready(function () {
        $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);

                $name.text($tab.text());

                $info.show();
            }
        });

       
    });

/* ========== Carousel js End ========== */
/* ========== Accodin js Strat ========== */ 
// <![CDATA[			
		$(document).ready(function () {
			$('#pageWrap ul').accordion();
		});		
		// ]]>
/* ========== Accodin js End ========== */
/* ========== Owl Carasol js Strat ========== */ 
$('#owl-example').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
        }
    }
})
$('#owl-example1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
        }
    }
})
/* ========== Owl Carasol js End ========== */
/* ========== Select Dropdown js Strat ========== */ 
$(".myval").select2({
   width: "100%",
 });
/* ========== Select Dropdown js End ========== */
/* ========== Bootstrap Gallery js Strat ========== */
$('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
});
/* ========== Bootstrap Gallery js End ========== */
/* ========== Bootstrap Carousel js Strat ========== */
 $('.carousel').carousel({
       pause: true,
    interval: false
    })
/* ========== Bootstrap Carousel js End ========== */
/* ========== Perfect-Scrollbar js Strat ========== */
$(document).ready(function ($) {
        $('.description').perfectScrollbar({
          wheelSpeed: 20,
          wheelPropagation: false
        });
});
/* ========== Perfect-Scrollbar js End ========== */
/* ========== News (jquery.bootstrap.newsbox) js Strat ========== */
$(function () {
        $(".demo1").bootstrapNews({
            newsPerPage: 3,
            autoplay: true,
			pauseOnHover:true,
            direction: 'up',
			navigation: false,
            newsTickerInterval: 4000,
            onToDo: function () {
                //console.log(this);
            }
        });	
    });
/* ========== News (jquery.bootstrap.newsbox) js End ========== */
(function($) {
	$(function() {
		$(".scroller").simplyScroll({orientation:'vertical',customClass:'vert'});
	});
})(jQuery);
/* ========== Back to top js Strat ========== */ 
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});
/* ========== Back to top js End ========== */
/* ========== Form js Strat ========== */ 
$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
	 });
$(function(){
	$.placeholder.shim();
});
if(Function('/*@cc_on return 8===document.documentMode@*/')()){document.documentElement.className='ie8';}
if(Function('/*@cc_on return 9===document.documentMode@*/')()){document.documentElement.className='ie9';}
/* ========== Form js End ========== */