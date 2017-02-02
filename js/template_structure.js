/*
  This script will fill out the blank spots in html file
*/
  var html, source, home_template, about_me_template, contact_me_template, my_projects_template, photo_template, footer_template;

  // variables to store the current displayed album and photo
  var current_album = db.albums[0];
  var current_photo = current_album.photos[0];

  function showTemplate(template, data){
    html    = template(data);
    $('#content').html(html);
  }

  function showTemplateFooter(template, data){
    html    = template(data);
    $('#footer').html(html);
  }

$(document).ready(function(){

  source = $("#home-template").html();
  home_template = Handlebars.compile(source);

  source = $("#about-me-template").html();
  about_me_template = Handlebars.compile(source);

  source = $("#my-projects-template").html();
  my_projects_template = Handlebars.compile(source);

  source = $("#albums_template").html();
  album_template = Handlebars.compile(source);

  source = $("#single_photo_template").html();
  single_photo_template = Handlebars.compile(source);

  source = $("#contact-me-template").html();
  contact_me_template = Handlebars.compile(source);
  
  source = $('#footer-template').html();
  footer_template = Handlebars.compile(source);
    
  /* This script will change the active class in the navbar accordingly where you click
  ------------------------------------------------------------------------------------*/
    $('.home').click(function(){

      showTemplate(home_template, db);
      showTemplateFooter(footer_template, db);

      $(".navbar .active").removeClass("active");
      $(".home").addClass("active");
      $("body").scrollTop(0);

      $(".album-thumbnail").click(function(){

        $(".navbar .active").removeClass("active");
        $(".my-projects").addClass("active");
        $("body").scrollTop(0);
        // get the index (position in the array)
        // of the album we clicked on
        // "this" is the element that was clicked on
        // data("id") gets the attribute data-id
        // (which we set to the index of the album in
        // the array - @index)
        var index = $(this).data("id");

        // set the current album to this album
        current_album = db.albums[index];

        // displays the photos template

        // This condition will control what can be visit during the maintenance
        if (index != 0){
          alert('Pagina em desenvolvimento!');
        }
        else{
          showTemplate(album_template, current_album);
          showTemplateFooter(footer_template, db);
        };

          // add an on click al all the photo thumbnails
          // which displays the photo in a modal popup
          $(".single-photo-thumbnail").click(function (){
            console.log('Is it working?');
            // get the index (position in the array)
            // of the photo we clicked on
            // "this" is the element that was clicked on
            // data("id") gets the attribute data-id
            // (which we set to the index of the photo in
            // the array - @index)
            var index = $(this).data("id");

            // set the current photo to this photo
            current_photo = current_album.photos[index];
            console.log(current_photo);
            // displays the single photo template
            showTemplate(single_photo_template, current_photo);
            showTemplateFooter(footer_template, db);

            $("body").scrollTop(0);

            $(".voltar").click(function(){
            
              $(".webprojects").click();
              $("body").scrollTop(0);

            });

          });
        });

      $(".about-me").click(function(){

        showTemplate(about_me_template, db);
        showTemplateFooter(footer_template, db);

        $(".navbar .active").removeClass("active");
        $(".about-me").addClass("active");
        $("body").scrollTop(0);
          
      });
    });


  $(".about-me").click(function(){

    showTemplate(about_me_template, db);
    showTemplateFooter(footer_template, db);

    $(".navbar .active").removeClass("active");
    $(".about-me").addClass("active");
    $("body").scrollTop(0);
      
  });

  $(".webprojects, .gameprojects").click(function(){
      
      showTemplate(my_projects_template, db);
      showTemplateFooter(footer_template, db);

      $(".navbar .active").removeClass("active");
      $(".my-projects").addClass("active");
      $("body").scrollTop(0);

      $(".album-thumbnail").click(function(){
        // get the index (position in the array)
        // of the album we clicked on
        // "this" is the element that was clicked on
        // data("id") gets the attribute data-id
        // (which we set to the index of the album in
        // the array - @index)
        var index = $(this).data("id");

        // set the current album to this album
        current_album = db.albums[index];

        // displays the photos template
        if (index != 0){
          alert('Pagina em desenvolvimento!');
        }
        else{
          showTemplate(album_template, current_album);
          showTemplateFooter(footer_template, db);
        }
        $("body").scrollTop(0);

          // add an on click al all the photo thumbnails
          // which displays the photo in a modal popup
          $(".single-photo-thumbnail").click(function (){
            console.log('Is it working?');

            // get the index (position in the array)
            // of the photo we clicked on
            // "this" is the element that was clicked on
            // data("id") gets the attribute data-id
            // (which we set to the index of the photo in
            // the array - @index)
            var index = $(this).data("id");

            // set the current photo to this photo
            current_photo = current_album.photos[index];
            console.log(current_photo);
            // displays the single photo template
            showTemplate(single_photo_template, current_photo);
            showTemplateFooter(footer_template, db);

            $("body").scrollTop(0);

            $(".voltar").click(function(){
            
              $(".webprojects").click();
              $("body").scrollTop(0);

            });

          });
      });
  });

  $(".single-photo-thumbnail").click(function (){

      // get the index (position in the array)
      // of the photo we clicked on
      // "this" is the element that was clicked on
      // data("id") gets the attribute data-id
      // (which we set to the index of the photo in
      // the array - @index)
      var index = $(this).data("id");

      // set the current photo to this photo
      current_photo = current_album.photos[index];
      
      // displays the single photo template
      showTemplate(single_photo_template, current_photo);
      showTemplateFooter(footer_template, db);

      $("body").scrollTop(0);

      $(".voltar").click(function(){
      
        $(".webprojects").click();
        $("body").scrollTop(0);

      });
    });

  $(".contact-me").click(function(){

    showTemplate(contact_me_template, db);
    showTemplateFooter(footer_template, db);

    $(".navbar .active").removeClass("active");
    $(".contact-me").addClass("active");
    $("body").scrollTop(0);

  });
  /* END Script to change navbar
  ------------------------------------------------------------------------------------*/
  $(".home").click();

  /* Gallery effects
  $("body").on('mouseenter', '.thumbnail', function(){
    $(this).animate({marginTop: "-10px"});
  })
  .on('mouseleave', '.thumbnail', function(){
    $(this).animate({marginTop: "+10px"});
  });*/

});