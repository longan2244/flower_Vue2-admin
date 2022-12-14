<template>
  <div>
    <van-field
      v-model="sms"
      center
      clearable
      placeholder="请输入删除的范围例如25-80"
    >
      <template #button>
        <van-button size="small" @click="deleteimg" type="primary"
          >确认删除</van-button
        >
      </template>
    </van-field>
    <div class="deleteallimg">
      <van-button type="danger" @click="deleteallimg" block
        >删除数据库所有图片</van-button
      >
    </div>
  </div>
</template>

<script>
import { deleteimg, deleteallimgapi } from "@/api/admin.js";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      sms: "",
    };
  },
  methods: {
    async deleteimg() {
      let deletearr = [];

      
      if (this.sms.search("-") != -1) {
        let start = this.sms.split("-")[0];
        let end = this.sms.split("-")[1];
        for (let index = start; index <= end; index++) {
          deletearr.push(parseInt(index));
        }
      } else {
        deletearr.push(parseInt(this.sms));
      }
      //生成删除的数组
      console.log(deletearr);
      // 开始删除
      let { data: res } = await deleteimg(deletearr);
      if (!res.status) {
        Toast(res.msg);
      }
      return Toast(res.msg);
    },
    deleteallimg() {
      Dialog.confirm({
        title: "警告",
        message:
          "本次操作会删除数据库所有图片，并且无法恢复，请你着重选择！！！！！！",
      })
        .then(async () => {
          let { data: res } = await deleteallimgapi(true);
          if (!res.status) {
            Toast(res.msg);
          }
          return Toast(res.msg);
        })
        .catch(() => {
          Toast("已取消");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.deleteallimg {
  padding: 10px;
}
</style>