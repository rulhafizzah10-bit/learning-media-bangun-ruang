* {
  box-sizing: border-box;
}

:root {
  --bg: #061a2d;
  --bg-soft: #112b45;
  --panel: rgba(12, 30, 47, 0.82);
  --panel-strong: rgba(15, 38, 58, 0.96);
  --line: rgba(137, 210, 255, 0.3);
  --primary: #68d5ff;
  --primary-strong: #3aa1ff;
  --secondary: #9df1ca;
  --warning: #ffd76a;
  --danger: #ff7a7a;
  --success: #7ef0ac;
  --text: #edfaff;
  --muted: #a8d0eb;
  --shadow: rgba(7, 18, 29, 0.5);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, #0f2c48, var(--bg) 48%);
  color: var(--text);
}

body {
  min-height: 100vh;
  padding: 32px 20px;
}

button {
  font: inherit;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: rgba(7, 23, 36, 0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 28px;
  box-shadow: 0 20px 40px var(--shadow);
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--primary);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

h1,
h2,
h3,
p,
ul {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(1.8rem, 2vw + 1rem, 3rem);
}

.session-tools {
  display: flex;
  align-items: center;
  gap: 12px;
}

.session-pill {
  background: rgba(104, 213, 255, 0.08);
  border: 1px solid rgba(104, 213, 255, 0.25);
  border-radius: 999px;
  padding: 10px 14px;
  color: var(--muted);
  font-size: 0.9rem;
}

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(3, 9, 16, 0.35);
}

.main-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
}

.model-panel,
.concept-panel,
.qr-panel,
.quiz-panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(104, 213, 255, 0.1);
  border: 1px solid rgba(104, 213, 255, 0.25);
  color: var(--primary);
}

.badge.muted {
  color: var(--muted);
  border-color: rgba(168, 208, 235, 0.2);
  background: rgba(168, 208, 235, 0.04);
}

.shape-toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.shape-btn {
  background: rgba(104, 213, 255, 0.08);
  border: 1px solid rgba(104, 213, 255, 0.15);
  color: var(--text);
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
}

.shape-btn.active {
  background: rgba(104, 213, 255, 0.18);
  border-color: rgba(104, 213, 255, 0.45);
}

.shape-stage {
  background: linear-gradient(180deg, rgba(17, 43, 69, 0.75), rgba(13, 25, 36, 0.9));
  border: 1px solid rgba(104, 213, 255, 0.15);
  border-radius: 20px;
  padding: 16px;
}

.shape-svg {
  display: block;
  width: 100%;
  height: 360px;
  transform: perspective(900px) rotateX(8deg);
}

.shape-surface {
  fill: url(#shapeBody);
  stroke: rgba(136, 224, 255, 0.45);
  stroke-width: 3;
  transition: all 0.25s ease;
  filter: drop-shadow(0 20px 25px rgba(58, 161, 255, 0.35));
}

.base-circle, .base-ellipse {
  stroke: rgba(136, 224, 255, 0.6);
  stroke-width: 2;
  fill: rgba(104, 213, 255, 0.08);
}

.axis-line {
  stroke: rgba(157, 241, 202, 0.4);
  stroke-width: 2.4;
  stroke-dasharray: 8 7;
}

.axis-line.faint {
  stroke: rgba(157, 241, 202, 0.22);
}

.point-ring {
  fill: rgba(255, 255, 255, 0.12);
  stroke: rgba(104, 213, 255, 0.8);
  stroke-width: 2;
  transition: all 0.2s ease;
}

.point-core {
  fill: var(--primary);
  transition: all 0.2s ease;
}

.label {
  fill: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.hotspot-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.focus-btn,
.level-btn,
.primary-btn,
.secondary-btn {
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.focus-btn,
.level-btn {
  background: rgba(104, 213, 255, 0.06);
  border-color: rgba(104, 213, 255, 0.15);
  color: var(--text);
}

.focus-btn.active,
.level-btn.active {
  background: linear-gradient(135deg, rgba(104, 213, 255, 0.18), rgba(58, 161, 255, 0.18));
  border-color: rgba(104, 213, 255, 0.45);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #031a2d;
  font-weight: 800;
}

.secondary-btn {
  background: rgba(157, 241, 202, 0.06);
  border-color: rgba(157, 241, 202, 0.2);
  color: var(--text);
}

.focus-btn:hover,
.level-btn:hover,
.primary-btn:hover,
.secondary-btn:hover,
.shape-btn:hover {
  transform: translateY(-1px);
}

.concept-body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  line-height: 1.7;
}

#conceptTitle {
  margin: 0;
  font-size: 1.4rem;
}

.formula-box,
.derivation-box,
.steps-box {
  background: rgba(7, 21, 31, 0.7);
  border: 1px solid rgba(104, 213, 255, 0.15);
  border-radius: 18px;
  padding: 16px 18px;
}

.formula-label {
  margin: 0 0 8px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}

.formula {
  font-size: clamp(1.6rem, 1vw + 1rem, 2.1rem);
  font-weight: 800;
  color: var(--secondary);
}

.concept-steps {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
  display: grid;
  gap: 8px;
}

.lower-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.5fr;
  gap: 24px;
}

.qr-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 230px;
  background: linear-gradient(180deg, rgba(8, 18, 29, 0.9), rgba(17, 32, 51, 0.8));
  border: 1px solid rgba(104, 213, 255, 0.2);
  border-radius: 20px;
  margin-bottom: 18px;
}

#qrImage {
  width: 180px;
  height: 180px;
  display: block;
  border-radius: 16px;
  background: white;
  padding: 12px;
}

.qr-info {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.6;
}

.level-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.question-card {
  background: rgba(8, 22, 32, 0.8);
  border: 1px solid rgba(104, 213, 255, 0.15);
  border-radius: 20px;
  padding: 20px;
}

.question-text {
  margin-bottom: 18px;
  font-size: 1.05rem;
  line-height: 1.7;
}

.answer-options {
  display: grid;
  gap: 10px;
}

.answer-option {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border: 1px solid rgba(104, 213, 255, 0.15);
  border-radius: 12px;
  padding: 14px 16px;
  cursor: pointer;
}

.answer-option.selected {
  border-color: rgba(104, 213, 255, 0.5);
  background: rgba(104, 213, 255, 0.1);
}

.answer-option.correct {
  border-color: rgba(126, 240, 172, 0.7);
  background: rgba(126, 240, 172, 0.08);
}

.answer-option.wrong {
  border-color: rgba(255, 122, 122, 0.65);
  background: rgba(255, 122, 122, 0.08);
}

.feedback {
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 12px;
  line-height: 1.6;
}

.feedback.success {
  background: rgba(126, 240, 172, 0.08);
  border: 1px solid rgba(126, 240, 172, 0.45);
  color: #dffef0;
}

.feedback.error {
  background: rgba(255, 122, 122, 0.08);
  border: 1px solid rgba(255, 122, 122, 0.45);
  color: #ffe2e2;
}

.hidden {
  display: none;
}

.quiz-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

@media (max-width: 920px) {
  .main-grid,
  .lower-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .session-tools {
    width: 100%;
    justify-content: space-between;
  }
}
