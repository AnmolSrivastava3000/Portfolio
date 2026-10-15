import React, { useState } from 'react'

const CONTACT = {
  email: 'shashianmolkant321@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anmol-srivastava-9bb376239/',
  github: 'https://github.com/AnmolSrivastava3000',
}

/* ==========================================================================
   RESEARCH PAPER CONFIGURATION (Accepted at iSmartComp2026, MMMUT)
   When the official proceedings DOI link goes live:
   - Paste the DOI / IEEE / Springer link into `paperUrl` below.
   - Or set `paperUrl: '/1039.pdf'` in your local Vite project if you want
     visitors to open `public/1039.pdf` directly!
   ========================================================================== */
const RESEARCH_PAPER = {
  status: 'Accepted · iSmartComp2026 (Paper #1039)',
  isPublished: false,
  title:
    'Intrusion Detection in IoT Using Machine Learning and Ensemble Models',
  authors:
    'Anmol Srivastava, Aditya Kumar, Ms. Jyoti Yaduwanshi · Galgotias University',
  dataset: 'CICIoT2023 (300,000 samples · 40:60 balanced)',
  methods: 'LR, Decision Tree, Random Forest, XGBoost & Soft Voting Ensemble',
  bestResult: 'Random Forest · 99.66% Accuracy · 99.94% ROC-AUC',
  explainability: 'SHAP (TreeExplainer · Header_Length, flow_duration)',
  venue:
    'iSmartComp2026 — International Conference on Intelligent and Smart Computing (MMMUT)',
  conferenceUrl: 'https://www.mmmut.ac.in/ismartcomp2026/index.html',
  year: '2026',
  paperUrl: '', // <-- Paste proceedings DOI link here (or '/1039.pdf' locally) once published
  liveAppUrl: 'https://6ednj6mjugzcxksvcnlgoj.streamlit.app/',
  codeUrl: 'https://github.com/AnmolSrivastava3000/Intrusion-Detection-System-',
  abstract:
    'As IoT devices become common in homes, industries, and healthcare systems, security risks in connected networks have also increased. The resource-constrained nature of these devices makes them highly susceptible to cyberthreats. While Signature-based Intrusion Detection Systems (IDS) struggle with unseen zero-day attacks, Anomaly-based IDS offers a more robust defense. In this work we evaluate five machine learning models i.e.- Logistic Regression, Random Forest, XGBoost, Decision Tree and Voting Ensemble. Models are trained and evaluated on a subset (300,000 samples) of the CICIoT2023 dataset. This study applied a strategic 40:60 data balancing technique (under-sampling attack traffic) to ensure robust detection of both benign and malicious patterns. Results indicate that the Random Forest model achieved the highest accuracy of 99.66% and a ROC-AUC score of 99.94%. To better understand how the model makes decisions, SHapley Additive exPlanations (SHAP)-based explainability was also included in the implementation.',
  keywords: [
    'Internet of Things',
    'Random Forest',
    'XGBoost',
    'Voting Classifier',
    'SHAP Explainability',
    'ROC-AUC',
    'CICIoT2023',
    'Intrusion Detection System',
  ],
  methodology: [
    {
      step: '01 / Dataset Curation & Cleaning (CICIoT2023)',
      detail:
        'Merged 26 CSV traffic shards covering 33 modern IoT attack types (DDoS, DoS, Mirai) and benign traffic from 105 IoT devices across 46 network flow features, removing Inf and NaN records.',
    },
    {
      step: '02 / Strategic 40:60 Data Balancing',
      detail:
        'Applied reproducible random under-sampling (seed = 42) on majority attack traffic to construct a balanced 300,000-sample dataset: 120,000 Benign (40%) and 180,000 Attack (60%), split 80:20 (240k train / 60k test).',
    },
    {
      step: '03 / Feature Scaling & 5-Model Benchmarking',
      detail:
        'Normalized all 46 numerical features via StandardScaler and evaluated Logistic Regression, Decision Tree, Random Forest (50 estimators), XGBoost, and a Soft Voting Ensemble.',
    },
    {
      step: '04 / SHAP Explainability & Live Streamlit Deployment',
      detail:
        'Used shap.TreeExplainer() to identify critical features driving intrusion alerts (such as Header_Length and flow_duration) and deployed the optimal Random Forest classifier as a real-time Streamlit web app.',
    },
  ],
  benchmarks: [
    {
      model: 'Random Forest (Best)',
      accuracy: '99.66%',
      precision: '99.97%',
      recall: '99.37%',
      f1: '99.67%',
      rocAuc: '99.94%',
      highlight: true,
    },
    {
      model: 'Voting Ensemble (Soft)',
      accuracy: '99.55%',
      precision: '99.99%',
      recall: '99.26%',
      f1: '99.62%',
      rocAuc: '99.94%',
      highlight: false,
    },
    {
      model: 'XGBoost',
      accuracy: '99.54%',
      precision: '99.92%',
      recall: '99.32%',
      f1: '99.62%',
      rocAuc: '99.96%',
      highlight: false,
    },
    {
      model: 'Decision Tree',
      accuracy: '99.37%',
      precision: '99.47%',
      recall: '99.48%',
      f1: '99.48%',
      rocAuc: '99.34%',
      highlight: false,
    },
    {
      model: 'Logistic Regression',
      accuracy: '98.54%',
      precision: '99.45%',
      recall: '98.10%',
      f1: '98.77%',
      rocAuc: '99.50%',
      highlight: false,
    },
  ],
  confusionMatrixNote:
    'Random Forest Confusion Matrix (60,000 test flows): 35,827 True Positives · 23,970 True Negatives (99.87% benign recall) · only 7 False Positives & 196 False Negatives.',
  citation:
    'Srivastava, A., Kumar, A., & Yaduwanshi, J. (2026). "Intrusion Detection in IoT Using Machine Learning and Ensemble Models." Accepted in iSmartComp2026 International Conference on Intelligent and Smart Computing, MMMUT Gorakhpur (Paper #1039).',
}

