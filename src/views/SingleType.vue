<script>

import axios from 'axios';
export default {
    name: 'SingleCharacter',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_types_url: '/api/types/',
            type: '',
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
                        // console.log(response.data.type);
                        this.type = response.data.type
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
        let url = this.base_api_url + this.base_types_url + this.$route.params.slug;
        // console.log(url);
        this.callAPI(url);
    }
}


</script>

<template> <!-- {{ $route.params.slug }} -->
    <div class="container min-vh-100">
        <div class="row">
            <div class="col-12 my-4">
                <div class="card bg-dark bg-opacity-50 border-danger text-light p-4">
                    <h4 class="card-title">{{ type.name }}</h4>
                    <p class="card-text"><span class="fw-bold">Description: </span>{{ type.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>