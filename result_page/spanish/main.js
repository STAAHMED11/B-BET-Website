let HT_selected = document.querySelector('#Home');
let Ht = document.querySelector('h3');
let AT_selected = document.querySelector('#Away');
let At = document.querySelector('h4');
let htmlfile = document.querySelector('h5');
var home_img = ''
var away_img = ''

HT_selected.addEventListener("change", (e) => {
    htmlfile = './visuals/'
    probafile = './visuals/'
    home_img = './img/'
    console.log(e.target.value)
    Ht.innerText = HT_selected.options[HT_selected.selectedIndex].text;
    htmlfile = htmlfile + Ht.innerText
    probafile = probafile + Ht.innerText

    home_img += Ht.innerText + '.png'
    htmlfile += ' vs '
    probafile += ' vs '
    console.log(home_img)
    document.getElementById('home').src = home_img;

})

AT_selected.addEventListener("change", (e) => {
    console.log(e.target.value)
    away_img = './img/'

    At.innerText = AT_selected.options[AT_selected.selectedIndex].text;
    htmlfile = htmlfile + At.innerText
    probafile = probafile + At.innerText

    away_img += At.innerText + '.png'
    htmlfile += '.html'
    probafile += '1.html'
    console.log(htmlfile)
    console.log(probafile)

    document.getElementById('graphs').src = htmlfile;
    document.getElementById('proba').src = probafile;


    htmlfile = './visuals/'
    htmlfile = htmlfile + Ht.innerText
    htmlfile += ' vs '

    probafile = './visuals/'
    probafile = probafile + Ht.innerText
    probafile += ' vs '


    document.getElementById('away').src = away_img;
})