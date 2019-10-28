<template>
  <div class="page-header">
    <el-header>Princess Quiz</el-header>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style lang="scss" scoped>
  .page-header{
    width: 100%;
  }
</style>
