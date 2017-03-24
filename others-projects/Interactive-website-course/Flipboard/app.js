var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
        
            /*Setting up next arrow to show next slide*/
        $('.arrow-next').click(function(){
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            
            /*setting up slider's dots*/
            var currentDot = $('.active-dot');
            var nextDot = currentDot.next();
            
            if(nextSlide.length == 0){
                nextSlide = $('.slide').first();
                nextDot = $('.dot').first();
                }
                
            currentSlide.fadeOut(600).removeClass('active-slide');
            nextSlide.fadeIn(600).addClass('active-slide');

            currentDot.removeClass('active-dot');
            nextDot.addClass('active-dot');
            });
            
            /*Setting up previous arrow to show previous slide*/
            $('.arrow-prev').click(function(){
                var currentSlide = $('.active-slide');
                var prevSlide = currentSlide.prev();
                
                var currentDot = $('.active-dot');
                var prevDot = currentDot.prev();
                
                /*Changing the page from the first slide to the next one*/
                if(prevSlide.length == 0){
                    prevSlide = $('.slide').last();
                    prevDot = $('.dot').last()
                    }
                    
                currentSlide.fadeOut(600).removeClass('active-slide');
                prevSlide.fadeIn(600).addClass('active-slide');
                
                /*Change from the current dot to the previous one*/
                currentDot.removeClass('active-dot');
                prevDot.addClass('active-dot');
            });
    }
$(document).ready(main);

