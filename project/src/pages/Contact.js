import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";

function Contact() {
  return (
    <main id="content-wrap">
      <div className="container my-border col-lg-8 col-md-10 col-sm-10 col-xs-11">
        <div className="row" id="spacing">
          <h1>Contact</h1>
        </div>
        <div className="row">
          <div className="col-12">
            To get in contact with me you can reach me by @ (310)-648-0473. I can also be be contacted via email at bfitzpatrick28@gmail.com or fill out the form below.
            <form
              action="https://formspree.io/f/xbjqarlq"
              method="POST"
              className="form-group"
            >
              <label htmlFor="Name">Your Name: </label>
              <input type="text" name="Name" className="form-control" id="Name" placeholder="Name" required/>
              <label htmlFor="inputEmail4">Your email: </label>
              <input type="email" name="_replyto" className="form-control" id="inputEmail4" placeholder="Email" required/>
              <label htmlFor="Message">Your message: </label>
              <textarea name="message" className="form-control" id="Message" placeholder="Message" required></textarea>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-primary" ><a href="mailto:name@email.com">Email: bfitzpatrick28@gmail.com</a></button>
            </form>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact;
