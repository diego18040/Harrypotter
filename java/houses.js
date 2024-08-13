let hufflepuff = "https://hp-api.onrender.com/api/characters/house/Hufflepuff"
let gryffindor = "https://hp-api.onrender.com/api/characters/house/Gryffindor"
let slyther    = "https://hp-api.onrender.com/api/characters/house/Slytherin"
let ravencl    = "https://hp-api.onrender.com/api/characters/house/Ravenclaw"

const {createApp} = Vue

const app = createApp({ 
    data() {
        return {
            characters: [],
            filter: '',
            houses: [
                {
                    name: 'Hufflepuff',
                    url: hufflepuff
                },
                {
                    name: 'Gryffindor',
                    url: gryffindor
                },
                {
                    name: 'Slytherin',
                    url: slyther
                },
                {
                    name: 'Ravenclaw',
                    url: ravencl
                }
            ]
        }
    },
    methods: {
        async getCharacters(url) {
            const response = await fetch(url)
            const data = await response.json()
            this.characters = data
            console.log(this.characters)
        }
    },
    computed: {
        filteredCharacters() {
            return this.characters.filter(character => {
                return character.name.toLowerCase().includes(this.filter.toLowerCase())
            })
        }
    },
    created() {
        this.getCharacters(slyther)
    }
}).mount('#app')