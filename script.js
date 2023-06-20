// (function($) { // Begin jQuery
//     $(function() { // DOM ready
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         // Close one dropdown when selecting another
//         $('.nav-dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       // Clicking away from dropdown will remove the dropdown class
//       $('html').click(function() {
//         $('.nav-dropdown').hide();
//       });
//       // Toggle open and close nav styles on click
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       // Hamburger to X toggle
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); // end DOM ready
//   })(jQuery); // end jQuery



//   //Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


$(document).ready(function(){
	
	// Scrollspy initiation
	$('body').scrollspy({ 
		target: '#scroll-spy',
		offset: 70
	});

	// On render, adjust body padding to ensure last Scroll target can reach top of screen
	var height = $('#howto').innerHeight();
	var windowHeight = $(window).height();
	var navHeight = $('nav.navbar').innerHeight();
	var siblingHeight = $('#howto').nextAll().innerHeight();


	if(height < windowHeight){
		$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
	}

	// On window resize, adjust body padding to ensure last Scroll target can reach top of screen
	$(window).resize(function(event){
		var height = $('#howto').innerHeight();
		var windowHeight = $(window).height();
		var navHeight = $('nav.navbar').innerHeight();
		var siblingHeight = $('#howto').nextAll().innerHeight();
		
		
		if(height < windowHeight){
			$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
		}
	});
	
	$('nav.navbar a, .scrollTop').click(function(event){
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash (#)
			var hash = this.hash;
			
			// Ensure no section has relevant class
			$('section').removeClass("focus");

			// Add class to target
			$(hash).addClass("focus");

			// Remove thy class after timeout
			setTimeout(function(){
				$(hash).removeClass("focus");
			}, 2000);			
			
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 69
			}, 600, function(){
				
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;				
			});
					
			// Collapse Navbar for mobile view
			$(".navbar-collapse").collapse('hide');			
		}

	});
	$(window).scroll(function(){
		var scrollPos = $('body').scrollTop();
		if(scrollPos > 0){
			$('.navbar').addClass('show-color');
			$('.scrollTop').addClass('show-button');
		} else{
			$('.navbar').removeClass('show-color');
			$('.scrollTop').removeClass('show-button');
		}
		
	});
});







// new nav bar



