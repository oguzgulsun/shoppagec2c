<template lang="">
    <div>
         <Breadcrumbs :breadcrumbs="breadcrumbs" />        
            <v-container>
            <v-row class="mt-3 mb-3">
                <v-col md="4">
                 <div class="top_cards">
                    <h5>
                    <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <span
                        v-bind="attrs"
                        v-on="on"
                        >
                        Total Revenue
                        </span>
                    </template>
                    <span>Total Revenue tooltip text</span>
                    </v-tooltip>
                    </h5>
                    <p> 0 </p>
                    </div>
                </v-col>
              
                <v-col md="4">
                   <div class="top_cards">
                    <h5>
                    <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
  <span v-bind="attrs" v-on="on"> Visitors </span>
    </template>
                    <span>Total visitors</span>
                    </v-tooltip>
                    </h5>
                    <p> 0 </p>
                    </div>
                </v-col>

                  <v-col md="4">
                     <div class="top_cards">
                    <h5>
                    <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
  <span v-bind="attrs" v-on="on"> Members </span>
    </template>
                    <span>Total members</span>
                    </v-tooltip>
                    </h5>
                    <p> 0 </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-card-title class="justify-end">
              <router-link to="/new-product">
                <v-btn>Add New Product</v-btn>
                </router-link>
              </v-card-title>
        <v-card-title class="justify-space-between">
             <div>
                <h4>Products</h4>
             </div>
             <div>
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </div>   
         </v-card-title>
        <v-data-table
        :headers="headers"
        :items="products"
        :search="search"
        :loading="loading"
        :items-per-page="5"
        hide-default-footer
        >
            <template #item.hashid="{ item,index }">
          <router-link :to="{ name: 'productDetail', params:{ hashid:item.hashid } }" >Detail</router-link>
          </template>
          </v-data-table>
         <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
        </v-container>
    </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  name: "Products",
  components: { Breadcrumbs },
  data() {
    return {
      page: 1,
      pageCount: 0,
      loading: false,
      search: "",
      headers: [
        {
          text: "Cover",
          align: "start",
          filterable: false,
          value: "cover",
        },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Status", value: "status" },
        { text: "Detail", value: "hashid" },
      ],
      breadcrumbs: [
        {
          text: "Dashboard",
          disabled: false,
          to: "/",
        },
        {
          text: "Products",
          disabled: true,
          to: "/products",
        },
      ],
    };
  },
  computed: {
    products: {
      get() {
        return this.$store.state.products;
      },
      set(value) {
        this.$store.commit("SET_PRODUCTS", value);
      },
    },
  },
  methods: {
    getProducts() {
      this.loading = true;
      axios.post("/api/getproducts").then((response) => {
        console.log(response.data)
        this.products = response.data;
        this.loading = false;
      });
    },
  },
  created() {
    this.getProducts()
  },
};
</script>
<style lang="scss">
.top_cards {
  border: 1px solid;
  padding: 20px;
  h5 {
    font-size: 16px;
  }
  p {
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>