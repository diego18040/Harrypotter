let urlParams = new URLSearchParams(window.location.search)
let characterId = urlParams.get('id')

URL = "https://hp-api.onrender.com/api/characters/"



const {createApp} = Vue

const app = createApp({
    data(){
        return{
            characters:[],

        }
    },

    created(){
        this.traerData(URL)
    },
    methods:{
        traerData(URL){
            fetch(URL).then(response => response.json()).then(data => {
                this.characters = data
                console.log(this.characters);
                
            })
        }

    },
    computed:{
        
    }
}).mount('#app')