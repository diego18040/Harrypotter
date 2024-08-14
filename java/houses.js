const hufflepuffUrl = "https://hp-api.onrender.com/api/characters/house/Hufflepuff";
const gryffindorUrl = "https://hp-api.onrender.com/api/characters/house/Gryffindor";
const slytherUrl = "https://hp-api.onrender.com/api/characters/house/Slytherin";
const ravenclawUrl = "https://hp-api.onrender.com/api/characters/house/Ravenclaw";
const allCharacters = "https://hp-api.onrender.com/api/characters";

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            allCharacters: [],
            personajesConCasa: [],

            hufflepuffUrl: [],
            hufflepuffUrlVc: [],
            gryffindorUrl: [],
            slytherUrl: [],
            ravenclawUrl: [],

            textoBuscador: "",
            checkboxHouses: [],
            filtrosCombinados: [],
            housesName: [],
        };
    },
    methods: {
        async getCharacters(url, url2, url3, url4, url5) {
            const response = await fetch(url);
            const data = await response.json();
            this.hufflepuffUrl = data;
            this.hufflepuffUrlVc = data;

            const response2 = await fetch(url2);
            const data2 = await response2.json();
            this.gryffindorUrl = data2;

            const response3 = await fetch(url3);
            const data3 = await response3.json();
            this.slytherUrl = data3;

            const response4 = await fetch(url4);
            const data4 = await response4.json();
            this.ravenclawUrl = data4;

            const response5 = await fetch(url5);
            const data5 = await response5.json();
            this.allCharacters = data5;
            
            this.housesName = [...new Set(this.allCharacters.map((character) => character.house))].filter(house => house.trim() !== "");
            this.personajesConCasa = this.allCharacters.filter((character) => character.house !== "");


            
        },
    },
    computed: {
        
        superFilteredCharacters() {
            let filtroTexto = this.hufflepuffUrlVc.filter(character => 
                character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()));
                this.hufflepuffUrl = filtroTexto;
        },
        // filteredCharacters() {
        //     return this.allCharacters.filter((character) => {
        //         return character.name.toLowerCase().includes(this.textoBuscador.toLowerCase());
        //     });
        // }
        // filteredCharactersByHouse() {
        //     return this.allCharacters.filter((character) => {
        //         return this.checkboxHouses.includes(character.house);
        //     });
        // }
        // filteredCharactersCombined() {
        //     return this.allCharacters.filter((character) => {
        //         return character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()) && this.checkboxHouses.includes(character.house);
        //     });
        // },
    },
    created() {
        this.getCharacters(hufflepuffUrl, gryffindorUrl, slytherUrl, ravenclawUrl, allCharacters);
    },
}).mount("#app");