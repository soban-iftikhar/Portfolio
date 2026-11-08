import React from 'react';

/* About section. `v` is the view model built in App.renderVals(). */
export default function About({ v }) {
  const { pxCls, pxLabel, pxPressed, togglePx } = v;
  return (
    <>
      <section id="about" className="sec">
        <div className="wrap about">
          <div className="rv">
          <div className={`photo ${pxCls}`}>
            <img src="/profile.webp" alt="Muhammad Soban in a dark suit, arms crossed, outside COMSATS University Islamabad" />
            <div className="px-me" aria-hidden="true">
              <svg className="px" viewBox="0 0 16 16"><path fill="#17171C" d="M5 0h6v1h-6zM3 1h3v1h-3zM7 1h6v1h-6zM2 2h12v1h-12zM2 3h13v1h-13zM2 4h2v1h-2zM12 4h2v1h-2zM2 5h1v1h-1zM13 5h1v1h-1zM2 6h1v1h-1zM4 6h3v1h-3zM9 6h3v1h-3zM13 6h1v1h-1z"></path><path fill="#34343F" d="M4 0h1v1h-1zM6 1h1v1h-1z"></path><path fill="#C68B66" d="M4 4h8v1h-8zM3 5h10v1h-10zM3 6h1v1h-1zM7 6h2v1h-2zM12 6h1v1h-1zM3 7h1v1h-1zM7 7h2v1h-2zM12 7h1v1h-1zM3 8h4v1h-4zM8 8h5v1h-5zM3 9h4v1h-4zM9 9h4v1h-4zM3 10h1v1h-1zM12 10h1v1h-1z"></path><path fill="#A56E4D" d="M2 7h1v1h-1zM13 7h1v1h-1zM7 8h1v1h-1zM7 9h2v1h-2z"></path><path fill="#F2EFEA" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path className="pupil" fill="#111" d="M5 7h1v1h-1zM10 7h1v1h-1z"></path><path className="lid" fill="#C68B66" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path fill="#2A1F1C" d="M4 10h8v1h-8zM3 11h3v1h-3zM10 11h3v1h-3zM4 12h8v1h-8z"></path><path fill="#6E2F2A" d="M6 11h4v1h-4z"></path><path fill="#232733" d="M4 13h1v1h-1zM11 13h1v1h-1zM2 14h3v1h-3zM11 14h3v1h-3zM1 15h4v1h-4zM11 15h4v1h-4z"></path><path fill="#E9E7E2" d="M5 13h2v1h-2zM9 13h2v1h-2zM6 14h1v1h-1zM9 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1z"></path><path fill="#7B1E2C" d="M7 13h2v1h-2zM7 14h2v1h-2zM7 15h2v1h-2z"></path><path fill="#3A4152" d="M5 14h1v1h-1zM10 14h1v1h-1zM5 15h1v1h-1zM10 15h1v1h-1z"></path></svg>
            </div>
            <button className="photo-tag" type="button" onClick={togglePx} aria-pressed={pxPressed}>{pxLabel}</button>
          </div>
          </div>

          <div className="about-tx rv d1">
            <p className="label"><svg className="px pi pi-heart" viewBox="0 0 7 6" aria-hidden="true"><path fill="currentColor" d="M1 0h2v1h-2zM4 0h2v1h-2zM0 1h7v2h-7zM1 3h5v1h-5zM2 4h3v1h-3zM3 5h1v1h-1z"></path><path fill="#fff" d="M1 1h1v1h-1z"></path></svg>About</p>
            <h2 className="h2">Backend-first, <em>product-minded.</em></h2>
            <p>I'm a full-stack developer with a strong base in <b>Java (Spring Boot)</b> and the <b>MERN stack</b>, and hands-on experience with <b>Python</b> for AI and automation.</p>
            <p>I work across the whole product: API design, authentication, real-time features and the React interface on top. Recent work includes lead scoring, NLP on WhatsApp messages and web scraping pipelines.</p>
            <p>I focus on clean architecture, readable code and systems that scale well.</p>
          </div>

          <div className="about-side rv d2">
            <ul className="info">
              <li><small>Based in</small><span>Islamabad, Pakistan</span></li>
              <li><small>Focus</small><span>Full-stack web · AI &amp; automation</span></li>
              <li><small>Education</small><span>BS Software Engineering, COMSATS University Islamabad</span></li>
              <li><small>Open to</small><span>Full-time roles · Contract work</span></li>
            </ul>
            <a className="cv" href="/Muhammad-Soban-Resume.pdf" download="Muhammad-Soban-Resume.pdf" target="_blank" rel="noopener" aria-label="Download resume as PDF">
              <div className="cv-page" aria-hidden="true">
                <b>MUHAMMAD SOBAN</b><em>FULL STACK DEVELOPER</em>
                <hr />
                <small>SUMMARY</small><i style={{ width: "100%" }}></i><i style={{ width: "94%" }}></i><i style={{ width: "72%" }}></i>
                <small>WORK EXPERIENCE</small><i style={{ width: "88%" }}></i><i style={{ width: "96%" }}></i>
                <small>PROJECTS</small><i style={{ width: "90%" }}></i>
              </div>
              <div className="cv-row">
                <div><b>Resume.pdf</b><small>PDF · click to download</small></div>
                <span className="cv-dl" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"></path></svg></span>
              </div>
            </a>
          </div>
        </div>
      </section>

  
    </>
  );
}
