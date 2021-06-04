import React from "react";

function Contact() {
  return (
    <main id="content-wrap">
      <div className="container my-border col-lg-8 col-md-10 col-sm-10 col-xs-11">
        <div className="row" id="spacing">
          <h1>Contact</h1>
        </div>
        <div className="row">
          <div className="col-10">
            <form>
              <div className="form-group">
                <label for="Name">Name</label>
                <input type="text" className="form-control" id="Name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="Message">Message</label>
                <textarea className="form-control" id="Message" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact;
