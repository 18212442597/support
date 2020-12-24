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
      <br />
    </div>
  </div>
</template>

<script>
const steps = [
  {
    picture: require("../assets/step0.png"),
    icon: require("../assets/images/round1.png"),
    text:
      "登录进入平台后,外出作业之前需要设置服务器地址（成果上传的服务器）、CORS账号、配套使用的RTK设备和作业区域的地图影像文件",
  },
  {
    picture: require("../assets/step1.png"),
    icon: require("../assets/images/round2.png"),
    text:
      "设置基本配置后进入平台初始页面即可新增、查询、修改、上传宗地信息，以新增为例进行流程展示",
  },
  {
    picture: require("../assets/step2.png"),
    icon: require("../assets/images/round3.png"),
    text:
      "点击新建图标，进入新建页面，作业人员根据现场情况填写宗地户主信息、房屋坐落信息、作业人员信息以及备注信息，如需要进行分户处理，则点击右上角添加分户信息",
  },
  {
    picture: require("../assets/step3.png"),
    icon: require("../assets/images/round4.png"),
    text: "对宗地的档案数据、身份信息、权属来源证明资料、现场照片、草图照片、切坡建房照等进行拍照留底",
  },
  {
    picture: require("../assets/step4.png"),
    icon: require("../assets/images/round5.png"),
    text:
      "根据现场房屋测量后进行宗地图绘制，可选择手绘也可以选择基础图库快速绘制，房屋四至、分层分户结构等等信息需根据实际情况标注，次测量过程要借助测距仪、量角器等工具完成",
  },
  {
    picture: require("../assets/step5.png"),
    icon: require("../assets/images/round6.png"),
    text:
      "完善绘图信息后，根据配套使用的RTK进行现场落图（为确保较高的精度，至少用RTK打两个点进行落图）",
  },
  {
    picture: require("../assets/step6.png"),
    icon: require("../assets/images/round7.png"),
    text:
      "系统生成宗地调查结果，包括坐标文件、不动产登记申请表、不动产权籍调查表、宗地成果、分层分户图等，该成果都是根据国家入库标准生成的，可以直接打印，也可以直接上传",
  },
  {
    picture: require("../assets/step7.png"),
    icon: require("../assets/images/round8.png"),
    text:
      "完成一宗调查后，会在开始页面的宗地信息列表显示，此时可对别表进行筛选并进行修改、删除、上传等操作",
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
