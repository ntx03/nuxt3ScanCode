<script setup>
import { Html5QrcodeScanner } from "html5-qrcode";

const props = defineProps({
    fps: Number,
    qrbox: Number,
});
const config = {
    fps: props.fps,
    qrbox: props.qrbox,
};
const onScanSuccess = (decodedText, decodedResult) => {
    const emit = defineEmits();
    emit("onScan", decodedText, decodedResult);
};
const html5QrcodeScanner = new Html5QrcodeScanner("qr-code-full-region", config);
html5QrcodeScanner.render(onScanSuccess);
</script>

<style>
.width {
    width: 500px;
}
</style>
<template><div id="qr-code-full-region" class="width"></div></template>
