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
                    <el-button @click="addObj"> <i class="el-icon-plus"></i> 添加商品</el-button>
                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :lg="24" v-for="(item,i) of model.skills" :key="i">
                            <el-form-item label展示图片>
                                    <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + 'upload'"
                                    :show-file-list="false"
                                    :on-success="res => $set(item,`showimg`,res.url)"
                                    >
                                        <img v-if="item.showimg" :src="item.showimg" class="avatar" alt="" style="width:7rem;height:7rem;">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            <el-form-item label="商品标题" class="mt-4">
                                <el-input v-model="item.title"></el-input>
                            </el-form-item>
                            <el-form-item label="商品价格" class="mt-4">
                                <el-input v-model="item.price"></el-input>
                            </el-form-item>
                            <el-button @click="item.dateilsswipercount+=1"> <i class="el-icon-plus"></i> 添加商品轮播图</el-button>
                            <div class="d-flex " style="margin-top:3rem">
                                <el-form-item v-for="i in item.dateilsswipercount" :key="i" :label="'商品轮播图 ('+i+')'" style="margin-left:2rem">
                                    <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + 'upload'"
                                    :show-file-list="false"
                                    :on-success="res => $set(item.dateilsswiper,`img${i}`,res.url)"
                                    >
                                        <img v-if="item.dateilsswiper" :src="item.dateilsswiper['img'+i]" class="avatar" alt="" style="width:7rem;height:7rem;">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </div>
                            <el-button @click="item.dateilsiconcount+=1"> <i class="el-icon-plus"></i> 添加商品详情图片</el-button>
                            <div class="d-flex flex-wrap " style="border-bottom:1px solid #ddd;margin-bottom:4rem;margin-top:3rem">
                                <el-form-item v-for="i in item.dateilsiconcount" :key="i" :label="'商品详情图片 ('+i+')'" style="margin-left:2rem">
                                    <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + 'upload'"
                                    :show-file-list="false"
                                    :on-success="res => $set(item.dateilsicon,`img${i}`,res.url)"
                                    >
                                        <img v-if="item.dateilsicon" :src="item.dateilsicon['img'+i]" class="avatar" alt="" style="width:7rem;height:7rem;">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </div>
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
                skills:[],
            },
            dateilsname:[],
        }
    },
    methods:{
        addObj(){
            var obj = {dateilsswiper:{},dateilsicon:{},dateilsswipercount:1,dateilsiconcount:1};
            this.model.skills.unshift(obj)
        },
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
        },
        // async s(){
        //     const res = await this.$http.get(`rest/CateDateils`);
        //     console.log(res.data)
        // } 
    },
    created(){
        // this.s();
        this.fetchdateilsname();
        this.id && this.fetch();
    }
}
</script>