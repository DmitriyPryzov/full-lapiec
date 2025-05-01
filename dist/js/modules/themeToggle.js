 export default function toggleTheme(element) {
    const body = document.body;
    const isLight = body.classList.toggle('light-theme');
    element.textContent = isLight ? '🌞' : '🌙';
  }