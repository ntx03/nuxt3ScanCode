<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const equipment = useEquipment();

const getDate = (date: string) => {
  if (date == undefined || date.length < 1) {
    return "-";
  } else return date;
};

const create = () => {
  navigateTo("/deliverynote");
};
</script>

<template>
  <HeaderGoBack :link="'/search'" />
  <div class="information__container">
    <h1 class="information__header">Информация по оборудованию:</h1>

    <div class="information__box">
      <p class="information__title">Инвентарный номер:</p>
      <p class="information__content">{{ getDate(equipment.inventoryNumber) }}</p>
    </div>
    <div class="information__box">
      <p class="information__title">Серийный номер:</p>
      <p class="information__content">{{ getDate(equipment.serialNumber) }}</p>
    </div>
    <div class="information__box">
      <p class="information__title">Наименование:</p>
      <p class="information__content">{{ getDate(equipment.model.name) }}</p>
    </div>
    <div class="information__box">
      <p class="information__title">Текущее местоположение:</p>
      <p class="information__content">{{ getDate(equipment.location.name) }}</p>
    </div>

    <div class="information__box">
      <p class="information__title">МОЛ:</p>
      <p class="information__content">{{ getDate(equipment.accountablePerson.name) }}</p>
    </div>
    <div class="information__box">
      <p class="information__title">Состояние:</p>
      <p class="information__content">{{ getDate(equipment.state.name) }}</p>
    </div>
  </div>
  <button class="information__button" @click="create">Добавить в накладную</button>
  <Navigate />
</template>

<style scoped lang="scss">
.information__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
}
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
  padding: 0 0 0 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
}
.information__title {
  padding: 0;
  margin: 0;
  color: $buttonGreen;
}
.information__content {
  padding: 0;
  margin: 0;
  max-width: 300px;
}
.information__button {
  display: flex;
  padding: 10px 0 10px 17px;
  border: none;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 170px;
  border-radius: 10px;
  height: max-content;
  transition: 0.3s;
  background-color: $buttonGreen;
  margin: 20px auto 20px auto;
  &:hover {
    cursor: pointer;
  }
}
</style>
