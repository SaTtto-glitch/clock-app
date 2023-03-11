<template>ClockScreenを表示します</template>

<script>
export default {
  name: "ClockScreen",
  data() {
    return {
      //現在の日時を保持
      date: new Date(),
    };
  },
  computed: {
    //年
    year() {
      return this.date.getFullYear();
    },
    //月
    month() {
      return this.date.getMonth() + 1;
    },
    //日
    day() {
      return this.date.getTimePadding(this.date.getDate());
    },
    //時
    hours() {
      return this.date.getTimePadding(this.date.getHours());
    },
    //分
    minutes() {
      return this.date.getTimePadding(this.date.getMinutes());
    },
    //秒
    seconds() {
      return this.date.getTimePadding(this.date.getSeconds());
    },
  },

  mounted:{
    
  }
  methods: {
    //日付を二桁に変換
    dateTimePadding(num) {
      return ("0" + num).slice(-2);
    },
    //現在日時をセット
    setDate(){
        this.date = new Date();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
