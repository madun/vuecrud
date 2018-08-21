
require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;


let AppLayout = require('./components/App.vue');

// show the list post template
const Listposts = Vue.component('Listposts', require('./components/Listposts.vue'));

// add post
const Addpost = Vue.component('Addpost', require('./components/Addpost.vue'));

// edit post
const Editpost = Vue.component('Editpost', require('./components/Editpost.vue'));

// delete post
const Deletepost = Vue.component('Deletepost', require('./components/Deletepost.vue'));

// View Single post detail
const Viewpost = Vue.component('Viewpost', require('./components/Viewpost.vue'));


// registering modules
Vue.use(VueRouter, VueAxios, Axios);

const routes = [
    {
        name: 'Listposts',
        path: '/',
        component: Listposts
    },
    {
        name: 'Addpost',
        path: '/add-post',
        component: Addpost
    },
    {
        name: 'Editpost',
        path: '/edit/:id',
        component: Editpost
    },
    {
        name: 'Deletepost',
        path: '/post-delete/:id',
        component: Deletepost
    },
    {
        name: 'Viewpost',
        path: '/view/:id',
        component: Viewpost
    }
]

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app');