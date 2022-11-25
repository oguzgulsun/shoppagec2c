<template lang="">
    <div>
    <v-card class="d-flex justify-space-between align-center pl-3 pr-3">
      <v-breadcrumbs divider=">" large :items="breadcrumbs"></v-breadcrumbs>

      <div class="crud_buttons">
          <v-btn>Önizleme </v-btn>
          <v-btn>Taslak </v-btn>
          <v-btn>Güncelle </v-btn>
      </div>
    </v-card>

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
<!-- product detail start -->
  <v-container>    
      <v-row>
        <v-col cols="12" md="5">
            <div class="product_attr">
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
      </div>
      <div class="product_attr">
          <div class="halfpage_title d-flex justify-space-between pa-3"><h4>Açıklama</h4> 
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
          <v-icon color="primary" dark v-bind="attrs" v-on="on">
            mdi-information-outline
          </v-icon>
          </template>
          <div>
          <span class="d-block">Ürün açıklaması ürünün özelliklerini içermelidir</span>
          <span class="d-block">Birim olarak satış yapıyorsanız birimi belirtmelisiniz</span>
          </div>
        </v-tooltip>
            </div>
          <VueEditor v-model="product.content"></VueEditor>
              </div>
        </v-col>
        <v-col cols="12" md="6" offset-md="1"> 
            <div class="photos">
                <div class="photos_header">
                   <div>Rotate</div>
                   <div>Settings</div>  
                </div> 
                <div class="photos_main">
                    <div class="photos_main_cover">
                        <div class="photos_main_cover_frame">
                              <img src="/img/product/kestane_1.png">
                        </div>
                    </div>
                    <div class="photos_main_photos">
                        <div class="photos_main_photos_frame">
                            <img src="/img/product/kestane_1.png">
                        </div>
                        <div class="photos_main_photos_frame">
                            <img src="/img/product/kestane_1.png">
                        </div>
                        <div class="photos_main_photos_frame">
                            <img src="/img/product/kestane_1.png">
                        </div>
                        <div class="photos_main_photos_frame">
                            <img src="/img/product/kestane_1.png">
                        </div>
                    </div>
                    
                </div> 
            </div>
        </v-col>
      </v-row>
    </v-container>

















<!-- product detail end -->
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
import { VueEditor } from "vue2-editor";
export default {
  name: "NewProduct",
  components: { VueEditor },
  data() {
    return {
      errors1: [],
      item_types: [
        { img: "/assets/img/fiziksel.png", name: "Fiziksel Ürün", type: 1 },
        { img: "/assets/img/randevulu.png", name: "Randevulu Hizmet", type: 2 },
        { img: "/assets/img/dijital.png", name: "Dijital Ürün", type: 3 },
      ],
      canceldialog: false,
      product: {
        name: "",
        content: "",
      },
      e1: 2,
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
      this.errors1 = [];
      axios
        .post("/api/updateproduct", {
          name: this.product.name,
          type: this.product.type,
        })
        .then((response) => {
          this.$root.sendnotification(
            "standard",
            "success",
            "Ürün Güncellendi",
            "Ürün başarıyla güncellendi",
            5000
          );
          this.$router.push("/products");
        })
        .catch((e) => {
          this.$root.sendnotification(
            "standard",
            "error",
            "Ürün Bulunamadı",
            "Hata oluştu ürünler sayfasına geri yönlendiriliyorsunuz",
            5000
          );
          console.log(e);
          console.log(e.response.data.errors);
        });
    },
    getProduct() {
      axios
        .post("/api/getproduct", {
          hashid: this.$route.params.hashid,
        })
        .then((response) => {
          this.product = response.data;
        })
        .catch((e) => {
          this.$root.sendnotification(
            "standard",
            "error",
            "Ürün Bulunamadı",
            "Hata oluştu ürünler sayfasına geri yönlendiriliyorsunuz",
            5000
          );
          this.$router.push("/products");
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
.halfpage {
  width: 50%;
}
.photos {
  &_header {
    display: flex;
    justify-content: space-between;
    div {
      height: 75px;
      width: 75px;
    }
  }
  &_main {
    display: flex;
    &_cover {
      &_frame {
        border: 4px dotted #dedede;
        width: 250px;
        height: 250px;
        padding: 10px;
        margin: 1%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    &_photos {
      margin-left: 10px;
      &_frame {
        border: 2px dotted #dedede;
        float: left;
        width: 48%;
        height: 48%;
        padding: 5px;
        margin: 1%;
        img {
          width: 100%;
          height: 100%;
              object-fit: contain;
        }
      }
    }
  }
}
</style>