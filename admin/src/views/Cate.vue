<template>
    <div>
        <h1 class="mb-5 mt-5 ml-4">{{id ? '修改' : '添加'}}分类</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
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
            model:{},
            parents:[]
        }
    },
    methods:{
        async save(){
            let res
            if(this.id){
                res = await this.$http.put(`Categories/${this.id}`,this.model);
                this.$router.push('/children/Catelist')
            }else{
                if(this.model.name === undefined){
                    this.$message({
                        type:'error',
                        message:'数据不能为空'
                    })
                }else{
                    res= await this.$http.post('Categories',this.model);
                    this.$router.push('/children/Catelist')
                    this.$message({
                        type:'success',
                        message:'保存成功'
                    })
                }
            }
        },
        async fetch(){
            const res = await this.$http.get(`Categories/${this.id}`);
            this.model = res.data;
        },
        async fetchparents(){
            const res = await this.$http.get(`Categories`);
            this.parents = res.data;
        }
    },
    created(){
        this.fetchparents();
        this.id && this.fetch()
    }
}
</script>