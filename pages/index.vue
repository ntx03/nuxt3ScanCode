<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    background-color: $colorHeader;
    margin: 0 auto 20px auto;
    text-align: center;
    // height: 100px;
}
.header__text {
    font-size: 30px;
    font-weight: 500;
    color: beige;
}
.width {
    display: flex;
    max-width: 400px;
    margin: 0 auto 0 auto;
}

.header__button {
    display: flex;
    background-color: $blue;
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

<script setup lang="ts">
definePageMeta({
    layout: "header",
    middleware: ["auth"],
});

const scanText = ref("Нет данных");

const show = ref(false);

const scanShow = (): void => {
    show.value = !show.value;
};

const onScan = (decodedText: string, decodedResult: object): void => {
    console.log(decodedText);
    scanText.value = decodedText;
    console.log(decodedResult);
};

const counter = useCounter();
//const counter = useState<number>("counter", () => Math.round(Math.random() * 1000));
</script>
<template>
    <div>
        <div v-if="show">
            <ScanCode :qrbox="250" :fps="10" @result="onScan" class="width" />
            <div class="scan__container">
                <p class="header__number">{{ scanText }}</p>
            </div>
        </div>

        <button class="header__button" @click="scanShow">{{ !show ? "Сканировать" : "Остановить" }}</button>
    </div>
</template>
