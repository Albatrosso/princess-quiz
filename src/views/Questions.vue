<template>
  <div class="page">
    <Header></Header>
    <div class="container">
      <div class="content">
        <h1>Простые вопросы</h1>
        <section class="question-cards--simple">
          <el-card
                  v-for="simple in question.simple"
                  :key="simple.id"
                  @click.native="goToCard(simple.id)">
            {{simple.cost}}
          </el-card>
        </section>
        <h1>Средние вопросы</h1>
        <section class="question-cards--medium">
          <el-card
                  v-for="medium in question.medium"
                  :key="medium.id"
                  @click.native="goToCard(medium.id)">
            {{medium.cost}}
          </el-card>
        </section>
        <h1>Сложные вопросы</h1>
        <section class="question-cards--hard">
          <el-card
                    v-for="hard in question.hard"
                    :key="hard.id"
                    @click.native="goToCard(hard.id)">
            {{hard.cost}}
          </el-card>
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
  question = [];


  goToCard(id) {
    console.log(id);
    console.log(this.question);
    this.$store.dispatch('setQuestion', this.question);
    this.$router.push({ path: `/question/${id}` });
  }

  mounted() {
    axios.get('http://localhost:9090/question').then((response) => {
      this.question = response.data;
    });
  }
}
</script>

<style lang="scss">

</style>
