<!--  -->
<template>
  <div class="info">
    <h1>1、平台优势</h1>
    <div class="desc">
      <div class="catalog">
        <a-list item-layout="horizontal" :data-source="info">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta>
              <a slot="title" style="font-size:20px">{{ item.title }}</a>
              <a-avatar slot="avatar" :src="item.icon" />
            </a-list-item-meta>
            {{ item.desc }}
          </a-list-item>
        </a-list>
      </div>
      <div class="video">
        <video-player
          class="video-player vjs-custom-skin flexble"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        >
        </video-player>
      </div>
    </div>
  </div>
</template>

<script>
const info = [
  {
    title: "降低作业成本",
    desc:
      "传统外业作业都由测绘人员完成，用本平台后一般人员简单培训都可上岗。测绘人员日工作成本500元；调查人员日工作成本300元。",
    icon: require("../assets/images/icon/chengben.png"),
  },
  {
    title: "融合登记业务要求，深度整合作业流程",
    desc:
      "面向登记业务，和业务深度关联定制合理调查流程。外业现场比对登记档案资料，调查、测绘，平板上直接生成各类成果。内业开展不动产数据整理和外业成果质检工作",
    icon: require("../assets/images/icon/ronghe.png"),
  },
  {
    title: "实现成果标准化",
    desc:
      "满足省厅技术要求，厘米级定位、图表规范，可直接入库。 软件自动生成成果，标准统一；后期针对成果标准要求发生变化，可批量生成。",
    icon: require("../assets/images/icon/chengguo.png"),
  },
];
export default {
  name: "information",
  data() {
    return {
      info,
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: require("../assets/video/video.mp4"),
          },
        ],
        //你的封面地址
        poster: "",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true,
        },
      },
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
.info {
  width: 80%;
  height: 70vh;
  margin: 15vh auto;
}
.info h1 {
  text-align: center;
}
.desc {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(233, 233, 233);
}

.catalog {
  flex: 1;
  padding: 5%;
}
.video {
  flex: 1;
  padding: 20vh 5%;
}
.infoItem {
  text-align: left;
  background-color: lightsalmon;
  margin: 5vh 0;
}
.ant-list-item {
  margin: 5vh 0;
}
</style>
