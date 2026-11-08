import React from 'react';

/* ProjectModal section. `v` is the view model built in App.renderVals(). */
export default function ProjectModal({ v }) {
  const { closeModal, modalKey, modalNext, modalOpen, modalPrev, mp, mpNextName, mpPrevName, stop } = v;
  return (
    <>
      {(modalOpen) ? (<>
        <div className="pm" role="dialog" aria-modal="true" aria-label={`${mp.name} details`} onClick={closeModal} onKeyDown={modalKey}>
          <div className="pm-card" onClick={stop}>
            <button className="icon-btn pm-x" type="button" onClick={closeModal} aria-label="Close project details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            </button>
            <p className="pm-meta">{mp.num} / 09 · {mp.genre}</p>
            <h3 className="pm-title">{mp.name}</h3>
            <p className="pm-log">{mp.log}</p>
            <p className="pm-desc">{mp.desc}</p>
            <div className="pm-grid">
              <div>
                <h4>What I built</h4>
                <ul className="pm-feats">
                  {(mp.feats).map((f, i_f) => (
    <React.Fragment key={i_f}>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg><span>{f}</span></li>
                  </React.Fragment>
    ))}
                </ul>
              </div>
              <div>
                <h4>Tech stack</h4>
                <div className="chips">
                  {(mp.tech).map((t, i_t) => (
    <React.Fragment key={i_t}><span className="chip">{t}</span></React.Fragment>
    ))}
                </div>
                <div className="pm-links">
                  {(mp.live) ? (<>
                    <a className="btn btn-pri btn-sm" href={mp.live} target="_blank" rel="noopener noreferrer">Live demo<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
                  </>) : null}
                  {(mp.github) ? (<>
                    <a className="btn btn-sm" href={mp.github} target="_blank" rel="noopener noreferrer">Source code<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
                  </>) : null}
                </div>
                {(mp.note) ? (<>
                  <p className="pm-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v5M12 16h.01"></path></svg>{mp.note}</p>
                </>) : null}
              </div>
            </div>
            <div className="pm-nav">
              <button className="btn btn-sm" type="button" onClick={modalPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: "scaleX(-1)" }}><path d="M5 12h14M13 6l6 6-6 6"></path></svg>{mpPrevName}</button>
              <button className="btn btn-sm" type="button" onClick={modalNext}>{mpNextName}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
            </div>
          </div>
        </div>
      </>) : null}

  
    </>
  );
}
