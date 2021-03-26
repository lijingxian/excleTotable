<template>
  <div class="code-class">
    <div id="qrcode" class="layout"></div>
  </div>
</template>
<script>
// import axios from 'axios';
import QRCode from 'qrcodejs2';
export default {
  name: 'Rtc',
  data() {
    return {};
  },
  props: {},
  watch: {},
  computed: {
    QRCode
  },
  mounted() {
    console.log(12);
    let count = this.$route.query.count;
    if (this.$route.query.name === '抗渗试块') {
      count = count * 3;
    }
    let fileName = this.$route.query.fileName;
    for (let i = 0; i < count; i++) {
      let c = new QRCode(document.getElementById('qrcode'), {
        render: 'table', // table方式
        width: 100, // 宽度
        height: 100, // 高度
        text: 'http://192.168.50.31:8080/read?' + fileName + '-' + i // 任意内容
      });
      console.log(c);
      console.log('http://192.168.50.31:8080/read?' + fileName);
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.code-class {
  // #qrcode {
  //   display: none;
  // }
  .none {
    display: none;
  }
  .code-div {
    margin: 0 auto;
    display: none;
  }
  .layout {
    display: flex;
    flex-wrap: wrap;
    img {
      padding: 10px;
    }
  }
  .content {
    padding: 5px;
    .title {
      font-weight: bold;
      color: #000000;
      font-size: 16px;
      text-align: center;
    }
    .title-f {
      color: #000000;
      font-size: 14px;
      text-align: center;
    }
    .sn {
      text-align: right;
      font-size: 12px;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
    }
    .grid-content {
      padding: 5px 0px;
    }
  }
}
</style>
