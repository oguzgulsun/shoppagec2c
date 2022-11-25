<template lang="">
    <div>
         <Breadcrumbs :breadcrumbs="breadcrumbs" />        
        <v-container>
        <v-card-title class="justify-space-between pb-1">
            <div class="d-flex">
                <h4 class="pr-3">NEW PRODUCT</h4>
                      <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        mdi-information-outline
                        </v-icon>
                    </template>
                    <div>
                    <span class="d-block">Please full all of the areas</span>
                    <span class="d-block">Seo is important</span>
                    </div>
                    </v-tooltip>
            </div>
            <div>
              
            </div>    
         </v-card-title>
        </v-container>

  <v-container class="pt-1">
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Product Core Options
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Customize Your Product
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Publish
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
        >
         <v-stepper
    v-model="e13"
    vertical
  >
    <v-stepper-step
      step="1"
      complete
    >
     Product Type
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        class="mb-12"
      >
 <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
          v-for="itemtype in item_types"
          :key="itemtype.type"
          cols="12"
          md="4"
        >
          <v-item>
            <v-card
              :color="product.type==itemtype.type ? 'primary' : ''"
              class="d-flex align-center"
              @click="product.type=itemtype.type"
            >
              <v-scroll-y-transition>
                <div
                  v-if="product.type==itemtype.type"
                  class="text-h2 flex-grow-1 text-center"
                >
                <img :src="itemtype.img" />
               <p style="font-size: 20px;">{{itemtype.name}} </p>
                </div>
                  <div
                  v-else
                  class="text-h2 flex-grow-1 text-center"
                >
                <img :src="itemtype.img" />
                <p style="font-size: 20px;">{{itemtype.name}} </p>
                </div>

              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  
      </v-card>
      <v-btn
        color="primary"
        @click="e13 = 2"
      >
        Continue
      </v-btn>
      <v-btn text @click="canceldialog=true">
        Cancel
      </v-btn>  
    </v-stepper-content>

    <v-stepper-step
      step="2"
      complete
    >
       Name Of Product
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        class="mb-12"
        >
        <v-alert
            outlined
            type="error"
            prominent
            border="left"
            v-for="(alert,index) in errors1"
            :key="index"
          >
            {{alert}}
          </v-alert>

        <v-text-field
        label="Product Name"
        placeholder="Write Unique Product Name in Your Store"
        outlined
        v-model="product.name"
        ></v-text-field>
        </v-card>


      <v-btn
        color="primary"
        @click="addProduct"
      >
        Continue
      </v-btn>
      <v-btn text @click="e13 = 1">
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
        >
        <v-col md=8>
          <v-text-field
          label="Product Name"
          placeholder="Write Unique Product Name in Your Store"
          outlined
          v-model="product.name"
          ></v-text-field>
        </v-col>
        
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-container>

     <v-dialog
      v-model="canceldialog"
      persistent
      max-width="300px"
    >
     <v-card>
        <v-card-title>
          <span class="text-h5">Do you want to cancel product installation?</span>
        </v-card-title>
        <v-card-text>
            <v-btn @click="$router.push('/products')">Cancel</v-btn>
            <v-btn @click="canceldialog=false">Continue</v-btn>
        </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  name: "NewProduct",
  components: { Breadcrumbs },
  data() {
    return {
      errors1:[],
      item_types: [
        { img: "/assets/img/fiziksel.png", name: "Fiziksel Ürün", type: 1 },
        { img: "/assets/img/randevulu.png", name: "Randevulu Hizmet", type: 2 },
        { img: "/assets/img/dijital.png", name: "Dijital Ürün", type: 3 },
      ],
      canceldialog: false,
      product: {
        name: "",
        type: 1,
      },
      e1: 1,
      e13: 1,
      breadcrumbs: [
        {
          text: "Dashboard",
          disabled: false,
          to: "/",
        },
        {
          text: "Products",
          disabled: false,
          to: "/products",
        },
        {
          text: "New Product",
          disabled: true,
          to: "/products/newproduct",
        },
      ],
    };
  },
  methods: {
    addProduct() {
        this.errors1=[]
      axios
        .post("/api/addproduct", {
          name: this.product.name,
          type: this.product.type,
        })
        .then((response) => {
          this.e1=2;
        })
        .catch((e) => {
           console.log(e)
          console.log(e.response.data.errors);
          if(e.response.data.errors.name){
            this.errors1=e.response.data.errors.name;
          }
          // 
          
        });
    },
  },
  computed: {
    // products: {
    //   get() {
    //     return this.$store.state.products;
    //   },
    //   set(value) {
    //     this.$store.commit("SET_PRODUCTS", value);
    //   },
    // },
  },
};
</script>
<style lang="scss">
</style>