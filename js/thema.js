// Hjálp: https://www.w3schools.com/js/js_errors.asp
// Lesa vistað þema
try {
  var savedTheme = localStorage.getItem('cs-thema');
  if (savedTheme === 'light') document.documentElement.dataset.theme = 'light';
} catch (error) {
  document.documentElement.dataset.theme = 'dark';
}
