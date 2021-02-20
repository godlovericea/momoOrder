<template>
  <div class="warnWrapper">
    <div class="divider"></div>
    <div class="formBox">
      <el-form :model="form" ref="ruleForm" class="demo-form-inline" inline>
        <el-form-item label="公司全称">
          <el-input size="small" v-model="form.comName" placeholder="请输入公司名称" maxlength="100"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" style="width:100px" round @click="getData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="公司名称"></el-table-column>
          <el-table-column prop="num" label="礼品总数量"></el-table-column>
          <el-table-column prop="num" label="已发礼品数量"></el-table-column>
          <el-table-column prop="num" label="待发礼品数量"></el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button type="primary" size="small" round @click="ctQRcode(scope.row.name)">生成二维码</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="diaTitle"
      :visible.sync="rejectDialog"
      width="400px"
      center
      :show-close="false"
      :close-on-click-modal="false"
      custom-class="dialogClass"
    >
    <div style="text-align:center">
      <img :src="imgSrc" alt="">
    </div>
      
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="sureReject">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  addBaseInfo,
  getBaseInfo,
  updateBaseInfo,
  checkCompanyBaseInfo
} from "@/api/collect";
import QRCode from 'qrcode'
export default {
  data() {
    return {
      form: {},
      rejectDialog: false,
      tableData:[
        {
          name: '南京邮电大学',
          num:10
        },
        {
          name: '东南大学',
          num:20
        }
      ],
      diaTitle: '',
      imgSrc: '',
    };
  },
  mounted() {
      
  },
  methods: {
    getData() {
    },
    ctQRcode(name){
      this.diaTitle = name
        QRCode.toDataURL(`https://baidu.com`)
        .then(res=>{
            this.imgSrc = res
            this.rejectDialog = true
        })
    },
    overSure() {
      this.$confirm("此操作将审核通过该公司, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const myData = {
          companyBaseInfoId: this.companyBaseInfoId,
          state: "N"
        };
        checkCompanyBaseInfo(myData).then(res => {
          this.getInfo();
        });
      });
    },
    openReject() {
      this.rejectDialog = true;
    },
    sureReject() {
      this.imgSrc = ""
      this.rejectDialog = false
    }
  }
};
</script>

<style lang="less" scoped>
.warnWrapper {
  width: 100%;
  padding: 20px;
}
</style>
