import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

new Vue({
	el: "#app",
	template:'<App/>',
	render: h => h(App)
})