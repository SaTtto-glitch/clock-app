import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const myData = {
	appName: "My Clock",// アプリ名
	clock: "00:00:00"// 時計の文字列
}