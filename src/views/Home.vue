<template>
  <div class="home">
    <div class="page">
      <img class="img" alt="Vue logo" src="@/assets/example.jpg" />
      <HelloWorld msg="欢迎使用脚手架" />
    </div>
  </div>
</template>

<script>
//使用 @ 表示 src 目录
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  .page {
    margin: auto;
    text-align: center;
  }
  .img {
    width: 200px;
    text-align: center;
  }
}
</style>

