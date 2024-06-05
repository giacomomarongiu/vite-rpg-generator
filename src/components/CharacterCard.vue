<script>
import { RouterLink } from 'vue-router';

export default {
    name: "CharacterCard",
    props: {
        character: Object
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
        }
    },
    mounted() {
        console.log(this.character);
    }
}

</script>

<template>
    <div class="col-6" v-if="character">
        <RouterLink class="text-decoration-none" :to="{ name: 'singleCharacter', params: { slug: character.slug } }">
            <div class="card bg-dark bg-opacity-50 border-danger rounded-3 h-100">

                <img :src="base_api_url + '/storage/' + character.image" alt="">

                <div class="card-body text-white">
                    <h5 class="card-title"><span class="fw-bold">Name: </span>{{ character.name }}</h5>
                    <h6 class="card-subtitle mb-2"><span class="fw-bold">Type: </span>{{ character.type !== null ?
                        character.type.name : '' }}</h6>
                    <p class="card-text"><span class="fw-bold">Attack: </span>{{ character.attack }}</p>
                    <p class="card-text"><span class="fw-bold">Defense: </span>{{ character.defense }}</p>
                    <p class="card-text"><span class="fw-bold">Speed: </span>{{ character.speed }}</p>
                </div>

            </div>
        </RouterLink>
    </div>
</template>

<style>
/* div.card_bg {
    background-color: hsla(0, 0%, 100%, 0.2) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;

} */

.card {
    box-shadow: 5px 5px rgba(133, 133, 133, 0.167);
    transition: 1s;
    text-align: center;


    & :hover {
        background-color: black;
        transition: 1s;

        /* background-image: url(/public/flame.svg);
        background-position: center;
        background-repeat: no-repeat; */

    }
}
</style>
