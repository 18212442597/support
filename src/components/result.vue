<template>
<div class="container">
    <h1>3、成果数据</h1>
    <a-tabs default-active-key="1" tab-position="left" size="large" >
      <a-tab-pane key="1" tab="坐标文件">
        <img src="../assets/index.png" alt="" width="100%">
      </a-tab-pane>
      <a-tab-pane key="2" tab="现场照片">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="宗地成果">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="4" tab="分层分户图">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="5" tab="不动产权籍调查表">
        Content of Tab 3
      </a-tab-pane>
      <a-tab-pane key="6" tab="不动产登记申请表">
        Content of Tab 3
      </a-tab-pane>
    </a-tabs>
</div>
</template>

<script>
export default {
    name:"result",
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.container{
    width: 80%;
    height: 100vh;
    background-color:  rgb(233, 233, 233);
    margin: 10vh auto;
}
h1{
    text-align: center;
    background-color: white;
}
</style>