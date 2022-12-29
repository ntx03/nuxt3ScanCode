<template>
    <div class="statictics__find-box-select-container">
        <input type="text" class="statictics__find-box-select" v-model="idInput" @click="goWatch" @keyup.enter="closeListError" />
        <div class="statictics__find-box-autocomplit" :class="{ 'statictics__find-box-autocomplit_none': !openList }">
            <p :key="item" v-for="item in choseID" class="statictics__find-box-autocomplit__title" @click="changeID">
                {{ item }}
            </p>
        </div>
        <!-- <input autocomplete="off" list="datalistOptions" v-model="idInput" id="exampleDataList" />
        <datalist id="datalistOptions">
            <option :key="item" v-for="item in getUsers">{{ item }}</option>
        </datalist> -->
    </div>
</template>

<script setup lang="ts">
const getUsers: string[] = ["Вася Мишин", "Петя Куренков", "Анна Медведева", "Олег Прокопенко", "Михаил Созонов", "Петр Мишин", "Андрей Качур", "Никита Михайлов", "Владимир Мутин"];
let choseID: string[] = [];
const idInput = ref("");
const openList = ref(false);

// const goWatch = () => {
//     openList.value = true;
// };
const changeID = (e: { target: any }) => {
    console.log(e.target.textContent);
    idInput.value = e.target.textContent;
    openList.value = false;
};
const goWatch = (): void => {
    // choseID = getUsers;
    watch(idInput, () => {
        openList.value = true;
        let errorID = new Set();

        if (idInput.value.length < 1) {
            choseID = getUsers;
        } else {
            for (let i = 0; i < getUsers.length; i++) {
                const id = getUsers[i].split(" ");
                console.log(id.join("").toLowerCase());
                console.log(idInput.value.toLowerCase());
                if (id.join("").toLowerCase().includes(idInput.value.toLowerCase()) == true) {
                    errorID.add(getUsers[i]);
                    // alert(getUsers[i]);
                    // const getFindID = id.slice(0, String(idInput.value).length);

                    // for (let y = 0; y < String(idInput.value).length; y++) {
                    //     if (getFindID.join("") === String(idInput.value)) {
                    //
                    //     }
                    // }
                }
                let result: string[] = [];
                errorID.forEach((i) => {
                    result.push(i);
                });
                choseID = result;
                // if (String(idInput.value).length > 0 && String(choseID).length < 1) {
                //     this.isShowMessage = false;
                // } else this.isShowMessage = true;

                // if (idInput.value == this.error) {
                //     this.isShowMessage = true;
                // }
                // if (String(choseID).split(",").length < 2) {
                //     openList.value = false;
                // }
            }
        }
    });
};
</script>

<style lang="scss">
.statictics__find-box-select-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 98%;
    margin: 0 0 0 1px;
    // border: 1px solid red;
}
.statictics__find-box-select {
    border: none;
    border-radius: 2px;
    width: 100%;
    //  margin: 3%;
    height: 25px;
    outline: none;
    padding: 0 0 0 5px;
    outline: 2px solid rgba(26, 144, 255, 0.6);
    &:hover {
        outline: 2px solid rgba(26, 144, 255, 1);
    }
}
.statictics__find-box-autocomplit {
    position: absolute;
    background-color: aliceblue;
    width: 100%;
    max-height: 150px;
    overflow: auto;
    top: 28px;
    box-shadow: 0px 0px 5px gray;
    left: 0px;
    text-align: start;
    z-index: 1;
    &_none {
        display: none;
    }
    &__title {
        padding: 0;
        margin: 2px 0 2px 5px;
        padding: 2px 0 2px 5px;
        &:hover {
            background-color: lightblue;
            cursor: pointer;
        }
    }
}
</style>
