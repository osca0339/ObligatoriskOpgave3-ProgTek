Vue.createApp({
    data() {
        return {
            word: null,
            run: false,
            outputMessageToLower: "",
            outputMessageToUpper: ""
        }
    },
    methods: {
        outputWord(word){
            if(word !== null)
            {
                this.run = true;
                this.outputMessageToLower = this.word.toLowerCase();
                this.outputMessageToUpper = this.word.toUpperCase();
            
            }
        }
    }
}).mount("#app")