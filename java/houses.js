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
            gryffindorUrlVc: [],

            slytherUrl: [],
            slytherUrlVc: [],

            ravenclawUrl: [],
            ravenclawUrlVc: [],

            textoBuscador: "",
            checkboxHouses: [],
            housesName: [],
        };
    },
    methods: {
        async getCharacters(url, url2, url3, url4, url5) {
            const response = await fetch(url);
            const data = await response.json();
            this.hufflepuffUrl = data;
            this.hufflepuffUrlVc = data;

            this.hufflepuffUrl.forEach(character => {
                if (!character.image) {
                    if (character.gender === "female") {
                        character.image = "../assets/imgs/female.jpeg";

                }else{
                    character.image = "../assets/imgs/male.jpeg";
                }
            }
            });

            const response2 = await fetch(url2);
            const data2 = await response2.json();
            this.gryffindorUrl = data2;
            this.gryffindorUrlVc = data2;

            this.gryffindorUrl.forEach(character => {
                if (!character.image) {
                    if (character.gender === "female") {
                        character.image = "../assets/imgs/female.jpeg";

                }else{
                    character.image = "../assets/imgs/male.jpeg";
                }
            }
            });

            const response3 = await fetch(url3);
            const data3 = await response3.json();
            this.slytherUrl = data3;
            this.slytherUrlVc = data3;

            this.slytherUrl.forEach(character => {
                if (!character.image) {
                    if (character.gender === "female") {
                        character.image = "../assets/imgs/female.jpeg";

                }else{
                    character.image = "../assets/imgs/male.jpeg";
                }
            }
            });

            const response4 = await fetch(url4);
            const data4 = await response4.json();
            this.ravenclawUrl = data4;
            this.ravenclawUrlVc = data4;

            this.ravenclawUrl.forEach(character => {
                if (!character.image) {
                    if (character.gender === "female") {
                        character.image = "../assets/imgs/female.jpeg";

                }else{
                    character.image = "../assets/imgs/male.jpeg";
                }
            }
            });

            const response5 = await fetch(url5);
            const data5 = await response5.json();
            this.allCharacters = data5;
            
            this.housesName = [...new Set(this.allCharacters.map((character) => character.house))].filter(house => house.trim() !== "");
            this.personajesConCasa = this.allCharacters.filter((character) => character.house !== "");


            
        },
    },
    computed: {
        
        superFilteredCharacters() {
            let filtroHufflepuff = this.hufflepuffUrlVc.filter(character => 
                character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()));
                
          
                let filtroGryffindor    = this.gryffindorUrlVc.filter(character => 
                character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()));
                

                let filtroSlytherin = this.slytherUrlVc.filter(character =>
                character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()));
                this.slytherUrl = filtroSlytherin;

                let filtroRavenclaw = this.ravenclawUrlVc.filter(character =>
                character.name.toLowerCase().includes(this.textoBuscador.toLowerCase()));
            

               if (this.checkboxHouses.length === 0) {
                this.hufflepuffUrl = filtroHufflepuff;
                this.gryffindorUrl = filtroGryffindor;
                this.slytherUrl = filtroSlytherin;
                this.ravenclawUrl = filtroRavenclaw; 
                console.log(this.hufflepuffUrl.length)

            }
            else{
                this.hufflepuffUrl = filtroHufflepuff.filter(character => this.checkboxHouses.includes(character.house));
                this.gryffindorUrl = filtroGryffindor.filter(character => this.checkboxHouses.includes(character.house));
                this.slytherUrl = filtroSlytherin.filter(character => this.checkboxHouses.includes(character.house));
                this.ravenclawUrl = filtroRavenclaw.filter(character => this.checkboxHouses.includes(character.house));
            }
        },
    },
    created() {
        this.getCharacters(hufflepuffUrl, gryffindorUrl, slytherUrl, ravenclawUrl, allCharacters);
    },
}).mount("#app");
