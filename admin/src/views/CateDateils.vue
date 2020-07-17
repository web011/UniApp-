<template>
    <div>
        <h1 class="mb-5 mt-5 ml-4">{{id ? '修改' : '添加'}}商品</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-tabs value="find" type="border-card">
                <el-tab-pane label="商品分类" name="find">
                    <el-form-item label="商品分类">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <el-select v-model="model.dateilsname" multiple>
                            <el-option v-for="item of dateilsname" :key="item._id" :label="item.name" :value="item._id"></el-option>
                        </el-select>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="商品" name="skills">
                    <el-button @click="model.skills.push({})"> <i class="el-icon-plus"></i> 添加商品</el-button>
                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
                            <el-form-item label="商品标题" class="mt-4">
                                <el-input v-model="item.title"></el-input>
                            </el-form-item>
                            <el-form-item label="商品价格" class="mt-4">
                                <el-input v-model="item.price"></el-input>
                            </el-form-item>
                            <el-form-item label="测试1" class="mt-4">
                                <el-input v-model="model.scores.img1"></el-input>
                            </el-form-item>
                            <el-form-item label="商品图片">
                                <el-upload
                                class="avatar-uploader"
                                :action="$http.defaults.baseURL + 'upload'"
                                :show-file-list="false"
                                :on-success="res => $set(item,'icon',res.url)"
                                >
                                    <img v-if="item.icon" :src="item.icon" class="avatar" alt="">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                                
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <el-form-item class="mt-3">
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
            model:{
                name:'',
                scores:{},
                skills:[]
            },
            dateilsname:[]
        }
    },
    methods:{
        async save(){
            let res
            if(this.id){
                res = await this.$http.put(`rest/CateDateils/${this.id}`,this.model);
                this.$router.push('/children/CateDateilslist')
                console.log(this.model)
            }else{
                if(this.model.name === undefined){
                    this.$message({
                        type:'error',
                        message:'数据不能为空'
                    })
                }else{
                    res= await this.$http.post('rest/CateDateils',this.model);
                    this.$router.push('/children/CateDateilslist')
                    this.$message({
                        type:'success',
                        message:'保存成功'
                    })
                    console.log(this.model)
                }
            }
        },
        async fetch(){
            const res = await this.$http.get(`rest/CateDateils/${this.id}`);
            this.model = Object.assign({},this.model,res.data);
        },
        async fetchdateilsname(){
            const res = await this.$http.get(`rest/Categories`);
            this.dateilsname = res.data;
        }
    },
    created(){
        this.fetchdateilsname();
        this.id && this.fetch();
    }
}
</script>