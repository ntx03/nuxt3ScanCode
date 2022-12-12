<template>
    <div class="header">
        <p class="header__text">Мобильное приложение инвентаризация МФЦ</p>
    </div>
    <button class="header__button" @click="summ">Показать</button>
    <div class="header__number">{{ count }}</div>
    <scanCode :qrbox="250" :fps="10" @result="onScan" />
</template>

<script setup>
const count = ref(1);
count.value = 2;
const obj = reactive(count);
const summ = () => {
    count.value = count.value + 1;
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    background-color: rgba(97, 110, 148, 0.973);
    margin: 0 auto 20px auto;
    text-align: center;
    height: 100px;
}
.header__text {
    font-size: 30px;
    font-weight: 500;
    color: beige;
}
.header__button {
    display: flex;
    background-color: cadetblue;
    margin: auto;
    &:hover {
        cursor: pointer;
    }
}
.header__number {
    display: flex;
    margin: auto;
    font-size: 30px;
    margin: 20px auto 0 auto;
    width: max-content;
}
</style>
