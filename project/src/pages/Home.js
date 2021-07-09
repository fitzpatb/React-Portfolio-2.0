import React from "react";

function Home() {
  return (
    <main id="content-wrap">
      <div className="container my-border col-lg-9 col-md-10 col-sm-11 col-xs-11">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-12">
            <img className="about" src="images/me.jpeg" alt="Brett Fitzpatrick" width="250px" height="250px" />
            <p>
              My name is Brett Fitzpatrick. I have recently found a passion for technology, computers and coding. Following years in  sales, I slowly found out that sales was simply not for me. honing my skills in everything to do with Full Stack Web Development since July 2020 and since then I have built a vast knowledge and skill with HTML, CSS and JavaScript. I really enjoy getting to be creative and solve problems and I have found that learning how to code fits my personality and lifestyle. Through my journey I have learned a number of tools,languages, and databases from Bootstrap, Heroku, React, Handlebars, MySQL and MongoDB.
            </p>
          </div>
        </div>
        <div className="row border-top">
          <div className="row">
            <h4 className="slide"><i>Education/Experience</i></h4>
          </div>
          <div className="col-12">
            <img className="family" src="images/Family.png" alt="Me and my family" width="250px" height="250px" />

            <p>
              I attended Chadwick Prepatory School in Palos Verdes, CA for my high school career. From there I choose to attend Purdue University in Indiana where I graduated with a degree in Mass Communications and a minor in Management. After working various jobs as a Lift Operator at Vail Resorts, Management Assistant at Enterprise, and a Business Development Representative at Granicus I decdided to pursue a career in front end development. I went on to receive a Certificate in Full Stack Web Development from The University of Denver.
            </p>
          </div>
        </div>
        <div className="row border-top">
          <div className="row">
            <h4 className="slide"><i>Links</i></h4>
          </div>
          <div className="col-12">
            <ul>
              <li><a id="link" href="https://www.facebook.com/brett.fitzpatrick.714/">Facebook</a></li>
              <li><a id="link" href="https://www.linkedin.com/in/brettfitzpatrick/">Linkedin</a></li>
              <li><a id="link" href="https://github.com/fitzpatb">GitHub</a></li>
              <li><a id="link" href="https://docs.google.com/document/d/1m256ytscVw7MSSNsF6eAH2EbwYD-baRgxlHhgUFkk4E/edit?usp=sharing">Resumé</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;