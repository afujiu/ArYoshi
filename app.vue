<template>
    <a-scene vr-mode-ui="enabled: false" embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box material="color: red" gps-entity-place="latitude: 43.065112; longitude: 141.361493;" scale="0.5 0.8 0.5"></a-box>
    <a-camera gps-camera rotation-reader> </a-camera>
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
