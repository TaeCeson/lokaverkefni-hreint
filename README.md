# CS Stúkan

Íslenskur aðdáendavefur um Counter-Strike, LAN-mót, virka spilara og goðsagnir leiksins.

**Vefur:** https://taeceson.github.io/lokaverkefni-hreint/

## Kennsluefni og dæmi

Hér eru hjálparsíður sem útskýra atriðin í kóðanum. Þær eru lesefni og dæmi til að prófa.

| Efni | Hjálparsíða | Tengist þessu á vefnum |
| --- | --- | --- |
| HTML-grunnur | [W3Schools HTML](https://www.w3schools.com/html/) | Haus, meginmál, myndir og tenglar |
| Form | [HTML Forms](https://www.w3schools.com/html/html_forms.asp) · [Prófa form](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit) | Innskráning og nýskráning |
| Skilyrði í reitum | [Input Attributes](https://www.w3schools.com/html/html_form_attributes.asp) | required, type, minlength og maxlength |
| Töflur | [HTML Tables](https://www.w3schools.com/html/html_tables.asp) | Spilara- og mótalistar |
| Fellilisti | [details og summary](https://www.w3schools.com/tags/tag_details.asp) | Valmynd í síma og útskýringar á hlutverkum |
| Grid | [CSS Grid](https://www.w3schools.com/css/css_grid.asp) | Dálkar og mótakort |
| Flexbox | [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) | Valmynd og röðun hnappa |
| Skjástærðir | [Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) | Sími, spjaldtölva og stórir skjáir |
| Kvikun | [CSS Animations](https://www.w3schools.com/css/css3_animations.asp) | Textinn sem hreyfist yfir síðuna |
| function | [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp) · [Prófa fall](https://www.w3schools.com/js/tryit.asp?filename=tryjs_function1) | Endurnýta nokkrar skipanir |
| Smellir | [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) | Smella á þema og flipa |
| try og catch | [JavaScript Errors](https://www.w3schools.com/js/js_errors.asp) | Nota varaleið ef vafrinn leyfir ekki vistun |
| Geymsla í vafra | [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) | Þemaval og staðbundinn aðgangur |

**JavaScript er annað tungumál en Java.** HTML lýsir efninu, CSS sér um útlitið og JavaScript bregst við aðgerðum.

**try er ekki HTML-tag.** Það er JavaScript-skipun, stundum inni í `<script>` í HTML. Hún reynir að keyra kóða. `catch` bregst við ef villa kemur upp, til dæmis ef vafrinn bannar geymslu. W3Schools **Try it** hnappurinn er hins vegar ritill þar sem hægt er að prófa dæmi.

**function er nafngreindur hópur skipana.** `updateThemeButton()` uppfærir þemahnappinn þegar kallað er á hana. Sjá fleiri stuttar útskýringar í [LESTU-MIG.md](LESTU-MIG.md).

## Síður

- Forsíða með myndasýningu, hljóðlausu bakgrunnsmyndbandi og frétt um Vitality.
- Mót og miðar með tenglum á opinbera söluaðila.
- Spilarar með topp 10 tölfræði og listum fyrir tíu nýleg stórmót.
- Goðsagnir með sögulegum liðum og ferilheimildum.
- Aðgangur með innskráningu, nýskráningu og skilyrtum hópreit.
- Um verkefnið og heimildir, litir og tenglar á frumheimildir.

## Miðasala

„Velja miða“ opnar sölusíðu viðkomandi móts. PGL Singapore Major vísar á Ticketmaster SG og IEM Beijing á UUTIX, sem ESL tilgreinir sem opinberan alþjóðlegan söluaðila. Kaup fara fram hjá söluaðilanum. Verð og framboð eru birt þar.

BLAST Open Singapore 2027 er staðfest, en miðasala er ekki staðfest enn. Kort þess opnar upplýsingar hjá BLAST og hefur engan kauphnapp.

- [Ticketmaster SG - Singapore Major](https://main.login.ticketmaster.sg/activity/detail/26sg_pglcs2major)
- [ESL - IEM Beijing og opinber miðasala](https://pro.eslgaming.com/tour/cs/beijing/)
- [BLAST - Singapore 2027](https://blast.tv/cs/news/premier-returns-to-singapore-in-2027)

## Tölfræði

Gögn tekin saman 13. október 2026. Gögnin eru föst útgáfa og uppfærast ekki sjálfkrafa.

Topp 10 núna: heildartafla HLTV, 13. júlí til 13. október 2026, stórmót gegn topp 20 liðum og minnst 20 kort. Röð eftir Rating 3.0. Jafnar einkunnir fá sama sæti. Þetta er röðun með þessum síum, ekki opinber árleg verðlaunaröðun.

[Tölfræði með síum](https://www.hltv.org/stats/players?startDate=2026-07-13&endDate=2026-10-13&matchType=BigEvents&rankingFilter=Top20)

Tíu mót: tíu nýjustu loknu alþjóðlegu LAN-mótin / Major-aðalmótin í HLTV-skrá með verðlaunapott að minnsta kosti 500.000 USD. Topp 10 hvers móts kemur úr heildartöflu þess með minnst 5 kort. Lið fylgja viðkomandi móti. Hlutverkalistar eru aðdáendamat; heimildir og aðferð fylgja vefnum og `gogn/spilarar.json`. Töflur og hlutverkalistar eru skrifuð beint í `spilarar.html`, svo ekki þarf JavaScript til að búa til efnið.

## Keyra og breyta

Opna möppuna í Visual Studio Code og nota Live Server, eða:

```sh
python3 -m http.server 5501
```

Opna http://localhost:5501. Aðgangurinn er staðbundinn í vafranum. Lykilorð eru ekki geymd sem hreinn texti; geymt er salt og PBKDF2-afleiða. Raunverulegt aðgangskerfi yfir mörg tæki þarf bakenda.

Texti, leikmannalistar og töflur eru í HTML-síðunum. JavaScript notar einföld ensk breytu- og fallanöfn; sýnilegur texti er íslenskur. CSS er í `css/` og sameinað með:

```sh
python3 merge.py
```

Listinn í `merge.py` er:

```python
files_names = [
    "new", "grid", "table", "form", "menues", "popup", "icomoon",
    "chatbox", "kvikun", "accordion", "custom"
]
```

Pico er sameinað við skrárnar í eina þjappaða `styles.min.css`, eina stílsíðuna sem HTML notar. Bil í `calc()` og leyfisathugasemd varðveitast. `gamalt.html` notar `<meta http-equiv="Refresh" content="5; url=index.html">` til að vísa á forsíðuna eftir fimm sekúndur.

Upprunalega tilvísunardæmið:

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Refresh" content="5; url=https://www.w3schools.com">
</head>
<body>
<p>Sorry! We have moved! The new URL is:
<a href="https://www.w3schools.com">https://www.w3schools.com</a></p>
<p>You will be redirected to the new address in five seconds.</p>
<p>If you see this message for more than 5 seconds, please click on the link above!</p>
</body>
</html>
```

## Myndir og myndband

Fjórar skjámyndir, CS2-kynning og stutt bakgrunnsklippa frá [Valve / Steam](https://store.steampowered.com/app/730/CounterStrike_2/). Leikjaefni tilheyrir Valve. SVG-lógo var smíðað fyrir vefinn. Pico er með MIT-leyfi í `css/LEYFI-PICO.txt`.

Sex aðallitir: dökkblár, rjómalitur, appelsínugulur, gulur, grænblár og grár. Ljóst og dökkt þema. Hreyfingar taka tillit til `prefers-reduced-motion` og hafa pásuhnappa.

Vefurinn er óháður Valve, ESL, BLAST og PGL.
