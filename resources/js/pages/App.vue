<template>
   <v-app>
    <notifications group="standard" classes="ntfctn_standard" position="top right"/>
      <v-navigation-drawer
        absolute
        permanent
        expand-on-hover
        width="200px"
      >
      <Sidebar />
      </v-navigation-drawer>
      <v-app-bar app color="#dedede">
        <v-spacer></v-spacer>
        <div class="float-right">
          <Appbar :routes="routes"/>
        </div>
      </v-app-bar>
      <v-main style="padding-left:56px;">
        <div>
         <router-view ></router-view>
        </div> 
        <footer style="position:relative;border-top: 1px solid white;margin-top: 10px;">
        <p style="position: absolute; right:16px; top:9px; color:#fff">2023 </p>
        </footer>
      </v-main>
    </v-app>
</template>

<script>
import Sidebar from '../components/Sidebar';
import Appbar from '../components/Appbar';
export default {
  data() {
    return {
      drawer: false,
    }
  }, 
   computed: {
    routes: {
      get() {
        return this.$store.state.routes;
      },
      set(value) {
        this.$store.commit("SET_ROUTES", value);
      },
    },
    },
  components:{Sidebar,Appbar},
}
</script>

<style>
.ntfctn_standard {
 margin: 0 5px 5px;
  padding: 5px;
  font-size: 15px;
  color: rgb(71, 71, 71);
  background-color: #fff;
  border-left: 10px solid green;
}
.ntfctn_standard .notification-title{
    line-height: 1.4;
    display: block;
    font-size: 17px;
    padding:10px 15px 5px 15px;
}
 .ntfctn_standard .notification-content {
   display: block;
   padding: 10px 15px;
}
.ntfctn_standard.success{
  background-color: honeydew;
  border-left: 10px solid green;  
}
.ntfctn_standard.warning{
  background-color: cornsilk;
  border-left: 10px solid orange;
}
.ntfctn_standard.error{
  background-color: seashell;
   border-left: 10px solid red;
}
</style>