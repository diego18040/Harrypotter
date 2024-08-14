
let urlParams = new URLSearchParams(window.location.search)
let characterId = urlParams.get('id')
console.log(characterId);


URL = "https://hp-api.onrender.com/api/characters/"



const {createApp} = Vue
const app = createApp({
    data(){
        return{
            characters:[],
            findCharacterId:{},

        }
    },

    created(){
        this.traerData(URL)
        
    },
    methods:{
        traerData(URL){
            fetch(URL).then(response => response.json()).then(data => {
                this.characters = data
                this.buscarCharacter(characterId, this.characters)
            })
        },

        buscarCharacter(characterId, data){
            this.findCharacterId = data.find(character => character.id == characterId)
            console.log(this.findCharacterId);
            
        }

    },
    computed:{
        
    }
}).mount('#app')