<template>ClockScreenを表示します</template>

<script>
  export default {
    name: 'ClockScreen',
    data(){
        return{
            //現在の日時を保持
            date:new Date(),
        };
    },
    computed(){
        //年
year(){
    return this.date.getFullYear();
},
        //月
month(){
    
}
        //日

        //時

        //分

        //秒
    }
  }
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
