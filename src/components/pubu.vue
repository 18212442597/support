
<template>
<div id="container">
    <div class="box" v-for="(item,index) in result" :key=index>
        <img :src=item.image alt="">
    </div>
</div>
</template>

<script>
export default {
    name:"pubu",
    props:["data"],
data() {
return {
    result:this.data,
    
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
setTimeout(()=>{
var divs = document.querySelectorAll(".box");
      var container = document.getElementById("container");
      var boxwidth = divs[0].clientWidth;
      var allWidth = container.clientWidth;
      var col = parseInt(allWidth / boxwidth);
      var heightArr = [];
      var getMinIndex = function(arr) {
        var min = arr[0];
        var index = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] < min) {
            min = arr[i];
            index = i;
          }
        }
        return index;
      };

      divs.forEach((item, index) => {
        var minIndex = getMinIndex(heightArr);
        // console.log(minIndex);
        if (index < col) {
          item.style.left = index * boxwidth + "px";
          heightArr.push(item.clientHeight)
          console.log(item.clientHeight);
          // heightArr[index]=item.clientHeight;
        } else {
          item.style.left = minIndex * boxwidth + "px";
          item.style.top = heightArr[minIndex] + "px";
          heightArr[minIndex] += item.clientHeight;
        }
      });
},100)
      
      
    }
  

}
</script>
<style scoped>
/* @import url(); 引入css类 */
#container {
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-color: red; */
}
.box {
  position: absolute;
  width: 500px;
  /* background-color: red; */
  padding: 0.5%;
}
.box img{
  width: 100%;
}
</style>