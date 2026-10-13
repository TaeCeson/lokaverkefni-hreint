# Kóðinn útskýrður á einfaldan hátt

## Hvað á ég að senda á Canvas?

Sendu `lokaverkefni-canvas.zip`. Hún inniheldur allar síður, CSS, JavaScript, myndir, myndbönd, heimildagögn, merge.py og þessa skýringu. `.git` og tímabundnar vinnuskrár fylgja ekki.

Ef beðið er um slóðir, fylgja þessar líka:

- Vefur: https://taeceson.github.io/lokaverkefni-hreint/
- Kóði: https://github.com/TaeCeson/lokaverkefni-hreint

## HTML, CSS og JavaScript

**HTML:** hvað er á síðunni. Hér eru texti, SVG-lógo, mótakort, allir leikmannalistar og töflur. Breyttu HTML til að breyta þessum upplýsingum.

**CSS:** hvernig síðan lítur út. Hér eru litir, dálkar, letur, hreyfitexti og skjástærðir.

**JavaScript:** hvað gerist þegar smellt er eða slegið inn. Það skiptir um þema, sýnir flipa, síar töflur og afgreiðir staðbundna innskráningu. Þetta er JavaScript, ekki Java.

## function

`function` býr til fall: nokkrar skipanir með nafni. Fallið keyrir þegar við köllum á það.

```javascript
function showMessage(text) {
  accountMessage.textContent = text;
  accountMessage.hidden = false;
}

showMessage('Innskráning tókst.');
```

Hér fær fallið texta, setur hann á síðuna og sýnir skilaboðin. `text` er gildi sem fallið fær. Þetta dæmi kemur úr `js/adgangur.js`.

[Lesa um function](https://www.w3schools.com/js/js_functions.asp) · [Prófa einfalt dæmi](https://www.w3schools.com/js/tryit.asp?filename=tryjs_function1)

## addEventListener

Þetta segir vafranum að bregðast við atburði. `click` þýðir smellur, `input` þýðir að verið sé að skrifa og `change` þýðir að vali hafi verið breytt.

```javascript
loginTab.addEventListener('click', function () {
  showAccountTab(false);
});
```

Þegar smellt er á innskráningarflipann keyrir vafrinn skipunina sem sýnir innskráningu.

[Lesa um addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

## try og catch

Þetta tilheyrir JavaScript, ekki HTML. `try` reynir skipun. `catch` grípur villu og gefur varaleið.

```javascript
try {
  localStorage.setItem('cs-thema', theme);
} catch (error) {
  // Litirnir breytast samt þótt vafrinn leyfi ekki vistun.
}
```

Ef vafrinn lokar á localStorage stoppar þemahnappurinn ekki. Litirnir breytast samt, en valið er ekki vistað.

W3Schools „Try it“ er allt annað: hnappur sem opnar ritil til að prófa kóða.

[Lesa um try/catch](https://www.w3schools.com/js/js_errors.asp) · [Prófa HTML-form](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit)

## Hvað gerir hver JavaScript-skrá?

| Skrá | Hlutverk |
| --- | --- |
| js/thema.js | Les vistað þema áður en síðunni er lokið að hlaða. |
| js/vefur.js | Þemahnappur, pásur, hjálparkassi, myndasýning og bakgrunnsmyndband. |
| js/spilarar.js | Skiptir milli þegar skrifaðra HTML-kafla og síar töflur. |
| js/adgangur.js | Innskráning, nýskráning og hópreitur. |
| js/lykilord.js | Lítill afmarkaður hjálparhluti sem býr til afleiðu lykilorðs. |

`lykilord.js` notar innbyggða Web Crypto þjónustu vafrans svo hreint lykilorð sé ekki vistað. `async` og `await` leyfa vafranum að bíða eftir niðurstöðu. Sá hluti er flóknari en valmyndirnar og því er hann í sérskrá. [Heimild hjá MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits).

Aðgangurinn er áfram staðbundinn í þessum vafra. Miðakaup fara hjá opinberum söluaðilum.

## Hvað gerir HTML sjálft?

- `required`: ekki hægt að senda tóman reit.
- `type="email"`: vafrinn athugar grunnsnið netfangs.
- `minlength="8"`: að minnsta kosti átta stafir.
- `<details>` og `<summary>`: opna/loka efni án JavaScript.
- `<a href="...">`: opna miðasölu eða aðra síðu.
- `<video controls>`: venjulegir myndbandshnappar frá vafranum.

## Breyta útlitinu

Breyttu viðeigandi skrá í `css/` og keyrðu `python3 merge.py`. Þá verður ein þjöppuð `styles.min.css` uppfærð. Allar HTML-síðurnar tengjast aðeins henni.

Öll myndskeið og myndir fylgja möppunum `myndbond/` og `myndir/`. Engin uppsetning eða pakkastjóri þarf að keyra vefinn. Notaðu Live Server eða `python3 -m http.server 5501`.
