<script>
import axios from 'axios'; 
import CharacterCard from "../components/CharacterCard.vue";


export default {
    name: "AppCharacters",
    components: {
        CharacterCard,
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_characters_url: '/api/characters',
            characters: [
                
            ],
            //loading: true
        }
    },
    methods: {

        /**Mi permette di effettuare una chiama API al mio server locale
     * 
     * @param {string} url 
     */
        callAPI(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.characters = response.data.characters
                    //console.log(response.data.characters);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },

    mounted() {
        let url = this.base_api_url + this.base_characters_url
        this.callAPI(url);
    }
}


</script>

<template>
    <main class="my-5">
        <h2 class="text-center m-5">Characters List</h2>
        <div class="container">
            <div class="row g-4">
                <CharacterCard :character="character" v-for="character in characters.data"></CharacterCard>
            </div>
        </div>


    </main>
</template>

<style ></style>
