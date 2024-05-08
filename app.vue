<template>
    <a-scene embedded arjs="sourceType: webcam;">
        <!-- マーカー -->
        <a-text
            value="This content will always face you."
            look-at="[gps-camera]"
            scale="50 50 50"
            gps-entity-place="latitude: 35.65861027555679; longitude: 139.74542998791907;"
        ></a-text>
        <!-- カメラとライト -->
        <a-camera gps-camera rotation-reader></a-camera>

    </a-scene>
</template>
<script setup lang="ts">
    const lat = ref(0);
    const lon = ref(0);
    const getLocation=()=>{
      // ブラウザがGeolocation APIをサポートしているか確認
      if (navigator.geolocation) {
          // 位置情報を取得
          navigator.geolocation.getCurrentPosition((position)=>{
      // 緯度と経度を取得
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      // 緯度と経度を表示
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      alert("Latitude: " + latitude + ", Longitude: " + longitude);
      lat.value = latitude;
      lon.value =longitude;
      // ここで取得した緯度と経度を使用して他の処理を行うことができます
    }, showError);
      } else {
          // ブラウザがGeolocation APIをサポートしていない場合のエラーメッセージ
          alert("Geolocation is not supported by this browser.");
      }
    };
    getLocation()
</script>
<style>
</style>
