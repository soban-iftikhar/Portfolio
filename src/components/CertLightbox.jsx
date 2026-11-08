import React from 'react';

/* CertLightbox section. `v` is the view model built in App.renderVals(). */
export default function CertLightbox({ v }) {
  const { closeLb, cur, lbKey, lightbox, stop } = v;
  return (
    <>
      {(lightbox) ? (<>
        <div className="lbx" role="dialog" aria-modal="true" aria-label={cur.title} onClick={closeLb} onKeyDown={lbKey}>
          <button className="icon-btn" type="button" onClick={closeLb} aria-label="Close certificate view">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
          </button>
          <figure onClick={stop}>
            <img src={cur.img} alt={`${cur.title} certificate from ${cur.issuer}`} />
            <figcaption><span>{cur.title}</span><span>{cur.issuer} · {cur.date}</span></figcaption>
          </figure>
        </div>
      </>) : null}
    </>
  );
}
