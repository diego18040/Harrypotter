
let url = 'https://hp-api.onrender.com/api/characters';
let wandImg = [
    {
        id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
        image: "../assets/imgs/Wands/Potter-Wand.png"
    },
    {
        id: '4c7e6819-a91a-45b2-a454-f931e4a7cce3',
        image: "../assets/imgs/Wands/Granger-Wand.png",
    },
    {
        id: 'c3b1f9a5-b87b-48bf-b00d-95b093ea6390',
        image: "../assets/imgs/Wands/Ron-Wand.png"
    },
    {
        id: 'af95bd8a-dfae-45bb-bc69-533860d34129',
        image: "../assets/imgs/Wands/Draco-Wand.png",
    },
    {
        id: 'ca3827f0-375a-4891-aaa5-f5e8a5bad225',
        image: "../assets/imgs/Wands/McGonagall-Wand.png",
    },
    {
        id: 'd5c4daa3-c726-426a-aa98-fb40f3fba816',
        image: '../assets/imgs/Wands/Cedric-Wand.png',
    },
    {
        id: '36bfefd0-e0bb-4d11-be98-d1ef6117a77a',
        image: '../assets/imgs/Wands/Hagrid-Wand.png',
    },
    {
        id: '3db6dc51-b461-4fa4-a6e4-b1ff352221c5',
        image: '../assets/imgs/Wands/Neville-Wand.png',
    },
    {
        id: '1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1',
        image: '../assets/imgs/Wands/Ginny-Wand.png',
    },
    {
        id: 'b8f9095b-9de6-4d7d-83e0-4391af8f22e4',
        image: '../assets/imgs/Wands/Lupin-Wand.png',
    },
    {
        id: '6afb1960-febd-418d-b604-e50c1b59459b',
        image: '../assets/imgs/Wands/Bellatrix-Wand.png',
    },
    {
        id: 'efa802c8-ae18-4ae1-a524-49df21d05939',
        image: '../assets/imgs/Wands/Voldemort-Wand.png',
    },
    {
        id: '2fb675cd-5505-4c8e-a54e-579e73bf4174',
        image: '../assets/imgs/Wands/Horace-Wand.png',
    },
    {
        id: 'd58e7249-19d1-40bd-a43f-1da0497fe8aa',
        image: '../assets/imgs/Wands/Dolores-Wand.png',
    },
    {
        id: '43403619-70cb-4a0c-b70a-6d5cae20e602',
        image: '../assets/imgs/Wands/Lucius-Wand.png',
    },
    {
        id: '41cd0bbe-a943-431b-9bde-bb2cad3491a1',
        image: '../assets/imgs/Wands/Lily.png',
    },
    {
        id: '34eb6182-00cf-4c95-ae73-7d2f34066d18',
        image: '../assets/imgs/Wands/James-Wand.png',
    },
    {
        id: 'ba19be27-178b-4594-95b7-51ba0e3ba1dd',
        image: '../assets/imgs/Wands/Quirrell.webp',
    },
    {
        id: 'd59691a4-f830-4eb0-a819-a0fb00b7e80f',
        image: '../assets/imgs/Wands/Olivander-Wand.png',
    },
    {
        id: 'fa09ab9d-9e65-4966-9d79-ea7c837348fb',
        image: '../assets/imgs/Wands/Celestina.webp',
    },
    {
        id: '3d687c4d-852e-470f-bac5-5a02758b1f8f',
        image: '../assets/imgs/Wands/Lockharts-Wand.png',
    },
    {
        id: '8ea29415-012d-4781-ba5f-d0de63a05abe',
        image: '../assets/imgs/Wands/Sybill-Wand.png',
    },
    {
        id: '1b6c8547-294a-40c0-892b-63a9511ca7d7',
        image: '../assets/imgs/Wands/Peter-Wand.png',
    },
    {
        id: 'b7b18aa1-b5a0-4083-8142-cb3655bc2849',
        image: '../assets/imgs/Wands/Krum-Wand.png',
    },
    {
        id: 'e96dc731-5217-4c83-b173-248e1c70b5e7',
        image: '../assets/imgs/Wands/Mary-Wand.png',
    },

];

fetch(url)
    .then(response => response.json())
    .then(data => {
        const filteredCharacters = data.filter(character => {
            const { wood, core, length } = character.wand || {};
            return wood || core || length;
        });
        createWandsTable(filteredCharacters);
    })
    .catch(error => console.error('Error:', error));

function createWandsTable(characters) {
    let container = document.getElementById("tableContainer");
    let table = `
    <div class="d-flex justify-content-center">
      <table class="text-center table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Wood</th>
            <th>Core</th>
            <th>Length</th>
            <th>Wand</th>
          </tr>
        </thead>
        <tbody>
    `;

    characters.forEach(character => {
        const { id, name, wand } = character;

        const wandImageObj = wandImg.find(img => img.id === id);
        const wandImage = wandImageObj ? `<img id="wand" src="${wandImageObj.image}" alt="Wand Image">` : 'No Image Available';

        table += `
          <tr>
            <td>${name}</td>
            <td>${wand.wood || 'N/A'}</td>
            <td>${wand.core || 'N/A'}</td>
            <td>${wand.length || 'N/A'} inches</td>
            <td class="tdWand">${wandImage}</td>
          </tr>
        `;
    });

    table += `
        </tbody>
      </table>
    </div>
    `;

    container.innerHTML = table;
}