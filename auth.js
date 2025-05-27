document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Display logged-in guest user email
  const welcomeMsg = document.getElementById('welcome-msg');
  const guestUser = localStorage.getItem('guestUser');
  if (guestUser && welcomeMsg) {
    welcomeMsg.textContent = `Welcome, ${guestUser}!`;
  }
});
