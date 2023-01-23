<script setup lang="ts">
const route = useRoute();
const nowPath = usePath();

/**
 * поле инв. номера
 */
const invNumber = ref("");
/**
 * поле серийного номера
 */
const cerNumber = ref("");
/**
 * стейт с информацией о ТМЦ
 */
const equipmentState = useEquipment();
/**
 * текст который прилетает со сканера
 */
const text = useDecoderText();
/**
 * Ищем ТМЦ по инвентарному или серийному номеру
 */

const goInfirmation = () => {
  console.log("click");
  if (invNumber.value.trim().length > 3) {
    changeInvNumber(invNumber.value.trim())
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res === false) {
          if (cerNumber.value.trim().length < 4) {
            text.value = String(invNumber.value.trim());
            nowPath.value = route.fullPath;
            navigateTo("/nosearch");
            return;
          }
          changeInvNumber(cerNumber.value.trim())
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              if (res === false) {
                text.value = String(cerNumber.value.trim());
                nowPath.value = route.fullPath;
                navigateTo("/nosearch");
              } else {
                equipmentState.value = res;
                navigateTo("/information");
              }
            })
            .catch((err) => {
              alert(err);
            });
          return;
        } else {
          equipmentState.value = res;
          navigateTo("/information");
        }
      })
      .catch((err) => {
        console.log(`вторая ступень`);
        alert(err);
      });
    return;
  } else if (cerNumber.value.length > 3) {
    console.log("поиск по серийному номеру");
    changeInvNumber(cerNumber.value.trim())
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res === false) {
          text.value = String(cerNumber.value.trim());
          nowPath.value = route.fullPath;
          navigateTo("/nosearch");
        } else {
          equipmentState.value = res;
          navigateTo("/information");
        }
      })
      .catch((err) => {
        console.log(`третья ступень`);
        alert(err);
      });
    return;
  } else {
    alert("Ошибка поиска");
  }
};
/**
 * Очистка полей ввода
 */
const clear = () => {
  invNumber.value = "";
  cerNumber.value = "";
};
/**
 * отключение кнопки очистки,  если пусто в полях ввода
 */
const disabledButtonClear = () => {
  if (invNumber.value.trim().length === 0 && String(cerNumber.value.trim()).length === 0) {
    return true;
  } else return false;
};
/**
 * регулярки проверки на буквы и спецвимволы
 */
const lessers = /[a-zA-Z]/i;
const symbol = /[!@#$%^&*()_+\[=\]{};':"\\|,.<>\/?]+/;
/**
 * проверяем на наличие букв и спецсимволов введенные данные пользователя
 */
const checkLetter = () => {
  if (
    invNumber.value.match(lessers) ||
    invNumber.value.match(symbol) ||
    cerNumber.value.match(symbol) ||
    invNumber.value.length > 12 ||
    cerNumber.value.length > 25
  ) {
    return false;
  } else return true;
};
/**
 * отключаем кнопку поиска
 */
const disabledButtonSearch = () => {
  if (checkLetter() === false) {
    return true;
  }
  if (invNumber.value.trim().length > 3 || String(cerNumber.value.trim()).length > 3) {
    return false;
  } else return true;
};
</script>
<template>
  <HeaderGoBack :link="'/'" />
  <h1 class="main__title">Укажите инвентарный или серийный номер оборудования:</h1>
  <div class="input__box">
    <p class="input__title">Инвентарный номер:</p>
    <div class="login__input-container">
      <img class="login__icon-input" src="../assets/note.svg" />
      <input
        type="text"
        class="login__input"
        :class="{ login__input_red: !checkLetter() }"
        v-model="invNumber"
        placeholder="Введите инвентарный номер"
      />
    </div>
  </div>
  <div class="input__box">
    <p class="input__title">Серийный номер:</p>
    <div class="login__input-container">
      <img class="login__icon-input" src="../assets/note.svg" />
      <input
        type="text"
        class="login__input"
        :class="{ login__input_red: !checkLetter() }"
        v-model="cerNumber"
        placeholder="Введите серийный номер"
      />
    </div>
  </div>
  <div class="button__box">
    <button class="button button__clear" :class="{ button__clear_disabled: disabledButtonClear() }" @click="clear" :disabled="disabledButtonClear()">
      Очистить
    </button>
    <button
      class="button button__search"
      :class="{ button__search_disabled: disabledButtonSearch() }"
      @click="goInfirmation"
      :disabled="disabledButtonSearch()"
    >
      Поиск
    </button>
  </div>
  <Navigate />
</template>
<style scoped lang="scss">
.back__container {
  display: flex;
  margin: 0;
  gap: 10px;
}
.back__icon {
  width: 15px;
  height: 15px;
  margin: auto;
}
.back__text {
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: black;
  padding: 4px 0 0 0;
  &:hover {
    cursor: pointer;
  }
}
.exit__text {
  font-size: 14px;
  margin: auto;
  padding: 0;
  width: max-content;
  font-weight: 400;
}
.exit__icon {
  width: 20px;
  height: 20px;
  padding: 3px 0 0 0;
  margin: auto;
}
.header__exit-container {
  display: flex;
  margin: auto 10px auto auto;
  gap: 10px;
  padding: 0;
  width: max-content;
  height: max-content;
}
.main__title {
  margin: 30px 20px 20px 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
}
.input__box {
  margin: 0px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input__title {
  padding: 0;
  margin: 0 0 0 20px;
  font-size: 14px;
  color: $buttonGreen;
}
.login__input-container {
  width: 90%;
  height: 35px;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.67);
  gap: 5px;
  margin: 0 auto 15px auto;
}
.login__input {
  margin: 0 auto 20px 0;
  width: 220px;
  border: none;
  height: 90%;
  border-radius: 10px;
  outline: none;
  font-size: 12px;
  &_red {
    color: red;
  }
}

.login__icon-input {
  width: 20px;
  height: 18px;
  padding: 0 0 2px 0;
  margin: auto 0 auto 10px;
}
.button__box {
  display: flex;
  gap: 20px;
  margin: 20px auto 20px auto;
  width: max-content;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
}
.button__clear {
  background-color: rgba(0, 0, 0, 0.79);
  padding: 0 0 2px 0px;
  &_disabled {
    opacity: 0.5;
    &:hover {
      cursor: auto;
      transform: scale(1);
    }
  }
}
.button__search {
  background-color: $buttonGreen;
  padding: 0 0 2px 0px;
  &_disabled {
    opacity: 0.5;
    &:hover {
      cursor: auto;
      transform: scale(1);
    }
  }
}
</style>
