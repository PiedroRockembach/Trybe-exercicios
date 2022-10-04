const textBox = document.getElementById("textToRead");
const text = document.getElementById('text');
const menu = document.getElementById("menu");
const body = document.getElementById('body');

//cria menu
let navMenu = document.createElement("nav");
navMenu.setAttribute('id', 'options');

let backgroundOption = document.createElement('li');
backgroundOption.innerHTML = 'Cor de fundo';
backgroundOption.setAttribute('id', 'BackgroundColor');
navMenu.appendChild(backgroundOption);

let textColor = document.createElement('li');
textColor.innerHTML = 'Cor do Texto';
textColor.setAttribute("id", 'textColor');
navMenu.appendChild(textColor);

let textSize = document.createElement('li');
textSize.innerHTML = 'Tamanho da fonte';
textSize.setAttribute("id", 'textSize');
navMenu.appendChild(textSize);

let textGap = document.createElement('li');
textGap.innerHTML = 'Espaçamento';
textGap.setAttribute('id', 'textGap');
navMenu.appendChild(textGap);

let fontFamily = document.createElement('li');
fontFamily.innerHTML = 'Fonte';
fontFamily.setAttribute('id', 'fontFamily');
navMenu.appendChild(fontFamily);

//cria sub-menus

//backgroundColor
let backgroundPurple = document.createElement('div');
backgroundPurple.setAttribute('id', 'BackgroundPurple');
backgroundPurple.style.backgroundColor = '#5955A6';
backgroundPurple.classList.add('subItem');
backgroundOption.appendChild(backgroundPurple);

let backgroundGray = document.createElement('div');
backgroundGray.setAttribute('id', 'BackgroundGray');
backgroundGray.style.backgroundColor = '#808080';
backgroundGray.classList.add('subItem');
backgroundOption.appendChild(backgroundGray);

let backgroundWhite = document.createElement('div');
backgroundWhite.setAttribute('id', 'backgroundWhite');
backgroundWhite.style.backgroundColor = 'white';
backgroundWhite.classList.add('subItem');
backgroundOption.appendChild(backgroundWhite);

//textColor

let textColorwhite = document.createElement('div');
textColorwhite.setAttribute('id', 'textColorwhite');
textColorwhite.style.backgroundColor = 'white';
textColorwhite.classList.add('subItem');
textColor.appendChild(textColorwhite);

let textColorBlack = document.createElement('div');
textColorBlack.setAttribute('id', 'textColorBlack');
textColorBlack.style.backgroundColor = 'black';
textColorBlack.classList.add('subItem');
textColor.appendChild(textColorBlack);


let textColorYellow = document.createElement('div');
textColorYellow.setAttribute('id', 'textColorYellow');
textColorYellow.style.backgroundColor = '#E6C82E';
textColorYellow.classList.add('subItem');
textColor.appendChild(textColorYellow);

//fontSize

let fontBr = document.createElement('br');
let fontSizeInput = document.createElement('input');
fontSizeInput.classList.add('input');
let fontSizeButton = document.createElement('button');
fontSizeButton.classList.add('button');
fontSizeButton.innerHTML = 'mudar'


fontSizeButton.style.margin = '5px'
textSize.appendChild(fontBr);
textSize.appendChild(fontSizeInput);
textSize.appendChild(fontSizeButton);

//lineHeigth



let close = true;
//changeMenu
menu.addEventListener('click', changeMenu);

function changeMenu() {
    if (close) {
        openMenu();
        close = false;
    } else {
        closeMenu();
        close = true;
    }
}

function closeMenu() {
    menu.removeChild(navMenu);
    menu.style.width = '5%';
    textBox.style.width = '80%';
}

function openMenu() {
    menu.appendChild(navMenu);
    menu.style.width = '15%';
    textBox.style.width = '70%';

}

let displayText = text.innerHTML.split('');
text.innerHTML = '';
let typer = document.getElementById("typetictic");
typer.addEventListener('click', () => {
    displayText.forEach( (letter, index) => {
        setTimeout(() => {
            text.innerHTML += letter
        }, 50 * index);
    })
});