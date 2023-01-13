<template>
  <HeaderGoBack :link="'/search'" />
  <h1 class="information__header">Информация по оборудованию:</h1>
  <div class="information__box">
    <p class="information__title">Инвентарный номер:</p>
    <p class="information__content">{{ inv }}</p>
  </div>
  <div class="information__box">
    <p class="information__title">Серийный номер:</p>
    <p class="information__content">123</p>
  </div>
  <div class="information__box">
    <p class="information__title">Наименование:</p>
    <p class="information__content">123</p>
  </div>
  <div class="information__box">
    <p class="information__title">Текущее местоположение:</p>
    <p class="information__content">123</p>
  </div>
  <div class="information__box">
    <p class="information__title">МОЛ:</p>
    <p class="information__content">123</p>
  </div>
  <div class="information__box">
    <p class="information__title">Состояние:</p>
    <p class="information__content">123</p>
  </div>
  <button class="information__button" @click="createDeliveryNote">
    Добавить в накладную
  </button>
  <Navigate />
</template>

<script setup lang="ts">
defineProps<{
  inv: {
    type: string;
    default: 123;
  };
}>();
const createDeliveryNote = () => {
  navigateTo("/deliverynote");
};
</script>

<style lang="scss">
.information__box {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0 auto 5px 20px;
  gap: 5px;
  font-size: 12px;
}
.information__header {
  margin: 30px 20px 20px 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
}
.information__title {
  padding: 0;
  margin: 0 0 0 0px;

  color: $buttonGreen;
}
.information__content {
  padding: 0;
  margin: 0;
}
.information__button {
  border: none;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 170px;
  border-radius: 10px;
  height: 32px;
  transition: 0.3s;
  background-color: $buttonGreen;
  margin: 20px auto 20px auto;
  &:hover {
    cursor: pointer;
  }
}
</style>