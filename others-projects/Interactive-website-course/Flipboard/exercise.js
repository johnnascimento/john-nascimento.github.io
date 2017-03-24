/*1st class
Dropdown menu
Use jQuery to select the More link. This involves the 'dropdown-toggle' class.
Add a .click() with a function inside. This function is called a click event handler.
Inside the event handler:

a. Use jQuery to select the 'dropdown-menu' class.
b. Then make the menu show and disappear using .toggle().
*/
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
    }
$(document).ready(main);


/*2nd class
Next slide 1

Let’s implement this inside the main function:

Use jQuery to select the 'arrow-next' class, using the .click() event handler.
Inside this event handler:

a. Create two variables for the currentSlide and the nextSlide. The currentSlide should select the active slide, and the nextSlide should store the next slide. 
b. Have your current slide fade out at 600 milliseconds and remove the 'active-slide' class
c. Have your next slide fade in at 600 milliseconds and add the 'active-slide' class

In the web page to the right, click the next arrow to see what happens!
*/
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
        
        $('.arrow-next').click(function(){
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            
            currentSlide.fadeOut(600).removeClass('active-slide');
            nextSlide.fadeIn(600).addClass('active-slide');
            });
    }
$(document).ready(main);

/*3rd class
Next slide 2

Let's handle this case using an if statement inside the click event handler for '.arrow-next'.

When currentSlide is the last slide, nextSlide will be empty. We can check this using the comparison nextSlide.length == 0. Therefore, after creating the variables currentSlide and nextSlide, write an if statement that checks if nextSlide.length == 0
If nextSlide is empty, we want to go back to the first slide. Therefore, inside the if statement set nextSlide equal to the first slide using $('.slide').first();
Try it out! In the web page to the right, click the next arrow until you get back to the first slide!
*/
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
        
        $('.arrow-next').click(function(){
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            
            if(nextSlide.length == 0){
                nextSlide = $('.slide').first();
                }
                
            currentSlide.fadeOut(600).removeClass('active-slide');
            nextSlide.fadeIn(600).addClass('active-slide');
            });
    }
$(document).ready(main);

/*4th class
Next dot 1
We can implement this in the same way we created the slides. Let's add a few more lines of code inside the click event handler for '.arrow-next'.

Use jQuery to select the 'active-dot' class, and save it in a new variable named currentDot
Select the next dot using .next(), and save it in the variable nextDot
Remove the 'active-dot' class from currentDot and add it to nextDot
In the web page to the right, click the next arrow to see what happens to the dots!
*/
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
        
        $('.arrow-next').click(function(){
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            
            if(nextSlide.length == 0){
                nextSlide = $('.slide').first();
                }
                
            currentSlide.fadeOut(600).removeClass('active-slide');
            nextSlide.fadeIn(600).addClass('active-slide');
            
            /*setting up slider's dots*/
            var currentDot = $('.active-dot');
            var nextDot = currentDot.next();
            
            currentDot.removeClass('active-dot');
            nextDot.addClass('active-dot');
            
            });
    }
$(document).ready(main);

/*5th exercise
Next dot 2
We can implement this in the same way that we went back to the first slide

In the if statement under the existing code, add a line that sets nextDot equal to $('.dot').first().
*/
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
        
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
    }
$(document).ready(main);

/*6th exercise
Previous slide 1
Let's implement this inside the main function

Select the '.arrow-prev' element and use .click() to attach a new event handler
Inside the event handler,

a. Use jQuery to select the '.active-slide' element, and save it in a new variable named currentSlide
b. Select the previous slide using .prev(), and save it in a new variable named prevSlide
c. Fade out currentSlide in 600 milliseconds and remove the 'active-slide' class from it.
d. Fade in prevSlide in 600 milliseconds and add the 'active-slide' class to it.
*/
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
                
                currentSlide.fadeOut(600).removeClass('active-slide');
                prevSlide.fadeIn(600).addClass('active-slide');
                });
    }
$(document).ready(main);

/*7th exercise
Previous slide 2
Inside the click event handler for '.arrow-prev', write an if statement to handle this case:

After creating the variables currentSlide and prevSlide, write an if statement that checks if prevSlide.length == 0.
If it is, set prevSlide equal to the last slide using $('.slide').last();
Try it out! In the web page to the right, click the previous arrow and see what happens!
*/
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
                
                /*Changing the page from the first slide/dot to the next one*/
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

/*8th exercise
Previous dot 1
Let's implement this inside the main function

Select the '.arrow-prev' element and use .click() to attach a new event handler
Inside the event handler,

a. Use jQuery to select the '.active-slide' element, and save it in a new variable named currentSlide
b. Select the previous slide using .prev(), and save it in a new variable named prevSlide
c. Fade out currentSlide in 600 milliseconds and remove the 'active-slide' class from it.
d. Fade in prevSlide in 600 milliseconds and add the 'active-slide' class to it.
*/
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
                
                currentSlide.fadeOut(600).removeClass('active-slide');
                prevSlide.fadeIn(600).addClass('active-slide');
                });
    }
$(document).ready(main);

/*9th exercise
Previous slide 2
Inside the click event handler for '.arrow-prev', write an if statement to handle this case:

After creating the variables currentSlide and prevSlide, write an if statement that checks if prevSlide.length == 0.
If it is, set prevSlide equal to the last slide using $('.slide').last();
Try it out! In the web page to the right, click the previous arrow and see what happens!
*/
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

/*Contragulations
That does it! The carousel now works as expected in both directions. Try it out - the next arrow and the previous arrow in the web page to the right.

Congratulations! You used jQuery to recreate the Flipboard home page. You built a dropdown menu and a carousel from scratch.

Carousels are popular components used on many other websites, like Apple, Amazon, and Airbnb. Now you know how they work and how to build your own. Great job!
*/

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