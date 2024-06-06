<script>
export default {
    name: 'AppHome',
}

</script>


<template>
    <main class="vh-100">
        <div class="jumbotron p-5 mb-4 rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold text-warning">RPG Generator</h1>
                <p class="col-md-8 fs-4 text-center mx-auto text-danger">
                    Using a series of utilities, you can create this jumbotron, just
                    like the one in previous versions of Bootstrap. Check out the
                    examples below for how you can remix and restyle it to your liking.
                </p>

                <RouterLink class="btn btn-warning btn-lg fw-bold" :to="{ name: 'hell' }">Go to HELL
                </RouterLink>


            </div>
        </div>

    </main>
</template>


<style>
.jumbotron {
    height: 100%;
    background-image: url('/public/flames-bg.jpg');
    background-position: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}
</style>