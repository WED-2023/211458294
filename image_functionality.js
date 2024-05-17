$(document).ready(function(){
    var slideIndex = 0;
    showSlides(slideIndex);
    
    function showSlides(n) {
        var slides = $(".slide");
        
        if (n >= slides.length) {slideIndex = 0;}    
        if (n < 0) {slideIndex = slides.length - 1;}
        
        slides.hide();
        slides.eq(slideIndex).show();
    }
    
    $(".prev").click(function() {
        slideIndex--;
        showSlides(slideIndex);
    });
    
    $(".next").click(function() {
        slideIndex++;
        showSlides(slideIndex);
    });
});