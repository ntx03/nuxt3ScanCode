<template>
    <div class="navigation" :class="{ navigation__open: navigate }" @click="closeNavigate">
        <img class="navigation__logo" src="../assets/logo_2.svg" />
        <NuxtLink to="/login" class="navigation__link">Выйти</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const navigate = useNavigation();

function closeNavigate() {
    navigate.value = false;
}
</script>

<style lang="scss">
.navigation {
    display: flex;
    flex-direction: column;
    align-self: start;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: $colorHeader;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}

.navigation__open {
    opacity: 1;
    visibility: visible;
}
.navigation__title {
    color: azure;
    margin: 20px auto 0 auto;
}

.navigation__logo {
    width: 40px;
    height: 50px;
    margin: 25px 3% 20px 5%;
    border: 1px red solid;
}
.navigation__link {
    color: white;
    margin: 0 10% 0 auto;
    //border: 1px red solid;
}
</style>
