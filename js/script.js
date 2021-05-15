$(document).ready(function() {

	function setFixedHeader() {
		$('.navbar').addClass('colored-nav');
		$('.navbar').addClass('gradient-gba');
		$("#scroll-top-div").fadeIn('500');	
	}


	function activateMenu(menu) {
        document.getElementById("gbahome").style.color = "rgb(0, 51, 153)";
        document.getElementById("gbaabout").style.color = "rgb(0, 51, 153)";
        document.getElementById("gbaservices").style.color = "rgb(0, 51, 153)";
		document.getElementById("gbacontact").style.color = "rgb(0,51,153)";
		document.getElementById("gbacasestudy").style.color = "rgb(0,51,153)";
		document.getElementById("gbaleadership").style.color = "rgb(0,51,153)";
        document.getElementById(menu).style.color = "saddlebrown";

		console.log('setting active: ' + menu);
		
	}
	function setCardHeight()
	{
		var cards = [['servOff1','servOff2','servOff3'],['caseR1C1','caseR1C2','caseR1C3'],['caseR2C1','caseR2C2','caseR2C3'],['about1','about2','about3'],['leadershipR1C1','leadershipR1C2'],['leadershipR2C1','leadershipR2C2']];
		cards.forEach((row)=>{
			var maxheight = 0;
			row.forEach((cell)=>{
				var ele = document.getElementById(cell);
				maxheight = Number(ele.offsetHeight) > maxheight ? Number(ele.offsetHeight) : maxheight;
			});
			console.log("height" + maxheight);
			row.forEach((cell)=>{
				var ele = document.getElementById(cell);
				ele.style.height = maxheight + 20 + "px";
				 
			});
		});
	}

	setFixedHeader();
	activateMenu('gbahome');
	setCardHeight();

	// OWL CAROUSEL INSTALLATION
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:true
	});
	$("#home-slider").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:false,
		navigation:true,
        navigationText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
        autoPlay: 5000,
        stopOnHover: true

	});

	/* Navigation Menu*/
	var offsettop = $('.navbar').offset().top;
	if (offsettop > 50) {
        $('.navbar').addClass('colored-nav');
        $('.navbar').addClass('gradient-gba');
        $("#scroll-top-div").fadeIn('500');
    } else {
        // $('.navbar').removeClass('colored-nav');
        // $('.navbar').removeClass('gradient-violat');
		// $("#scroll-top-div").fadeOut('500');
    }
	var num = 50; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.navbar').addClass('colored-nav');
	        $('.navbar').addClass('gradient-gba');
	        $("#scroll-top-div").fadeIn('500');
	    } else {
	        // $('.navbar').removeClass('colored-nav');
	        // $('.navbar').removeClass('gradient-violat');
	        // $("#scroll-top-div").fadeOut('500');
	    }
	});



	/* SMOOTH SCROLLING SCRIPT*/
	// Add smooth scrolling to all links
	$(".navbar-nav li a").on('click', function(event) {

		console.dir(event.target.id);

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});

			activateMenu(event.target.id);

		} // End if
	});

	/****************************BACK TO TOP************************************/
	$('#scroll-top-div').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
	});

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a:not(".dropdown-toggle")')) {
            $(this).collapse('hide');
        }
    });
 
});