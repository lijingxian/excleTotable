<template>
  <div class="table-class">
    <!-- <button id="myBtn" @click="createExcel" class="btn btn-primary">下载/Download excel</button> -->
    <table class="table table-striped none" id="myTable">
      <thead>
        <tr>
          <th>委托编号</th>
          <th>试验编号</th>
          <th>委托日期</th>
          <th>样品名称</th>
          <th>样品收样人</th>
          <th>状态标识</th>
          <th>组数</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <!-- <tr class="active">
          <td id="wtsn"></td>
          <td id="sysn"></td>
          <td id="date"></td>
          <td id="name"></td>
          <td id="people"></td>
          <td id="remark"></td>
          <td id="count"></td>
        </tr> -->
      </tbody>
    </table>
    <div class="content" v-show="isShow">
      <div class="title">吉林精诚工程检测公司</div>
      <div class="title-f">样品标识卡</div>
      <div class="sn">JSJL-Z26-02-2018 A/0</div>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">委托编号:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-input v-model="form.wtsn" size="mini"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">试验编号:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-input v-model="form.sysn" size="mini"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">委托日期:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-date-picker v-model="form.date" value-format="yyyy-MM-dd" type="date" size="mini">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">样品名称:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-select v-model="form.name" filterable placeholder="请选择" size="mini">
              <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">样品收样人:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-input v-model="form.people" size="mini"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">状态标识:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-select v-model="form.remark" filterable placeholder="请选择" size="mini">
              <el-option v-for="(item,index) in remarks" :key="index" :label="item" :value="item">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">组数:</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <el-input v-model="form.count" size="mini"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" size="mini" style="width:100%;margin-top:10px" @click="createTable">提交</el-button>
    </div>
    <div id="qrcode" class="layout"></div>
  </div>
</template>
<script>
// import axios from 'axios';
import QRCode from 'qrcodejs2';
export default {
  name: 'Rtc',
  data() {
    return {
      idTmr: null,
      date: '2016-08-07',
      fname: '',
      qrCodePath: '',
      isShow: true,
      options: ['钢筋焊接网', '抗渗试块', '水泥', '沙子', '钢筋'],
      remarks: ['待检', '已检', '留样'],
      fileName:
        (new Date().getMonth() + 1).toString() +
        new Date().getDate().toString() +
        new Date().getHours().toString() +
        new Date().getMinutes().toString() +
        new Date().getSeconds().toString(),
      form: {
        wtsn: '',
        sysn: '',
        name: '抗渗试块',
        people: '贯小雪',
        remark: '待检',
        date: '',
        count: '1'
      }
    };
  },
  props: {},
  watch: {},
  computed: {
    QRCode
  },
  mounted() {
    // axios
    //   .get('/' + this.fileName + '.xls', { responseType: 'arraybuffer' })
    //   .then(res => {
    //     let data = new Uint8Array(res.data);
    //     let wb = window.XLSX.read(data, { type: 'array' });
    //     // 9.利用XLSX把wb第一个sheet转换成JSON对象
    //     // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
    //     // wb.Sheets[Sheet名]获取第一个Sheet的数据
    //     let jdata = window.XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    //     // 10.在终端输出查看结果
    //     console.log(jdata);
    //   })
    //   .catch(err => {
    //     this.err = err;
    //   });
  },
  methods: {
    createTable() {
      console.log(
        new Date().getMonth().toString() +
          new Date().getDate().toString() +
          new Date().getHours().toString() +
          new Date().getMinutes().toString() +
          new Date().getSeconds().toString()
      );
      // document.getElementById('wtsn').innerText = this.form.wtsn;
      // document.getElementById('sysn').innerText = this.form.sysn;
      // document.getElementById('date').innerText = this.form.date;
      // document.getElementById('name').innerText = this.form.name;
      // document.getElementById('people').innerText = this.form.people;
      // document.getElementById('remark').innerText = this.form.remark;
      // document.getElementById('count').innerText = this.form.count;
      let count = this.form.count;
      let html = '';
      if (this.form.name === '抗渗试块') {
        count = this.form.count * 3;
      }
      for (let i = 0; i < count; i++) {
        html += `<tr><td>${this.form.wtsn}</td><td>${this.form.sysn}</td><td>${this.form.date}</td><td>${this.form.name}</td><td>${this.form.people}</td><td>${this.form.remark}</td><td>${this.form.count}</td></tr>`;
      }
      console.log(1);
      document.getElementById('tbody').innerHTML = html;
      this.createExcel();
    },
    getExplorer() {
      let explorer = window.navigator.userAgent;
      // ie
      if (explorer.indexOf('MSIE') >= 0) {
        return 'ie';
      }
      // firefox
      if (explorer.indexOf('Firefox') >= 0) {
        return 'Firefox';
      }
      // Chrome
      if (explorer.indexOf('Chrome') >= 0) {
        return 'Chrome';
      }
      // Opera
      if (explorer.indexOf('Opera') >= 0) {
        return 'Opera';
      }
      // Safari
      if (explorer.indexOf('Safari') >= 0) {
        return 'Safari';
      }
    },
    Cleanup() {
      window.clearInterval(this.idTmr);
      window.CollectGarbage();
    },
    createExcel() {
      console.log(1);
      if (this.getExplorer() === 'ie') {
        let curTbl = document.getElementById('myTable');
        let oXL = new window.ActiveXObject('Excel.Application');
        let oWB = oXL.Workbooks.Add();
        let xlsheet = oWB.Worksheets(1);
        let sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand('Copy');
        xlsheet.Paste();
        oXL.Visible = true;

        try {
          this.fname = oXL.Application.GetSaveAsFilename(this.fileName + '.xls', 'Excel Spreadsheets (*.xls), *.xls');
        } catch (e) {
          print('Nested catch caught ' + e);
        } finally {
          oWB.SaveAs(this.fname);
          // oWB.Close((savechanges = false));
          oXL.Quit();
          oXL = null;
          this.idTmr = window.setInterval(this.Cleanup(), 1);
        }
      } else {
        this.tableToExcel('myTable');
      }
    },
    base64(s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format(s, c) {
      return s.replace(/{(\w+)}/g, function(m, p) {
        return c[p];
      });
    },
    tableToExcel(table) {
      if (!table.nodeType) {
        table = document.getElementById(table);
      }
      let ctx = {
        worksheet: name || 'Worksheet',
        table: table.innerHTML
      };
      // window.location.href = uri + base64(format(template, ctx))
      let a = document.createElement('a');
      a.download = this.fileName + '.xls';
      a.href =
        'data:application/vnd.ms-excel;base64,' +
        this.base64(this.format('<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>', ctx));

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
      this.$router.push({ path: '/code', query: { count: this.form.count, fileName: this.fileName, name: this.form.name } });
    }
  }
};
</script>
<style lang="scss">
.table-class {
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
    .el-select {
      width: 100%;
    }
  }
}
</style>
