import React from 'react';

/* Experience section. `v` is the view model built in App.renderVals(). */
export default function Experience({ v }) {
  const {  } = v;
  return (
    <>
      <section id="experience" className="sec">
        <div className="wrap xp">
          <div className="xp-side rv">
            <p className="label"><svg className="px pi pi-bag" viewBox="0 0 8 7" aria-hidden="true"><path fill="currentColor" d="M3 0h2v1h-2zM2 1h1v1h-1zM5 1h1v1h-1zM0 2h8v5h-8z"></path><path fill="var(--bg)" d="M0 4h8v1h-8z"></path><path fill="var(--acc2)" d="M3 4h2v1h-2z"></path></svg>Experience</p>
            <h2 className="h2">Where I've <em>worked</em> &amp; studied.</h2>
            <p className="sub">Industry experience at Decimal Solutions across full-stack development and AI/ML engineering.</p>
            <div className="xp-now">
              <svg className="px" viewBox="0 0 16 16" aria-hidden="true"><path fill="#17171C" d="M5 0h6v1h-6zM3 1h3v1h-3zM7 1h6v1h-6zM2 2h12v1h-12zM2 3h13v1h-13zM2 4h2v1h-2zM12 4h2v1h-2zM2 5h1v1h-1zM13 5h1v1h-1zM2 6h1v1h-1zM4 6h3v1h-3zM9 6h3v1h-3zM13 6h1v1h-1z"></path><path fill="#C68B66" d="M4 4h8v1h-8zM3 5h10v1h-10zM3 6h1v1h-1zM7 6h2v1h-2zM12 6h1v1h-1zM3 7h1v1h-1zM7 7h2v1h-2zM12 7h1v1h-1zM3 8h4v1h-4zM8 8h5v1h-5zM3 9h4v1h-4zM9 9h4v1h-4zM3 10h1v1h-1zM12 10h1v1h-1z"></path><path fill="#A56E4D" d="M2 7h1v1h-1zM13 7h1v1h-1zM7 8h1v1h-1zM7 9h2v1h-2z"></path><path fill="#F2EFEA" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path className="pupil" fill="#111" d="M5 7h1v1h-1zM10 7h1v1h-1z"></path><path className="lid" fill="#C68B66" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path fill="#2A1F1C" d="M4 10h8v1h-8zM3 11h3v1h-3zM10 11h3v1h-3zM4 12h8v1h-8z"></path><path fill="#6E2F2A" d="M6 11h4v1h-4z"></path><path fill="#232733" d="M4 13h1v1h-1zM11 13h1v1h-1zM2 14h3v1h-3zM11 14h3v1h-3zM1 15h4v1h-4zM11 15h4v1h-4z"></path><path fill="#E9E7E2" d="M5 13h2v1h-2zM9 13h2v1h-2zM6 14h1v1h-1zM9 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1z"></path><path fill="#7B1E2C" d="M7 13h2v1h-2zM7 14h2v1h-2zM7 15h2v1h-2z"></path></svg>
              <div><small>Currently building</small><b>LEADS, an AI real estate platform</b></div>
            </div>
          </div>

          <div className="tl">
            <span className="tl-fill" aria-hidden="true"></span>
            <div className="tl-item rv">
              <span className="tl-dot" aria-hidden="true"></span>
              <article className="tl-card">
                <div className="tl-top"><span className="tl-type">Work</span><span className="tl-date">Jun 2026 - Aug 2026</span></div>
                <h3 className="tl-role">AI / ML Intern</h3>
                <p className="tl-co">Decimal Solutions · Islamabad</p>
                <ul className="tl-pts">
                  <li>Built backend services and REST APIs in Python and FastAPI for ML and automation workflows.</li>
                  <li>Built data pipelines and integrated ML models into full-stack apps on Next.js and Django.</li>
                  <li>Shipped automation features with cross-functional teams through code reviews, performance work and agile sprints.</li>
                </ul>
                <div className="chips"><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">Next.js</span><span className="chip">Django</span></div>
              </article>
            </div>
            <div className="tl-item rv">
              <span className="tl-dot" aria-hidden="true"></span>
              <article className="tl-card">
                <div className="tl-top"><span className="tl-type">Work</span><span className="tl-date">Jul 2025 - Sep 2025</span></div>
                <h3 className="tl-role">Full-Stack Developer Intern</h3>
                <p className="tl-co">Decimal Solutions · Islamabad</p>
                <ul className="tl-pts">
                  <li>Built and deployed full-stack web apps on the MERN stack with a focus on scalable architecture and clean code.</li>
                  <li>Designed REST APIs and integrated them with responsive React frontends for smooth data flow.</li>
                  <li>Ran real-time debugging and professional Git workflows under senior mentorship.</li>
                </ul>
                <div className="chips"><span className="chip">MongoDB</span><span className="chip">Express.js</span><span className="chip">React.js</span><span className="chip">Node.js</span></div>
              </article>
            </div>
            <div className="tl-item rv">
              <span className="tl-dot edu" aria-hidden="true"></span>
              <article className="tl-card">
                <div className="tl-top"><span className="tl-type edu">Education</span><span className="tl-date">2023 - 2027</span></div>
                <h3 className="tl-role">BS Software Engineering</h3>
                <p className="tl-co">COMSATS University Islamabad</p>
              </article>
            </div>
            <div className="tl-item rv">
              <span className="tl-dot edu" aria-hidden="true"></span>
              <div className="tl-mini">
                <article className="tl-card">
                  <div className="tl-top"><span className="tl-type edu">Education</span><span className="tl-date">2021 - 2023</span></div>
                  <h3 className="tl-role" style={{ fontSize: "22px" }}>FSc Pre-Engineering</h3>
                  <p className="tl-co">Iman College, Sohal, Faisalabad</p>
                </article>
                <article className="tl-card">
                  <div className="tl-top"><span className="tl-type edu">Education</span><span className="tl-date">2019 - 2021</span></div>
                  <h3 className="tl-role" style={{ fontSize: "22px" }}>Matriculation</h3>
                  <p className="tl-co">Iman Public Higher Secondary School, Faisalabad</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
