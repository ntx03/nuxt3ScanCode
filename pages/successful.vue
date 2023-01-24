<template>
  <HeaderGoBack :link="'/recipient'" />
  <div class="successful">
    <p class="successful__title">Накладная № {{ numberDelivery }} создана успешно!</p>
    <NuxtLink to="/" class="successful__link">На главную</NuxtLink>
  </div>
  <Navigate />
</template>

<script setup lang="ts">
const numberDelivery = useNumberDeliveryNote();
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
.successful__title {
  width: 250px;
  margin: 30px auto 10px auto;
  text-align: center;
  padding: 0 20px 0 20px;
  color: $buttonGreen;
  font-size: 16px;
  line-height: 25px;
}
.successful__link {
  display: block;
  margin: 40px auto 30px auto;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  color: white;
  background-color: $black;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  padding: 6.5px 0 5px 18px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
