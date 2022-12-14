<template>
  <div style="overflow: hidden">
    <van-tabbar>
      <van-submit-bar
        currency
        :price="processingselected.length * 100"
        button-text="删除所选"
        @submit="delimg"
      />
    </van-tabbar>

    <v-row>
      <v-col cols="12" sm="12" offset-sm="3">
        <v-card>
          <v-container fluid>
            <!-- <van-button type="primary" mini>主要按钮</van-button> -->
            <v-row @change="a">
              <v-col
                v-for="n in imglist"
                :key="n.id"
                class="d-flex child-flex"
                cols="6"
                sm="2"
              >
                <center>id:{{ n.id }}</center>
                <v-card flat tile class="d-flex">
                  <input :id="n.id" type="checkbox" />
                  <label :for="n.id">
                    <v-img
                      :src="n.url"
                      contain
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </label>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div style="height: 5rem;"></div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { deleteimg } from "@/api/admin.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      selected: [], //选中的图片
    };
  },
  created() {
    this.getimglist();
  },
  methods: {
    ...mapActions(["getimglist"]),
    // 确认删除数组
    a(e) {
      let mark = false; //flage
      this.selected.some((item) => {
        if (item.id == e.target.id) {
          mark = true;
          item.flage = e.target.checked;
          return true;
        }
      });

      if (!mark) {
        this.selected.push({
          id: e.target.id,
          flage: e.target.checked,
        });
      }
    },
    //合并删除的数据为数组
    async delimg() {
      // 新的数组
      let arr = [];
      this.processingselected.forEach((item) => {
        arr.push(parseInt(item.id));
      });
      let { data: res } = await deleteimg(arr);
      if (!res.status) {
        return Toast(res.msg);
      }
      return Toast(res.msg);
    },
  },
  computed: {
    ...mapState(["imglist"]),
    processingselected() {
      return this.selected.filter((item) => {
        return item.flage;
      });
    },
  },
};
</script>

<style lang="less">
</style>

