import React from "react";

function Skills() {
  return (
    <section>
      {/* Skillset Card*/}
      <div className="container px-5 my-5">
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            {/* Languages list*/}
            <div className="mb-0">
              <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                  <i className="bi bi-code-slash" />
                </div>
                <h3 className="fw-bolder mb-0">
                  <span className="text-gradient d-inline">Languages</span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
                <div className="col mb-4 mb-md-0">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    HTML
                  </div>
                </div>
                <div className="col mb-4 mb-md-0">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    CSS
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    JavaScript
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4 mb-md-0">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    ReactJs
                  </div>
                </div>
                <div className="col mb-4 mb-md-0">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    Java
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    Node.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
