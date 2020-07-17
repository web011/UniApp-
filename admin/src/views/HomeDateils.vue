<template>
    <div>
        <h1 class="mb-5 mt-5 ml-4">{{id ? '修改' : '添加'}}商品</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <!-- <el-form-item label="图片">
                <el-input v-model="model.imgurl"></el-input>
            </el-form-item> -->
            <el-form-item label="图片">
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + 'upload'"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                    <img v-if="model.imgurl" :src="model.imgurl" class="avatar" alt="">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="model.price"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        id:{type:String}
    },
    data(){
        return {
            model:{}
        }
    },
    methods:{
        afterUpload(res){
            this.$set(this.model,'imgurl',res.url);
            console.log(this.model)
        },
        async save(){
            let res
            if(this.id){
                res = await this.$http.put(`rest/homedateils/${this.id}`,this.model);
                this.$router.push('/children/homedateilslist')
                this.$message({
                    type:'success',
                    message:'修改成功'
                })
            }else{
                if(this.model.imgurl === undefined){
                    this.$message({
                        type:'error',
                        message:'图片不能为空'
                    })
                }else 
                if(this.model.title === undefined){
                    this.$message({
                        type:'error',
                        message:'标题不能为空'
                    })
                }else if(this.model.price === undefined){
                    this.$message({
                        type:'error',
                        message:'价格不能为空'
                    })
                }else{
                    res= await this.$http.post('rest/homedateils',this.model);
                    this.$router.push('/children/homedateilslist')
                    this.$message({
                        type:'success',
                        message:'保存成功'
                    })
                }
            }
        },
        async fetch(){
            const res = await this.$http.get(`rest/homedateils/${this.id}`);
            this.model = res.data;
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>
<style>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    padding-top: 3.5rem;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>