const projects = [
  {
    number: '01',
    category: 'RESEARCH · MACHINE LEARNING · XAI',
    title: 'IoT Intrusion Detection System',
    description:
      'An anomaly-based IoT intrusion detection pipeline benchmarking 5 ML & ensemble models on 300,000 CICIoT2023 traffic flows (99.66% accuracy), explained with SHAP and deployed live on Streamlit.',
    abstract:
      'Accepted at iSmartComp2026 (MMMUT), this study evaluates five machine learning models—Logistic Regression, Decision Tree, Random Forest, XGBoost, and a Soft Voting Ensemble—on a 300,000-sample subset of the CICIoT2023 dataset using a strategic 40:60 benign-to-attack balancing ratio. Random Forest achieved the strongest overall performance (99.66% accuracy, 99.94% ROC-AUC, and only 7 false positives out of 24,000 benign test flows) and is deployed as an interactive Streamlit web app with SHAP explainability.',
    highlights: [
      'Balanced 300,000 CICIoT2023 network flows (40% Benign / 60% Attack across 46 features) using StandardScaler normalization and an 80:20 train-test split.',
      'Random Forest achieved 99.66% accuracy and 99.94% ROC-AUC, outperforming standalone Decision Tree (99.37%), XGBoost (99.54%), and Soft Voting (99.55%).',
      'Integrated SHAP (shap.TreeExplainer) to reveal top traffic features (Header_Length, flow_duration) and deployed a live CSV inference tool on Streamlit.',
    ],
    tags: [
      'Python',
      'Scikit-learn',
      'Random Forest',
      'XGBoost',
      'SHAP',
      'Streamlit',
      'CICIoT2023',
    ],
    type: 'research',
    status: 'Accepted · iSmartComp2026',
    image: '/images/iot-ids.png',
    imageAlt:
      'Live Streamlit interface of the IoT Intrusion Detection System showing CSV upload and 46-feature network flow data preview',
    imageCaption: 'LIVE STREAMLIT APP · REAL-TIME CSV TRAFFIC INFERENCE',
    github:
      'https://github.com/AnmolSrivastava3000/Intrusion-Detection-System-',
    demo: 'https://6ednj6mjugzcxksvcnlgoj.streamlit.app/',
    demoLabel: 'Live Streamlit app',
    conferenceUrl: 'https://www.mmmut.ac.in/ismartcomp2026/index.html',
    linkLabel: 'Explore source code',
  },
  {
    number: '02',
    category: 'FULL-STACK WEB DEVELOPMENT',
    title: 'Wanderlust',
    description:
      'A full-stack travel accommodation marketplace featuring category filtering, destination search, authentication and MongoDB persistence.',
    abstract:
      'Built an end-to-end accommodation discovery and listing platform modeled after Airbnb. Architected using Node.js, Express, MongoDB, and EJS templates, the application lets users search destinations, filter stays by curated categories (Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic), toggle after-tax pricing (+36% GST), and manage property listings with cloud image uploads.',
    highlights: [
      'Designed RESTful Express routes and Mongoose schemas supporting full CRUD for property listings, user reviews, and destination search.',
      'Built an interactive discovery header with category filter pills and an instant "Display total after taxes (+36% GST)" pricing toggle.',
      'Implemented session-based user authentication, route protection middleware, and cloud media storage for property photos.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Authentication', 'REST API'],
    type: 'web',
    status: 'Live project',
    image: '/images/wanderlust.png',
    imageAlt:
      'Wanderlust live web application showing destination search, category filters, tax toggle, and property cards',
    imageCaption: 'LIVE RENDER DEPLOYMENT · WANDERLUST LISTINGS UI',
    github: 'https://github.com/AnmolSrivastava3000/airbnb-clone',
    demo: 'https://project-wanderlust-nmf1.onrender.com/listings',
    demoLabel: 'Live listings demo',
    linkLabel: 'View source code',
  },
]

