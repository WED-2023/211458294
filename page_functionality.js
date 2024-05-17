$(document).ready(function() {
    // Menu icon click event
    $('.menu-icon').click(function() {
        $('.mobile-menu').toggleClass('open'); // Toggle the 'open' class
    });

    // Close the mobile menu when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.menu-icon, .mobile-menu').length) {
            $('.mobile-menu').removeClass('open'); // Remove the 'open' class
        }
    });

    // Close the mobile menu when clicking on a menu item
    $('.mobile-menu a').click(function() {
        $('.mobile-menu').removeClass('open'); // Remove the 'open' class
    });

    // Smooth scrolling for menu links
    $("#menu a").click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top;

        // Adjust the offset to account for any fixed headers or other elements
        var headerHeight = $('#menu').outerHeight(); // Get the height of the header
        offset -= headerHeight; // Subtract the header height from the offset

        $('html, body').animate({
            scrollTop: offset
        }, 500);
    });

    // Ensure the menu is always visible and floating
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#menu').addClass('floating-menu');
        } else {
            $('#menu').removeClass('floating-menu');
        }
    });

    // Form validation
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var message = $('#message').val();
        var smiley = $('#smiley').val();
        var isValid = true;
        var errorMessage = '';

        // Email validation
        if (!email) {
            isValid = false;
            errorMessage += 'Email is required.<br>';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errorMessage += 'Invalid email format.<br>';
        }

        // Message validation
        if (!message) {
            isValid = false;
            errorMessage += 'Message is required.<br>';
        }

        if (isValid) {
            // Construct mailto link
            var subject = encodeURIComponent('Message from Rubin Simon Website');
            var body = encodeURIComponent('Email: ' + email + '\nMessage: ' + message + '\nSmiley: ' + smiley);
            var mailtoLink = 'mailto:support@example.com?subject=' + subject + '&body=' + body;

            // Open default mail app with mailto link
            window.location.href = mailtoLink;

            $('#form-messages').html('<p class="success">You are redirected to your mail app!</p>');
            $('#contactForm')[0].reset();
        } else {
            $('#form-messages').html('<p class="error">' + errorMessage + '</p>');
        }
    });

    // Facebook like button click event
    document.querySelector('.fb-like').addEventListener('click', function() {
        document.getElementById('buttonToClick').click();
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.fb-like').addEventListener('click', function() {
        // Replace 'buttonToClick' with the ID or class of the button you want to click
        document.getElementById('buttonToClick').click();
    });
});

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }