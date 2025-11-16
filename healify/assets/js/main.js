// main.js — shared UI interactions for Healify
// Paste into assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // Modal auth open/close
  const authSelectors = ['openAuth','openAuth2','openAuth3','openAuth4','openAuth5'];
  const authModal = document.getElementById('authModal');
  authSelectors.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openAuth());
  });
  const openAuth = () => authModal && authModal.setAttribute('aria-hidden', 'false');
  const closeAuth = document.getElementById('closeAuth');
  const cancelAuth = document.getElementById('cancelAuth');
  if (closeAuth) closeAuth.addEventListener('click', () => authModal.setAttribute('aria-hidden', 'true'));
  if (cancelAuth) cancelAuth.addEventListener('click', () => authModal.setAttribute('aria-hidden', 'true'));
  if (authModal) authModal.addEventListener('click', (e) => { if (e.target === authModal) authModal.setAttribute('aria-hidden', 'true'); });

  // Theme toggle (cycle: light -> dark -> neon)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('theme-dark');
      if (document.body.classList.contains('theme-dark')) {
        document.documentElement.style.setProperty('--bg', '#0f1724');
        document.documentElement.style.setProperty('--text', '#f8fafc');
        document.documentElement.style.setProperty('--surface', '#0b1220');
        document.documentElement.style.setProperty('--muted', '#9aa4b2');
      } else {
        // reset to base
        document.documentElement.style.setProperty('--bg', '#f7fbff');
        document.documentElement.style.setProperty('--text', '#0f1724');
        document.documentElement.style.setProperty('--surface', '#ffffff');
        document.documentElement.style.setProperty('--muted', '#6b7280');
      }
    });
  }

  // Chat toggle
  const chat = document.getElementById('chat');
  const chatToggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  if (chatToggle && chat && chatWindow) {
    chatToggle.addEventListener('click', () => {
      const expanded = chatToggle.getAttribute('aria-expanded') === 'true';
      chatToggle.setAttribute('aria-expanded', String(!expanded));
      chat.classList.toggle('open');
      chatWindow.setAttribute('aria-hidden', String(expanded));
    });
  }

  // Doctor slider auto-scroll (gentle)
  const doctorSlider = document.getElementById('doctorSlider');
  if (doctorSlider) {
    let pos = 0;
    setInterval(() => {
      pos += (doctorSlider.clientWidth / 2);
      if (pos > (doctorSlider.scrollWidth - doctorSlider.clientWidth)) pos = 0;
      doctorSlider.scrollTo({ left: pos, behavior: 'smooth' });
    }, 3800);
  }

  // Symptom selection + analysis (UI-only)
  const symptomGrid = document.getElementById('symptomGrid');
  const analysisResults = document.getElementById('analysisResults');
  if (symptomGrid && analysisResults) {
    symptomGrid.addEventListener('click', (e) => {
      const chip = e.target.closest('.symptom-chip');
      if (!chip) return;
      chip.classList.toggle('active');
      renderAnalysis();
    });
  }

  function renderAnalysis() {
    const selected = Array.from(document.querySelectorAll('.symptom-chip.active')).map(s => s.dataset.key);
    if (selected.length === 0) {
      analysisResults.innerHTML = '<p class="muted">Select symptoms to view possible matches and guidance.</p>';
      return;
    }
    // Basic mapping (UI demo). Expand as needed.
    const map = {
      fever: { title: 'Infectious process', advice: 'Monitor temperature; consult if >38°C or persistent.' },
      cough: { title: 'Respiratory symptoms', advice: 'If severe or breathless, seek urgent care.' },
      headache: { title: 'Headache / Tension', advice: 'Rest, hydration, and pain relief as needed.' },
      fatigue: { title: 'Low energy', advice: 'Review sleep and hydration; consider visit if persistent.' },
      rash: { title: 'Dermatologic sign', advice: 'Avoid irritants; see dermatologist if spreading.' },
      breath: { title: 'Respiratory distress', advice: 'Seek immediate medical attention if severe.' }
    };

    analysisResults.innerHTML = '';
    selected.forEach(key => {
      const item = map[key] || { title: 'General symptom', advice: 'Consult a clinician for an accurate assessment.' };
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<div style="font-weight:700">${item.title}</div><div style="margin-top:6px;color:var(--muted)">${item.advice}</div>`;
      analysisResults.appendChild(card);
    });
  }

  // Booking slots selection
  const slotButtons = document.querySelectorAll('.slot');
  const selectedSlotEl = document.getElementById('selectedSlot');
  const confirmBooking = document.getElementById('confirmBooking');
  slotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slotButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (selectedSlotEl) selectedSlotEl.textContent = btn.textContent;
      if (confirmBooking) confirmBooking.disabled = false;
    });
  });

  if (confirmBooking) confirmBooking.addEventListener('click', () => {
    const selected = document.querySelector('.slot.selected');
    if (!selected) return alert('Please select a time slot.');
    // UI demo only — show confirmation
    alert(`Appointment requested for ${selected.textContent}. (This is a UI demo.)`);
    confirmBooking.disabled = true;
    if (selectedSlotEl) selectedSlotEl.textContent = 'None';
    slotButtons.forEach(b => b.classList.remove('selected'));
  });

  // Simple form prevention for auth (no backend)
  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // UI: close modal and show success toast (alert)
      if (authModal) authModal.setAttribute('aria-hidden','true');
      alert('Signed in (UI demo).');
    });
  }

});