const PORTFOLIO_CSS = `
:root {
  font-family: Inter, "Segoe UI", sans-serif;
  color: #252923;
  background: #faf9f6;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --paper: #faf9f6;
  --ink: #252923;
  --muted: #77796f;
  --line: #e7e5dd;
  --green: #365b43;
  --soft-green: #e8eee5;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
}

body,
button,
a {
  font-family: Inter, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid #73977b;
  outline-offset: 4px;
}

::selection {
  background: #dce8d5;
  color: #20231f;
}

.container {
  width: min(1120px, calc(100% - 48px));
  margin-inline: auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgb(250 249 246 / 94%);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -1.8px;
}

.brand span {
  color: var(--green);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 13px;
  color: #55584f;
}

.nav-links a,
.text-link,
.project-links a,
.project-links button,
.footer-inner > a:last-child {
  transition: color 180ms ease;
}

.nav-links a:hover,
.text-link:hover,
.project-links a:hover,
.project-links button:hover,
.footer-inner > a:last-child:hover {
  color: var(--green);
}

.nav-contact {
  border: 1px solid #d8d8ce;
  padding: 11px 15px;
  border-radius: 4px;
}

.nav-contact span {
  margin-left: 8px;
}

.menu-toggle {
  display: none;
  padding: 9px 12px;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--ink);
  cursor: pointer;
}

.hero {
  min-height: 590px;
  padding-top: 105px;
  padding-bottom: 55px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 290px;
  column-gap: 72px;
  align-content: center;
  position: relative;
}

.eyebrow,
.section-kicker,
.note-label,
.hero-bottom,
.project-meta,
.visual-topline,
.visual-caption,
.research-facts > div > span,
.abstract-kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.availability-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6b906e;
  box-shadow: 0 0 0 4px #e7eee4;
}

.hero h1 {
  margin: 30px 0 22px;
  max-width: 740px;
  font-size: clamp(42px, 5.5vw, 70px);
  line-height: 1.08;
  letter-spacing: -3.7px;
  font-weight: 600;
}

.hero h1 span {
  color: var(--green);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  font-style: italic;
}

.hero-description {
  max-width: 570px;
  color: #696b62;
  font-size: 16px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--green);
  color: white;
}

.button-primary:hover {
  background: #294934;
}

.button-outline {
  background: transparent;
  color: var(--ink);
  border: 1px solid #cfd2c6;
}

.button-outline:hover {
  border-color: var(--green);
  color: var(--green);
}

.text-link {
  font-size: 13px;
  font-weight: 600;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
}

.text-link span {
  margin-left: 5px;
}

.hero-note {
  align-self: center;
  padding: 25px 0 15px 25px;
  border-left: 1px solid #dcdcd1;
}

.note-label {
  display: block;
  color: var(--muted);
  margin-bottom: 23px;
  line-height: 1.6;
}

.interest-item {
  padding: 15px 0;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
}

.interest-item span {
  display: inline-block;
  margin-right: 10px;
  color: #93958b;
  font-size: 10px;
}

.hero-note-footer {
  margin-top: 22px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.hero-bottom {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #96968c;
  font-size: 9px;
}

.section {
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 35px;
  margin-bottom: 38px;
}

.section-heading-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

.section-kicker {
  color: var(--green);
}

.section-heading h2,
.about-section h2,
.research-inner h2,
.contact-inner h2 {
  margin: 16px 0 0;
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1.8px;
}

.section-heading-right > p {
  max-width: 370px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.85;
  text-align: right;
}

.visual-mode-toggle {
  display: inline-flex;
  align-items: center;
  background: #f0efe8;
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 3px;
  gap: 4px;
}

.visual-mode-btn {
  border: none;
  background: transparent;
  color: #66685e;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 11px;
  border-radius: 3px;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
}

.visual-mode-btn.active {
  background: #fffefa;
  color: var(--green);
  box-shadow: 0 1px 3px rgb(0 0 0 / 6%);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  align-items: start;
}

.project-card {
  min-width: 0;
  border: 1px solid var(--line);
  background: #fffefa;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgb(42 45 34 / 7%);
}

.project-visual {
  height: 260px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.project-research .project-visual {
  background: #141920;
}

.project-web .project-visual {
  background: #eee9df;
}

.project-image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 400ms ease;
}

.project-card:hover .project-image {
  transform: scale(1.035);
}

.project-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgb(18 23 19 / 46%) 0%,
    rgb(18 23 19 / 4%) 32%,
    rgb(18 23 19 / 4%) 68%,
    rgb(18 23 19 / 58%) 100%
  );
  pointer-events: none;
}

.visual-topline {
  position: absolute;
  top: 16px;
  left: 18px;
  right: 18px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5d695e;
  font-size: 9px;
}

.visual-topline.on-image {
  color: #faf9f6;
}

.visual-pill {
  background: rgb(250 249 246 / 92%);
  color: #252923;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.9px;
  backdrop-filter: blur(4px);
}

.research-visual {
  position: absolute;
  inset: 40px 0 0;
  overflow: hidden;
  background: #e8ede6;
}

.network-node {
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  border: 2px solid #496e54;
  background: #e8ede6;
  border-radius: 50%;
}

.node-one { left: 18%; top: 35%; }
.node-two { left: 42%; top: 17%; }
.node-three { left: 46%; top: 64%; }
.node-four { left: 72%; top: 34%; }
.node-five { left: 81%; top: 72%; }

.network-line {
  position: absolute;
  height: 1px;
  background: #91a58e;
  transform-origin: left center;
}

.line-one {
  left: 21%;
  top: 40%;
  width: 26%;
  transform: rotate(-29deg);
}

.line-two {
  left: 21%;
  top: 43%;
  width: 30%;
  transform: rotate(34deg);
}

.line-three {
  left: 45%;
  top: 25%;
  width: 31%;
  transform: rotate(21deg);
}

.line-four {
  left: 49%;
  top: 72%;
  width: 35%;
  transform: rotate(8deg);
}

.visual-caption {
  position: absolute;
  left: 18px;
  bottom: 14px;
  z-index: 2;
  color: #697769;
  font-size: 8px;
}

.visual-caption.on-image {
  color: #f4f3ee;
  background: rgb(26 32 27 / 72%);
  padding: 4px 8px;
  border-radius: 3px;
  backdrop-filter: blur(4px);
}

.web-visual {
  position: absolute;
  width: 78%;
  height: 182px;
  left: 11%;
  top: 45px;
  overflow: hidden;
  border: 1px solid #ded9cc;
  border-radius: 5px;
  background: #fffefa;
  box-shadow: 0 10px 25px rgb(49 45 34 / 8%);
  transform: rotate(-1.5deg);
}

.browser-bar {
  height: 25px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #f6f4ee;
  border-bottom: 1px solid #e7e3d9;
}

.browser-bar > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d0cfc5;
}

.browser-bar > div {
  flex: 1;
  text-align: center;
  color: #858478;
  font-size: 7px;
}

.browser-content {
  padding: 13px;
}

.browser-heading {
  width: 52%;
  height: 10px;
  border-radius: 2px;
  background: #445e49;
}

.browser-subheading {
  width: 35%;
  height: 4px;
  margin-top: 7px;
  background: #d9d6cb;
}

.browser-listings {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  margin-top: 12px;
}

.listing-preview {
  height: 57px;
  border-radius: 3px;
  background: #d6dfd1;
}

.listing-two {
  background: #e8d7bd;
}

.listing-three {
  background: #c9d4d6;
}

.browser-lines {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.browser-lines span {
  width: 28%;
  height: 4px;
  background: #e7e4db;
}

.project-content {
  padding: 24px 24px 22px;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: #7a7c71;
  font-size: 9px;
  line-height: 1.7;
}

.project-status {
  color: var(--green);
  letter-spacing: 0;
  text-transform: none;
  font-size: 11px;
  font-weight: 600;
  background: var(--soft-green);
  padding: 2px 9px;
  border-radius: 99px;
}

.project-content h3 {
  margin: 16px 0 10px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.8px;
}

.project-description {
  margin: 0;
  color: #65675e;
  font-size: 13.5px;
  line-height: 1.85;
}

/* Expandable Abstract / Technical Breakdown Box inside Project Card */
.project-abstract-box {
  margin-top: 16px;
  padding: 16px;
  background: #f6f5ef;
  border: 1px solid #e5e3d9;
  border-left: 3px solid var(--green);
  border-radius: 4px;
}

.abstract-kicker {
  display: block;
  color: var(--green);
  margin-bottom: 8px;
}

.project-abstract-text {
  margin: 0 0 12px;
  color: #4f5249;
  font-size: 12.5px;
  line-height: 1.8;
}

.project-highlights {
  margin: 0;
  padding-left: 16px;
  color: #585b51;
  font-size: 12px;
  line-height: 1.75;
}

.project-highlights li + li {
  margin-top: 6px;
}

.expand-toggle-btn {
  margin-top: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 4px 0;
  color: var(--green);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.expand-toggle-btn:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 18px;
}

.tag {
  padding: 6px 9px;
  border: 1px solid #e8e6dd;
  border-radius: 3px;
  color: #66685f;
  font-size: 10px;
}

.project-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 18px;
  margin-top: 20px;
  border-top: 1px solid var(--line);
}

.project-links-left {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.project-links a,
.project-links button {
  font-size: 12px;
  font-weight: 600;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--ink);
}

.project-links a span,
.project-links button span {
  margin-left: 4px;
}

/* Research Section */
.research-section {
  padding: 95px 0;
  background: #eef0e9;
  border-top: 1px solid #e1e4d9;
  border-bottom: 1px solid #e1e4d9;
}

.research-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 64px;
  align-items: start;
}

.research-status-banner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 6px 12px;
  background: #e1e8dd;
  border: 1px solid #c9d5c4;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 600;
  color: #2c4c37;
}

.status-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #365b43;
}

.research-paper-title {
  margin: 16px 0 6px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 21px;
  font-weight: 400;
  font-style: italic;
  color: #263027;
  line-height: 1.4;
}

.research-authors {
  margin: 0 0 14px;
  font-size: 12px;
  color: #5a6055;
  font-weight: 500;
}

.research-inner > div:first-child > p.research-lead {
  max-width: 580px;
  margin: 0 0 20px;
  color: #61645a;
  font-size: 13.5px;
  line-height: 1.85;
}

.research-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.research-tab {
  padding: 7px 12px;
  border-radius: 4px;
  border: 1px solid #d2d7cb;
  background: #f7f8f4;
  color: #5c6055;
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
}

.research-tab.active {
  background: var(--green);
  border-color: var(--green);
  color: #faf9f6;
}

.research-panel {
  background: #faf9f6;
  border: 1px solid #d8dcd1;
  border-radius: 6px;
  padding: 20px 22px;
  margin-bottom: 22px;
}

.research-panel p {
  margin: 0;
  color: #4a4e45;
  font-size: 13px;
  line-height: 1.85;
}

.benchmark-table-wrap {
  overflow-x: auto;
}

.benchmark-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
}

.benchmark-table th {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #6b7064;
  padding: 8px 10px;
  border-bottom: 1px solid #d8dcd1;
}

.benchmark-table td {
  padding: 9px 10px;
  border-bottom: 1px solid #ebede6;
  color: #3d4139;
}

.benchmark-table tr.best-row {
  background: #e8efe5;
  font-weight: 600;
}

.benchmark-table tr.best-row td {
  color: #233b2b;
}

.benchmark-note {
  margin-top: 12px !important;
  font-size: 11.5px !important;
  color: #5a6054 !important;
  line-height: 1.65 !important;
}

.methodology-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.methodology-item {
  padding-bottom: 12px;
  border-bottom: 1px solid #ebede6;
}

.methodology-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.methodology-item strong {
  display: block;
  font-size: 11px;
  letter-spacing: 0.6px;
  color: var(--green);
  margin-bottom: 4px;
}

.methodology-item span {
  display: block;
  font-size: 12.5px;
  color: #52564c;
  line-height: 1.7;
}

.citation-box {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11.5px;
  line-height: 1.75;
  color: #3f433b;
  background: #f1f2ec;
  padding: 12px 14px;
  border-radius: 4px;
  border: 1px solid #dfe2d8;
  margin-bottom: 12px;
}

.copy-citation-btn {
  padding: 6px 12px;
  font-size: 11.5px;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid #c8cec0;
  background: #fffefa;
  color: var(--ink);
  cursor: pointer;
}

.copy-citation-btn:hover {
  border-color: var(--green);
  color: var(--green);
}

.research-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.forthcoming-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border-radius: 4px;
  border: 1px dashed #aeb8a9;
  background: #f5f7f2;
  color: #545b50;
  font-size: 11.5px;
  font-weight: 500;
}

.research-facts-card {
  background: #f7f8f3;
  border: 1px solid #d8dcd1;
  border-radius: 6px;
  padding: 22px 24px;
}

.research-facts-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: var(--green);
  margin-bottom: 14px;
  display: block;
}

.research-facts {
  border-top: 1px solid #d8dcd1;
}

.research-facts > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 18px;
  padding: 15px 0;
  border-bottom: 1px solid #d8dcd1;
}

.research-facts > div > span {
  color: #777c70;
  font-size: 9px;
  flex-shrink: 0;
}

.research-facts strong,
.research-facts a {
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  color: #2c302a;
}

.research-facts a {
  color: var(--green);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.future-update-tip {
  margin-top: 16px;
  padding: 12px 14px;
  background: #e9efe6;
  border-radius: 4px;
  font-size: 11.5px;
  line-height: 1.65;
  color: #3d4a3e;
}

.about-section {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 56px;
  align-items: start;
}

.about-intro-col {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about-intro-col h2 {
  margin: 10px 0 0;
  font-size: clamp(28px, 3.5vw, 38px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -1.5px;
}

.about-photo-card {
  border: 1px solid var(--line);
  background: #fffefa;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgb(42 45 34 / 5%);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.about-photo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgb(42 45 34 / 8%);
}

.about-photo-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #e8ede6;
  overflow: hidden;
}

.about-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 400ms ease;
}

.about-photo-card:hover .about-profile-img {
  transform: scale(1.03);
}

.about-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgb(26 32 27 / 65%) 100%
  );
  pointer-events: none;
}

.about-photo-badge {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #faf9f6;
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
}

.about-photo-badge span:first-child {
  background: rgb(26 32 27 / 75%);
  padding: 3px 7px;
  border-radius: 3px;
  backdrop-filter: blur(4px);
}

.about-photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e4ece1;
  color: var(--green);
  gap: 8px;
}

.about-photo-initials {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -2px;
}

.about-fallback-caption {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #556b57;
}

.about-photo-footer {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
  background: #faf9f6;
}

.about-photo-role {
  font-weight: 600;
  color: var(--green);
}

.about-lead {
  font-size: 15px;
  line-height: 1.9;
  color: #3b3e34;
  margin: 0 0 20px;
}

.about-block {
  margin-bottom: 20px;
  padding: 18px 20px;
  background: #f7f6f0;
  border: 1px solid #e7e5dc;
  border-left: 3px solid var(--green);
  border-radius: 4px;
}

.about-block-title {
  display: block;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: var(--green);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.about-block p {
  margin: 0;
  font-size: 13px;
  line-height: 1.85;
  color: #4a4d43;
}

.about-skills-section {
  margin-top: 25px;
}

.about-skills-title {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--muted);
  margin-bottom: 12px;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .about-section {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .about-photo-card {
    max-width: 320px;
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 25px;
}

.skills span {
  padding: 9px 11px;
  background: #f0efe9;
  border: 1px solid #e7e5dc;
  border-radius: 3px;
  color: #55594f;
  font-size: 11px;
}

.contact-section {
  padding: 85px 0;
  background: #304e39;
  color: #faf9f6;
}

.contact-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-inner .section-kicker {
  color: #c1d4bc;
}

.contact-inner h2 {
  max-width: 600px;
  margin-top: 20px;
  font-size: clamp(34px, 5vw, 54px);
}

.contact-inner > p {
  max-width: 480px;
  color: #d4ddd0;
  font-size: 14px;
  line-height: 1.9;
}

.button-light {
  background: #faf9f6;
  color: #304e39;
}

.button-light:hover {
  background: #e7eee4;
}

.contact-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: 1.75rem;
}

.contact-actions .text-link {
  color: inherit;
  text-decoration: none;
}

.contact-actions .text-link:hover {
  opacity: 0.75;
}

.contact-email {
  margin-top: 1.5rem;
  overflow-wrap: anywhere;
}

.contact-email a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: opacity 0.2s ease;
}

.contact-email a:hover {
  opacity: 0.75;
}

.site-footer {
  background: var(--paper);
}

.footer-inner {
  min-height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-inner > span,
.footer-inner > a:last-child {
  color: var(--muted);
  font-size: 11px;
}

/* Case Study / Project Detail Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgb(25 28 24 / 62%);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  width: min(780px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: #faf9f6;
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 24px 60px rgb(0 0 0 / 22%);
}

.modal-visual {
  position: relative;
  height: 310px;
  background: #141920;
  overflow: hidden;
}

.modal-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  background: rgb(250 249 246 / 94%);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.modal-body {
  padding: 28px 30px 30px;
}

.modal-body h3 {
  margin: 10px 0 12px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1px;
}

.modal-section-label {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--green);
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
    padding-top: 75px;
    padding-bottom: 85px;
  }

  .hero-note {
    max-width: 520px;
  }

  .section {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .research-inner,
  .about-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .section-heading-right {
    align-items: flex-start;
  }

  .section-heading-right > p {
    text-align: left;
  }
}

@media (max-width: 650px) {
  .container {
    width: calc(100% - 36px);
  }

  .nav {
    min-height: 66px;
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: block;
    font-size: 12px;
  }

  .nav-links {
    display: none;
    width: 100%;
    padding: 8px 0 20px;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }

  .nav-links.nav-open {
    display: flex;
  }

  .nav-links > a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  .nav-links .nav-contact {
    margin-top: 10px;
    padding: 12px;
    text-align: center;
    border: 1px solid var(--line);
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .project-visual {
    height: 220px;
  }

  .modal-visual {
    height: 200px;
  }

  .modal-body {
    padding: 20px;
  }
}
`

