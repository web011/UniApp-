<template>
    <div>
        <h1 class="mb-5 mt-5 ml-4">商品分类列表</h1>
        <el-table :data="items">
            <el-table-column prop="_id" label="ID"></el-table-column>
            <el-table-column prop="title" label="商品名称"></el-table-column>
            <el-table-column prop="price" label="商品价格"></el-table-column>
            <el-table-column prop="imgurl" label="图片">
                <template slot-scope="scope">
                    <img :src="scope.row.imgurl" style="height:5rem;width:5rem;">
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push(`/children/homedateils/${scope.row._id}`)">修改</el-button>
                    <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('rest/homedateils');
            this.items = res.data;
        },
        async remove(row){
            this.$confirm(`"是否确定要删除？"${row.url}`,"提示",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:"warning"
            })
            .then(async ()=>{
                const res = await this.$http.delete(`rest/homedateils/${row._id}`)
                this.$message({
                    type:'success',
                    message:'删除成功！'
                });
                this.fetch();
            })
        }
    },
    created(){
        this.fetch();
    }
}
</script>