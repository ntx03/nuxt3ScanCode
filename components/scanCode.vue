<script>
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";

export default {
    name: "ScanCode",
    props: {
        qrbox: {
            type: Number,
            default: 250,
        },
        fps: {
            type: Number,
            default: 10,
        },
    },

    mounted() {
        const config = {
            fps: this.fps,
            qrbox: this.qrbox,
            rememberLastUsedCamera: true,
        };

        const html5QrCode = new Html5Qrcode("qr-code-full-region", { formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE] });

        html5QrCode.start({ facingMode: "environment" }, config, this.onScanSuccess);
    },

    methods: {
        onScanSuccess(decodedText, decodedResult) {
            this.$emit("result", decodedText, decodedResult);
        },
    },
};
</script>

<style></style>

<template><div id="qr-code-full-region"></div></template>
