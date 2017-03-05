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
          content1:"This is my Portfolio online. Come o in and make yourself at home.",
          content2:"It'll be possible to find projects regard to Web Design, 3D modeling, rendering and animation and many other really good stuffs here.",
          title2:"Projects",
          content3: "Check out some of my projects below",
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
              description: "In 2013 I've got my diploma in IT management by Sao Paulo College in Brazil. From 2013 to 2016 I've been studying Computer Graphics on School of Art Game and Animation well-know as SAGA also in Brazil. In this course I got the certification in Computer Graphics focused on Game Design and Development. Since I started studying IT I've been taken up some courses in parallel, regard to Web Development, design, proggramming, Management, animation, ITIL, Scrum and others technologies. One of this courses is Development with HTML5, CSS3 and Javascript/Jquery where I could learn a lot how to develop and launch a website properly using those tools. I also took this course in Brazil on KaSolution school.",
			  txtalign: "text-left",
            },
            {
              webicon: "fa fa-code fa-4x",
			  position: "pull-right",
              title: "Development",
              description: "I started my career working as a Suport Analyst at Timer For Fun company and in 6 years I acquired 4 promotions. My last position at the company I worked as a Web Analyst. In this position I could develop some tools that is being presented on this portfolio. Besides those tools I was able to provide constant maintenance over their softwares and provide several trainings related to the company's process and softwares. My main duty at this company as a Web Analyst was manager the company's website and keep it up with the latest concert and events offered by the company as well as take part in several deployments executed by the company. The most important tool deployed by the company was its Mobile platform which I took part in developing.",
			  txtalign: "text-right",
            },
            {
              webicon: "fa fa-pencil fa-4x",
			  position: "pull-left",
              title: "Design",
              description: "I like keeping me up with the latest trends of this amazing Designer's world and put into practice in order to improve my skills. I certainly believe that the practice makes perfect.<br />",
			  txtalign: "text-left",
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
		  classe: "album-thumbnail",
          thumbnail : "images/web_design_projects/site_web_design_thumb.jpg",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          description: "Landing pages, Hotsites, Mockups, Logo Design and many other things you can find out here",
          photos : [
            { 
              src : "images/web_design_projects/t4f/site_t4f.jpg",
              title : "Tickets For Fun Website", 
              description : "On this website I worked doing content management and deploying some tools.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }, 
			{ 
              src : "images/web_design_projects/james_tattoo/site_james_tattoo.jpg",
              title : "James Tattoo", 
              description : "Website developed to present the projects of James. On this project I've used wordpress platform, HTML, CSS and Javascript programming language.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
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
              src : "images/web_design_projects/renault/site_renault.jpg",
              title : "Landing page Teatro Renault", 
              description : "This page was developed to offer specific tickets for renault customers. The page is connected to the website Tickets For Fun.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            },
			{ 
              src : "images/web_design_projects/customer_service/site_customer_service.jpg",
              title : "Customer Service page", 
              description : "In that job I created a new face for customer service online of the company Tickets For Fun. The idea was facilitate the way how the customer/user could reach the information about the events and the company. I managed to do this reshap using Photoshop, dreamweaver, Html, Css, Javascript/jquery and bootstrap.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            },
			{ 
              src : "images/web_design_projects/anitta/2015/site_anitta-2015_1st.jpg",
              title : "Web Page Anitta 2015", 
              description : "Page developed to promote the concert of the singer Anitta in Brazil by Tickets For Fun company in 2015.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
              moreimgs: [
                {
                  thumb: "images/web_design_projects/anitta/2015/site_anitta-2015_2nd.jpg",
                }
              ]
            }, 
            { 
              src : "images/web_design_projects/anitta/2016/site_anitta_2016.jpg",
              title : "Web Page Anitta 2016", 
              description : "This project was developed to promote the concert of the singer Anitta in Brazil by Tickets For Fun company in 2016.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
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
              description : "The design of this webpage was developed by FLIP's team and I was responsible for programming based on the mockup developed by them. To develop this page I've used HTML, CSS, Js, Photoshop, and Dreamweaver."
            }, 
            { 
              src : "images/web_design_projects/flip/2016/site_flip_2016.jpg",
              title : "Flip Web Page 2016", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "The design of this webpage was developed by FLIP's team and I was responsible for programming based on the mockup developed by them. To develop this page I've used HTML, CSS, Js, Photoshop, and Dreamweaver. This page followed the same idea of the site developed in 2015, but this time they used other color palette."
            }, 
            { 
              src : "images/web_design_projects/fuerza_bruta/site_fuerza_bruta.jpg",
              title : "Fuerza Bruta Wayra", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "Developing this page was used HTML, CSS, Js, Photoshop, Color Scheme palette and Sublime.",
            }, 
            { 
              src : "images/web_design_projects/lollapalooza/site_lollapalooza.jpg",
              title : "Lollapalooza 2016", 
			  srcprojects: "images/favicon_icon/icon-jl.png",
              description : "Lollapalooza Hotsite was developed to promote the Lolla Sales and to present all information of this concert at the same place but organized. The layout was developed by marketing team of Tickets For Fun and I was the frontender responsible for programming following the mockup provided. The tools used to develop was HTML, CSS, Js, Bootstrap, Youtube, Photoshop, Dreamweaver and Illustrator."
            },
			{ 
              src : "images/web_design_projects/villamix/site_villamix.jpg",
              title : "Landing page Villamix", 
              description : "To sell the tickets of Villamix events this Landing page was developed. I did this job in partnership with Guilherme Bigonha at the company T4F. In this job I made the programming and he made the Design.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            },
			{ 
              src : "images/web_design_projects/intercambio_vision/home/site_intercambio_vision_home1.jpg",
              title : "Intercambio Vision (Redesign Homepage)", 
              description : "I've worked as a Web Designer for Vision Intercambio, providing solution and improvements on its website.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
			  moreimgs: [
                {
                  thumb: "images/web_design_projects/intercambio_vision/home/site_intercambio_vision_home2.jpg",
                },
			  ],
			},
			{ 
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
            },
			{ 
              src : "images/web_design_projects/logo_design/john_nascimento/site_logo_john_nascimento.jpg",
              title : "Logo Design (John Nascimento)", 
              description : "Here we have my Logo that you can see on this portfolio. I developed this one using a great palette containing blue, yellow and gray.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
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
              src : "images/single-img.jpg",
              title : "syths", 
              description : "all workshops should aspire to being this tidy",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }, 
            { 
              src : "images/single-img.jpg",
              title : "helmet", 
              description : "a sci-fi helmet",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }, 
            { 
              src : "images/single-img.jpg",
              title : "drums", 
              description : "a rather nice drum kit",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }  
          ]
        },
        {
          name : "Personal projects", 
		  classe: "album-thumbnail",
          thumbnail : "images/personal_projects/site_personal_projects_thumb.jpg",
          description: "You can see some of my personal projects either in progress or finished just here",
		  srcprojects: "images/favicon_icon/icon-jl.png",
          photos : [
            { 
              src : "images/single-img.jpg",
              title : "dog in the snow", 
              description : "looks like he needs that jacket",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }, 
            { 
              src : "images/single-img.jpg",
              title : "winter", 
              description : "a snowy scene in a park",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            }, 
            { 
              src : "images/single-img.jpg",
              title : "frosty pond", 
              description : "some ducks feeling cold",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            } 
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
            }, 
            { 
              src : "images/digital_painting/pin_pad/digital_painting_pin_pad.jpg",
              title : "Pin Pad", 
              description : "This painting was made to put into practice my painting skills.",
			  srcprojects: "images/favicon_icon/icon-jl.png",
            },
          ]
        }
      ]
    };
