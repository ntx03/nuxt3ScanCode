<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
/**
 * берем отсюда путь с которого пришли
 */
const path = usePath();
/**
 * возвращаемся на роут откуда пришли
 */
const back = () => {
  navigateTo(`${path.value}`);
};
/**
 * Распознанное число
 */
const decoderText = useDecoderText();
</script>

<template>
  <HeaderGoBack :link="`${path}`" />
  <h2 class="error__title">{{ `Оборудование с инв/серийным номером № ${decoderText} не найдено!` }}</h2>
  <p class="error__text">Проверьте корректность инвентарного или серийного номера!</p>
  <button class="button__error" @click="back">Назад</button>
  <Navigate />
</template>

<style scoped lang="scss">
.error__title {
  font-size: 16px;
  line-height: 22px;
  margin: 40px auto 10px auto;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 400;
  color: black;
}
.error__text {
  font-size: 16px;
  line-height: 22px;
  margin: 0px auto 50px auto;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 400;
  color: black;
}
.button__error {
  width: 100px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  background-color: $black;
  border: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
