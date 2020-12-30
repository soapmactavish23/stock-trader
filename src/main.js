import Vue from 'vue';
import App from './App.vue';

import './plugins/vuetify';
import './plugins/axios';

import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

// Filtro
Vue.filter('currency', value => {
	return 'R$' + value.toLocaleString();
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
