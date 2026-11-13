const modal = document.getElementById('contactModal');
const openModal = () => modal.classList.add('open');
document.querySelectorAll('.contact-trigger').forEach(button => button.addEventListener('click', openModal));
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.remove('open'); });
document.getElementById('copyEmail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('Pitad6362@gmail.com');
    document.getElementById('copyEmail').textContent = document.documentElement.lang === 'en' ? 'Copied!' : '¡Copiado!';
  } catch {
    window.location.href = 'mailto:Pitad6362@gmail.com';
  }
});
let language = 'es';
const langButton = document.getElementById('langBtn');
langButton.addEventListener('click', () => {
  language = language === 'es' ? 'en' : 'es';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-es][data-en]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  langButton.textContent = language === 'es' ? 'EN' : 'ES';
  document.getElementById('themeBtn').querySelector('span').textContent =
    document.body.classList.contains('dark')
      ? (language === 'es' ? 'Modo claro' : 'Light mode')
      : (language === 'es' ? 'Modo oscuro' : 'Dark mode');
});
const themeButton = document.getElementById('themeBtn');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeButton.querySelector('span').textContent = dark
    ? (language === 'es' ? 'Modo claro' : 'Light mode')
    : (language === 'es' ? 'Modo oscuro' : 'Dark mode');
  themeButton.firstChild.textContent = dark ? '☀️ ' : '🌙 ';
});