function ExternalLink({ href, children, className }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          AS<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#research" onClick={closeMenu}>
            Research
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <ExternalLink href={CONTACT.linkedin}>
            LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>

          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="availability-dot" />
          COMPUTER SCIENCE · GALGOTIAS UNIVERSITY
        </div>

        <h1>
          Building useful software.
          <br />
          Exploring <span>intelligent systems.</span>
        </h1>

        <p className="hero-description">
          I'm Anmol Srivastava, a Computer Science graduate interested in
          backend engineering, machine learning, and turning technical ideas
          into practical projects.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </a>

          <a className="button button-outline" href="#research">
            Research & Abstract <span aria-hidden="true">↘</span>
          </a>

          <ExternalLink className="text-link" href={CONTACT.github}>
            GitHub profile <span aria-hidden="true">↗</span>
          </ExternalLink>

          <ExternalLink className="text-link" href={CONTACT.linkedin}>
            LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>

      <aside className="hero-note">
        <span className="note-label">CURRENTLY INTERESTED IN</span>

        <div className="interest-item">
          <span>01</span> Backend systems
        </div>
        <div className="interest-item">
          <span>02</span> Applied machine learning
        </div>
        <div className="interest-item">
          <span>03</span> Explainable AI (SHAP) & IoT security
        </div>

        <div className="hero-note-footer">
          Learning by building, testing, and improving.
        </div>
      </aside>

      <div className="hero-bottom">
        <span>BASED IN GREATER NOIDA, INDIA</span>
        <a href="#work">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  )
}

