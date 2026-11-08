import React from 'react';

/* Contact section. `v` is the view model built in App.renderVals(). */
export default function Contact({ v }) {
  const { gameKey, gameTap, mailHref, setMail, setMsg, setName, setWorld } = v;
  return (
    <>
      <section id="contact" className="sec" style={{ backgroundColor: "var(--bg2)", paddingBottom: "0" }}>
        <div className="wrap ct">
          <div className="rv">
            <p className="label"><svg className="px pi pi-mail" viewBox="0 0 8 6" aria-hidden="true"><path fill="currentColor" d="M0 0h8v6h-8z"></path><path fill="var(--bg)" d="M1 1h1v1h-1zM2 2h1v1h-1zM3 3h2v1h-2zM5 2h1v1h-1zM6 1h1v1h-1z"></path></svg>Contact</p>
            <h2 className="ct-big">Let's build <em>something.</em></h2>
            <p className="sub">Open to full-time roles and contract work. Send a message and I'll get back to you.</p>
            <ul className="ct-links">
              <li><a href="mailto:sobaniftikhar1098@gmail.com"><small>Email</small><b>sobaniftikhar1098@gmail.com</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a></li>
              <li><a href="tel:+923194941098"><small>Phone</small><b>+92 319 4941098</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a></li>
              <li><a href="https://github.com/soban-iftikhar" target="_blank" rel="noopener noreferrer"><small>GitHub</small><b>soban-iftikhar</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a></li>
              <li><a href="https://linkedin.com/in/soban-iftikhar1" target="_blank" rel="noopener noreferrer"><small>LinkedIn</small><b>soban-iftikhar1</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a></li>
            </ul>
          </div>
          <div className="form rv d1">
            <h3>Send a message</h3>
            <div className="field"><label htmlFor="cf-name">Your name</label><input id="cf-name" type="text" autoComplete="name" placeholder="Soban Iftikhar" onInput={setName} /></div>
            <div className="field"><label htmlFor="cf-mail">Your email</label><input id="cf-mail" type="email" autoComplete="email" placeholder="example@gmail.com" onInput={setMail} /></div>
            <div className="field"><label htmlFor="cf-msg">What are you building?</label><textarea id="cf-msg" placeholder="A quick overview, timeline and budget…" onInput={setMsg}></textarea></div>
            <a className="btn btn-pri" href={mailHref}>Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </a>
            <p className="form-note">Opens your email app with the message ready to send.</p>
          </div>
        </div>
        <footer className="foot">
          <div className="wrap foot-in">
            <div className="foot-l">
              <svg className="px" viewBox="0 0 16 16" aria-hidden="true"><path fill="#17171C" d="M5 0h6v1h-6zM3 1h3v1h-3zM7 1h6v1h-6zM2 2h12v1h-12zM2 3h13v1h-13zM2 4h2v1h-2zM12 4h2v1h-2zM2 5h1v1h-1zM13 5h1v1h-1zM2 6h1v1h-1zM4 6h3v1h-3zM9 6h3v1h-3zM13 6h1v1h-1z"></path><path fill="#C68B66" d="M4 4h8v1h-8zM3 5h10v1h-10zM3 6h1v1h-1zM7 6h2v1h-2zM12 6h1v1h-1zM3 7h1v1h-1zM7 7h2v1h-2zM12 7h1v1h-1zM3 8h4v1h-4zM8 8h5v1h-5zM3 9h4v1h-4zM9 9h4v1h-4zM3 10h1v1h-1zM12 10h1v1h-1z"></path><path fill="#A56E4D" d="M2 7h1v1h-1zM13 7h1v1h-1zM7 8h1v1h-1zM7 9h2v1h-2z"></path><path fill="#F2EFEA" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path className="pupil" fill="#111" d="M5 7h1v1h-1zM10 7h1v1h-1z"></path><path className="lid" fill="#C68B66" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path fill="#2A1F1C" d="M4 10h8v1h-8zM3 11h3v1h-3zM10 11h3v1h-3zM4 12h8v1h-8z"></path><path fill="#6E2F2A" d="M6 11h4v1h-4z"></path><path fill="#232733" d="M4 13h1v1h-1zM11 13h1v1h-1zM2 14h3v1h-3zM11 14h3v1h-3zM1 15h4v1h-4zM11 15h4v1h-4z"></path><path fill="#E9E7E2" d="M5 13h2v1h-2zM9 13h2v1h-2zM6 14h1v1h-1zM9 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1z"></path><path fill="#7B1E2C" d="M7 13h2v1h-2zM7 14h2v1h-2zM7 15h2v1h-2z"></path></svg>
              <span>© 2026 Muhammad Soban</span>
            </div>
            <a href="#top">Back to top ↑</a>
          </div>
          <div className="world idle" ref={setWorld}>
            <span className="sky-sun" aria-hidden="true"></span>
            <span className="star" style={{ left: "8%", top: "70px" }} aria-hidden="true"></span>
            <span className="star" style={{ left: "30%", top: "58px", animationDelay: ".7s" }} aria-hidden="true"></span>
            <span className="star" style={{ left: "52%", top: "76px", animationDelay: "1.3s" }} aria-hidden="true"></span>
            <span className="star" style={{ left: "70%", top: "50px", animationDelay: ".4s" }} aria-hidden="true"></span>
            <div className="ly ly-clouds" aria-hidden="true"></div>
            <div className="ly ly-city" aria-hidden="true"></div>
            <div className="ly ly-signs" aria-hidden="true">
              <span className="sign" style={{ left: "150px" }}><b>NOW HIRING</b><i></i></span>
              <span className="sign" style={{ left: "750px" }}><b>ENTRY LEVEL · 5 YRS EXP</b><i></i></span>
              <span className="sign" style={{ left: "1350px" }}><b>WE'RE LIKE A FAMILY</b><i></i></span>
              <span className="sign" style={{ left: "1950px" }}><b>UNLIMITED PTO*</b><i></i></span>
              <span className="sign" style={{ left: "2550px" }}><b>NOW HIRING</b><i></i></span>
              <span className="sign" style={{ left: "3150px" }}><b>ENTRY LEVEL · 5 YRS EXP</b><i></i></span>
              <span className="sign" style={{ left: "3750px" }}><b>WE'RE LIKE A FAMILY</b><i></i></span>
              <span className="sign" style={{ left: "4350px" }}><b>UNLIMITED PTO*</b><i></i></span>
            </div>
            <div className="ly ly-street" aria-hidden="true"></div>
            <div className="hud" aria-hidden="true"><b>JOB HUNT RUN</b><span>Hurdles <i className="g-h">0</i></span><span>Coffee <i className="g-c">0</i></span><span>Offers <i className="g-o">0</i></span><span>Best <i className="g-b">0</i></span></div>
            <div className="g-msg" aria-hidden="true"><b className="g-title">JOB HUNT RUN</b><span className="g-sub">Click or press Space to start</span></div>
            <div className="ob" aria-hidden="true"><span className="ob-tag">DEADLINE</span><i></i></div>
            <div className="ob" aria-hidden="true"><span className="ob-tag">MERGE CONFLICT</span><i></i></div>
            <div className="ob" aria-hidden="true"><span className="ob-tag">5 YRS EXP REQ.</span><i></i></div>
            <div className="ob" aria-hidden="true"><span className="ob-tag">BUG IN PROD</span><i></i></div>
            <div className="cup" aria-hidden="true"><svg className="px" viewBox="0 0 10 12"><path fill="#E9E7E2" d="M0 4h7v7h-7z"></path><path fill="#5A3A22" d="M1 4h5v1h-5z"></path><path fill="#E9E7E2" d="M7 5h2v1h-2zM8 6h1v2h-1zM7 8h2v1h-2z"></path><path fill="#EFD395" d="M2 6h3v2h-3z"></path><path fill="#C9C5BC" d="M0 10h7v1h-7z"></path><path fill="#A7A29A" d="M2 1h1v2h-1zM4 0h1v2h-1z"></path></svg></div>
            <div className="cup" aria-hidden="true"><svg className="px" viewBox="0 0 10 12"><path fill="#E9E7E2" d="M0 4h7v7h-7z"></path><path fill="#5A3A22" d="M1 4h5v1h-5z"></path><path fill="#E9E7E2" d="M7 5h2v1h-2zM8 6h1v2h-1zM7 8h2v1h-2z"></path><path fill="#EFD395" d="M2 6h3v2h-3z"></path><path fill="#C9C5BC" d="M0 10h7v1h-7z"></path><path fill="#A7A29A" d="M2 1h1v2h-1zM4 0h1v2h-1z"></path></svg></div>
            <div className="walker" aria-hidden="true"><span className="quip">Open to work!</span><svg className="px" viewBox="0 0 9 15"><path fill="#17171C" d="M2 0h5v1h-5zM0 1h7v1h-7zM0 2h3v1h-3zM0 3h2v1h-2z"></path><path fill="#C68B66" d="M3 2h4v1h-4zM2 3h3v1h-3zM6 3h1v1h-1zM1 4h7v1h-7zM1 5h1v1h-1z"></path><path fill="#111" d="M5 3h1v1h-1z"></path><path fill="#2A1F1C" d="M2 5h5v1h-5zM2 6h4v1h-4z"></path><path fill="#2B3142" d="M1 7h3v1h-3zM1 8h4v1h-4zM1 9h5v1h-5zM1 10h5v1h-5zM1 11h5v1h-5z"></path><path fill="#E9E7E2" d="M4 7h1v1h-1z"></path><path fill="#7B1E2C" d="M5 7h1v1h-1zM5 8h1v1h-1z"></path><path fill="#C68B66" d="M6 9h1v1h-1z"></path><path fill="#FFFFFF" d="M6 6h3v3h-3z"></path><path fill="#A7A29A" d="M6 7h2v1h-2zM6 8h1v1h-1z"></path><g className="fa"><path fill="#23283A" d="M1 12h2v1h-2zM4 12h2v1h-2zM0 13h2v1h-2zM5 13h2v1h-2z"></path><path fill="#0B0B0E" d="M0 14h2v1h-2zM6 14h2v1h-2z"></path></g><g className="fb"><path fill="#23283A" d="M2 12h3v1h-3zM2 13h3v1h-3z"></path><path fill="#0B0B0E" d="M2 14h4v1h-4z"></path></g></svg></div>
            <div className="offer" aria-hidden="true">OFFER RECEIVED!</div>
            <button className="world-btn" type="button" onPointerDown={gameTap} onKeyDown={gameKey} aria-label="Job Hunt Run mini game. Press to start or jump."></button>
          </div>
        </footer>
      </section>

  
    </>
  );
}
