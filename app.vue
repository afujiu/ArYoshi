<template>
    <a-scene vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box material="color: red" gps-entity-place="latitude: 35.5686729281061; longitude: 139.74137360557813;" scale="5.5 5.8 5.5"></a-box>
    <a-camera gps-camera rotation-reader> </a-camera>
</a-scene>
</template>
<script setup lang="ts">
    const lat = ref(0);
    const lon = ref(0);
</script>
<style>
</style>
