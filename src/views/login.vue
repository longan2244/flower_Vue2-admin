<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>管理员登录</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                      >
                        <v-icon>mdi-code-tags</v-icon>
                      </v-btn>
                    </template>
                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="userinfo.username"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="userinfo.password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="loginbt">登录</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { Toast } from "vant";
import { login } from "@/api/admin.js";
export default {
  props: {
    source: String,
  },

  data() {
    return {
      userinfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginbt() {
      try {
        if (this.userinfo.username == "" || this.userinfo.password == "") {
          return Toast("请输入账号密码");
        }
        let { data: res } = await login(this.userinfo);
        if (!res.status) {
          return Toast(res.msg);
        }
        Toast(res.msg);
        localStorage.setItem("token", res.token);
        return this.$router.push("/home");
      } catch (error) {
        Toast("未知错误");
      }
    },
  },
};
</script>

<style>
</style>