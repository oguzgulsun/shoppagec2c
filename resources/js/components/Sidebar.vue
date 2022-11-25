<template lang="">
<div style="height:100%;">
 <v-sheet
        color="white lighten-4"
        style="height:100%;padding: 94px 0 0 0;display:flex;flex-direction:column;justify-content:space-between"
      >
      <v-list class="pt-2">
      <router-link to="/" class="nav-link"   tag="button">
        <v-list-item
        link
      
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
            <v-list-item-title>  
              {{ "Dashboard" }}
            </v-list-item-title>
        </v-list-item>
      </router-link>


      <router-link 
      :disabled="market==null"
      class="nav-link" 
      tag="button"
      to="/products"  
      
  >
        <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Products
          </v-list-item-title>
        </v-list-item>
      </router-link>

      <!-- <router-link 
      :disabled="market==null"
      class="nav-link" 
      tag="button"
      to="/services"
  >
       <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-account-voice</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Services
          </v-list-item-title>
        </v-list-item>
      </router-link> -->

      <v-divider style="margin:10px 0"></v-divider>
      <router-link 
        :disabled="market==null"
        class="nav-link" 
        tag="button"
        to="/orders"
    >
       <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-order-bool-descending</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Orders
          </v-list-item-title>
        </v-list-item>
    </router-link>
    <router-link 
        :disabled="market==null"
        class="nav-link" 
        tag="button"
        to="/payouts"
    >
       <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Payouts
          </v-list-item-title>
        </v-list-item>
      </router-link>

   <v-divider style="margin:10px 0"></v-divider>


      <router-link 
        :disabled="market==null"
        class="nav-link" 
        tag="button"
        to="/services"
    >
       <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-text</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Blogs
          </v-list-item-title>
        </v-list-item>
      </router-link>


    <router-link 
        :disabled="market==null"
        class="nav-link" 
        tag="button"
        to="/library"
    >
       <v-list-item link :disabled="market==null">
          <v-list-item-icon>
            <v-icon>mdi-library</v-icon>
          </v-list-item-icon>
          <v-list-item-title >  
            Library
          </v-list-item-title>
        </v-list-item>
      </router-link>


      </v-list>

      <v-list class="pt-2">
      <router-link to="/settings" class="nav-link"   tag="button">
        <v-list-item
        link
        >
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
            <v-list-item-title>  
            Settings
            </v-list-item-title>
        </v-list-item>
      </router-link>
      </v-list>
</v-sheet>
</div>
  
  
</template>
<script>
export default {
  name: "SidebarGroup",
  data() {
    return {
      routes: [{ name: "Products", icon: "" }],
    };
  },
  computed: {
    market: {
      get() {
        return this.$store.state.market;
      },
      set(value) {
        this.$store.commit("SET_MARKET", value);
      },
    },
  },
};
</script>
<style lang="css">
.nav-link {
  text-decoration: none;
  width: 100%;
}
.nav-link:hover .v-list-item {
  background-color: #ededed;
}
</style>