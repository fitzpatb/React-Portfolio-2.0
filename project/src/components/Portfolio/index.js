
import React from "react";

function Portfolio(props) {
  return (
    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 border-top">
      {props.projectsArray.map((project, index) => {
        return (
          <div key={index} className="col mb-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.alt} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" value={project.title} onClick={props.openModal}>
                  See Full Descritption
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Portfolio;