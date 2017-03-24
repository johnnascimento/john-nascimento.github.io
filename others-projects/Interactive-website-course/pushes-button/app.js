/*brings the menu from the left to the right along with the body*/
var main = function(){
    $('.icon-menu').click(function() {
            $('.menu').animate({
                left: '0px'
                }, 200);
            
            $('body').animate({
                left: '285px'
                }, 200);
        })
    
    $('.icon-close').click(function() {
            $('.menu').animate({
                left: '-285px'
                }, 200);
            $('body').animate({
                left: '0px'
                }, 200);
        });
    };

$(document).ready(main);

/*
Pushes the menu over the body content.
var main = function(){
    $('.icon-menu').click(function() {
            $('.menu').animate({
                left: '0px'
                }, 200);
            
            $('body').animate({
                left: ''
                }, 200);
        })
    
    $('.icon-close').click(function() {
            $('.menu').animate({
                left: '-285px'
                }, 200);
            $('body').animate({
                left: '0px'
                }, 200);
        });
    };

$(document).ready(main);
*/