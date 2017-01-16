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
           srcjohn: "images/img_6.jpg",
           namejohn: "John Nascimento",
           descjohn: "Front-end developer",
           src: "images/img_6.jpg",
           title: "Shopping Center Magna Plaza Amsterdam 2014",
           author: "Tuxyso",
           },
         {
           src: "images/img_7.jpg", 
           title:"The Earth seen from Apollo 17",
           author:"Ed g2s"
           },
         {
           src:"images/img_8.jpg",
           title: "horse nebula",
           author: "John Smith",
           },
         {
           src:"images/img_9.jpg",
           title:"wwii woman worker",
           author:"Another author",
        },
         {
           src:"images/img_10.jpg",
           title:"Lijiang Yunnan China Naxi people carrying baskets-",
           author:"Wikimedia Commons",
           },
         {
           src:"images/img_11.jpg",
           title:"Marco's house",
           author:"Wikimedia Commons",
           }

         ],
      section2:[
         {
          title1:"Welcome to my online Portfolio!",
          content1:"Here you will find some works I've made in the past, some works I'm producing and some works in my schedule.",
          content2:"I hope you enjoy!",
          title2:"Latest projects",
          content3:"Check my recent projects",
          srcjohn: "images/img_11.jpg",
          }
        ],
      skillNqualification: [
        {
          webicon: "glyphicon glyphicon-console",
          title: "Web Development",
          description: "Web Development with <strong>HTML(5), CSS(3) and Javascript / Jquery</strong>.<br />I've already produced websites using the <strong>Bootstrap framework and Handlebars template</strong>.<br />I also have experience with <strong>Joolma and Wordpress</strong>.<br /> To develop without problem during the process I also use <strong>Github</strong> to control the file versions and preserve the development.",
        },
        {
          webicon: "glyphicon glyphicon-tasks",
          title: "Web Development",
          description: "I also use others technologies to improve the result of my projects. Some of them are:<br /><strong>Dreamweaver, Sublime, Photoshop, Gimp, Illustrator, 3D Maya and Mudbox (3D)</strong>.",
        },
        {
          webicon: "glyphicon glyphicon-globe",
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
          footer: "How to cntact me?",
          footerdescription: "<span class='glyphicon glyphicon-earphone'></span> Phone: +353 89 983 3946<br /><span class='glyphicon glyphicon-phone'></span> WhatsApp: 00 55 11 97012 3139<br /><span class='glyphicon glyphicon-envelope'></span> E-mail: jlenonns@gmail.com",
        },
      ],
      footerinfo: [
        {
          adjclass: "col-md-offset-2",
          field1: "<a href='#'' class='home' id='home'>Home</a><br />",
          field2: "<a href='#'' class='about-me' id='about-me'>About me</a><br />",
          field3: "<a href='#'' class='webprojects' id='webprojects'>My Projects</a><br />",
          field4: "<a href='#'' class='contact-me' id='contact-me'>Contact me</a>",
        },
        {
          adjclass: "",
          field1: "",
          field2: "",
          field3: "",
          field4: "",
        },
        {
          adjclass: "",
          field1: "<strong>Address</strong> <br />",
          field2: "160 Harmonstown Road, Dublin 5<br> Dublin, Ireland<br>",
          field3: "<abbr title='Phone'>P:</abbr> +353 89 9833-946<br /><br />",
          field4: "<strong>Full Name</strong><br> <a href='mailto:#''>first.last@example.com</a>",
          },
        ],
      albums : [
        {
          name : "Travels", 
          thumbnail : "images/img_1.jpg",
          description: "Web design Projects",
          photos : [
            { 
              src : "images/img_1.jpg",
              title : "grafitti", 
              description : "some derelict appartments with grafitti"
            }, 
            { 
              src : "images/img_6.jpg",
              title : "fountain", 
              description : "a huge dragon fountain"
            }, 
            { 
              src : "images/img_7.jpg",
              title : "tower", 
              description : "a colourful tower block"
            }, 
            { 
              src : "images/img_8.jpg",
              title : "walkways", 
              description : "an interesting interior"
            } 
          ]
        },
        {
          name : "Equipment", 
          thumbnail : "images/img_4.jpg",
          description: "Web design Projects",
          photos : [
            { 
              src : "images/img_4.jpg",
              title : "syths", 
              description : "all workshops should aspire to being this tidy"
            }, 
            { 
              src : "images/img_9.jpg",
              title : "helmet", 
              description : "a sci-fi helmet"
            }, 
            { 
              src : "images/img_12.jpg",
              title : "drums", 
              description : "a rather nice drum kit"
            }  
          ]
        },
        {
          name : "English Winter", 
          thumbnail : "images/img_17.jpg",
          description: "Web design Projects",
          photos : [
            { 
              src : "images/img_16.jpg",
              title : "dog in the snow", 
              description : "looks like he needs that jacket"
            }, 
            { 
              src : "images/img_17.jpg",
              title : "winter", 
              description : "a snowy scene in a park"
            }, 
            { 
              src : "images/img_18.jpg",
              title : "frosty pond", 
              description : "some ducks feeling cold"
            } 
          ]
        },
        {
          name : "English Winter", 
          thumbnail : "images/img_17.jpg",
          description: "Web design Projects",
          photos : [
            { 
              src : "images/img_16.jpg",
              title : "dog in the snow", 
              description : "looks like he needs that jacket"
            }, 
            { 
              src : "images/img_17.jpg",
              title : "winter", 
              description : "a snowy scene in a park"
            }, 
            { 
              src : "images/img_18.jpg",
              title : "frosty pond", 
              description : "some ducks feeling cold"
            } 
          ]
        }
      ]
    };
