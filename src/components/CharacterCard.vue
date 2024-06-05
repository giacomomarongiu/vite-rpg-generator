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
    <div class="col-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><span class="fw-bold">Name: </span>{{ character.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted "><span class="fw-bold">Type: </span>{{ character.type.name }}
                </h6>
                <p class="card-text"><span class="fw-bold">Description: </span>{{ character.description }}</p>
                <p class="card-text"><span class="fw-bold">Attack: </span>{{ character.attack }}</p>
                <p class="card-text"><span class="fw-bold">Defense: </span>{{ character.defense }}</p>
                <p class="card-text"><span class="fw-bold">Speed: </span>{{ character.speed }}</p>
            </div>
        </div>
    </div>
</template>

<style lang=""></style>
