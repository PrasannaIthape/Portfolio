import React from "react";

function Achievements() {
  return (
    <section>
      <div className="container px-5 my-5">
        <h2 className="text-secondary fw-bolder mb-4">Achievements</h2>
        {/* Education Card 1*/}
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            <div className="text-secondary fw-bolder mb-4">CERTIFICATIONS</div>
            <div className="row align-items-center gx-5">
              <div className="col text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-secondary fw-bolder mb-2">
                    Aug 2023 – Aug 2024
                  </div>
                  <div className="fst-italic">
                    <div className="small text-muted">Full Stack Developer</div>
                    <div className="small text-muted"> - IIHT Vashi</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div>Full stack development course in React and Java</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            <div className="text-secondary fw-bolder mb-2">
              PROJECT COMPETITION
            </div>
            <div className="row align-items-center gx-5">
              <div className="col text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-secondary fw-bolder mb-2">2020</div>
                  <div className="fst-italic">
                    <div className="small text-muted">
                      AVISHKAR 2020 - PROJECT COMPETITION
                    </div>
                    <div className="small text-muted">
                      State Level Competition
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div>
                  Presented a project report on STUDENT FACULTY APP at ZEAL
                  Institute, Pune.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
