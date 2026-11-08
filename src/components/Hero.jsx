import React from 'react';

/* Hero section. `v` is the view model built in App.renderVals(). */
export default function Hero({ v }) {
  const { setAvatar, setEditor } = v;
  return (
    <>
      <section id="top" className="hero" aria-label="Introduction">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="wrap hero-in">
          <div>
            <span className="status"><i aria-hidden="true"></i>Open to work</span>
            <p className="hi">Hi, I'm <b>Muhammad Soban</b> · Islamabad, Pakistan</p>
            <h1 className="h1"><span className="w hl">Full-stack</span> <span className="w">developer</span> <span className="w">building</span> <span className="w">reliable</span> <span className="w">web</span> <span className="w">products.</span></h1>
            <p className="lede">I build web applications end to end: <b>REST APIs and databases</b> on the backend, <b>React and Next.js</b> on the frontend, and Python services for <b>AI and automation</b>. Most of my work is in Java Spring Boot, the MERN stack and FastAPI.</p>
            <div className="cta">
              <a className="btn btn-pri" href="#projects">See my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </a>
              <a className="btn" href="/Muhammad-Soban-Resume.pdf" download="Muhammad-Soban-Resume.pdf" target="_blank" rel="noopener">Download CV
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"></path></svg>
              </a>
            </div>
            <div className="facts">
              <div className="fact"><b>9</b><span>Projects shipped</span></div>
              <div className="fact"><b>2</b><span>Roles at Decimal Solutions</span></div>
              <div className="fact"><b>12</b><span>Certifications</span></div>
            </div>
          </div>

          <div className="scene">
            <span className="spark s1" aria-hidden="true"><svg viewBox="0 0 7 7" className="px"><path fill="currentColor" d="M3 0h1v7h-1zM0 3h7v1h-7z"></path></svg></span>
            <span className="spark s2" aria-hidden="true"><svg viewBox="0 0 7 7" className="px"><path fill="currentColor" d="M3 0h1v7h-1zM0 3h7v1h-7z"></path></svg></span>
            <span className="spark s3" aria-hidden="true"><svg viewBox="0 0 7 7" className="px"><path fill="currentColor" d="M3 0h1v7h-1zM0 3h7v1h-7z"></path></svg></span>

            <div className="bubble" aria-hidden="true"><span>npm run build ✓</span><span>tests passing</span><span>chai++</span></div>
            <div className="peek" aria-hidden="true" ref={setAvatar}>
              <svg className="px" viewBox="0 0 16 16"><path fill="#17171C" d="M5 0h6v1h-6zM3 1h3v1h-3zM7 1h6v1h-6zM2 2h12v1h-12zM2 3h13v1h-13zM2 4h2v1h-2zM12 4h2v1h-2zM2 5h1v1h-1zM13 5h1v1h-1zM2 6h1v1h-1zM4 6h3v1h-3zM9 6h3v1h-3zM13 6h1v1h-1z"></path><path fill="#34343F" d="M4 0h1v1h-1zM6 1h1v1h-1z"></path><path fill="#C68B66" d="M4 4h8v1h-8zM3 5h10v1h-10zM3 6h1v1h-1zM7 6h2v1h-2zM12 6h1v1h-1zM3 7h1v1h-1zM7 7h2v1h-2zM12 7h1v1h-1zM3 8h4v1h-4zM8 8h5v1h-5zM3 9h4v1h-4zM9 9h4v1h-4zM3 10h1v1h-1zM12 10h1v1h-1z"></path><path fill="#A56E4D" d="M2 7h1v1h-1zM13 7h1v1h-1zM7 8h1v1h-1zM7 9h2v1h-2z"></path><path fill="#F2EFEA" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path className="pupil" fill="#111" d="M5 7h1v1h-1zM10 7h1v1h-1z"></path><path className="lid" fill="#C68B66" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path fill="#2A1F1C" d="M4 10h8v1h-8zM3 11h3v1h-3zM10 11h3v1h-3zM4 12h8v1h-8z"></path><path fill="#6E2F2A" d="M6 11h4v1h-4z"></path><path fill="#232733" d="M4 13h1v1h-1zM11 13h1v1h-1zM2 14h3v1h-3zM11 14h3v1h-3zM1 15h4v1h-4zM11 15h4v1h-4z"></path><path fill="#E9E7E2" d="M5 13h2v1h-2zM9 13h2v1h-2zM6 14h1v1h-1zM9 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1z"></path><path fill="#7B1E2C" d="M7 13h2v1h-2zM7 14h2v1h-2zM7 15h2v1h-2z"></path><path fill="#3A4152" d="M5 14h1v1h-1zM10 14h1v1h-1zM5 15h1v1h-1zM10 15h1v1h-1z"></path></svg>
            </div>
            <div className="hands" aria-hidden="true"><i></i><i></i></div>

            <div className="laptop">
              <div className="screen">
                <div className="ed" ref={setEditor} data-f="0" aria-label="Code editor animation" role="img">
                  <div className="ed-top">
                    <span className="dt" style={{ backgroundColor: "#4B4A48" }}></span><span className="dt" style={{ backgroundColor: "#4B4A48" }}></span><span className="dt" style={{ backgroundColor: "#4B4A48" }}></span>
                    <div className="ed-tabs">
                      <span className="ed-tab t0"><i style={{ backgroundColor: "#EFD395" }}></i>leads.py</span>
                      <span className="ed-tab t1"><i style={{ backgroundColor: "#A4A4A4" }}></i>VoiceSale.jsx</span>
                    </div>
                  </div>
                  <div className="ed-side" aria-hidden="true">
                    <p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>soban/</p>
                    <p className="in1">leads/</p>
                    <p className="in2 cur">leads.py</p>
                    <p className="in2">scoring.py</p>
                    <p className="in1">boldukan/</p>
                    <p className="in2">VoiceSale.jsx</p>
                    <p className="in1">learnova/</p>
                    <p className="in1">swaari/</p>
                    <p className="in1">README.md</p>
                  </div>
                  <div className="ed-body" aria-hidden="true">
                    <div className="code c0">
                      <span className="ln"><span className="tx"><span className="k">from</span> fastapi <span className="k">import</span> APIRouter, Depends</span></span>
                      <span className="ln"><span className="tx"><span className="k">from</span> .scoring <span className="k">import</span> <span className="f">score_lead</span></span></span>
                      <span className="ln"><span className="tx"> </span></span>
                      <span className="ln"><span className="tx">router = <span className="t">APIRouter</span>(prefix=<span className="s">"/leads"</span>)</span></span>
                      <span className="ln"><span className="tx"> </span></span>
                      <span className="ln"><span className="tx"><span className="f">@router.get</span>(<span className="s">"/hot"</span>)</span></span>
                      <span className="ln"><span className="tx"><span className="k">async def</span> <span className="f">hot_leads</span>(limit: <span className="t">int</span> = <span className="n">20</span>, db=<span className="t">Depends</span>(session)):</span></span>
                      <span className="ln"><span className="tx">    leads = <span className="k">await</span> db.<span className="f">fetch_recent</span>(limit)</span></span>
                      <span className="ln"><span className="tx">    ranked = <span className="f">sorted</span>(leads, key=score_lead, reverse=<span className="k">True</span>)</span></span>
                      <span className="ln"><span className="tx">    <span className="k">return</span> [l <span className="k">for</span> l <span className="k">in</span> ranked <span className="k">if</span> l.score &gt; <span className="n">0.8</span>]</span></span>
                      <span className="ln"><span className="tx"> </span></span>
                      <span className="ln"><span className="tx"><span className="c"># 4 platforms scraped · hours of search → minutes</span></span></span>
                    </div>
                    <div className="code c1">
                      <span className="ln"><span className="tx"><span className="k">export default function</span> <span className="f">VoiceSale</span>({'{'} note {'}'}) {'{'}</span></span>
                      <span className="ln"><span className="tx">  <span className="k">const</span> {'{'} text {'}'} = <span className="f">useTranscribe</span>(note, <span className="s">"ur-PK"</span>);</span></span>
                      <span className="ln"><span className="tx">  <span className="k">const</span> sale = <span className="f">parseSale</span>(text);</span></span>
                      <span className="ln"><span className="tx"> </span></span>
                      <span className="ln"><span className="tx">  <span className="k">return</span> (</span></span>
                      <span className="ln"><span className="tx">    &lt;<span className="t">Card</span> title=<span className="s">"Naya sale"</span>&gt;</span></span>
                      <span className="ln"><span className="tx">      &lt;<span className="t">Line</span> item={'{'}sale.item{'}'} qty={'{'}sale.qty{'}'} /&gt;</span></span>
                      <span className="ln"><span className="tx">      &lt;<span className="t">Total</span> amount={'{'}sale.total{'}'} /&gt;</span></span>
                      <span className="ln"><span className="tx">      &lt;<span className="t">Confirm</span> onYes={'{'}() =&gt; <span className="f">logSale</span>(sale){'}'} /&gt;</span></span>
                      <span className="ln"><span className="tx">    &lt;/<span className="t">Card</span>&gt;</span></span>
                      <span className="ln"><span className="tx">  );</span></span>
                      <span className="ln"><span className="tx">{'}'}</span></span>
                    </div>
                  </div>
                  <div className="ed-bar" aria-hidden="true"><span><span>⎇ main</span><span>✓ 0 problems</span></span><span><span>UTF-8</span><span>Ln 12</span></span></div>
                </div>
              </div>
              <div className="deck" aria-hidden="true"></div>
            </div>

            <div className="plant" aria-hidden="true">
              <svg className="px" viewBox="0 0 8 11"><g className="leaf"><path fill="#3FA34D" d="M3 0h1v1h-1zM2 1h2v1h-2zM4 2h2v1h-2zM1 3h2v1h-2zM3 1h1v6h-1zM5 4h2v1h-2zM0 5h3v1h-3z"></path><path fill="#2E7D3A" d="M2 2h1v1h-1zM5 3h1v1h-1zM1 4h1v1h-1z"></path></g><path fill="#A4502F" d="M1 7h6v1h-6z"></path><path fill="#C2643F" d="M2 8h4v3h-4z"></path></svg>
            </div>
            <div className="mug" aria-hidden="true">
              <svg className="px" viewBox="0 0 10 12"><g className="steam" fill="#94A1B3"><rect x="2" y="0" width="1" height="2"></rect><rect x="4" y="1" width="1" height="2"></rect><rect x="6" y="0" width="1" height="2"></rect></g><path fill="#E9E7E2" d="M0 4h7v7h-7z"></path><path fill="#5A3A22" d="M1 4h5v1h-5z"></path><path fill="#E9E7E2" d="M7 5h2v1h-2zM8 6h1v2h-1zM7 8h2v1h-2z"></path><path fill="#EFD395" d="M2 6h3v2h-3z"></path><path fill="#C9C5BC" d="M0 10h7v1h-7z"></path></svg>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
