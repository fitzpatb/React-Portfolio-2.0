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
            To get in contact with me you can reach me by @ (310)-648-0473. I can also be be contacted via email at bfitzpatrick28@gmail.com or simply click the button below.
            <form action="mailto:bfitzpatrick28@gamil.com" method="POST" enctype="multipart/form-data" name="EmailForm">
              <button type="submit" className="btn btn-primary">Email: bfitzpatrick28@gmail.com</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact;
