<template>
    <div class="page">
        <Header />
    </div>
</template>
<style scoped>
.page {
    width: 100%;
    height: 100vh;
    background-color: antiquewhite;
}
</style>
<script setup>
const onScan = (decodedText, decodedResult) => {
    console.log(decodedText);
    console.log(decodedResult);
};
</script>
