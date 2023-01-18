<script setup lang="ts">
const userData = useUserData();
const equipment = useEquipment();
console.log(equipment.value);
//const userName = userData.value.details.name;
</script>
<template>
  <HeaderGoBack :link="'/information'" />
  <!-- <h1 class="main__title">Накладная <span class="main__title_black">0000111:</span></h1> -->
  <div class="description">
    <h3 class="title">Сведения об отправителе:</h3>
    <p class="from">
      От кого: <span class="from_black">{{ equipment.accountablePerson.name }}</span>
    </p>
    <p class="from">
      Откуда: <span class="from_black">{{ `${equipment.location.address}, ${equipment.location.name}` }}</span>
    </p>
    <h3 class="title">Сведения об оборудовании:</h3>
    <p class="from">
      Инв.номер: <span class="from_black">{{ equipment.inventoryNumber }}</span>
    </p>
    <p class="from">
      Наименование: <span class="from_black">{{ equipment.model.hardwareType.name }}</span>
    </p>
    <p class="from">Количество: <span class="from_black">1</span></p>
    <p class="from">
      Производитель: <span class="from_black">{{ equipment.model.vendor.name }}</span>
    </p>
    <p class="from">
      Модель: <span class="from_black">{{ equipment.model.name }}</span>
    </p>
  </div>
  <div class="button__box">
    <NuxtLink to="/information"><button class="button button_black">Отмена</button></NuxtLink>
    <NuxtLink to="/recipient"><button class="button">Продолжить</button></NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.main__title {
  margin: 20px 20px 0px 20px;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
  &_black {
    color: black;
  }
}
.description {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
}
.title {
  font-size: 12px;
  margin: 25px auto 5px auto;
  font-weight: 400;
  line-height: 16px;
  color: $buttonGreen;
}
.from {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: $buttonGreen;
  margin: 10px 0 0 20px;
  &_black {
    color: black;
  }
}
.button__box {
  display: flex;
  margin: 40px auto 0 auto;
  gap: 20px;
  font-size: 12px;
}
.button {
  border: none;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 120px;
  border-radius: 10px;
  height: 32px;
  transition: 0.3s;
  background-color: $buttonGreen;
  &:hover {
    cursor: pointer;
  }
  &_black {
    background-color: rgba(0, 0, 0, 0.79);
  }
}
</style>
