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
  width: 200px;
  height: max-content;
  color: white;
  font-size: 12px;
  line-height: 18px;
  padding: 10px 10px 10px 50px;
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
  navigateTo("/search");
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
      <ScanCode :qrbox="250" :fps="10" @result="onScan" class="width" />
    </div>

    <button class="button" @click="scanShow">Ввести вручную</button>
<Navigate/>
  </div>
</template>
