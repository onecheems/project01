<template>
  <div class="container">
    <el-menu class="no-border-right" default-active="2">
      <el-menu-item index="1">item three</el-menu-item>
      <el-menu-item index="2">item three</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavComp',
  setup() {}
}
</script>
<style scoped>
.container {
  width: 20rem;
  height: 100%;
  overflow-y: auto;
  border-right: solid 1px var(--el-menu-border-color);
}

.container::-webkit-scrollbar {
  display: none;
}

.no-border-right {
  border-right: none;
}
</style>
