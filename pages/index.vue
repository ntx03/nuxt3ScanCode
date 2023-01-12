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

.button {
  display: flex;
  background-color: $buttonGreen;
  margin: 20px auto 0 auto;
  width: 250px;
  height: 40px;
  color: white;
  font-size: 12px;
  line-height: 18px;
  padding: 10px 0 0 8px;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.3s;
  text-decoration: none;
  }


.header__number {
  display: flex;
  font-size: 20px;
  overflow: hidden;
  text-align: center;
  width: max-content;
  margin: auto;
}

.link {
  display: flex;
  margin: 20px auto 0 auto;
  width: max-content;
}

.scan__container {
  margin: 20px auto 0 auto;
}

.navigation__container {
  display: flex;
  gap: 10px;
  margin: 30px auto 0 auto;
  width: 90%;
  justify-content: space-between;
}
.navigation__item{
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
}
.navigation__icon {
  width: 30px;
  height: 30px;
  margin: auto;
}
.icon__container{
display: flex;
flex-direction: column;
justify-content: center;

}
.icon__text{
    padding: 0;
    margin: 6px 0 0 0;
    text-decoration:none;
    text-align: center;
    text-decoration: none;
    color: $grey;
&_green {
    color: $buttonGreen;
}
}
@media (min-width: 501px) {

    .page {
        width: 500px;
        margin: auto;
    }
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
  <div class="page">
    <div>
      <ScanCode :qrbox="200" :fps="10" @result="onScan" class="width" />
    </div>

    <button class="button" @click="scanShow">Ввести инвентариный/серийный номер</button>
    <div class="navigation__container">
      <NuxtLink to="/" class="navigation__item"><div class="icon__container"><img src="../assets/qr_code_scanner.svg" class="navigation__icon" /><p class="icon__text icon__text_green">Сканировать</p></div></NuxtLink>
      <NuxtLink to="/" class="navigation__item"><div class="icon__container"><img src="../assets/manage_search.svg" class="navigation__icon" /><p class="icon__text">История</p></div> </NuxtLink>
      <NuxtLink to="/" class="navigation__item"><div class="icon__container"><img src="../assets/account_circle.svg" class="navigation__icon" /><p class="icon__text">Профиль</p></div></NuxtLink>
    </div>
  </div>
</template>
