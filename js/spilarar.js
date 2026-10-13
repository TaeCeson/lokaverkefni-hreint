// Flipar og leit
// Hjálp: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
var playerButtons = document.querySelectorAll('[data-spilaraflipi]');
var playerSections = document.querySelectorAll('[data-spilarakafli]');
for (var button of playerButtons) {
  button.addEventListener('click', function () {
    var selected = this.dataset.spilaraflipi;
    for (var section of playerSections) {
      section.hidden = section.dataset.spilarakafli !== selected;
    }
    for (var tab of playerButtons) {
      tab.setAttribute('aria-pressed', tab.dataset.spilaraflipi === selected);
    }
  });
}
document.getElementById('spilaraleit').addEventListener('input', function () {
  var search = this.value.toLowerCase().trim();
  var rows = document.querySelectorAll('#heild-tafla tr');
  var matches = 0;
  for (var row of rows) {
    row.hidden = !row.textContent.toLowerCase().includes(search);
    if (!row.hidden) matches++;
  }
  document.getElementById('leit-nidurstada').textContent =
    matches === 0 ? 'Enginn spilari fannst í þessum lista.' : '';
});
document.getElementById('motaval').addEventListener('change', function () {
  var tournaments = document.querySelectorAll('[data-motatafla]');
  for (var tournament of tournaments) {
    tournament.hidden = tournament.dataset.motatafla !== this.value;
  }
});
