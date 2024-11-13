// Select theme toggle button, icon span, and check saved theme on load
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme and set initial icon
if (currentTheme) {
  document.body.classList.add(currentTheme);
  themeIcon.textContent = currentTheme === 'dark-mode' ? '🌜' : '🌞'; // Moon for dark, sun for light
}

// Toggle between dark and light modes and switch icon
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Update the icon based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.textContent = '🌜'; // Moon icon for dark mode
    localStorage.setItem('theme', 'dark-mode');
  } else {
    themeIcon.textContent = '🌞'; // Sun icon for light mode
    localStorage.setItem('theme', 'light-mode');
  }
});
