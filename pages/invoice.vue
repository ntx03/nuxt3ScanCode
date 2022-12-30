<template>
    <section class="invoice">
        <div class="invoice__title-container">
            <h2 class="invoice__title">Создать накладную</h2>
            <button class="invoice__button"><img src="../assets/cross_black.svg" class="invoice__icon-close" @click="goBack" /></button>
        </div>
        <div class="invoice__input-container">
            <input-autocomplit :lable="'От кого:'" />
        </div>
        <div class="invoice__input-container">
            <input-autocomplit :lable="'Откуда:'" />
        </div>
        <div class="invoice__input-container">
            <input-autocomplit :lable="'Куда:'" />
        </div>
        <div class="invoice__input-container">
            <input-autocomplit :lable="'Ответственное лицо:'" />
        </div>
        <div class="invoice__input-container">
            <input-autocomplit :lable="'Курьер:'" />
        </div>
        <div class="invoice__button-container">
            <button class="invoice__button cancel" @click="goBack">Отмена</button>
            <button class="invoice__button ok">ОK</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
function goBack() {
    navigateTo("/");
}
</script>

<style lang="scss" scoped>
.invoice {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
}
.invoice__title-container {
    display: flex;
    margin: 30px 3% 3% 3%;
    justify-content: space-between;
}

.invoice__title {
    font-size: 20px;
    line-height: 27px;
    font-weight: 400;
    padding: 0;
    margin: 0;
}

.invoice__button {
    background-color: inherit;
    width: max-content;
    height: max-content;
    display: flex;
    padding: 0;
    margin: auto 0 auto 0;
    border: none;
    &:hover {
        cursor: pointer;
    }
}
.invoice__icon-close {
    display: flex;
    // border: yellow 1px solid;
    width: 20px;
    height: 20px;
    padding: 0;
}
.invoice__input-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 3%;
    gap: 10px;
}
.invoice__input {
    outline: 1px solid rgba(26, 144, 255, 0.6);
    //border: $blue 1px solid;
    border: none;
    border-radius: 2px;
    padding: 0 5px 0 5px;
    transition: 0.1s;
    height: 25px;
    &:hover {
        outline: 2px solid rgba(26, 144, 255, 1);
    }
}
.invoice__button-container {
    display: flex;
    gap: 20px;
    margin: 20px 7% 0 auto;
}
.invoice__button {
    padding: 5px;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
    }
}
.cancel {
    border: 1px solid grey;
    transition: 0.2s;
    color: gray;
    &:hover {
        color: rgba(26, 144, 255, 1);
        border: 1px solid rgba(26, 144, 255, 1);
    }
}

.ok {
    border: none;
    color: white;
    background-color: $blue;
    transition: 0.2s;
    width: 50px;
    padding: 5px 5px 5px 16px;
    &:hover {
        opacity: 0.8;
    }
}
</style>
