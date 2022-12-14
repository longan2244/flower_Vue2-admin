<template>
  <div>
    <form id="xcgg_yyds">
      <input
        type="file"
        @change="sendimg($event)"
        id="xcgg"
        accept=".png,.jpeg,.jpg,.gif"
        multiple
      />
    </form>
    <template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
</template>
  </div>
</template>

<script>
import { addimg } from "@/api/admin.js";
import { Toast } from "vant";
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
  data() {
    return {
      // imgdata: [],
      files: [], //用户发送的视频，图片
      // ############图表数据##############
       width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    };
  },
  methods: {
    async sendimg(e) {
      let fileObjects = e.target.files;
      console.log(fileObjects);
      let myFormData = new FormData();
      for (let i = 0; i < fileObjects.length; i++) {
        myFormData.append("jpg", fileObjects[i]);
      }
      let { data: res } = await addimg(myFormData);
      if (!res.status) {
        return Toast(res.msg);
      }
      return Toast(res.msg);
    },
  },
};
</script>

<style>
</style>