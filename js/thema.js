// Hjálp: https://www.w3schools.com/js/js_errors.asp
// try reynir að lesa þemaval. catch notar dökkt þema ef geymslan er lokuð.
try {
  var savedTheme = localStorage.getItem('cs-thema');
  if (savedTheme === 'light') document.documentElement.dataset.theme = 'light';
} catch (error) {
  document.documentElement.dataset.theme = 'dark';
}
