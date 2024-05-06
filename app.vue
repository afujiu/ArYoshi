<template>
    <a-scene embedded arjs="sourceType: webcam;">
        <!-- マーカー -->
        <a-marker type="geo" :latitude="{lat}" :longitude="{lon}">
            <!-- ここにARオブジェクトを配置 -->
            <a-box position="0 0.5 0" material="color: red;"></a-box>
        </a-marker>
        <!-- カメラとライト -->
        <a-entity camera></a-entity>
        <a-light type="ambient" intensity="1"></a-light>
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
