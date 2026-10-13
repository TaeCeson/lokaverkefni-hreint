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
function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
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
// required og minlength í HTML sjá um innsláttinn.
document.getElementById('hopadgangur').addEventListener('change', function () {
  var groupInput = document.getElementById('adgangs-hopsnafn');
  document.getElementById('adgangs-hopur').hidden = !this.checked;
  groupInput.disabled = !this.checked;
  groupInput.required = this.checked;
});
function showUser() {
  var user = readStorage('cs-innskradur', null);
  document.getElementById('innskradur').hidden = !user;
  if (user) document.getElementById('velkomin').textContent = 'Velkomin/n, ' + user.nafn + '!';
}
showUser();
registerForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  var name = document.getElementById('nytt-nafn').value.trim();
  var email = document.getElementById('nytt-netfang').value.trim().toLowerCase();
  var password = document.getElementById('nytt-lykilord').value;
  var repeatedPassword = document.getElementById('nytt-endurtaka').value;
  if (password !== repeatedPassword) {
    showMessage('Lykilorðin verða að vera eins.');
    return;
  }
  var accounts = readStorage('cs-notendur-v2', []);
  for (var account of accounts) {
    if (account.netfang === email) {
      showMessage('Þetta netfang er þegar skráð í þessum vafra.');
      return;
    }
  }
  var submitButton = registerForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  try {
    var salt = Array.from(crypto.getRandomValues(new Uint8Array(16))).join('-');
    var passwordHash = await hashPassword(password, salt);
    accounts.push({ nafn: name, netfang: email, salt: salt, hash: passwordHash });
    localStorage.setItem('cs-notendur-v2', JSON.stringify(accounts));
    registerForm.reset();
    document.getElementById('hopadgangur').dispatchEvent(new Event('change'));
    showAccountTab(false);
    document.getElementById('inn-netfang').value = email;
    showMessage('Aðgangur stofnaður! Þú getur nú skráð þig inn.');
  } catch (error) {
    showMessage('Ekki tókst að vista aðgang. Notaðu localhost eða HTTPS og leyfðu geymslu í vafranum.');
  }
  submitButton.disabled = false;
});
loginForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  var email = document.getElementById('inn-netfang').value.trim().toLowerCase();
  var password = document.getElementById('inn-lykilord').value;
  var accounts = readStorage('cs-notendur-v2', []);
  var user = null;
  for (var account of accounts) {
    if (account.netfang === email) user = account;
  }
  try {
    if (!user || await hashPassword(password, user.salt) !== user.hash) {
      showMessage('Netfang eða lykilorð er rangt.');
      return;
    }
    localStorage.setItem('cs-innskradur', JSON.stringify({ nafn: user.nafn, netfang: user.netfang }));
    loginForm.reset();
    showMessage('Innskráning tókst. Sjáumst í stúkunni!');
    showUser();
  } catch (error) {
    showMessage('Ekki tókst að skrá inn. Vafrinn þarf að leyfa staðbundna geymslu.');
  }
});
document.getElementById('utskra').addEventListener('click', function () {
  try {
    localStorage.removeItem('cs-innskradur');
    showUser();
    showMessage('Þú hefur verið skráð/ur út.');
  } catch (error) {
    showMessage('Vafrinn leyfir ekki breytingu á geymslu.');
  }
});
