<template>
  <div id=app>
  <div>
  <v-app-bar
      
    >
      <v-app-bar-nav-icon v-show="!this.$route.meta.menushow" @click="drawer = true"></v-app-bar-nav-icon>
  
      <v-toolbar-title>花卉后台管理系统</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        





<v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
    </v-img>
  </v-card>






















          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>首页</v-list-item-title>
          </v-list-item>

          <v-list-item @click.stop="gologin">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>退出登录</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //
  data() {
    return {
      drawer: false,
      group:""
    }
  },

  methods: {
    gologin(){
        localStorage.clear("token")
        this.$router.push("/")
    }
  },
};
</script>

<style lang="less">
header{
    background: #d81b60!important;;
    color: white!important;
}
.v-btn__content i {
  color: white!important;
}
</style>