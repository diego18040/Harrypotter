

let urlSpell = ('https://hp-api.onrender.com/api/spells')

const { createApp } = Vue;

const appSpell = createApp({
    data() {
        return {
            spellsArray: [], 
            searchText: '',
            favorites: []
        };
    },
    created() {
        this.getData(urlSpell);
        let dataLocal =JSON.parse(localStorage.getItem('favorites'))
        if (dataLocal) {
            this.favorites = dataLocal
        }
    },
    methods: {
        getData(urlSpell) {
            fetch(urlSpell)
                .then(response => response.json())
                .then(spells => {
                    this.spellsArray = spells; 
                });
        },

        getFavorites(spell){
            if (!this.favorites.includes(spell)) {
                this.favorites.push(spell)
                localStorage.setItem('favorites', JSON.stringify(this.favorites))
            }
            console.log(this.favorites);
        },
        removeFavorite(spell){
            this.favorites.splice(spell,1)
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
        }
    },
    computed: {
        filteredSpells() {
            return this.spellsArray.filter(spell => {
                return spell.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                       spell.description.toLowerCase().includes(this.searchText.toLowerCase());
            });
        }
    }
}).mount('#mainBack');
