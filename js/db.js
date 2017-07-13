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
	  srcprojects: "images/favicon_icon/icon-jl.png",
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
          title1:"Hello there!",
          content1:"Welcome to my Portfolio.",
          content2:"I am Web Designer and Front-end developer.<br /> On this portfolio you will find plenty of projects related to UX, Web and logo design, landing page development, web applications and much more.<br/>It will also be possible for you to reach some projects I have been working on regarding to Computer Graphics, focused on Game Design.",
          title2:"Projects",
          content3: "Check them out!",
          src: "images/favicon_icon/icon-jl.png",
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
          description: "I also use others technologies to improve the result of my projects. Some of them are: <strong>Dreamweaver, Sublime, Photoshop, Gimp, Illustrator, 3D Maya and Mudbox (3D)</strong>. Some tools I just use to produce some personal projects like Unreal Engine 4 and UDK, that are used to develop Games.",
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
          src: "images/favicon_icon/icon-jl.png",
          whoiam: "Web Designer",
          whodescription: "My name is John Lenon Nascimento da Silva, I was born in 1991 and I'm married!<br />I have a degree in IT management by Faculdade Sao Paulo<br />and a certification in Computer Graphics by SAGA (School of Art Game and Animation).<br />I have over 3 years of experience as a Web Designer and 5 years working in IT area.",
          skillNqualification: [
            {
              webicon: "fa fa-graduation-cap fa-4x",
			        position: "pull-left",
              title: "Web Design Career",
              description: "In 2013 I've got my diploma in IT management by Sao Paulo College in Brazil. From 2013 to 2016 I've been studying Computer Graphics on School of Art Game and Animation well-know as SAGA also in Brazil. In this course I got the certification in Computer Graphics focused on Game Design and Development. Since I started studying IT I've been taken up some courses in parallel, regard to Web Development, design, programming, Project management as SCRUM, ITIL, animation, and others technologies. In fact a course that clearly helps me to improve as a developer was the course Development with HTML5, CSS3 and Javascript/Jquery, which was driven by KaSolution school in Brazil.",
			        txtalign: "text-left",
            },
            {
              webicon: "fa fa-code fa-4x",
	            position: "pull-right",
              title: "Development",
              description: "I started my career working as a Suport Analyst at Timer For Fun company and in period of 6 years I was able to acquire 4 promotions. My last position at the company I worked as a Web Analyst. At that position I could develop some tools that has been presented at this portfolio. Furthermore, I provided constantly maintenance to the company in order to offer better solutions for issues presented, I also supplied several trainings so that company's employee could get a better understand about the company's software and also about some corelated areas. As a Web Analyst my main duty was manage the company's website and Web Design team, also keep it up with the latest products offered by the company. In addition I took part in several app, pages, landing pages and hotsites deployed by the company. One of the lattest project I had been involved with its development was the Mobile platform of the currently website of the company, which I help supplying information about the system and with web development knowledge.",
			        txtalign: "text-right",
            },
            {
              webicon: "fa fa-pencil fa-4x",
			        position: "pull-left",
              title: "Design",
              description: "I like keeping me up with the latest trends of this amazing Designer's world and put into practice in order to improve my skills.",
			        txtalign: "text-left",
              }
            ],
          wherefindme: "Where would you find me?",
          wheredescription: "Probably, at home studying, creating something amazing or maybe working on a personal project. Anyway, if you want to contact me, don't hesitate.",
          footer: "If you want to contact me, please look at my contact information below. ",
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
          field4: "<strong>Get in touch</strong><br><a href='mailto:jlenonns@gmail.com'>jlenonns@gmail.com</a>",
          },
        ],
      albums : [
        {
          name : "Web Design Projects", 
		  classe: "album-thumbnail",
          thumbnail : "images/web_design_projects/site_web_design_thumb.jpg",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          description: "Landing pages, Hotsites, Mockups, Logo Design and many other things you can find out here",
          photos : [
		  { 
              src : "images/web_design_projects/james_tattoo/site_james_tattoo.jpg",
              title : "James Tattoo", 
              description : "Website developed to present the projects of James. On this project I've used wordpress platform, HTML, CSS and Javascript programming language.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  srcexternallink: "http://www.jamestatoo.16mb.com",
			  moreimgs: [
                {
                  thumb: "images/web_design_projects/james_tattoo/site_james_tattoo2.jpg",
                },
				        {
                  thumb: "images/web_design_projects/james_tattoo/site_james_tattoo3.jpg",
                },
				        {
                  thumb: "images/web_design_projects/james_tattoo/site_james_tattoo4.jpg",
                },
			        ]
            },
            { 
              src : "images/web_design_projects/t4f/site_t4f.jpg",
              title : "Tickets For Fun Website", 
              description : "As Web Analyst I worked managing the website content ",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  srcexternallink: "http://premier.ticketsforfun.com.br",
			  moreimgs: [1]
            },
			      { 
              src : "images/web_design_projects/renault/site_renault.jpg",
              title : "Landing page Teatro Renault", 
              description : "This page was developed to offer specific tickets for renault customers. The page is connected to the website Tickets For Fun.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },
			      { 
              src : "images/web_design_projects/customer_service/site_customer_service.jpg",
              title : "Customer Service page", 
              description : "In that job I created a new face for customer service online of the company Tickets For Fun. The idea was facilitate the way how the customer/user could reach the information about the events and the company. I managed to do this reshap using Photoshop, dreamweaver, Html, Css, Javascript/jquery and bootstrap.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },
			 /*     { 
              src : "images/web_design_projects/anitta/2015/site_anitta-2015_1st.jpg",
              title : "Web Page Anitta 2015", 
              description : "Page developed to promote the concert of the singer Anitta in Brazil by Tickets For Fun company in 2015.",
			        srcprojects: "images/favicon_icon/icon-jl.png",
              moreimgs: [
                {
                  thumb: "images/web_design_projects/anitta/2015/site_anitta-2015_2nd.jpg",
                }
              ]
            }, */
            { 
              src : "images/web_design_projects/anitta/2016/site_anitta_2016.jpg",
              title : "Web Page Anitta 2016", 
              description : "This project was developed to promote the concert of the singer Anitta in Brazil by Tickets For Fun company in 2016.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
            { 
              src : "images/web_design_projects/festival_piaui/site_festival_piaui_defined.jpg",
              title : "Festival Piaui", 
              description : "This web page was developed to promote Festival Piaui sales. Firstly was developed a mockup in order to offer the best of this product and after some adjustments the final project was resolved.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
              moreimgs: [
                {
                  thumb: "images/web_design_projects/festival_piaui/site_festival_piaui_my_model.jpg",
                }
              ]
            }, 
            { 
              src : "images/web_design_projects/flip/2015/site_flip_2015.jpg",
              title : "Flip Web Page 2015", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "The design of this webpage was developed by FLIP's team and I was responsible for programming based on the mockup developed by them. To develop this page I've used HTML, CSS, Js, Photoshop, and Dreamweaver.",
			  moreimgs: [1]
            }, 
            { 
              src : "images/web_design_projects/flip/2016/site_flip_2016.jpg",
              title : "Flip Web Page 2016", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "The design of this webpage was developed by FLIP's team and I was responsible for programming based on the mockup developed by them. To develop this page I've used HTML, CSS, Js, Photoshop, and Dreamweaver. This page followed the same idea of the site developed in 2015, but this time they used other color palette.",
			  moreimgs: [1]
            }, 
            /*{ 
              src : "images/web_design_projects/fuerza_bruta/site_fuerza_bruta.jpg",
              title : "Fuerza Bruta Wayra", 
			        srcprojects: "images/favicon_icon/icon-jl.png",
              description : "Developing this page was used HTML, CSS, Js, Photoshop, Color Scheme palette and Sublime.",
            }, */
            { 
              src : "images/web_design_projects/lollapalooza/site_lollapalooza.jpg",
              title : "Lollapalooza 2016", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "Lollapalooza Hotsite was developed to promote the Lolla Sales and to present all information of this concert at the same place but organized. The layout was developed by marketing team of Tickets For Fun and I was the frontender responsible for programming following the mockup provided. The tools used to develop was HTML, CSS, Js, Bootstrap, Youtube, Photoshop, Dreamweaver and Illustrator.",
			  moreimgs: [1]
            },
		      	{ 
              src : "images/web_design_projects/villamix/site_villamix.jpg",
              title : "Landing page Villamix", 
              description : "To sell the tickets of Villamix events this Landing page was developed. I did this job in partnership with Guilherme Bigonha at the company T4F. In this job I made the programming and he made the Design.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },
			      { 
              src : "images/web_design_projects/intercambio_vision/home/site_intercambio_vision_home1.jpg",
              title : "Intercambio Vision (Redesign Homepage)", 
              description : "I've worked as a Web Designer for Vision Intercambio, providing solution and improvements on its website.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  srcexternallink: "http://www.intercambiovision.com.br",
			  moreimgs: [1]
			      /*  moreimgs: [
                {
                  thumb: "images/web_design_projects/intercambio_vision/home/site_intercambio_vision_home2.jpg",
                },
			         ],*/
			       },
			      /*{ 
              src : "images/web_design_projects/intercambio_vision/escolas/site_intercambio_vision_escolas1.jpg",
              title : "Intercambio Vision (Redesign Schools Page)", 
              description : "I've worked as a Web Designer for Vision Intercambio, providing solution and improvements on its website.",
			        srcprojects: "images/favicon_icon/icon-jl.png",
			        moreimgs: [
				      {
                  thumb: "images/web_design_projects/intercambio_vision/escolas/site_intercambio_vision_escolas2.jpg",
              },
				      {
                  thumb: "images/web_design_projects/intercambio_vision/escolas/site_intercambio_vision_escolas3.jpg",
              },
			       ],
			     },
			     {
              src : "images/web_design_projects/intercambio_vision/palestra/site_intercambio_vision_palestras1.jpg",
              title : "Intercambio Vision (Speech page improvements)", 
              description : "I've worked as a Web Designer for Vision Intercambio, providing solution and improvements on its website.",
			        srcprojects: "images/favicon_icon/icon-jl.png",
			        moreimgs: [
				      {
                  thumb: "images/web_design_projects/intercambio_vision/palestra/site_intercambio_vision_palestras2.jpg",
              },
			       ]
            },*/
			      { 
              src : "images/web_design_projects/logo_design/john_nascimento/site_logo_john_nascimento.jpg",
              title : "Logo Design (John Nascimento)", 
              description : "Here we have my Logo that you can see on this portfolio. I developed this one using a great palette containing blue, yellow and gray.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
			      { 
              src : "images/web_design_projects/logo_design/que_legal/site_logo_que_legal.jpg",
              title : "Logo Design (Que Legal website)", 
              description : "I developed this logo by using as a reference the employer's silhouette. The request was to develop a logo that could gives the idea of man thinking. The machinery brain represent the mind working and lights represent the ideas that come up when the brain's working. The palette for this project was Yellow, Green and gray.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/web_design_projects/logo_design/que_legal/site_logo_que_legal2.jpg",
                }
              ]
            },
          ]
        },
        {
          name : "Game Design projects", 
		  classe: "album-thumbnail",
          thumbnail : "images/game_design_projects/site_game_projects_thumb.jpg",
          description: "Character design, concept Vehicles and weapons, level design and many more you'll see right here",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          photos : [
            { 
              src : "images/game_design_projects/tradicional_sculpture/rashidi1.jpg",
              title : "Character: Rashidi", 
              description : "Character developed during the character design module of the Computer Graphics course at School of Art Game and Animation (SAGA). This sculpture was developed by using clay as feedstock for this project.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi2.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi3.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi4.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi5.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi6.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi7.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi8.jpg",
                },
				{
                  thumb: "images/game_design_projects/tradicional_sculpture/rashidi9.png",
                },
              ]
            }, 
            { 
              src : "images/game_design_projects/3d_model/living_room/living_room.jpg",
              title : "3D Living room", 
              description : "This living room was developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/game_design_projects/3d_model/living_room/living_room2.jpg",
                }
			  ]
            }, 
            { 
              src : "images/game_design_projects/3d_model/atari/console/atari1.jpg",
              title : "3D Atari console", 
              description : "This Atari console was developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/game_design_projects/3d_model/atari/console/atari2.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/console/atari3.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/console/atari4.jpg",
                },
			  ]
            },
			{ 
              src : "images/game_design_projects/3d_model/atari/controller/controller1.jpg",
              title : "3D Atari controllers", 
              description : "These Atari controllers were developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/game_design_projects/3d_model/atari/controller/controller2.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/controller/controller3.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/controller/controller4.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/controller/controller5.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/atari/controller/controller6.jpg",
                },
			  ]
            },
			{ 
              src : "images/game_design_projects/3d_model/nes/controller/controller1.jpg",
              title : "3D Nes controllers", 
              description : "These Nes controllers were developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/game_design_projects/3d_model/nes/controller/controller2.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/nes/controller/controller3.jpg",
                },
			  ]
            },
			{ 
              src : "images/game_design_projects/3d_model/nintendo_wii/controller/controller1.jpg",
              title : "3D Nintendo Wii controllers", 
              description : "These Nintendo Wii controllers were developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/game_design_projects/3d_model/nintendo_wii/controller/controller2.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/nintendo_wii/controller/controller3.jpg",
                },
				{
                  thumb: "images/game_design_projects/3d_model/nintendo_wii/controller/controller4.jpg",
                },
			  ]
            },
			{
              src : "images/game_design_projects/3d_model/column/column_low_poly.jpg",
              title : "3D Egyptian column", 
              description : "These Lowpoly column was developed by using 3D Maya software during the 3D Modeling module of the Computer Graphics course at School of Art Game and Animation (SAGA).",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },
          ]
        },
        {
          name : "Personal projects", 
		  classe: "album-thumbnail",
          thumbnail : "images/personal_projects/site_personal_projects_thumb.jpg",
          description: "You can see some of my personal projects either in progress or finished here",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          photos : [
            { 
              src : "images/personal_projects/draws/john_nascimento/john.jpg",
              title : "John Nascimento self-portrait", 
              description : "A self portrait designed with HB pencil on a calm afternoon in my office.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
            { 
              src : "images/personal_projects/draws/michonne_twd/michonne.jpg",
              title : "Michonne TWD", 
              description : "A quick sketch made to improve my designing skill",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },  
            { 
              src : "images/personal_projects/draws/river_liffey/river_liffey.jpg",
              title : "The River Liffey", 
              description : "A draw produced on an afternoon waiting for my wife at the River Liffey. The landscape there is just breathtaking.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
			{ 
              src : "images/personal_projects/draws/one_piece/luffy.jpg",
              title : "Monkey D. Luffy", 
              description : "Traditional painting executed on an A5 paper by using colored pencil.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
          ]
        },
        {
          name : "Digital and traditional painting", 
		  classe: "album-thumbnail",
          thumbnail : "images/digital_painting/site_digital_painting_-thumb.jpg",
          description: "C'mon, have a sit! I'll show you some of my productions in digital and traditional painting field. I hope you enjoy",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          photos : [
            { 
              src : "images/digital_painting/impressora/digital_painting_impressora.jpg",
              title : "Impressora BOCA", 
              description : "This painting was made to put into practice my painting skills.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            }, 
            { 
              src : "images/digital_painting/pin_pad/digital_painting_pin_pad.jpg",
              title : "Pin Pad", 
              description : "This painting was made to put into practice my painting skills.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [1]
            },
          ]
        }
      ]
    };
