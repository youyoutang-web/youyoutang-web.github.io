```css
/* =========================================================
   Youyou Tang — Personal Research Website
   Visual System V3
   JaeWon-inspired academic layout
   ========================================================= */


/* ---------------------------------------------------------
   01. Design tokens
   --------------------------------------------------------- */

:root {
  --background: #ffffff;
  --text: #111111;
  --muted: #666666;
  --accent: #315f8a;
  --rule: #dddddd;
  --surface: #f7f7f7;

  --page-width: 1080px;
  --content-width: 820px;

  --font-sans:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif;

  --text-size: 15.5px;
  --text-line: 1.65;

  --transition: 160ms ease;
}


/* ---------------------------------------------------------
   02. Reset
   --------------------------------------------------------- */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: var(--text-size);
  line-height: var(--text-line);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

::selection {
  background: #dce7f0;
}


/* ---------------------------------------------------------
   03. Site header
   --------------------------------------------------------- */

.site-header {
  width: min(
    calc(100% - 48px),
    var(--page-width)
  );

  margin: 0 auto;
  padding: 24px 0;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  border-bottom: 1px solid var(--rule);
}

.site-header__logo {
  color: var(--text);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.site-header__logo:hover {
  text-decoration: none;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.site-nav a {
  color: var(--text);
  font-size: 14px;
}

.site-nav a:hover {
  color: var(--accent);
}


/* ---------------------------------------------------------
   04. Main layout
   --------------------------------------------------------- */

.site-layout {
  width: min(
    calc(100% - 48px),
    var(--page-width)
  );

  margin: 0 auto;
}

.identity {
  display: flex;
  align-items: center;
  gap: 18px;

  padding: 34px 0 30px;

  border-bottom: 1px solid var(--rule);
}

.profile {
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  margin: 0;
  overflow: hidden;
  background: var(--surface);
}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.identity__text {
  min-width: 0;
}

.identity__name {
  margin: 0;

  font-size: 18px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.identity__role {
  margin: 3px 0 0;

  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.identity__links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  margin-top: 8px;
}

.identity__links a {
  font-size: 13px;
}


/* ---------------------------------------------------------
   05. Content column
   --------------------------------------------------------- */

.content {
  width: min(100%, var(--content-width));
  margin: 0 auto;
  padding: 72px 0 110px;
}


/* ---------------------------------------------------------
   06. Hero
   --------------------------------------------------------- */

.hero {
  margin-bottom: 76px;
}

.hero h1 {
  margin: 0 0 12px;

  font-size: 32px;
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.hero__role {
  margin: 0 0 25px;

  color: var(--muted);
  font-size: 16px;
}

.hero__statement {
  max-width: 700px;
  margin: 0;

  font-size: 19px;
  line-height: 1.55;
  letter-spacing: -0.01em;
}


/* ---------------------------------------------------------
   07. Section structure
   --------------------------------------------------------- */

section {
  margin: 0 0 78px;
}

.section-label {
  margin: 0 0 25px;

  font-size: 13px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}


/* ---------------------------------------------------------
   08. Research accordion
   --------------------------------------------------------- */

.research {
  margin-bottom: 86px;
}

.research-list {
  border-top: 1px solid var(--rule);
}

.research-item {
  border-bottom: 1px solid var(--rule);
}


/* Trigger */

.research-trigger {
  width: 100%;
  margin: 0;
  padding: 22px 0;

  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 24px;
  align-items: start;

  border: 0;
  background: transparent;

  color: var(--text);
  text-align: left;

  cursor: pointer;
}

.research-trigger:hover {
  color: var(--accent);
}

.research-trigger:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.research-trigger__text {
  min-width: 0;
  display: block;
}

.research-trigger__title {
  display: block;

  font-size: 17px;
  line-height: 1.35;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.research-trigger__subtitle {
  display: block;

  margin-top: 4px;

  color: var(--muted);
  font-size: 14px;
  line-height: 1.45;
}

.research-trigger__icon {
  width: 20px;

  color: var(--muted);
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;

  text-align: right;
}


/* Expanded content */

.research-content {
  max-width: 760px;
  padding: 4px 0 34px;
}

.research-content[hidden] {
  display: none;
}

.research-content h3 {
  margin: 0 0 12px;

  font-size: 18px;
  line-height: 1.35;
  font-weight: 600;
}

.research-content p {
  margin: 0 0 16px;
}

.research-content p:last-child {
  margin-bottom: 0;
}

.research-content ul {
  margin: 0 0 20px;
  padding-left: 20px;
}

.research-content li {
  margin-bottom: 5px;
}

.research-content strong {
  font-weight: 600;
}


/* Research subsections */

.research-subsection {
  margin-top: 32px;
}

.research-subsection:first-child {
  margin-top: 0;
}

.research-subsection h4 {
  margin: 0 0 10px;

  font-size: 13px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}


/* ---------------------------------------------------------
   09. Selected outputs
   --------------------------------------------------------- */

.outputs {
  margin-top: 30px;
}

.output {
  margin: 0 0 22px;
}

.output:last-child {
  margin-bottom: 0;
}

.output__venue {
  margin-bottom: 3px;

  color: var(--muted);
  font-size: 12px;
  line-height: 1.4;
}

.output__title {
  margin: 0;

  font-size: 15px;
  line-height: 1.5;
  font-weight: 500;
}

.output__meta {
  margin-top: 3px;

  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}


/* ---------------------------------------------------------
   10. Research question
   --------------------------------------------------------- */

.question {
  padding-top: 4px;
}

.question h2 {
  margin: 0 0 18px;

  font-size: 20px;
  line-height: 1.35;
  font-weight: 600;
}

.question__text {
  max-width: 760px;
  margin: 0;

  font-size: 22px;
  line-height: 1.5;
  letter-spacing: -0.015em;
}


/* ---------------------------------------------------------
   11. Developing lens
   --------------------------------------------------------- */

.lens h2 {
  margin: 0 0 18px;

  font-size: 20px;
  line-height: 1.35;
  font-weight: 600;
}

.lens h3 {
  margin: 0 0 10px;

  font-size: 17px;
  line-height: 1.4;
  font-weight: 600;
}

.lens p {
  max-width: 760px;
  margin: 0;
}

.lens__sequence {
  margin-top: 25px;

  color: var(--muted);

  font-size: 14px;
  line-height: 1.7;
}


/* ---------------------------------------------------------
   12. Situated practice
   --------------------------------------------------------- */

.practice h2 {
  margin: 0 0 18px;

  font-size: 20px;
  line-height: 1.35;
  font-weight: 600;
}

.practice p {
  max-width: 760px;
  margin: 0;
}


/* ---------------------------------------------------------
   13. Footer
   --------------------------------------------------------- */

.site-footer {
  width: min(
    calc(100% - 48px),
    var(--page-width)
  );

  margin: 0 auto;
  padding: 26px 0 40px;

  border-top: 1px solid var(--rule);

  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.site-footer__inner {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
}

.site-footer a {
  color: var(--muted);
}

.site-footer a:hover {
  color: var(--accent);
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}


/* ---------------------------------------------------------
   14. Responsive
   --------------------------------------------------------- */

@media (max-width: 768px) {

  .site-header {
    width: min(
      calc(100% - 32px),
      var(--page-width)
    );

    padding: 20px 0;
  }

  .site-nav {
    gap: 16px;
  }

  .site-nav a {
    font-size: 13px;
  }

  .site-layout {
    width: min(
      calc(100% - 32px),
      var(--page-width)
    );
  }

  .identity {
    padding: 26px 0 24px;
  }

  .profile {
    width: 60px;
    height: 60px;
  }

  .content {
    padding: 52px 0 80px;
  }

  .hero {
    margin-bottom: 58px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero__statement {
    font-size: 18px;
  }

  section {
    margin-bottom: 64px;
  }

  .research {
    margin-bottom: 70px;
  }

  .research-trigger {
    padding: 20px 0;
    column-gap: 16px;
  }

  .research-trigger__title {
    font-size: 16px;
  }

  .research-trigger__subtitle {
    font-size: 13.5px;
  }

  .research-content {
    padding-bottom: 30px;
  }

  .question__text {
    font-size: 20px;
  }

  .site-footer {
    width: min(
      calc(100% - 32px),
      var(--page-width)
    );
  }

  .site-footer__inner {
    display: block;
  }

  .site-footer__links {
    margin-top: 8px;
  }
}


/* ---------------------------------------------------------
   15. Small mobile
   --------------------------------------------------------- */

@media (max-width: 480px) {

  .site-header {
    align-items: center;
  }

  .site-header__logo {
    font-size: 16px;
  }

  .site-nav {
    gap: 12px;
  }

  .identity {
    align-items: flex-start;
  }

  .profile {
    width: 56px;
    height: 56px;
  }

  .hero h1 {
    font-size: 27px;
  }

  .hero__statement {
    font-size: 17px;
  }

  .research-trigger {
    grid-template-columns: minmax(0, 1fr) 18px;
  }

  .research-trigger__title {
    font-size: 15.5px;
  }

  .question__text {
    font-size: 19px;
  }
}


/* ---------------------------------------------------------
   16. Reduced motion
   --------------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition: none !important;
  }
}
```
