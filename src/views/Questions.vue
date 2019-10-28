<template>
  <div class="page">
    <Header></Header>
    <div class="container">
      <div class="content">
        <h1>Простые вопросы</h1>
        <section class="question-cards--simple">
          <el-card v-for="simple in simpleQuestion" :key="simple.id">{{simple.cost}}</el-card>
        </section>
        <h1>Средние вопросы</h1>
        <section class="question-cards--medium">
          <el-card v-for="medium in mediumQuestion" :key="medium.id">{{medium.cost}}</el-card>
        </section>
        <h1>Сложные вопросы</h1>
        <section class="question-cards--hard">
          <el-card  v-for="hard in hardQuestion" :key="hard.id">{{hard.cost}}</el-card>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import Header from '@/components/header.vue';

@Component({
  components: { Header },
})
export default class Questions extends Vue {
  simpleQuestion = [];

  mediumQuestion =[];

  hardQuestion = [];

  mounted() {
    axios.get('http://localhost:9090/question').then((response) => {
      this.simpleQuestion = response.data.simple;
      this.mediumQuestion = response.data.medium;
      this.hardQuestion = response.data.hard;
    });
  }
}
</script>

<style lang="scss">

</style>
