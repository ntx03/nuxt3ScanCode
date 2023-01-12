<script setup lang="ts">
const avtorize = useAuth();
console.log(avtorize.value);
if (avtorize.value === true) {
    navigateTo("/");
}

//const video = document.querySelector("video");
// if (video) {
//     console.log(video);
// }

const BASE_URL = 'http://10.224.66.36:8080';

// fetch(`${BASE_URL}/api/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then((res) => {
//            // return res.json();
//             try {
//                 if (res.ok) {
//                     return res.json();
//                 } else return res.status;
//             } catch (e) {
//                 return (e)
//             }
//         })
//         .then((res)=>{
//             console.log(res);
//         })
       
</script>

<template>
    <div class="page">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Navigate />
    </div>
</template>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
}

.width {
    display: flex;
    max-width: 500px;
    margin: 0 auto 0 auto;
}

.header__button {
    display: flex;
    background-color: cadetblue;
    margin: 20px auto 0 auto;
    max-width: max-content;
    height: 30px;
    color: white;
    font-size: 18px;
    line-height: 25px;
    border-radius: 10px;
}

.header__button:hover {
    cursor: pointer;
}

.header__number {
    display: flex;
    font-size: 20px;
    overflow: hidden;
    text-align: center;
    width: max-content;
    margin: auto;
}

.scan__container {
    margin: 20px auto 0 auto;
}
</style>
