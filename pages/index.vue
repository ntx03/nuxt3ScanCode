<script setup lang="ts">
import { changeInvNumber } from "../utils/api";

definePageMeta({
  layout: "header",
  middleware: ["auth"],
});

const scanText = useDecoderText();
/**
 * Записываем сюда данные об распознвнном оборудовании
 */
const equipment = useEquipment();
/**
 * Данные о текущем роуте
 */
const route = useRoute();
/**
 * Стейт с текущим роутом
 */
const nowPath = usePath();
/**
 * Проверяем распознанный qrCode по БД ТМЦ
 * @param decodedText - распознанные данные с отсканированного qrCode
 * @param decodedResult - объект с распознанными данными
 */
const onScan = (decodedText: string, decodedResult: object): void => {
  const checkUrl = /^((http|https):\/\/)?[a-zа-я0-9]+([\-\.]{1}[a-zа-я0-9]+)*\.[a-zа-я]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  if (decodedText.match(checkUrl)) {
    alert(`Недопустимое выражение ${decodedText}`);
    return;
  } else if (decodedText.length < 4 || decodedText.length > 25) {
    alert(`Недопустимое выражение ${decodedText}. Значение должно быть больше 3 или меньше 26 символов.`);
    return;
  } else {
    changeInvNumber(decodedText)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res === false) {
          scanText.value = decodedText;
          nowPath.value = route.fullPath;
          navigateTo("/nosearch");
        } else {
          res.decoderText = decodedText;
          // console.log(res);
          equipment.value = res;
          navigateTo("/information");
        }
      });
  }
};
</script>

<template>
  <div class="page">
    <div>
      <ScanCode :qrbox="250" :fps="10" @result="onScan" class="width" />
    </div>
    <NuxtLink class="button" to="/search">Ввести вручную</NuxtLink>
    <Navigate />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  background-color: $black;
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
  margin: 25px auto 0 auto;
  width: 160px;
  color: white;
  font-size: 12px;
  line-height: 18px;
  padding: 10px 10px 10px 33px;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.3s;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
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
