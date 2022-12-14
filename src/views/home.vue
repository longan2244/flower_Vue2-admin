<template>
  <div>
    <v-card
    >
      <v-tabs>
        <v-tab @click="imglist">
          <v-icon >mdi-account</v-icon>
          图片列表
        </v-tab>
        <v-tab @click="imgmanage">
          <v-icon >mdi-lock</v-icon>
          图片管理
        </v-tab>
        <v-tab @click="imgupload">
          <v-icon >mdi-access-point</v-icon>
          批量上传
        </v-tab>
      </v-tabs>
    </v-card>
    <div class="tabbox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imglist() {
      this.$router.push("/home/imglist");
    },
    imgmanage() {
      this.$router.push("/home/imgmanage");
    },
    imgupload() {
      this.$router.push("/home/imgupload");
    },
  },
};
</script>

<style lang="less" scoped>
.tabbox{
  width: 100%;
  height: 100%;
}

/deep/.v-slide-group__content
{
justify-content: space-evenly
}

</style>