<template>
  <div>
  <!-- 标书表格 -->
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="number"
      label="标书号码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="passwd"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ownerId"
      label="身份证号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ownerName"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template scope="scope">
        <el-button @click="handleClick" type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 新增标书按钮 -->
  <el-button icon="plus" @click="addbiaoshuDiaglogVisible = true"></el-button>

  <!-- 新增标书对话窗口 -->
  <el-dialog title="新增标书" :visible.sync="addbiaoshuDiaglogVisible">
    <el-form :model="newbiaoshu">
      <el-form-item label="标书号" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.number" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.passwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.ownerId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.ownerName" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addbiaoshuDiaglogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleConfirmAdd">确认</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    methods: {
      handleConfirmAdd() {
        this.$http.post('https://paipai-0efd.restdb.io/rest/biaoshu', this.newbiaoshu, {
          headers: {
            "content-type": "application/json",
            "x-apikey": "7c07f6d25d63e0336534a2b378bde8bb00546",
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "*"
          }
        })
      }
    },
    data() {
      return {
        addbiaoshuDiaglogVisible: false,
        biaoshuData: [],
        newbiaoshu: {}
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

