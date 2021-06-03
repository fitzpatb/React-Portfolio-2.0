import React, { useState} from "react";
import Portfolio from "../components/Portfolio";
//import Modal from "../components/Modal";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal"

function Portfolios() {
  const [ modal, setModal ] = useState({
    title: "",
    image: "",
    alt: "",
    description: "",
    contributions: "",
    technologies: "",
    website: ""
  });
  const [modalShow, setModalShow] = useState(false);

  let projectsArray =[
    {
      title: "Employee Directory",
      image: "../images/Directory.gif",
      alt: "Employee Directory gif",
      description: "With a provided database of employees you would be able to easily search and sort employees.",
      contributions: "With the database already provided worte routes to display employees then using a mixture of React and JavaScript made it so that employees update on search and added filter buttons.",
      technologies: "React, Bootstrap, HTML, CSS, and JavaScript.",
      website: "https://fitzpatb.github.io/Employee-Directory/"
    },
    {
      title: "Budget Tracker",
      image: "dash.png",
      alt: "Budget Tracker dashboard",
      description: "With this users are able to post and update online or when offline. To help better keep a more accurate budget.",
      contributions: "Using Service Worker and Mongoose set up a connection to both so that when you are online or offline you can enter budgets. Once back online it takes the stored responses and updates your budget automatically on connection",
      technologies: "Service Worker, Mongoose, Node.js, Express, and Heroku",
      website: "https://mighty-castle-09893.herokuapp.com"
    },
    {
      title: "Fitness Tracker",
      image: "running.gif",
      alt: "Fitness Tracker gif",
      description: "Using mongodb connect to a database that allows you to track workouts see overall work done and create a new workout.",
      contributions: "Utilizing starter code first wrote a connection to the database using routes and then set up a heroku connection to MongoDb. To ensure everything would be in the correct format made personal schemas for the workouts in the models.",
      technologies: "Express, Mongoose, Heroku, and JavaScript.",
      website: "https://fitness-tracker2121.herokuapp.com/"
    },
    {
      title: "Pet Services",
      image: "snapshot.png",
      alt: "App so that animal owners can book services for their animal",
      description: "With this site users are able to make an account, schedule appointments through a clickable calendar and then even view upcoming appointments.",
      contributions: "On this project I worked on the routes for the pages and database to help link the information from page to page and I also designed the schedule modal and worked the logic for the calendar.",
      technologies: "Handlebars, HTML, CSS, JavaScript, mysql, express, Node.js, sequelize.",
      website: "https://radiant-basin-77736.herokuapp.com/"
    },
    {
      title: "Tech Blog",
      image: "workingvideo.gif",
      alt: "a tech blog that requires login/signup",
      description: "A functioning tech blog that saves post by user allowing you to edit and delete posts you can comment on other users posts.",
      contributions: "On this project I was tasked with full deployment. Set up the handlebar pages, connected them all to the server through routes, added login capability and made it so that users can create, update, delete and comment posts.",
      technologies: "HTML, CSS, Handlebars, mysql, Sequelize, Express, dotenv, bcrypt, Node.js, JavaScript, and Heroku",
      website: "https://damp-hamlet-52932.herokuapp.com/"
    },
    {
      title: "Team Generator",
      image: "team.gif",
      alt: "team generator",
      description: "Allows a user to input his team and then it will generate a webpage showing his team and their information.",
      contributions: "Used the terminal to have a series of questions that allowed users to create their team. Once created it uses HTML CSS and Javascript to build a page with your team on it.",
      technologies: "HTML, CSS, JavaScript, Node.js, Inquirer, and Jest.",
      website: "https://github.com/fitzpatb/Team-Generator"
    },
    {
      title:  "E-Commerce",
      image: "E-commerce.gif",
      alt: "backend tool to track e-commerce inventory",
      description: "Create, Read, Update and Delete inventory for any form of e-commerce.",
      contributions: "With Starter code wrote the connection to the server that allowed for all backend routes to be connected as an API allowing to post update and delete products.",
      technologies: "JavaScript, dotenv, Express, mysql, and sequelize.",
      website: "https://github.com/fitzpatb/E-Commerce"
    },
    {
      title: "Employee Tracker",
      image: "employee.gif",
      alt: "backend node employee tracker",
      description: "A backend console tool to help you track and mangage employees.",
      contributions: "Created routes to link to express and keep track of notes, saved user inputs to keep track of notes, make new ones and delete old ones, and used basic CSS template to style.",
      technologies: "HTML, CSS, JavaScript, Node,js, Express, Bootstrap, mysql, Chalk, and console.table.",
      website: "https://github.com/fitzpatb/Employee-Tracker"
    },
    {
      title: "Note Taker",
      image: "notes.gif",
      alt: "Simple note taking site",
      description: "With this project I was tasked with making a simple app that allows using to track and take notes using express.",
      contributions: "Created routes to link to express and keep track of notes, used basic CSS template to style, and saved user inputs to keep track of notes, make new ones and delete old ones.",
      technologies: "HTML, CSS, JavaScript, Node.js, Express",
      website: "https://still-waters-76808.herokuapp.com/"
    },
    {
      title: "Earworm",
      image: "Earworm-copy.gif",
      alt: "Earworm Music Site gif",
      description: "An interactive website for music listeners to be able to find, purchase and listen to any song, artist or album even if you only know a few words of the song.",
      contributions: "Made HTML framework and styled with Bulma, set up JavaScript to save all important information from APIs to local storage, added buttons to allow user to clear previous seraches, and made it so that users can view next result if the correct result did not populate.",
      technologies: "HTML, CSS, JavaScript, Bulma, Spotify API, Genius API and Discogs API",
      website: "https://bahuisken.github.io/earwom/"
    },
    {
      title: "Weather Dashboard",
      image: "site-copy.gif",
      alt: "Weather Dashboard gif",
      description: "A dashboard that allows you to search and see the weather for the next 5 days of a city of your choosing.",
      contributions: "Used JavaScript to dynamically update dashboard and show 5 day forecast with moment.js, saved user search query to populate API information, searches and last viewed favorite are saved to local storage to view and used bootstrap to style the page",
      technologies: "HTML, CSS, JavaScript, jQuery, Bootstrap and Moment.js",
      website: "https://fitzpatb.github.io/Weather-Planner/"
    },
    {
      title: "Daily Calander",
      image: "calander-copy.gif",
      alt: "Daily Calander gif",
      description: "A dynamically generated calander that allows you to save upcoming tasks for the day and see where you are in your day.",
      contributions: "Utilized moment.js to and setTimeout() to ensure the right time and activity is showing, saved daily activities to local storage, used jQuery to dynamically update the page and used both Bootstrap and prebuilt CSS classes to style the page.",
      technologies: "HTML, CSS, JavaScript, jQuery, Bootstrap and Moment.js",
      website: "https://fitzpatb.github.io/Calander-Scheduler/"
    },
    {
      title: "Code Quiz",
      image: "Code-Quiz-copy.gif",
      alt: "Coding Quiz gif",
      description: "A short quiz that dynamically updates new questions and keeps your previous scores.",
      contributions: "Put click events in JavaScript to enable the quiz to progress to next questions and used local storage to save previous scores.",
      technologies: "HTML, CSS, JavaScript and BootStrap",
      website: "https://fitzpatb.github.io/Code-Quiz/"
    },
    {
      title: "Password Generator",
      image: "password-copy.gif",
      alt: "Password Generator gif",
      description: "This site allows you generate a random password of a length of 8-128 with numbers letters and special characters.",
      contributions: "Used prompts to take in user input for password, put an event listener on generate password button to run JavaScript functions and through elaborate if statements generates a password based on user inputs.",
      technologies: "HTML, CSS, JavaScript, and Bootstrap",
      webiste: "https://fitzpatb.github.io/Password-Generator/"
    }
  ];

  function openModal(event) {
    event.preventDefault();
    console.log(event.target.value);
    setModalShow(true);
    for (let i = 0; i < projectsArray.length; i++) {
      if (event.target.value === projectsArray[i].title) {
        setModal({
          title: projectsArray[i].title,
          image: projectsArray[i].image,
          alt: projectsArray[i].alt,
          description: projectsArray[i].description,
          contributions: projectsArray[i].contributions,
          technologies: projectsArray[i].technologies,
          website: projectsArray[i].website
        })
      }
    }
  }

  return (

    <main id="content-wrap">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modal={modal}
      />
      <div className="container my-border col-lg-10 col-md-11 col-sm-11 col-xs-10">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>Portfolio</h1>
          </div>
        </div>
        <Portfolio
          projectsArray={projectsArray}
          openModal={openModal}
        />
      </div>
    </main>
  )
}

export default Portfolios;