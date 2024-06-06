<script>
export default {
    name: 'AppHell',
}

</script>


<template>
    <main class="min-vh-100">
        <!--  <div class="text-center text-light">
            <video autoplay muted loop id="myVideo">
                <source src="https://www.youtube.com/embed/O_wz0p3n1eE?si=VyFyIVG0VpKZN_Fj" type="video/mp4">
            </video>
        </div> -->
        <iframe class="video" src="https://www.youtube.com/embed/O_wz0p3n1eE?si=VyFyIVG0VpKZN_Fj"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </main>
</template>


<style>
.video {
    height: 100vh;
    width: 100%;
}
</style>
