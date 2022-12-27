<script setup lang="ts">
const avtorize = useAuth();
console.log(avtorize.value);
if (avtorize.value === true) {
    navigateTo("/");
}

definePageMeta({
    //layout: "header",
});
//const video = document.querySelector("video");
// if (video) {
//     console.log(video);
// }
</script>

<template>
    <div class="page">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Navigate />
    </div>
</template>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-color: beige;
    display: flex;
    flex-direction: column;
}

.width {
    display: flex;
    max-width: 500px;
    margin: 0 auto 0 auto;
}

.header__button {
    display: flex;
    background-color: cadetblue;
    margin: 20px auto 0 auto;
    max-width: max-content;
    height: 30px;
    color: white;
    font-size: 18px;
    line-height: 25px;
    border-radius: 10px;
}

.header__button:hover {
    cursor: pointer;
}

.header__number {
    display: flex;
    font-size: 20px;
    overflow: hidden;
    text-align: center;
    width: max-content;
    margin: auto;
}

.scan__container {
    margin: 20px auto 0 auto;
}
</style>
