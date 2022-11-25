import './bootstrap';
import Vue from 'vue';

import VueRouter from 'vue-router'
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Notifications from 'vue-notification';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(Notifications)

const messages = require('./languages.json');
const i18n = new VueI18n({    locale: window.user!=null ? window.user.language:'en', fallbackLocale: 'en',   messages, });

import App from './pages/App';
import Dashboard from './pages/Dashboard.vue';
import PageNotFound from './pages/PageNotFound.vue';

var guestroutes = [
    {path: '/' ,name: 'dashboard', component: Dashboard },
    {path: '/profile',name: 'profile', component: () => import('./pages/Profile.vue') },
    {path: '/notifications',name: 'notifications', component: () => import('./pages/Notifications.vue') },
    {path: "*", name: 'PageNotFound' ,component: PageNotFound }
];
var authroutes = [
    {path: '/' , component: Dashboard },
    {path: '/profile', name: 'profile', component: () => import('./pages/Profile.vue') },
    {path: '/products', name: 'products', component: () => import('./pages/Products.vue') },
    
    {path: '/new-product', name: 'newProduct', component: () => import('./pages/NewProduct.vue') },
    {path: '/product/:hashid',name: 'productDetail', component: () => import('./pages/ProductDetail.vue') },
    {path: '/notifications',name: 'notifications', component: () => import('./pages/Notifications.vue') },
    {path: "*", name: 'PageNotFound' ,component: PageNotFound }
];

var routes = window.market==null?guestroutes:authroutes


var storedroutes =[]
routes.forEach(element => {
    if(element.name!='PageNotFound'){
        storedroutes.push({
            name:element.name,
            path:element.path
        })
    }
});
const store = new Vuex.Store({
    state: {
        user: window.user,
        notifications: [],
        account_activities: [],
        market: window.market,
        routes:storedroutes,
        products:[],
        services:[]
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.routes = routes;
        },
        SET_MARKET: (state, market) => {
            state.market = market;
        },
        SET_ACCOUNT_ACTIVITIES: (state, account_activities) => {
            state.account_activities = account_activities;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_NOTIFICATIONS: (state, notifications) => {
            state.notifications = notifications;
        },
        ADD_NOTIFICATION: (state, notification) => {
            notification.new = true;
            state.notifications.unshift(notification);
        },
        REMOVE_NOTIFICATION: (state, notification) => {
            let index = state.notifications.findIndex(item => item.id === notification.id)
            state.notification.splice(index, 1)
        },
        SET_PRODUCTS:(state, products) => {
            state.products = products;
        },
        ADD_PRODUCT:(state, product) => {
            state.products.unshift(product);
        },
        REMOVE_PRODUCT:(state, product) => {
            let index = state.products.findIndex(item => item.id === product.id)
            state.products.splice(index, 1)
        },
        UPDATE_PRODUCT:(state, product) => {
            let index = state.products.findIndex(item => item.id === product.id)
            state.products[index]=product
        },

    }
})


const router = new VueRouter({
    mode: 'history',
    base: '/dashboard',
    routes: routes
});



const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { App },
    router: router,
    store,i18n,
    methods: {
        sendnotification(group,type,title,text,duration){
            this.$notify({
                group:group,
                type: type,
                title: title,
                text: text,
                duration:duration,
              });
          },
    },
}).$mount('#app');
