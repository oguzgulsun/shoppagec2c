<template>
  <div>
    <v-container
      v-if="
        this.$store.state.market == null ||
        this.$store.state.market.progress < 3
      "
    >
      <v-card>
        <v-toolbar color="blue" dark>
          Complete your Profile and Open Your Market
        </v-toolbar>

        <v-list two-line>
          <v-list-item-group>
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title" :disabled="item.disabled">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card>
        <v-toolbar color="blue" dark>
          Profile Setup Completed
        </v-toolbar>
      </v-card>
    </v-container>

    <v-dialog max-width="600" persistent v-model="setmarket">
      <v-card>
        <v-card-title class="text-h5"> SET UP YOUR MARKET </v-card-title>
        <v-alert v-if="error.marketExist == true" dense type="error">
          There is a market with this name. Please choose another name for your
          market.
        </v-alert>
        <v-card-text>
          <div class="mt-4">
            <v-text-field
              v-model="newmarket.name"
              label="Market Name"
              placeholder="Mervenin Takı Dükkanı ..."
              outlined
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="green darken-1" @click="openMarket">
            SUBMIT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      newmarket: {
        name: "",
      },
      error: {
        marketExist: false,
      },
      items: [
        {
          subtitle:
            "Complete the member registration successfully and confirm your e-mail address",
          title: "Register",
          disabled: true,
        },
        {
          subtitle: "Create your special page with a unique name.",
          title: "Open Your Market",
          disabled: this.market == null ? true : false,
        },
        {
          subtitle: "List your first product or service",
          title: "Add First Item or Service",
          disabled: this.$store.state.market.progress >= 0 ? false : true,
        },
        {
          subtitle: "Successfully deliver your first order",
          title: "Make first sale",
          disabled: this.$store.state.market.progress >= 1,
        },
        {
          subtitle:
            "Send notifications from innovations to those who want to follow you about your new products.",
          title: "Get members who follow your store.",
          disabled: this.$store.state.market.progress >= 2,
        },
      ],
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
    products: {
      get() {
        return this.$store.state.products;
      },
      set(value) {
        this.$store.commit("SET_PRODUCTS", value);
      },
    },
    services: {
      get() {
        return this.$store.state.services;
      },
      set(value) {
        this.$store.commit("SET_SERVICES", value);
      },
    },
  },
  methods: {
    openMarket() {
      axios
        .post("/api/openmarket", {
          name: this.newmarket.name,
        })
        .then((response) => {
          if (response.data == "exist") {
            this.error.marketExist = true;
            return;
          }
          this.setmarket = false;
          this.$store.commit("SET_MARKET", response.data);
        });
    },
  },
  created() {
    if (this.market == null) {
      this.setmarket = true;
    } else {
      this.setmarket = false;
    }
  },
};
</script>

