const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const themeToggle = document.getElementById('themeToggle');
const clearSearch = document.getElementById('clearSearch');
const q = document.getElementById('q');

menuBtn?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

// theme toggle with localStorage
const getPref = () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
const applyTheme = (t) => {
  document.documentElement.style.colorScheme = t;
  if(t === 'dark'){
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
  }
};
applyTheme(getPref());

themeToggle?.addEventListener('click', () => {
  const next = getPref() === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

clearSearch?.addEventListener('click', () => {
  q.value = '';
  q.focus();
});

// fake filter chips
document.querySelectorAll('.chip').forEach(ch => {
  ch.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('is-active'));
    ch.classList.add('is-active');
  });
});
