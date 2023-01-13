<template>
  <HeaderGoBack :link="'/deliverynote'" />
  <h1 class="main__title">
    Накладная <span class="main__title_black">0000111:</span>
  </h1>
  <h3 class="title">Сведения об получателе:</h3>
  <div class="select__box">
    <InputAutocomplit :label="'МОЛ получатель:'" />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
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
.select__box {
  margin: 10px 20px 10px 20px;
}
</style>