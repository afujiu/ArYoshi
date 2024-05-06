<template>
    <a-scene embedded arjs="sourceType: webcam;">
        <!-- マーカー -->
        <a-marker type="geo" latitude="YOUR_LATITUDE" longitude="YOUR_LONGITUDE">
            <!-- ここにARオブジェクトを配置 -->
            <a-box position="0 0.5 0" material="color: red;"></a-box>
        </a-marker>
        <!-- カメラとライト -->
        <a-entity camera></a-entity>
        <a-light type="ambient" intensity="1"></a-light>
    </a-scene>
</template>
<style>
</style>
