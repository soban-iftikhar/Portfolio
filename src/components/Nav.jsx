import React from 'react';

/* Nav section. `v` is the view model built in App.renderVals(). */
export default function Nav({ v }) {
  const { isDark, isLight, themeLabel, toggleTheme } = v;
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a className="brand" href="#top" aria-label="Muhammad Soban, back to top">
            <span className="brand-av">
              <svg className="px" viewBox="0 0 16 16" aria-hidden="true"><path fill="#17171C" d="M5 0h6v1h-6zM3 1h3v1h-3zM7 1h6v1h-6zM2 2h12v1h-12zM2 3h13v1h-13zM2 4h2v1h-2zM12 4h2v1h-2zM2 5h1v1h-1zM13 5h1v1h-1zM2 6h1v1h-1zM4 6h3v1h-3zM9 6h3v1h-3zM13 6h1v1h-1z"></path><path fill="#34343F" d="M4 0h1v1h-1zM6 1h1v1h-1z"></path><path fill="#C68B66" d="M4 4h8v1h-8zM3 5h10v1h-10zM3 6h1v1h-1zM7 6h2v1h-2zM12 6h1v1h-1zM3 7h1v1h-1zM7 7h2v1h-2zM12 7h1v1h-1zM3 8h4v1h-4zM8 8h5v1h-5zM3 9h4v1h-4zM9 9h4v1h-4zM3 10h1v1h-1zM12 10h1v1h-1z"></path><path fill="#A56E4D" d="M2 7h1v1h-1zM13 7h1v1h-1zM7 8h1v1h-1zM7 9h2v1h-2z"></path><path fill="#F2EFEA" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path className="pupil" fill="#111" d="M5 7h1v1h-1zM10 7h1v1h-1z"></path><path className="lid" fill="#C68B66" d="M4 7h3v1h-3zM9 7h3v1h-3z"></path><path fill="#2A1F1C" d="M4 10h8v1h-8zM3 11h3v1h-3zM10 11h3v1h-3zM4 12h8v1h-8z"></path><path fill="#6E2F2A" d="M6 11h4v1h-4z"></path><path fill="#232733" d="M4 13h1v1h-1zM11 13h1v1h-1zM2 14h3v1h-3zM11 14h3v1h-3zM1 15h4v1h-4zM11 15h4v1h-4z"></path><path fill="#E9E7E2" d="M5 13h2v1h-2zM9 13h2v1h-2zM6 14h1v1h-1zM9 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1z"></path><path fill="#7B1E2C" d="M7 13h2v1h-2zM7 14h2v1h-2zM7 15h2v1h-2z"></path><path fill="#3A4152" d="M5 14h1v1h-1zM10 14h1v1h-1zM5 15h1v1h-1zM10 15h1v1h-1z"></path></svg>
            </span>
            <span className="brand-tx"><b>Muhammad Soban</b><span>full-stack developer</span></span>
          </a>
          <nav className="links" aria-label="Sections">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-r">
            <button className="icon-btn tg" type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
              <span className="tg-in">
                {(isDark) ? (<>
                  <svg className="px" viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M4 2h4v1h-4zM3 3h6v6h-6zM2 4h1v4h-1zM9 4h1v4h-1zM4 9h4v1h-4z"></path><path className="ray" fill="currentColor" d="M5 0h2v1h-2zM5 11h2v1h-2zM0 5h1v2h-1zM11 5h1v2h-1z"></path><path className="ray r2" fill="currentColor" d="M1 1h1v1h-1zM10 1h1v1h-1zM1 10h1v1h-1zM10 10h1v1h-1z"></path></svg>
                </>) : null}
                {(isLight) ? (<>
                  <svg className="px" viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M4 1h4v1h-4zM2 2h3v1h-3zM1 3h3v1h-3zM1 4h2v4h-2zM1 8h3v1h-3zM2 9h4v1h-4zM8 9h2v1h-2zM4 10h5v1h-5z"></path><path className="ray" fill="currentColor" d="M9 2h1v1h-1zM7 5h1v1h-1z"></path><path className="ray r2" fill="currentColor" d="M10 5h1v1h-1z"></path></svg>
                </>) : null}
              </span>
            </button>
            <a className="btn btn-pri btn-sm nav-cv" href="/Muhammad-Soban-Resume.pdf" download="Muhammad-Soban-Resume.pdf" target="_blank" rel="noopener">Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"></path></svg>
            </a>
          </div>
        </div>
        <div className="prog" aria-hidden="true"></div>
      </header>

  
    </>
  );
}
