<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    background-color: rgb(0, 21, 41);
    margin: 0 auto 20px auto;
    text-align: center;
    height: 100px;
    // height: 100px;
}

.header__text {
    font-size: 18px;
    font-weight: 600;
    max-width: 300px;
    color: white;
    width: max-content;
    margin: auto 15% auto 5%;
}

.header__logo {
    width: 40px;
    height: 50px;
    margin: auto 3% auto 5%;
}

.header__burger {
    width: 40px;
    height: 40px;
    margin: auto 20px auto auto;
    transition: 0.5s;
    &:hover {
        //rotate: 180deg;
        transform: scale(1.3);
        cursor: pointer;
    }
}
</style>

<script setup>
const navigation = useNavigation();

function openNavigate() {
    navigation.value = true;
}
</script>

<template>
    <div>
        <div class="header">
            <img class="header__logo" src="../assets/logo_2.svg" />
            <!-- <p class="header__text">Мобильное приложение инвентаризация МФЦ</p> -->
            <img class="header__burger" src="../assets/burger-menu.svg" @click="openNavigate" />
        </div>
        <slot />
    </div>
</template>
