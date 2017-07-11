<template>
  <div>
  <!-- 标书表格 -->
  <el-table
    :data="biaoshuData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="number"
      label="bs no"
      width="150">
    </el-table-column>
    <el-table-column
      prop="passwd"
      label="passwd"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ownerId"
      label="owner id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ownerName"
      label="owner name"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="operation"
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
  <el-dialog title="new bs" :visible.sync="addbiaoshuDiaglogVisible">
    <el-form :model="newbiaoshu">
      <el-form-item label="number" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.number" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="password" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.passwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="id no" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.ownerId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="name" :label-width="formLabelWidth">
        <el-input v-model="newbiaoshu.ownerName" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addbiaoshuDiaglogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="handleConfirmAdd">Confirm</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    methods: {
      handleConfirmAdd() {
        this.axios.post('biaoshu', this.newbiaoshu)
          .then(() => {
            this.newbiaoshu = {};
            this.addbiaoshuDiaglogVisible = false;
            this.loadData()
          })
      },
      loadData () {
        this.axios.get('biaoshu', this.newbiaoshu)
          .then(resp =>  {
            this.biaoshuData = resp.data;
          })
      }
    },
    data() {
      return {
        addbiaoshuDiaglogVisible: false,
        biaoshuData: [],
        newbiaoshu: {}
      }
    },
    mounted () {
      this.loadData()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

