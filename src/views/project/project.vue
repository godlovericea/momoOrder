<template>
    <div class="warnWrapper">
        <div class="formBox">
            <el-form :model="form" ref="ruleForm" class="demo-form-inline" inline>
                <el-form-item label="公司名称">
                    <el-input size="small" v-model="form.comName" placeholder="请输入公司名称" maxlength="100"></el-input>
                </el-form-item>
                <el-form-item label="用户名称">
                    <el-input size="small" v-model="form.comName" placeholder="请输入公司名称" maxlength="100"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input size="small" v-model="form.comName" placeholder="请输入公司名称" maxlength="100"></el-input>
                </el-form-item>
                <el-form-item label="发货时间">
                    <el-date-picker size="small" v-model="form.comName" type="date" placeholder="选择日期" style="width:180px"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="primary" style="width:100px" round @click="getData">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column  prop="productName" label="公司名称"></el-table-column>
            <el-table-column  prop="productSales" label="用户名称"></el-table-column>
            <el-table-column  prop="productIntroduce" label="手机号码"></el-table-column>
            <el-table-column  prop="productIntroduce" label="发货时间"></el-table-column>
            <el-table-column label="发放状态" width="180" class-name="checkState">
                <template slot-scope="scope">
                    <span class="over" v-if="scope.row.state == 'N'">已发放</span>
                    <span class="fail" v-if="scope.row.state == 'F'">未发放</span>
                </template>
            </el-table-column>
            <el-table-column  prop="createData" label="快递公司"></el-table-column>
            <el-table-column  prop="createData" label="快递单号"></el-table-column>
            <el-table-column label="物流查询">
                <template slot-scope="scope">
                    <el-button type="warning" size="small" @click="goDetail(scope.row.companyProductId,scope.row.companyId)">物流详情</el-button>
                </template>
            </el-table-column>
            <el-table-column  label="发货操作" width="180">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" @click="handleDel(scope.row.companyProductId)">发货</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>    
</template>

<script>
import {deleteProduct,listProduct} from '@/api/collect'
export default {
    data(){
        return{
            tableData:[
                {
                    productName: '南京邮电大学',
                    productIntroduce: '13260766789'
                },
                {
                    productName: '南京邮电大学附属分校',
                    productIntroduce: '13260766789'
                },
            ],
            form:{
                isRecord:1,
                operateCom:'',
                video:''
            },
            photos:[],
            checkedCities:[],
            uploadData:{
                token:'',
                key:''
            },
            fileList:[],
            videofileList:[],
            editFileList:[],
            pageNum:1,
            pageSize:20,
            total:0
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            let myData={
                companyId:this.$route.query.id,
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }
            listProduct(myData)
            .then(res=>{
                this.total = res.result.total
                this.tableData = res.result.list
            })
        },
        postData(){
            let id = parseInt(JSON.parse(sessionStorage.getItem("user")).companyId)
            let comName = JSON.parse(sessionStorage.getItem("user")).comName
            let myData={
                    comName:comName,
                    companyId:id,
                    productIntroduce:this.form.productIntroduce,
                    industry:this.industry,
                    scenarioDefined:this.form.scenarioDefined,
                    productKeyword:this.form.productKeyword,
                    productVideo:this.form.productVideo,
                    imgList:this.photos
                }
            addProduct(myData)
            .then(res=>{
                console.log(res)
            })
        },
        goDetail(proId,comId){
            this.$router.push({
                path:'/product/newProduct',
                query:{
                    proId:proId,
                    comId:comId
                }
            })
        },
        handleDel(id){
            this.$confirm('此操作将永久删除该公司, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let comName = JSON.parse(sessionStorage.getItem("user")).comName
                    let myData = {
                        companyProductId:id,
                        comName:comName
                    }
                    deleteProduct(myData)
                    .then(res => {
                        this.getData()
                    })
            })
        },
        handleRemove(file, fileList) {
            // console.log(file)
            // console.log(fileList)
            this.editFileList = []
            fileList.forEach(l=>{
                this.editFileList.push('q3vbt7rr5.bkt.clouddn.com'+ l.url.substring(23))
            })
            // console.log(this.editFileList)
        },
        handleAvatarSuccess(res,file,fileList){
            // console.log(res)
            this.photos.push(res[0])
        },
        beforeAvatarUpload(file) {
            const isJPEG = file.type === 'image/jpeg';
            const isJPG = file.type === 'image/jpg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 4
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 4MB!')
                return false
            }
            if(!isJPG && !isPNG && !isJPEG){
                this.$message.error('上传图片只能是 JPG 或者 PNG 格式!')
                return false
            }
            return isLt2M && (!isJPG || !isPNG || !isJPEG)
        },
        handleVideoSuccess(res,file,fileList){
            this.form.video = res[0]
        },
        beforeVideoUpload(file) {
            const isJPEG = file.type === 'video/mp4';
            const isLt2M = file.size / 1024 / 1024 < 100
            if (!isLt2M) {
                this.$message.error('上传视频大小不能超过 100MB!')
                return false
            }
            if(!isJPEG){
                this.$message.error('上传视频只能是MP4格式!')
                return false
            }
            return  isLt2M && isJPEG
        },
        handleSizeChange(val){
            this.pageSize = val
            this.getData()
        },
        handleCurrentChange(val){
            this.pageNum = val
            this.getData()
        }
    }
}
</script>

<style lang="less" scoped>
.warnWrapper{
    width: 100%;
    padding: 20px;
 
}
</style>
