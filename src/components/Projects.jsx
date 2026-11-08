import React from 'react';

/* Projects section. `v` is the view model built in App.renderVals(). */
export default function Projects({ v }) {
  const { dragEnd, dragMove, dragStart, onTrackScroll, pjKey, pjNext, pjNum, pjPrev, projects, setFill, setTrack } = v;
  return (
    <>
      <section id="projects" className="sec" style={{ backgroundColor: "var(--bg2)" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="label"><svg className="px pi" viewBox="0 0 8 8" aria-hidden="true"><path fill="currentColor" d="M0 0h8v6h-8zM3 6h2v1h-2zM2 7h4v1h-4z"></path><path fill="var(--bg)" d="M1 1h6v4h-6z"></path><path className="blink" fill="currentColor" d="M2 2h1v2h-1z"></path><path fill="var(--acc2)" d="M4 2h2v1h-2zM4 3h1v1h-1z"></path></svg>Projects</p>
              <h2 className="h2">Things I've <em>built.</em></h2>
            </div>
            <div>
              <p className="sub">AI platforms, real-time apps and a few games. Swipe or drag the row, use the arrows, or open a card for details.</p>
              <div className="pj-ctrl" style={{ marginTop: "22px" }}>
                <button className="icon-btn lg" type="button" onClick={pjPrev} aria-label="Previous project">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
                </button>
                <p className="pj-count" aria-live="polite"><b>{pjNum}</b>/ 09</p>
                <button className="icon-btn lg" type="button" onClick={pjNext} aria-label="Next project">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pj-zone rv" onKeyDown={pjKey}>
          <div className="track" ref={setTrack} onScroll={onTrackScroll} onPointerDown={dragStart} onPointerMove={dragMove} onPointerUp={dragEnd} onPointerCancel={dragEnd} aria-label="Projects, scroll horizontally">
            {(projects).map((p, i_p) => (
    <React.Fragment key={i_p}>
              <article className="pcard">
                <button className="pc-frame" type="button" onClick={p.open} aria-label={`Open ${p.name} details`}>
                  <span className="chrome" aria-hidden="true"><i></i><i></i><i></i><span>{p.url}</span></span>
                  <span className="view" style={{ display: "block" }}>
                    {(p.img) ? (<>
                      <img src={p.img} alt={p.alt} draggable="false" />
                    </>) : null}

                    {(p.mk.leads) ? (<>
                      <span className="mk mk-leads" aria-hidden="true">
                        <span className="ml-side"><span className="ml-logo"><i></i>LEADS</span><span className="on">Dashboard</span><span>Listings</span><span>Market</span><span>Outreach</span><span>Settings</span></span>
                        <span className="ml-main">
                          <span className="ml-row"><b>Market pulse</b><span className="ml-live">Scraping 4 platforms</span></span>
                          <span className="ml-kpis">
                            <span style={{ display: "block" }}><small>New leads</small><b>1,284</b><em>+18% wk</em></span>
                            <span style={{ display: "block" }}><small>Hot leads</small><b>96</b><em>score &gt; 0.8</em></span>
                            <span style={{ display: "block" }}><small>Outreach sent</small><b>342</b><em>awaiting approval</em></span>
                          </span>
                          <span className="ml-tbl" style={{ display: "block" }}>
                            <span className="ml-tr hd"><span>Listing</span><span>Lead score</span><span>Status</span></span>
                            <span className="ml-tr"><span>DHA Phase 2 · 1 kanal</span><span className="ml-bar"><i style={{ width: "92%" }}></i></span><span className="pill hot">Hot</span></span>
                            <span className="ml-tr"><span>Bahria Town · 10 marla</span><span className="ml-bar"><i style={{ width: "81%" }}></i></span><span className="pill hot">Hot</span></span>
                            <span className="ml-tr"><span>G-13 · 7 marla</span><span className="ml-bar"><i style={{ width: "64%" }}></i></span><span className="pill warm">Warm</span></span>
                            <span className="ml-tr"><span>B-17 · Plot</span><span className="ml-bar"><i style={{ width: "41%" }}></i></span><span className="pill new">New</span></span>
                          </span>
                        </span>
                      </span>
                    </>) : null}

                    {(p.mk.bol) ? (<>
                      <span className="mk mk-bol" aria-hidden="true">
                        <span className="mb-phone">
                          <span className="mb-head"><i>BD</i><span><b>BolDukan</b><small>bot · online</small></span></span>
                          <span className="mb-chat">
                            <span className="mb-in mb-voice"><b></b><span className="mb-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><small>0:07</small></span>
                            <span className="mb-out">Theek hai! 3× Surf Excel bech diye, Rs 1,050. Stock baqi: 14</span>
                            <span className="mb-btns"><span>Confirm</span><span>Undo</span></span>
                            <span className="mb-in">aaj ki sale?</span>
                          </span>
                        </span>
                        <span className="mb-dash">
                          <span className="mb-card" style={{ display: "block" }}><small>Aaj ki sale</small><b>Rs 18,400</b>
                            <span className="mb-chart"><i style={{ height: "40%" }}></i><i style={{ height: "65%" }}></i><i style={{ height: "52%" }}></i><i style={{ height: "80%" }}></i><i style={{ height: "58%" }}></i><i style={{ height: "92%" }}></i><i style={{ height: "74%" }}></i></span>
                          </span>
                          <span className="mb-card" style={{ display: "block" }}><small>Low stock</small>
                            <span className="mb-low"><span>Surf Excel 1kg</span><em>14</em></span>
                            <span className="mb-low"><span>Dalda 5L</span><em>3</em></span>
                            <span className="mb-low"><span>Tapal Danedar</span><em>6</em></span>
                          </span>
                        </span>
                      </span>
                    </>) : null}

                    {(p.mk.lms) ? (<>
                      <span className="mk mk-lms" aria-hidden="true">
                        <span className="mlm-nav"><b>Learnova</b><span>Search courses…</span><i></i></span>
                        <span className="mlm-body">
                          <span style={{ display: "block" }}>
                            <h6>Continue learning</h6>
                            <span className="mlm-courses">
                              <span className="mlm-c"><span style={{ display: "grid", backgroundColor: "#4F46E5" }}>DS</span><p>Data Structures</p><small>12 lessons</small><span className="mlm-pg"><i style={{ width: "72%" }}></i></span></span>
                              <span className="mlm-c"><span style={{ display: "grid", backgroundColor: "#0EA5E9" }}>API</span><p>Spring Boot APIs</p><small>9 lessons</small><span className="mlm-pg"><i style={{ width: "45%" }}></i></span></span>
                              <span className="mlm-c"><span style={{ display: "grid", backgroundColor: "#F59E0B" }}>UI</span><p>React Basics</p><small>14 lessons</small><span className="mlm-pg"><i style={{ width: "88%" }}></i></span></span>
                            </span>
                          </span>
                          <span className="mlm-side">
                            <span className="mlm-quiz"><small>Quiz · Week 6</small><b>04:59</b><small>Time left</small></span>
                            <span className="mlm-grade"><span>Lab 3 grade</span><b>A−</b></span>
                            <span className="mlm-chat">Instructor: Great work on lab 3!</span>
                          </span>
                        </span>
                      </span>
                    </>) : null}

                    {(p.mk.sw) ? (<>
                      <span className="mk mk-sw" aria-hidden="true">
                        <svg className="ms-map" viewBox="0 0 300 187.5" preserveAspectRatio="xMidYMid slice">
                          <rect x="0" y="0" width="300" height="190" fill="#E8EEF2"></rect>
                          <rect x="170" y="90" width="70" height="40" rx="4" fill="#CDE8D2"></rect>
                          <rect x="20" y="20" width="60" height="30" rx="4" fill="#CDE8D2"></rect>
                          <path d="M0 150H300M0 70H300M40 0V190M150 0V190M262 0V190M95 0V190" stroke="#fff" strokeWidth="9"></path>
                          <path d="M0 110H300M210 0V190" stroke="#fff" strokeWidth="4"></path>
                          <path className="ms-route" d="M40 150H150V70H262"></path>
                          <circle cx="40" cy="150" r="6" fill="#0F172A"></circle>
                          <circle cx="262" cy="70" r="7" fill="#EF4444"></circle>
                          <circle cx="262" cy="70" r="3" fill="#fff"></circle>
                          <g className="ms-car"><rect x="-7" y="-5" width="14" height="10" rx="3" fill="#0EA5E9" stroke="#fff" strokeWidth="2"></rect></g>
                        </svg>
                        <span className="ms-chip"><i></i>Driver matched · live</span>
                        <span className="ms-sheet">
                          <i>A</i>
                          <span className="ms-who" style={{ display: "block" }}><b>Ahmed · Toyota Corolla</b><small>LEB 2291 · ★ 4.9</small></span>
                          <span className="ms-eta" style={{ display: "block" }}><b>4</b><small>min</small></span>
                          <span className="go">Track ride</span>
                        </span>
                      </span>
                    </>) : null}

                    {(p.mk.hm) ? (<>
                      <span className="mk mk-hm" aria-hidden="true">
                        <span className="mh-top"><b>HostelMate</b><span className="mh-karma">★ 120 karma</span></span>
                        <span className="mh-tabs"><span className="on">Requests</span><span>Offers</span><span>My favors</span></span>
                        <span className="mh-grid">
                          <span className="mh-list">
                            <span className="mh-req"><i style={{ backgroundColor: "#F472B6" }}>HA</i><span className="mh-t" style={{ display: "block" }}><p>Need a laptop charger</p><small>Room 214 · 5 min ago</small></span><em>+15</em><span className="mh-go">Help</span></span>
                            <span className="mh-req"><i style={{ backgroundColor: "#60A5FA" }}>ZK</i><span className="mh-t" style={{ display: "block" }}><p>Print OOP notes</p><small>Room 108 · 20 min ago</small></span><em>+10</em><span className="mh-go">Help</span></span>
                            <span className="mh-req"><i style={{ backgroundColor: "#34D399" }}>UR</i><span className="mh-t" style={{ display: "block" }}><p>Ride to F-10 market</p><small>Room 302 · 1 hr ago</small></span><em>+25</em><span className="mh-go">Help</span></span>
                          </span>
                          <span className="mh-board"><h6>Top helpers</h6><p><span>1. Usman</span><b>340</b></p><p><span>2. Hamza</span><b>295</b></p><p><span>3. Zain</span><b>210</b></p></span>
                        </span>
                      </span>
                    </>) : null}

                    {(p.mk.nb) ? (<>
                      <span className="mk mk-nb" aria-hidden="true">
                        <span className="mn-nav"><b>News<em>Buzz</em></b><span>Search articles…</span></span>
                        <span className="mn-pills"><span>Top</span><span className="on">Tech</span><span>Business</span><span>Sports</span><span>World</span></span>
                        <span className="mn-body">
                          <span className="mn-feat"><span className="mn-img" style={{ display: "block" }}></span><span style={{ display: "block" }}><small>TECH · 5 MIN READ</small><span className="mn-line" style={{ width: "92%" }}></span><span className="mn-line" style={{ width: "68%" }}></span></span></span>
                          <span className="mn-list">
                            <span className="mn-item"><i style={{ backgroundColor: "#FCA5A5" }}></i><span style={{ display: "block" }}><small>AI</small><span className="mn-line" style={{ width: "90%" }}></span><span className="mn-line" style={{ width: "60%" }}></span></span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12v18l-6-4-6 4z"></path></svg></span>
                            <span className="mn-item"><i style={{ backgroundColor: "#93C5FD" }}></i><span style={{ display: "block" }}><small>STARTUPS</small><span className="mn-line" style={{ width: "85%" }}></span><span className="mn-line" style={{ width: "50%" }}></span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12v18l-6-4-6 4z"></path></svg></span>
                            <span className="mn-item"><i style={{ backgroundColor: "#86EFAC" }}></i><span style={{ display: "block" }}><small>DEV</small><span className="mn-line" style={{ width: "95%" }}></span><span className="mn-line" style={{ width: "40%" }}></span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12v18l-6-4-6 4z"></path></svg></span>
                          </span>
                        </span>
                      </span>
                    </>) : null}
                  </span>
                  <span className="pc-open" aria-hidden="true">View details<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></span>
                </button>
                <div className="pc-body">
                  <p className="pc-meta"><b>{p.num}</b><span>{p.genre}</span></p>
                  <h3 className="pc-title">{p.name}</h3>
                  <p className="pc-log">{p.log}</p>
                  <div className="chips">
                    {(p.top).map((t, i_t) => (
    <React.Fragment key={i_t}><span className="chip">{t}</span></React.Fragment>
    ))}
                  </div>
                  <div className="pc-links">
                    {(p.live) ? (<>
                      <a href={p.live} target="_blank" rel="noopener noreferrer">Live demo<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
                    </>) : null}
                    {(p.github) ? (<>
                      <a href={p.github} target="_blank" rel="noopener noreferrer">Source<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg></a>
                    </>) : null}
                  </div>
                </div>
              </article>
            </React.Fragment>
    ))}
          </div>
          <div className="wrap">
            <div className="pj-bar" aria-hidden="true"><span className="pj-fill" ref={setFill}></span></div>
            <div className="pj-foot">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M4 12h16"></path></svg>Drag, swipe or use ← →</span>
              <span>Some previews are UI mockups</span>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
