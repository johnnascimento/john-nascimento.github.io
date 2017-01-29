// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

    // define the data for the template
    // we define an objects which contains an
    // array of other objects. This array will be used
    // to create multiple images
    var db = {
      images:[
         {
           src: "images/slideshow/Slideshow-img2.jpg",
           title: "Developed to offer products for special clients of Reanult",
           author: "Hotsite Reanult",
           },
         {
           src: "images/slideshow/Slideshow-img3.jpg", 
           title:"Re-design from customer page of Tickets For Fun company",
           author:"Customer service"
           },
         {
           src:"images/slideshow/Slideshow-img1.jpg",
           title: "Customer service page presented by different devices",
           author:"Customer service"
           },
         {
           src:"images/slideshow/Slideshow-img4.jpg",
           title:"I've been working as a Web Designer over 4 years and I'm constantly learning and updating myself to provide always the best for my clients",
           author:"Web Designer",
        }
      ],
      section2:[
         {
          title1:"Welcome to my Portfolio!<br />I'm John Nascimento!",
          content1:"You'll find out some of my professional and personal projects.",
          content2:"I'm really pleased to see you and I truly hope we can work together.",
          title2:"Projects",
          content3: "Check out some of my projects bellow",
          srcjohn: "images/img_11.jpg",
          }
        ],
      skillNqualification: [
        {
          webicon: "fa fa-code fa-4x",
          title: "Development",
          description: "Web Development with <strong>HTML(5), CSS(3) and Javascript / Jquery</strong>. I've already produced websites using the <strong>Bootstrap framework and Handlebars template</strong>. I also have experience with <strong>Joolma and Wordpress</strong>. To develop without problem during the process I also use <strong>Github</strong> to control the file versions and preserve the development.",
        },
        {
          webicon: "fa fa-pencil fa-4x",
          title: "Design",
          description: "I also use others technologies to improve the result of my projects. Some of them are: <strong>Dreamweaver, Sublime, Photoshop, Gimp, Illustrator, 3D Maya and Mudbox (3D)</strong>.",
        },
        {
          webicon: "fa fa-graduation-cap fa-4x",
          title: "Professional",
          description: "I have a <strong>degree in IT management</strong> and a <strong>certification in Computer Graphics focused in Game Design</strong>. Besides this qualifications, I also have a bunch of courses reagrding to web development and design as well as my <strong>experience of 4 years in the area acting as a Web Designer and Web Analyst</strong>.",
          }
        ],
      aboutme: [
        {
          about: "About me",
          briefdescription: "John Nascimento",
          src: "images/img_5.jpg",
          whoiam: "Who am I?",
          whodescription: "My name is John Lenon Nascimento da Silva, I was born in 1991 and I'm married!<br />I have a degree in IT management by Faculdade Sao Paulo<br />and a certification in Computer Graphics by SAGA (School of Art Game and Animation).<br />I have over 3 years of experience as a Web Designer and 5 years working in IT area.",
          skillNqualification: [
            {
              webicon: "fa fa-graduation-cap fa-4x",
              title: "Web Design Career",
              description: "I'm a Web Designer professional, graduated in <strong>degree in IT management</strong> with <strong>certification in Computer Graphics focused in Game Design</strong> and a variety of courses related to web development and design.<br />I have over 4 years of experiece and I've already produced several projects since I started my Web Design career and some of this projects can be seen throught this portfolio online.",
            },
            {
              webicon: "fa fa-code fa-4x",
              title: "Development",
              description: "As a Web Designer I have experience with the following programming languages, frameworks and CMS: <strong>HTML(5), CSS(3) and Javascript / Jquery</strong>. <strong>Bootstrap framework and Handlebars template</strong>. <strong>Joolma and Wordpress</strong>.",
            },
            {
              webicon: "fa fa-pencil fa-4x",
              title: "Design",
              description: "I also use others technologies to improve the result of my projects: <strong>Dreamweaver, Sublime, Photoshop, Gimp, Illustrator, 3D Maya and Mudbox (3D)</strong>. As my version control system I also use <strong>Github</strong>.",
              }
            ],
          wherefindme: "Where to find me?",
          wheredescription: "I've been living in Ireland since 2016 when I came to improve my english skill.<br />If you wish to meet me, just call or send me a message and I'll be happy to talk with you about your project or issue that needs maintenance.",
          footer: "How to contact me?",
          footerdescription: "<span class='glyphicon glyphicon-earphone'></span> Phone: +353 89 983 3946<br /><span class='glyphicon glyphicon-phone'></span> WhatsApp: 00 55 11 97012 3139<br /><span class='glyphicon glyphicon-envelope'></span> E-mail: jlenonns@gmail.com",
        },
      ],
      contactme: [
        {
          srcjohn: "images/img_6.jpg",
          namejohn: "John Nascimento",
          descjohn: "Front-end developer",
          title: "Contact me",
        }
      ],
      footerinfo: [
        {
          adjclass: "col-md-offset-1",
          adjclass2: "formicon",
          field1: "<a href='https://www.linkedin.com/in/john-lenon-nascimento-da-silva-8b060851' class='social-icons' target='_blank'><i class='fa fa-linkedin' area-hidden='true'></i></a>",
          field2: "<a href='https://www.facebook.com/john.nasc.7' class='social-icons' target='_blank'><i class='fa fa-facebook' area-hidden='true'></i></a>",
          field3: "<a href='https://www.instagram.com/johnlnascimento/' class='social-icons' target='_blank'><i class='fa fa-instagram' area-hidden='true'></i></a>",
          field4: "",
        },
        {
          adjclass: "",
          adjclass2: "formicon",
          field1: "Portfolio created by<br />",
          field2: "<strong>John Lenon Nascimento da Silva</strong><br />",
          field3: "All Rights Reserved",
          field4: "",
        },
        {
          adjclass: "",
          adjclass2: "",
          field1: "<strong>John Nascimento</strong> <br />",
          field2: "160 Harmonstown Road, Dublin 5<br> Dublin, Ireland<br>",
          field3: "<abbr title='Phone'>P:</abbr> +353 89 9833-946<br /><br />",
          field4: "<strong>Entre em contato</strong><br><a href='mailto:jlenonns@gmail.com'>jlenonns@gmail.com</a>",
          },
        ],
      albums : [
        {
          name : "Web Design Projects", 
          thumbnail : "images/web_design_projects/site_anitta_thumb.jpg",
          description: "Landing pages, Hotsites, Mockups, Logo Design and many other things you can find out here",
          photos : [
            { 
              src : "images/single-img.jpg",
              title : "grafitti", 
              description : "some derelict appartments with grafitti",
              moreimgs: [
                {
                  thumb: "images/mini-thumbnail.jpg",
                },
                {
                  thumb: "images/mini-thumbnail.jpg",
                },
                {
                  thumb: "images/mini-thumbnail.jpg",
                }
              ]
            }, 
            { 
              src : "images/single-img.jpg",
              title : "fountain", 
              description : "a huge dragon fountain"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "tower", 
              description : "a colourful tower block"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "walkways", 
              description : "an interesting interior"
            } 
          ]
        },
        {
          name : "Game Design projects", 
          thumbnail : "images/game_design_projects/site_renault_thumb.jpg",
          description: "Character design, concept Vehicles and weapons, level design and many more you'll see right here",
          photos : [
            { 
              src : "images/single-img.jpg",
              title : "syths", 
              description : "all workshops should aspire to being this tidy"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "helmet", 
              description : "a sci-fi helmet"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "drums", 
              description : "a rather nice drum kit"
            }  
          ]
        },
        {
          name : "Personal projects", 
          thumbnail : "images/personal_projects/site_flip_-thumb.jpg",
          description: "You can see some of my personal projects either in progress or finished just here",
          photos : [
            { 
              src : "images/single-img.jpg",
              title : "dog in the snow", 
              description : "looks like he needs that jacket"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "winter", 
              description : "a snowy scene in a park"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "frosty pond", 
              description : "some ducks feeling cold"
            } 
          ]
        },
        {
          name : "Digital and traditional painting", 
          thumbnail : "images/digital_painting/site_anitta_thumb.jpg",
          description: "C'mon, have a sit! I'll show you some of my productions in digital and traditional painting field. I hope you enjoy",
          photos : [
            { 
              src : "images/single-img.jpg",
              title : "dog in the snow", 
              description : "looks like he needs that jacket"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "winter", 
              description : "a snowy scene in a park"
            }, 
            { 
              src : "images/single-img.jpg",
              title : "frosty pond", 
              description : "some ducks feeling cold"
            } 
          ]
        }
      ]
    };
