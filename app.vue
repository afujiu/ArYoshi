<template>
    <a-scene vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box material="color: red" gps-entity-place="latitude: 35.56974113601449; longitude: 139.74224849794223;" scale="0.5 0.8 0.5"></a-box>
    <a-camera gps-camera rotation-reader> </a-camera>
</a-scene>
</template>
<script setup lang="ts">
    const lat = ref(0);
    const lon = ref(0);
</script>
<style>
</style>
