// Hjálp: https://www.w3schools.com/html/html_forms.asp
// Geymsla: https://www.w3schools.com/jsref/prop_win_localstorage.asp
var accountMessage = document.getElementById('adgangs-nidurstada');
var loginForm = document.getElementById('innskra-form');
var registerForm = document.getElementById('stofna-form');
var loginTab = document.getElementById('innskra-flipi');
var registerTab = document.getElementById('stofna-flipi');
function showMessage(text) {
  accountMessage.textContent = text;
  accountMessage.hidden = false;
}
function showAccountTab(register) {
  document.getElementById('innskra-spjald').hidden = register;
  document.getElementById('stofna-spjald').hidden = !register;
  loginTab.setAttribute('aria-selected', !register);
  registerTab.setAttribute('aria-selected', register);
  loginTab.tabIndex = register ? -1 : 0;
  registerTab.tabIndex = register ? 0 : -1;
  accountMessage.hidden = true;
}
loginTab.addEventListener('click', function () { showAccountTab(false); });
registerTab.addEventListener('click', function () { showAccountTab(true); });
for (var tab of [loginTab, registerTab]) {
  tab.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      var register = this === loginTab;
      showAccountTab(register);
      if (register) registerTab.focus();
      else loginTab.focus();
      event.preventDefault();
    }
  });
}
if (location.hash === '#stofna') showAccountTab(true);
// Hópreitur
document.getElementById('hopadgangur').addEventListener('change', function () {
  var groupInput = document.getElementById('adgangs-hopsnafn');
  document.getElementById('adgangs-hopur').hidden = !this.checked;
  groupInput.disabled = !this.checked;
  groupInput.required = this.checked;
});
// Formin sýna bara hvernig innskráning gæti litið út.
var displayName = '';
registerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var password = document.getElementById('nytt-lykilord').value;
  var repeatedPassword = document.getElementById('nytt-endurtaka').value;
  if (password !== repeatedPassword) {
    showMessage('Lykilorðin verða að vera eins.');
    return;
  }
  displayName = document.getElementById('nytt-nafn').value.trim();
  document.getElementById('inn-netfang').value = document.getElementById('nytt-netfang').value;
  registerForm.reset();
  document.getElementById('hopadgangur').dispatchEvent(new Event('change'));
  showAccountTab(false);
  showMessage('Takk fyrir skráninguna!');
});
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('innskradur').hidden = false;
  document.getElementById('velkomin').textContent = displayName ? 'Velkomin/n, ' + displayName + '!' : 'Velkomin/n!';
  loginForm.reset();
  showMessage('Velkomin í stúkuna!');
});
document.getElementById('utskra').addEventListener('click', function () {
  document.getElementById('innskradur').hidden = true;
  showMessage('Þú hefur verið skráð/ur út.');
});
