<template>
    <div>
        <h1 class="mb-5 mt-5 ml-4">{{id ? '修改' : '添加'}}管理员</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="头像">
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + 'upload'"
                :show-file-list="false"
                :on-success="res => $set(model,'userimg',res.url)"
                >
                    <img v-if="model.userimg" :src="model.userimg" class="avatar" alt="">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
                <el-input  v-model="model.password"></el-input>
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
            this.$set(this.model,'url',res.url);
            console.log(this.model)
        },
        async save(){
            let res
            if(this.id){
                res = await this.$http.put(`rest/AdminUser/${this.id}`,this.model);
                this.$router.push('/children/AdminUserlist')
            }else{
                if(this.model.username === undefined){
                    this.$message({
                        type:'error',
                        message:'用户名不能为空'
                    })
                }else if(this.model.password === undefined){
                    this.$message({
                        type:'error',
                        message:'密码不能为空'
                    })
                }else{
                    res= await this.$http.post('rest/AdminUser',this.model);
                    this.$router.push('/children/AdminUserlist')
                    this.$message({
                        type:'success',
                        message:'保存成功'
                    })
                }
            }
        },
        async fetch(){
            const res = await this.$http.get(`rest/AdminUser/${this.id}`);
            this.model = res.data;
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>