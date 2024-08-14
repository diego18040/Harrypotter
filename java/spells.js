import { loadNavbar } from "./modules/Modules.js";
loadNavbar();

let urlSpell = ('https://hp-api.onrender.com/api/spells')
let spellsArray = []

fetch(urlSpell)
    .then(response => response.json())
    .then(spells => {
        spellsArray = spells
        cards(spells);
    });


function cards(spells) {
    let container = document.getElementById("spell-container");
    container.innerHTML = '';

    if (spells.length === 0) {
        container.innerHTML = `
        <div class="notFound d-flex">
        <img class="imgNotFound" src="../assets/imgs/graphy-parchment.png" alt="parchment image">>
        <h3 class="textNotFound">This spell has not been created yet.</h3>
        </div>`;

        return;
    }

    spells.forEach(spell => {
        let card = document.createElement('div');
        card.className = "text-center";
        card.innerHTML = `
             <div class="cardSpell">
                <div class="face front">
                    <img src="../assets/imgs/Cover-Book.jpg" alt="hogwarts logo">
                    <h3>${spell.name}</h3>
                </div>
                <div class="face back">
                    <img src="../assets/imgs/card-parchment.jpg" alt="back image">
                    <div class="backText">
                    <h2>${spell.name}</h2>
                    <br>
                    <h5>${spell.description}</h5>
                </div>
                    <div class="fav">
                        <a href="#">Favorito</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById('textSpell').addEventListener('keyup', spellFiltered)

function textFilter(spells, text) {
    return spells.filter(spell => {
        return spell.name.toLowerCase().includes(text) || spell.description.toLowerCase().includes(text)
    })
}

function spellFiltered() {
    let search = document.getElementById('textSpell').value.toLowerCase()
    let filteredSpells = textFilter(spellsArray, search) 
    cards(filteredSpells)
}
