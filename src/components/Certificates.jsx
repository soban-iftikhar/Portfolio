import React from 'react';

/* Certificates section. `v` is the view model built in App.renderVals(). */
export default function Certificates({ v }) {
  const { certAuto, certCounter, certKey, certNext, certPrev, certTotal, certs, cfDown, cfEnter, cfLeave, cfMove, cfState, cfUp, cur, filters, openLb, setCf, setRing } = v;
  return (
    <>
      <section id="certificates" className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="label"><svg className="px pi" viewBox="0 0 8 8" aria-hidden="true"><path fill="var(--acc2)" d="M0 0h8v1h-8zM1 1h6v3h-6zM0 1h1v2h-1zM7 1h1v2h-1zM2 4h4v1h-4zM3 5h2v1h-2zM2 6h4v1h-4z"></path><path fill="currentColor" d="M1 7h6v1h-6z"></path><path className="shine" fill="#fff" d="M2 1h1v2h-1z"></path></svg>Certificates</p>
              <h2 className="h2">Certified &amp; <em>verified.</em></h2>
            </div>
            <div>
              <p className="sub">Twelve certificates, including a national hackathon final. Swipe, drag or use the arrows. Click the front card to view it full size.</p>
              <div className="cf-filters" role="group" aria-label="Filter by issuer" style={{ marginTop: "22px" }}>
                {(filters).map((f, i_f) => (
    <React.Fragment key={i_f}>
                  <button className={`chip-btn ${f.cls}`} type="button" onClick={f.pick} aria-pressed={f.pressed}>{f.label}<sup>{f.count}</sup></button>
                </React.Fragment>
    ))}
              </div>
            </div>
          </div>

          <div className="rv">
            <div className={`cf ${cfState}`} ref={setCf} onPointerEnter={cfEnter} onPointerLeave={cfLeave} onKeyDown={certKey}>
              <div className="cf-stage" onPointerDown={cfDown} onPointerMove={cfMove} onPointerUp={cfUp} onPointerCancel={cfUp} aria-roledescription="carousel" aria-label="Certificates">
                <div className="cf-ring" ref={setRing}>
                {(certs).map((c, i_c) => (
    <React.Fragment key={i_c}>
                  <button className={`cf-card ${c.cls}`} type="button" onClick={c.pick} aria-label={c.aria} style={{ transform: c.tf, opacity: c.op, zIndex: c.z }}>
                    <img src={c.img} alt="" loading="lazy" draggable="false" />
                    <span className="cf-zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.5-4.5M11 8v6M8 11h6"></path></svg>View full size</span>
                  </button>
                </React.Fragment>
    ))}
                </div>
                <button className="icon-btn lg cf-arrow l" type="button" onClick={certPrev} aria-label="Previous certificate">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
                </button>
                <button className="icon-btn lg cf-arrow r" type="button" onClick={certNext} aria-label="Next certificate">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </button>
              </div>
              <div className="cf-dots" role="group" aria-label="Choose certificate">
                {(certs).map((c, i_c) => (
    <React.Fragment key={i_c}>
                  <button className={`cf-dot ${c.dot}`} type="button" onClick={c.go} aria-label={`Certificate ${c.n}`}><span className="fill" onAnimationEnd={certAuto}></span></button>
                </React.Fragment>
    ))}
              </div>
              <p className="cf-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M4 12h16"></path></svg>{certCounter} of {certTotal} · auto-plays, pauses on hover</p>

              <div className="cf-info">
                <div>
                  <p className="cf-iss">{cur.issuer}</p>
                  <h3 className="cf-title">{cur.title}</h3>
                  <p className="cf-desc">{cur.desc}</p>
                </div>
                <div>
                  <dl className="cf-meta">
                    <div><dt>Issued</dt><dd>{cur.date}</dd></div>
                    <div><dt>Credential ID</dt><dd>{cur.cid}</dd></div>
                  </dl>
                  <div className="cf-act">
                    <button className="btn btn-sm" type="button" onClick={openLb}>View full size</button>
                    {(cur.verify) ? (<>
                      <a className="btn btn-pri btn-sm" href={cur.verify} target="_blank" rel="noopener noreferrer">Verify credential
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
                      </a>
                    </>) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
