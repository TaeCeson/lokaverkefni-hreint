// Hjálp: https://www.w3schools.com/js/js_functions.asp
// Smellur: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// function safnar saman skipunum. Hér uppfærir hún þemahnappinn.
var themeButton = document.getElementById('thema');
function updateThemeButton() {
  if (document.documentElement.dataset.theme === 'dark') {
    themeButton.textContent = '☀ Ljóst';
    themeButton.setAttribute('aria-label', 'Skipta yfir í ljóst þema');
  } else {
    themeButton.textContent = '☾ Dökkt';
    themeButton.setAttribute('aria-label', 'Skipta yfir í dökkt þema');
  }
}
updateThemeButton();
themeButton.addEventListener('click', function () {
  var theme = 'dark';
  if (document.documentElement.dataset.theme === 'dark') theme = 'light';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('cs-thema', theme);
  } catch (error) {
    // Litirnir breytast samt þótt vafrinn leyfi ekki vistun.
  }
  updateThemeButton();
});

document.getElementById('pasa-tilkynningu').addEventListener('click', function () {
  var paused = document.querySelector('.tilkynning').classList.toggle('pasa');
  this.setAttribute('aria-pressed', paused);
  this.textContent = paused ? 'Halda áfram' : 'Pása';
});
var mobileLinks = document.querySelectorAll('.farsima-listi a');
for (var link of mobileLinks) {
  link.addEventListener('click', function () {
    document.querySelector('.farsima-valmynd').open = false;
  });
}

// Svörin sjálf eru í HTML. Hér er aðeins valið hvaða svar sé sýnt.
document.getElementById('spjall-spurning').addEventListener('change', function () {
  var answers = document.querySelectorAll('[data-hjalp]');
  for (var answer of answers) answer.hidden = answer.dataset.hjalp !== this.value;
});
var image = document.getElementById('myndasyning');
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (image) {
  var images = ['cs-1.jpg', 'cs-2.jpg', 'cs-3.jpg', 'cs-4.jpg'];
  var imageNumber = 0;
  var slideshowPaused = reducedMotion;
  var slideshowButton = document.getElementById('mynd-pasa');
  function showImage(step) {
    imageNumber = imageNumber + step;
    if (imageNumber < 0) imageNumber = images.length - 1;
    if (imageNumber >= images.length) imageNumber = 0;
    image.src = 'myndir/' + images[imageNumber];
    document.getElementById('myndatexti').textContent =
      '0' + (imageNumber + 1) + ' / 04 - Counter-Strike 2';
  }
  function updateSlideshowButton() {
    slideshowButton.textContent = slideshowPaused ? 'Spila' : 'Pása';
    slideshowButton.setAttribute('aria-pressed', slideshowPaused);
    slideshowButton.setAttribute('aria-label', slideshowPaused ?
      'Halda myndasýningu áfram' : 'Stöðva myndasýningu');
  }
  document.getElementById('mynd-fyrri').addEventListener('click', function () { showImage(-1); });
  document.getElementById('mynd-naesta').addEventListener('click', function () { showImage(1); });
  slideshowButton.addEventListener('click', function () {
    slideshowPaused = !slideshowPaused;
    updateSlideshowButton();
  });
  updateSlideshowButton();
  setInterval(function () {
    if (!slideshowPaused && !document.hidden) showImage(1);
  }, 5500);
}
var video = document.getElementById('bakgrunnsmyndband');
if (video) {
  var videoButton = document.getElementById('bakgrunns-pasa');
  function updateVideoButton() {
    videoButton.textContent = video.paused ?
      'Spila bakgrunnsmyndband' : 'Stöðva bakgrunnsmyndband';
  }
  function playVideo() {
    video.play().catch(updateVideoButton);
  }
  videoButton.addEventListener('click', function () {
    if (video.paused) playVideo();
    else video.pause();
  });
  video.addEventListener('play', updateVideoButton);
  video.addEventListener('pause', updateVideoButton);
  if (!reducedMotion) playVideo();
  updateVideoButton();
}
