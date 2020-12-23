<template>
  <div class="container">
    <h1 class="title">2、平台操作简单</h1>
    <div class="process">
      <h1>所需设备</h1>
      <ul>
        <li>测距仪</li>
        <li>量角尺</li>
        <li>RTK</li>
        <li>Android 平板电脑</li>
        <li>打印机</li>
      </ul>
      <div
        class="list-item"
        v-for="(item, index) in steps"
        :key="index"
        :class="{ revese: index % 2 == 1 }"
      >
        <div class="picture">
          <img :src="item.picture" alt="" width="100%" />
        </div>
        <div class="icon">
          <div
            :class="[
              { jiantou_Reverse: index % 2 == 1 },
              { jiantou: index % 2 == 0 },
            ]"
          ></div>
          <div
            :class="[
              { step_Reverse: index % 2 == 1 },
              { step: index % 2 == 0 },
            ]"
          >
            <img :src="item.icon" alt="" width="100%" />
          </div>
        </div>
        <div class="text">
          <h1>{{ item.text }}</h1>
        </div>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
const steps = [
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round1.png"),
    text: "说明此时你是说明此时你是说明此时你是说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round2.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round3.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round4.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round5.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round6.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round7.png"),
    text: "说明此时你是",
  },
  {
    picture: require("../assets/index.png"),
    icon: require("../assets/images/round8.png"),
    text: "说明此时你是",
  },
];
export default {
  data() {
    return {
      steps,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.container {
  width: 80%;
  height: auto;
  /* background-color: rgb(233, 233, 233); */
  margin: auto;
}
.title {
  text-align: center;
}
.process {
  width: 100%;
  height: auto;
  padding: 0 5%;
  background-color: rgb(233, 233, 233);
}
.picture {
  flex: 1.8;
  height: 100%;
  /* background-color: rgb(125, 92, 201); */
}
.process img {
  width: 100%;
}
.process li {
  font-size: 24px;
}
.icon {
  flex: 0.5;
  height: 100%;
  /* background-color: rosybrown; */
  display: flex;
  position: relative;
}
.jiantou {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 50px solid rgb(116, 199, 255);
  border-bottom: 50px solid transparent;
  position: absolute;
  left: 0%;
  top: 20vh;
}
.text {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: saddlebrown; */
}
.step {
  width: 55%;
  height: 10vh;
  /* background-color: aqua; */
  position: absolute;
  left: 30%;
  top: 20vh;
}
.list-item {
  width: 100%;
  height: 50vh;
  /* background-color: red; */
  display: flex;
  margin-bottom: 20vh;
}
.revese {
  width: 100%;
  height: 50vh;
  position: relative;
  /* background-color: red; */
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20vh;
}
.jiantou_Reverse {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 50px solid rgb(116, 199, 255);
  border-bottom: 50px solid transparent;
  position: absolute;
  right: 0%;
  top: 20vh;
}
.step_Reverse {
  width: 55%;
  height: 10vh;
  /* background-color: aqua; */
  position: absolute;
  right: 30%;
  top: 20vh;
}
</style>
