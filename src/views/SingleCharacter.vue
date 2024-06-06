<script>

import axios from 'axios';
export default {
    name: 'SingleCharacter',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_characters_url: '/api/characters/',
            character: '',
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
                    if (response.data.success) {
                        // console.log(response);
                        this.character = response.data.character
                    } else {
                        this.$router.push({ name: 'NotFound' });
                        // console.log(response.data);
                    }

                })
                .catch(err => {
                    console.error(err);
                })
        }
    },

    mounted() {
        let url = this.base_api_url + this.base_characters_url + this.$route.params.slug;
        // console.log(url);
        this.callAPI(url);
        // console.log(this.character.item);
    }
}


</script>

<template> <!-- {{ $route.params.slug }} -->
    <div class="container min-vh-100">
        <div class="row">
            <div class="col-12 my-4" v-if="character">
                <div class="card bg-dark bg-opacity-50 border-danger">
                    <img class="card-img-top" :src="base_api_url + '/storage/' + character.image" alt="" />
                    <div class="card-body text-white">
                        <h4 class="card-title">{{ character.name }}</h4>
                        <h6 class="card-subtitle mb-2"><span class="fw-bold">Type: </span>
                            <RouterLink class="text-decoration-none"
                                :to="{ name: 'singleType', params: { slug: character.type.slug } }">
                                {{ character.type.name }}
                            </RouterLink>
                        </h6>
                        <p class="card-text"><span class="fw-bold">Attack: </span>{{ character.attack }}</p>
                        <p class="card-text"><span class="fw-bold">Defense: </span>{{ character.defense }}</p>
                        <p class="card-text"><span class="fw-bold">Speed: </span>{{ character.speed }}</p>

                        <p class="card-text"><span class="fw-bold">Item: </span>
                            <template v-for="item in character.items">
                                <RouterLink class="text-decoration-none"
                                    :to="{ name: 'singleItem', params: { slug: item.slug } }">
                                    {{ item.name }}
                                </RouterLink>
                            </template>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>