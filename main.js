import Vue from 'vue'
import App from './App'
import '@/common/css/base.css'
import titles from './components/title.vue'
Vue.component('titles', titles)
import uniIcon from "@/components/uni-icon/uni-icon.vue"
Vue.component('uniIcon', uniIcon)
import uniList from '@/components/uni-list/uni-list.vue'
Vue.component('uniList', uniList)
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
Vue.component('uniListItem', uniListItem)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
