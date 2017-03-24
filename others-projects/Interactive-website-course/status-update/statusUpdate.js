/* 3rd exercise
Instructions
Access the Post button by selecting the 'btn' class.
Add a .click() method with a function inside. This function is called a click event handler.
Inside the event handler:

a. Create a variable named post. We want to store what is typed in the status-box in this variable. How? Select the class status-box. Use .val() after status-box is selected. This .val() is like .text() but for form inputs.
b. Then use $( ) to create a new li element.
c. The li element doesn't have any text. Use .text(post) to add text to the element.
d. But this li element does not show up anywhere. Use .prependTo('.posts') to prepend it to the <ul class="posts">..</ul> element.
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        });
    }

$(document).ready(main);

/*4th exercise
Clear out the status box
Recall that $('.status-box').val() contained the content that was typed in the status box.
Under all code where you prepended the list element to '.posts', we need a line of code to clear out the status box.
To clear out the status box, use jQuery to select the 'status-box' class. Then set its value to empty by using .val('');.
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        });
    }

$(document).ready(main);

/*5th exercise
Count characters left
Outside the click event handler, select the 'status-box' class
Add a .keyup() method with a function inside. The .keyup() is similar to .keypress(). Therefore, this function is called a keyup event handler.
Inside the event handler:

a. Create a variable named postLength . In this variable, we want to store the length of the message typed in the status box. Use $(this), .val(), and .length
b. Create a variable named charactersLeft and set it equal to 140 minus postLength
c. Update the '.counter' to show how many characters are left. Select the 'counter' class and use .text() to update its text with charactersLeft
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        $('.counter').text(charactersLeft);
        });
    }

$(document).ready(main);

/*6th exercise
Reset the counter
We want to reset the counter text to "140" after the Post button is clicked.

To do this, add a line at the end of your click event handler where you:

Use jQuery to select the CSS class 'counter'
Replace its text with "140" using .text()
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        
        /*With this statment we can reset the counter*/
        $('.counter').text('140');
        });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        $('.counter').text(charactersLeft);
        });
    }

$(document).ready(main);

/*7th exercise
Disable the button 1
At the end of keyup event handler, add an if...else statement.

Write an if statement that checks whether charactersLeft is less than 0. If it is, select the CSS class 'btn' and add the class 'disabled' using .addClass()
Write an else if statement that checks whether charactersLeft is equal to 140. If it is, select the 'btn' class and add the class 'disabled' using .addClass()
Write an else statement that selects the 'btn' class and removes the class 'disabled' using .removeClass()
Lastly, let's disable the Post button so that empty messages can't be posted when the page loads. Outside the keyup event handler, add $('.btn').addClass('disabled');
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        
        /*With this statment we can reset the counter*/
        $('.counter').text('140');
        });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        $('.counter').text(charactersLeft);
        
        /*Conditions to handle those three situations*/
        if(charactersLeft < 0){
            $('.btn').addClass('disabled');
            }
            else if(charactersLeft === 140){
                $('.btn').addClass('disabled');
                }
                else{
                    $('.btn').removeClass('disabled');
                    }
        });
    $('.btn').addClass('disabled');
    }

$(document).ready(main);


/*8th exercise
Disable the button 2
The Post button is only enabled when at least one character is typed in the update box.

When you click Post, the update box is emptied. However, the button stays enabled. This needs to change!

Instructions
To do this, add a line at the end of your click event handler where you:

Select the 'btn' class
Add the class 'disabled' using .addClass()
Press Save and submit. This will take you to the full preview page. The exercise will only pass if you post a message!
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        
        /*With this statment we can reset the counter*/
        $('.counter').text('140');
        
        /*.btn Adjustment to improve its behavior*/
        $('.btn').addClass('disabled');
        });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        $('.counter').text(charactersLeft);
        
        /*Conditions to handle those three situations*/
        if(charactersLeft < 0){
            $('.btn').addClass('disabled');
            }
            else if(charactersLeft === 140){
                $('.btn').addClass('disabled');
                }
                else{
                    $('.btn').removeClass('disabled');
                    }
        });
    $('.btn').addClass('disabled');
    }

$(document).ready(main);


/*Congratulations
Congratulations
Congratulations! You used jQuery events to build a status update tool.

You can type messages and post status updates
A counter keeps track of the number of characters left
The Post button is only enabled when there is a message that is 140 characters or less
Great work! Next let's learn more about how to use jQuery to create animated transitions.
*/
var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        
        /*Used to clear out the .status-box content*/
        $('.status-box').val('');
        
        /*With this statment we can reset the counter*/
        $('.counter').text('140');
        
        /*.btn Adjustment to improve its behavior*/
        $('.btn').addClass('disabled');
        });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        $('.counter').text(charactersLeft);
        
        /*Conditions to handle those three situations*/
        if(charactersLeft < 0){
            $('.btn').addClass('disabled');
            }
            else if(charactersLeft === 140){
                $('.btn').addClass('disabled');
                }
                else{
                    $('.btn').removeClass('disabled');
                    }
        });
    $('.btn').addClass('disabled');
    }

$(document).ready(main);
