<template>
  <div class="container">
    <h1>3、成果数据</h1>
    <a-tabs default-active-key="1" tab-position="top" size="large">
      <a-tab-pane key="1" tab="坐标文件">
        <div class="el-input el-input--small diy"  >
          <viewer>
         <img src="../assets/images/result/zuobiao.jpg" alt="" />
          </viewer>
        </div>
        
      </a-tab-pane>
      <a-tab-pane key="2" tab="现场照片">
        <div class="el-input el-input--small diy"  >
          <viewer>
         <pubu :data="xianchang" />
          </viewer>
        </div>
        
      </a-tab-pane>
      <a-tab-pane key="3" tab="宗地成果">
        <div class="el-input el-input--small diy"  >
          <viewer>
         <img src="../assets/images/result/qjdc/BDCQJ5.jpg" alt="" />
          </viewer>
        </div>
        
      </a-tab-pane>
      <a-tab-pane key="4" tab="分层分户图">
        <div class="el-input el-input--small diy"  >
          <viewer>
         <img src="../assets/images/result/qjdc/BDCQJ9.jpg" alt="" />
          </viewer>
        </div>
        
      </a-tab-pane>
      <a-tab-pane key="5" tab="不动产权籍调查表">
        <div class="el-input el-input--small diy" v-if="QJDCB.length > 0">
          <viewer>
            <img :src="item.image" v-for="(item, index) in QJDCB" :key="index" />
          </viewer>
        </div>
        
      </a-tab-pane>
      <a-tab-pane key="6" tab="不动产登记申请表">
        <div class="el-input el-input--small diy"  >
          <viewer>
            <img
          :src="item.image"
          alt=""
          v-for="(item, index) in BDCDJ"
          :key="index"
        />
          </viewer>
        </div>
        
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import pubu from "../components/pubu";

const zuobiao = [
  {
    image: require("../assets/images/result/zuobiao.jpg"),
  },
];
const xianchang = [
  {
    image: require("../assets/images/result/xianchang1.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang2.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang4.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang4.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang5.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang6.jpg"),
  },
  {
    image: require("../assets/images/result/xianchang7.jpg"),
  },
];
const QJDCB = [
  {
    image: require("../assets/images/result/qjdc/BDCQJ1.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ2.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ3.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ4.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ5.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ6.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ7.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ8.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ9.jpg"),
  },
  {
    image: require("../assets/images/result/qjdc/BDCQJ10.jpg"),
  },
];
const BDCDJ = [
  {
    image: require("../assets/images/result/dj/BDCDJ1.jpg"),
  },
  {
    image: require("../assets/images/result/dj/BDCDJ2.jpg"),
  },
];
export default {
  name: "result",
  components: { pubu },
  data() {
    return {
      zuobiao,
      xianchang,
      QJDCB,
      BDCDJ,
    };
  },
  methods: {},
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
  margin: 10vh auto;
}
h1 {
  text-align: center;
  /* background-color: white; */
}
.diy{
  width: 100%;
  margin: auto;
}
.diy img{
  width: 20%;
}
</style>
