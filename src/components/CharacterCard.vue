<script>
export default {
    name: "CharacterCard",
    props: {
        character: Object
    },
    data() {
        return {

        }
    },
}

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
    </div>

</template>

<style lang=""></style>
