<template>
  <el-row class="tac">
    <el-col :span="3">
      <el-menu default-active="paishouguanli" router="true" @open="handleOpen" @close="handleClose">
        <el-menu-item index="biaoshuguanli">标书管理</el-menu-item>
        <el-menu-item index="paishouguanli">拍手管理</el-menu-item>
        <el-menu-item index="paipaiguanli">拍牌管理</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="16">
      <router-view></router-view>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'testel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