function ProjectCard({ project, visualMode, onOpenModal }) {
  const [expanded, setExpanded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const showImage = visualMode === 'image' && project.image && !imgError

  return (
    <article className={`project-card project-${project.type}`}>
      <div
        className="project-visual"
        onClick={() => onOpenModal(project)}
        role="button"
        tabIndex={0}
        aria-label={`Inspect ${project.title} details and screenshot`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpenModal(project)
          }
        }}
      >
        <div className={`visual-topline ${showImage ? 'on-image' : ''}`}>
          <span className={showImage ? 'visual-pill' : ''}>
            PROJECT / {project.number}
          </span>
          <span className={showImage ? 'visual-pill' : ''}>
            ENLARGE & READ ↗
          </span>
        </div>

        {showImage ? (
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={project.image}
              alt={project.imageAlt || project.title}
              onError={() => setImgError(true)}
            />
            <div className="project-image-overlay" />
            <span className="visual-caption on-image">
              {project.imageCaption}
            </span>
          </div>
        ) : project.type === 'research' ? (
          <div className="research-visual" aria-hidden="true">
            <div className="network-node node-one" />
            <div className="network-node node-two" />
            <div className="network-node node-three" />
            <div className="network-node node-four" />
            <div className="network-node node-five" />
            <div className="network-line line-one" />
            <div className="network-line line-two" />
            <div className="network-line line-three" />
            <div className="network-line line-four" />
            <span className="visual-caption">NETWORK / DETECTION / ML</span>
          </div>
        ) : (
          <div className="web-visual" aria-hidden="true">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <div>wanderlust.app</div>
            </div>

            <div className="browser-content">
              <div className="browser-heading" />
              <div className="browser-subheading" />

              <div className="browser-listings">
                <div className="listing-preview listing-one" />
                <div className="listing-preview listing-two" />
                <div className="listing-preview listing-three" />
              </div>

              <div className="browser-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <button
          type="button"
          className="expand-toggle-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded
            ? 'Hide abstract & technical breakdown ↑'
            : 'Read abstract & technical breakdown ↓'}
        </button>

        {expanded && (
          <div className="project-abstract-box">
            <span className="abstract-kicker">
              {project.type === 'research'
                ? 'Paper Abstract & Findings'
                : 'System Architecture & Features'}
            </span>
            <p className="project-abstract-text">{project.abstract}</p>
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          <div className="project-links-left">
            <ExternalLink href={project.github}>
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </ExternalLink>

            {project.demo && (
              <ExternalLink href={project.demo}>
                {project.demoLabel || 'Live demo'}{' '}
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            )}

            {project.conferenceUrl && (
              <ExternalLink href={project.conferenceUrl}>
                iSmartComp2026 <span aria-hidden="true">↗</span>
              </ExternalLink>
            )}
          </div>

          <button type="button" onClick={() => onOpenModal(project)}>
            Full overview <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function Work({ onOpenModal }) {
  const [visualMode, setVisualMode] = useState('image')

  return (
    <section className="section container" id="work">
      <div className="section-heading">
        <div>
          <span className="section-kicker">01 / SELECTED WORK</span>
          <h2>Projects with a purpose.</h2>
        </div>

        <div className="section-heading-right">
          <p>
            Live deployments and empirical machine learning research. Click any
            screenshot or expand a card to inspect the abstract and technical
            pipeline.
          </p>

          <div
            className="visual-mode-toggle"
            role="group"
            aria-label="Project card visual style"
          >
            <button
              type="button"
              className={`visual-mode-btn ${
                visualMode === 'image' ? 'active' : ''
              }`}
              onClick={() => setVisualMode('image')}
            >
              Project Images
            </button>
            <button
              type="button"
              className={`visual-mode-btn ${
                visualMode === 'diagram' ? 'active' : ''
              }`}
              onClick={() => setVisualMode('diagram')}
            >
              CSS Wireframes
            </button>
          </div>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.number}
            visualMode={visualMode}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  )
}

function Research() {
  const [activeTab, setActiveTab] = useState('abstract')
  const [copied, setCopied] = useState(false)

  const handleCopyCitation = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(RESEARCH_PAPER.citation)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = RESEARCH_PAPER.citation
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <section className="research-section" id="research">
      <div className="container research-inner">
        <div>
          <span className="section-kicker">02 / ACCEPTED RESEARCH PAPER</span>
          <h2>From experiments to evidence.</h2>

          <div className="research-status-banner">
            <span className="status-pulse" />
            <span>{RESEARCH_PAPER.status}</span>
          </div>

          <h3 className="research-paper-title">“{RESEARCH_PAPER.title}”</h3>
          <p className="research-authors">{RESEARCH_PAPER.authors}</p>

          <p className="research-lead">
            Accepted at the{' '}
            <ExternalLink href={RESEARCH_PAPER.conferenceUrl}>
              <strong>
                iSmartComp2026 International Conference on Intelligent and Smart
                Computing (MMMUT) ↗
              </strong>
            </ExternalLink>
            , this work evaluates five classical and ensemble classifiers on
            300,000 balanced CICIoT2023 flows and deploys the top-performing
            Random Forest model (99.66% accuracy) with SHAP explainability.
          </p>

          <div className="research-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'abstract'}
              className={`research-tab ${
                activeTab === 'abstract' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('abstract')}
            >
              Paper Abstract
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'benchmarks'}
              className={`research-tab ${
                activeTab === 'benchmarks' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('benchmarks')}
            >
              Model Results (Table I)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'methodology'}
              className={`research-tab ${
                activeTab === 'methodology' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('methodology')}
            >
              What's Happening (Pipeline)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'citation'}
              className={`research-tab ${
                activeTab === 'citation' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('citation')}
            >
              Future Citation
            </button>
          </div>

          <div className="research-panel" role="tabpanel">
            {activeTab === 'abstract' && (
              <>
                <span className="abstract-kicker">
                  VERBATIM ABSTRACT · ISMARTCOMP2026
                </span>
                <p>{RESEARCH_PAPER.abstract}</p>
                <div className="tag-list">
                  {RESEARCH_PAPER.keywords.map((kw) => (
                    <span className="tag" key={kw}>
                      {kw}
                    </span>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'benchmarks' && (
              <div className="benchmark-table-wrap">
                <span className="abstract-kicker">
                  TABLE I · PERFORMANCE ON 60,000 TEST SAMPLES (CICIOT2023)
                </span>
                <table className="benchmark-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Accuracy</th>
                      <th>Precision</th>
                      <th>Recall</th>
                      <th>F1-Score</th>
                      <th>ROC-AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RESEARCH_PAPER.benchmarks.map((row) => (
                      <tr
                        key={row.model}
                        className={row.highlight ? 'best-row' : ''}
                      >
                        <td>{row.model}</td>
                        <td>{row.accuracy}</td>
                        <td>{row.precision}</td>
                        <td>{row.recall}</td>
                        <td>{row.f1}</td>
                        <td>{row.rocAuc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="benchmark-note">
                  {RESEARCH_PAPER.confusionMatrixNote}
                </p>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="methodology-list">
                {RESEARCH_PAPER.methodology.map((item) => (
                  <div className="methodology-item" key={item.step}>
                    <strong>{item.step}</strong>
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'citation' && (
              <div>
                <span className="abstract-kicker">CONFERENCE CITATION</span>
                <div className="citation-box">{RESEARCH_PAPER.citation}</div>
                <button
                  type="button"
                  className="copy-citation-btn"
                  onClick={handleCopyCitation}
                >
                  {copied ? 'Copied to clipboard ✓' : 'Copy citation text'}
                </button>
              </div>
            )}
          </div>

          <div className="research-actions">
            <ExternalLink
              className="button button-primary"
              href={RESEARCH_PAPER.liveAppUrl}
            >
              Launch live Streamlit IDS <span aria-hidden="true">↗</span>
            </ExternalLink>

            <ExternalLink
              className="button button-outline"
              href={RESEARCH_PAPER.conferenceUrl}
            >
              iSmartComp2026 (MMMUT) <span aria-hidden="true">↗</span>
            </ExternalLink>

            <ExternalLink className="text-link" href={RESEARCH_PAPER.codeUrl}>
              Explore GitHub repo <span aria-hidden="true">↗</span>
            </ExternalLink>

            {RESEARCH_PAPER.paperUrl ? (
              <ExternalLink
                className="text-link"
                href={RESEARCH_PAPER.paperUrl}
              >
                Read published proceedings <span aria-hidden="true">↗</span>
              </ExternalLink>
            ) : (
              <span className="forthcoming-pill">
                📄 Proceedings DOI link will be added upon publication
              </span>
            )}
          </div>
        </div>

        <div className="research-facts-card">
          <span className="research-facts-title">RESEARCH METADATA</span>
          <div className="research-facts">
            <div>
              <span>CONFERENCE</span>
              <ExternalLink href={RESEARCH_PAPER.conferenceUrl}>
                iSmartComp2026 (MMMUT) ↗
              </ExternalLink>
            </div>
            <div>
              <span>DATASET</span>
              <strong>{RESEARCH_PAPER.dataset}</strong>
            </div>
            <div>
              <span>MODELS EVALUATED</span>
              <strong>{RESEARCH_PAPER.methods}</strong>
            </div>
            <div>
              <span>TOP PERFORMANCE</span>
              <strong>{RESEARCH_PAPER.bestResult}</strong>
            </div>
            <div>
              <span>EXPLAINABILITY</span>
              <strong>{RESEARCH_PAPER.explainability}</strong>
            </div>
            <div>
              <span>LIVE DEPLOYMENT</span>
              <ExternalLink href={RESEARCH_PAPER.liveAppUrl}>
                Streamlit Cloud App ↗
              </ExternalLink>
            </div>
          </div>

          {/* <div className="future-update-tip">
            <strong>Publication-ready setup:</strong> Your accepted manuscript (
            <code>1039.pdf</code>) is bundled in the Vite zip under{' '}
            <code>public/1039.pdf</code>. Once official proceedings go live,
            set <code>RESEARCH_PAPER.paperUrl</code> in <code>App.jsx</code> to
            your DOI link (or <code>'/1039.pdf'</code>) to enable direct paper
            access.
          </div> */}
        </div>
      </div>
    </section>
  )
}

function About() {
  const [profileImgError, setProfileImgError] = useState(false)

  return (
    <section className="section container about-section" id="about">
      <div className="about-intro-col">
        <div>
          <span className="section-kicker">03 / A LITTLE ABOUT ME</span>
          <h2>Curious about how things work.</h2>
        </div>

        <div className="about-photo-card">
          <div className="about-photo-wrapper">
            {!profileImgError ? (
              <img
                src="/images/profile.png"
                alt="Anmol Srivastava — Software Engineer & AI Researcher"
                className="about-profile-img"
                onError={() => setProfileImgError(true)}
              />
            ) : (
              <div className="about-photo-placeholder">
                <span className="about-photo-initials">AS</span>
                <span className="about-fallback-caption">ANMOL SRIVASTAVA</span>
              </div>
            )}
            <div className="about-photo-overlay" />
            <div className="about-photo-badge">
              <span>ANMOL SRIVASTAVA</span>
              <span>SOFTWARE & AI/ML</span>
            </div>
          </div>
          <div className="about-photo-footer">
            <span className="about-photo-location">Based in Greater Noida, India</span>
            <span className="about-photo-role">Galgotias University</span>
          </div>
        </div>
      </div>

      <div className="about-copy">
        <p className="about-lead">
          My interests sit at the intersection of full-stack software development
          and intelligent systems. I enjoy tackling complex technical problems,
          architecting clean, scalable backends, and evaluating machine learning
          models with rigorous metrics and explainability.
        </p>

        <div className="about-block">
          <span className="about-block-title">SOFTWARE DEVELOPMENT</span>
          <p>
            I build practical, production-ready web applications with modern backend
            architectures. My featured project,{' '}
            <ExternalLink href="https://project-wanderlust-nmf1.onrender.com/listings" className="text-link">
              Wanderlust ↗
            </ExternalLink>
            , is a full-stack accommodation marketplace built with Node.js, Express, and
            MongoDB, supporting session authentication, cloud media uploads through mongodb-atlas.
          </p>
        </div>

        <div className="about-block">
          <span className="about-block-title">AI & MACHINE LEARNING RESEARCH</span>
          <p>
            In applied machine learning, I focus on network intrusion detection and
            model interpretability. My research on the CICIoT2023 dataset benchmarks 5 ML and ensemble architectures
            (achieving 99.66% accuracy with Random Forest) combined with SHAP feature explainability, accepted at{' '}
            <ExternalLink href={RESEARCH_PAPER.conferenceUrl} className="text-link">
              iSmartComp2026 (Paper #1039) ↗
            </ExternalLink>{' '}
            and deployed as an interactive{' '}
            <ExternalLink href={RESEARCH_PAPER.liveAppUrl} className="text-link">
              Streamlit inference web app ↗
            </ExternalLink>
            .
          </p>
        </div>

        <div className="about-skills-section">
          <span className="about-skills-title">TECHNICAL TOOLKIT</span>
          <div className="skills">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Random Forest & XGBoost</span>
            <span>SHAP (Explainable AI)</span>
            <span>Streamlit</span>
            <span>JavaScript (ES6+)</span>
            <span>Node.js & Express</span>
            <span>MongoDB & Mongoose</span>
            <span>RESTful APIs</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <span className="section-kicker">04 / CONTACT</span>

        <h2>Have an interesting problem in mind?</h2>

        <p>
          I'm interested in opportunities to learn, build, and contribute to
          meaningful software and AI projects.
        </p>

        <div className="contact-actions">
          <a
            className="button button-light"
            href={`mailto:${CONTACT.email}`}
          >
            Email me <span aria-hidden="true">↗</span>
          </a>

          <ExternalLink className="text-link" href={CONTACT.linkedin}>
            LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>

          <ExternalLink className="text-link" href={CONTACT.github}>
            GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>

        <p className="contact-email">
          Or write to me at{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          AS<span>.</span>
        </a>

        <span>Designed and built with care · Greater Noida, India</span>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-visual">
          {project.image && (
            <img src={project.image} alt={project.imageAlt || project.title} />
          )}
          <button type="button" className="modal-close" onClick={onClose}>
            Close ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="project-meta">
            <span>
              PROJECT {project.number} · {project.category}
            </span>
            <span className="project-status">{project.status}</span>
          </div>

          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <span className="modal-section-label">
            {project.type === 'research'
              ? 'Accepted Paper Abstract (iSmartComp2026 · MMMUT)'
              : 'System Overview & Architecture'}
          </span>
          <p className="project-abstract-text">{project.abstract}</p>

          <span className="modal-section-label">
            Key Implementation Highlights
          </span>
          <ul className="project-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="tag-list">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="project-links">
            <div className="project-links-left">
              <ExternalLink href={project.github}>
                {project.linkLabel} <span aria-hidden="true">↗</span>
              </ExternalLink>

              {project.demo && (
                <ExternalLink href={project.demo}>
                  {project.demoLabel || 'Live demo'}{' '}
                  <span aria-hidden="true">↗</span>
                </ExternalLink>
              )}

              {project.conferenceUrl && (
                <ExternalLink href={project.conferenceUrl}>
                  iSmartComp2026 <span aria-hidden="true">↗</span>
                </ExternalLink>
              )}
            </div>

            <button type="button" onClick={onClose}>
              Done reading
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <style>{PORTFOLIO_CSS}</style>
      <Navbar />
      <main>
        <Hero />
        <Work onOpenModal={setSelectedProject} />
        <Research />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}