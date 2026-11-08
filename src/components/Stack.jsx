import React from 'react';

/* Stack section. `v` is the view model built in App.renderVals(). */
export default function Stack({ v }) {
  const { stack, stackCmd, stackCount, stackLine } = v;
  return (
    <>
      <section id="stack" className="sec" style={{ backgroundColor: "var(--bg2)" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="label"><svg className="px pi" viewBox="0 0 8 8" aria-hidden="true"><path className="drop" fill="currentColor" d="M0 6h4v2h-4z"></path><path className="drop b2" fill="var(--acc2)" d="M4 6h4v2h-4z"></path><path className="drop b3" fill="currentColor" d="M2 3h4v2h-4z"></path></svg>Stack</p>
              <h2 className="h2">The tools I <em>reach for.</em></h2>
            </div>
            <p className="sub">Grouped by where they live in a system, with where I've actually used them.</p>
          </div>
          <div className="stk rv">
            <div>
              <div className="stk-tabs" role="tablist" aria-label="Stack categories">
                {(stack).map((g, i_g) => (
    <React.Fragment key={i_g}>
                  <button className={`stk-tab ${g.cls}`} type="button" role="tab" aria-selected={g.sel} onClick={g.pick}>{g.label}<small>{g.count}</small></button>
                </React.Fragment>
    ))}
              </div>
              <div className="term" aria-hidden="true">
                <div className="term-top"><i></i><i></i><i></i></div>
                <div className="term-body">
                  <p><span className="pr">soban@dev</span>:~$ stack --list {stackCmd}</p>
                  <p className="ok">✓ {stackCount} tools loaded</p>
                  <p>{stackLine}</p>
                  <p className="cur"><span className="pr">soban@dev</span>:~$</p>
                </div>
              </div>
            </div>
            <div className="stk-panels">
              {(stack).map((g, i_g) => (
    <React.Fragment key={i_g}>
                <div className={`stk-panel ${g.cls}`} role="tabpanel" aria-label={g.label}>
                  {(g.items).map((it, i_it) => (
    <React.Fragment key={i_it}>
                    <div className="tile">
                      <span className="tile-ic"><svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: it.c }}><path d={it.d}></path></svg></span>
                      <div><b>{it.n}</b><small>{it.u}</small></div>
                    </div>
                  </React.Fragment>
    ))}
                </div>
              </React.Fragment>
    ))}
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
