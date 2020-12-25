<template>
  <div class="banner">
    <div class="content">
      <div class="top">
        <h1 style="padding:3%;color:white;">贵州农村房地通</h1>
      </div>
      <div class="desc">
        <h2 style="color:white;font-size:48px">{{ title }}</h2>
        <h5 style="color:white">{{ desc }}</h5>
        <button class="btn1">下载该软件</button>
        <a href="http://www.baidu.com">视频了解</a>
      </div>
    </div>
    <div class="right_bottom">
      <img src="../assets/images/banner/index.png" alt="" />
      <img src="../assets/images/banner/index.png" alt="" />
      <img src="../assets/images/banner/index.png" alt="" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "top",
  components: {},
  data() {
    return {
      title: "一款致力于解决“房地一体”农村不动产登记的高效率软件",
      desc:
        "打通了平台与RTK设备之间的信息传输通道，在平台上完成测量、绘图、权调、落地工作后，自动生成宗地图、分层分户图、权籍调查表、不动产登记申请表等业务要件，农户可以现场申请，签字确认。成果数据可直接导出贵州省标准成果数据库，提升“房地一体”确权工作效率。",
    };
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  height: 90vh;
  background-color: rgb(71, 0, 163);
  background-image: linear-gradient(to top right, #6822D2#651DC9);
  position: relative;
  overflow: hidden;
}
.content {
  width: 80%;
  height: 100%;
  /* background-color: rgb(37, 100, 184); */
  margin: auto;
  position: relative;
}
.top {
  width: 100%;
  display: flex;
  text-align: left;
}
.desc {
  position: absolute;
  width: 35%;
  height: 50vh;
  left: 5%;
  top: 30vh;
  /* background-color: green; */
}
.desc h5 {
  margin: 5vh 0;
}
.desc a {
  margin-left: 5%;
  color: rgb(209, 22, 22);
  /* text-decoration: none; */
}
.right_bottom {
  position: absolute;
  width: 20%;
  height: 80vh;
  top: 15vh;
  right: 5%;
  /* background-color: hotpink; */
  transform: rotate(45deg);
}
.right_bottom img {
  width: 100%;
}
.btn1 {
  width: 40%;
  height: 5vh;
  border-radius: 8px;
  background-color: black;
  color: white;
  text-align: center;
}
</style>
