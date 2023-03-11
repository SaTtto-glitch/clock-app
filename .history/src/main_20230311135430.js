

// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "Hello Vue.js!!"
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;
	},
	created(){
		console.log("created!!");
	}
});
app.mount("#app");// 3, Vue.jsを起動する