<template>
    <a-scene vr-mode-ui="enabled: false" embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box material="color: red" gps-entity-place="latitude: 43.065112; longitude: 141.361493;" scale="0.5 0.8 0.5"></a-box>
    <a-camera gps-camera rotation-reader> </a-camera>
</a-scene>
</template>
<script setup lang="ts">
    const lat = ref(0);
    const lon = ref(0);
</script>
<style>
</style>
