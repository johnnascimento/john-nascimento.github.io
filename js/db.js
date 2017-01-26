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
           src: "images/Slideshow-img2.jpg",
           title: "Developed to offer products for special clients of Reanult",
           author: "Hotsite Reanult",
           },
         {
           src: "images/Slideshow-img3.jpg", 
           title:"Re-design from customer page of Tickets For Fun company",
           author:"Customer service"
           },
         {
           src:"images/Slideshow-img1.jpg",
           title: "Customer service page presented by different devices",
           author:"Customer service"
           },
         {
           src:"images/Slideshow-img4.jpg",
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
          title: "Web Development",
          description: "Web Development with <strong>HTML(5), CSS(3) and Javascript / Jquery</strong>. I've already produced websites using the <strong>Bootstrap framework and Handlebars template</strong>. I also have experience with <strong>Joolma and Wordpress</strong>. To develop without problem during the process I also use <strong>Github</strong> to control the file versions and preserve the development.",
        },
        {
          webicon: "fa fa-pencil fa-4x",
          title: "Web Development",
          description: "I also use others technologies to improve the result of my projects. Some of them are: <strong>Dreamweaver, Sublime, Photoshop, Gimp, Illustrator, 3D Maya and Mudbox (3D)</strong>.",
        },
        {
          webicon: "fa fa-graduation-cap fa-4x",
          title: "Web Development",
          description: "My development is due to my <strong>degree in IT management</strong> and my <strong>certification in Computer Graphics focused in Game Design</strong>. Besides this qualifications, I also have a bunch of courses reagrding to web development and design as well as my <strong>experience of 4 years in the area acting as a Web Designer and Web Analyst</strong>.",
          }
        ],
      latestprojects: [
        {
          title: "Street art",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices arcu sit amet condimentum rhoncus. Phasellus vel fringilla ante, eu maximus arcu.",
          src: "images/img_1.jpg",
          imgdescription: "img description",
          imgtitle: "img title"
        },
        {
          title: "On the street",
          description: "Quisque rhoncus eros at neque eleifend tincidunt. Etiam aliquam posuere quam, eu finibus massa accumsan eget. Suspendisse porttitor, massa",
          src: "images/img_5.jpg",
          imgdescription: "img description",
          imgtitle: "img title"
        },
        {
          title: "Some food",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices arcu sit amet condimentum rhoncus. Phasellus vel fringilla ante, eu maximus arcu.",
          src: "images/img_3.jpg",
          imgdescription: "img description",
          imgtitle: "img title"
        },
        {
          title: "Last image",
          description: "Quisque rhoncus eros at neque eleifend tincidunt. Etiam aliquam posuere quam, eu finibus massa accumsan eget. Suspendisse porttitor, massa",
          src: "images/img_5.jpg",
          imgdescription: "img description",
          imgtitle: "img title"
          }
        ],
      aboutme: [
        {
          about: "About me",
          briefdescription: "John Nascimento",
          src: "images/img_5.jpg",
          whoiam: "Who I am?",
          whodescription: "My name is John Lenon Nascimento da Silva, I was born in 1991 and I'm married!<br />I have a degree in IT management by Faculdade Sao Paulo<br />and a certification in Computer Graphics by SAGA (School of Art Game and Animation).<br />I have over 3 years of experience as a Web Designer and 5 years working in IT area.",
          firstcolumn: "Life",
          secondcolumn: "Skills",
          thirdcolumn: "Qualifications",
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
          name : "Travels", 
          thumbnail : "images/gallery-thumb.jpg",
          description: "Web design Projects",
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
          name : "Equipment", 
          thumbnail : "images/gallery-thumb.jpg",
          description: "Web design Projects",
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
          name : "English Winter", 
          thumbnail : "images/gallery-thumb.jpg",
          description: "Web design Projects",
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
          name : "English Winter", 
          thumbnail : "images/gallery-thumb.jpg",
          description: "Web design Projects",
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
