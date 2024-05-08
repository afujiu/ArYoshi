<template>
    <a-scene vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box material="color: red" gps-new-entity-place="latitude: 35.5686729281061; longitude: 139.74137360557813;" scale="5.5 5.8 5.5"></a-box>
        <a-box material="color: blue" gps-new-entity-place="latitude: 35.571163656296285; longitude: 139.74361030574423;" scale="5.5 5.8 5.5"  position="0 30 0"></a-box>
    <a-camera gps-new-camera positionMinAccuracy="1"> </a-camera>
</a-scene>
</template>
<script setup lang="ts">
    const lat = ref(0);
    const lon = ref(0);
</script>
<style>
</style>
