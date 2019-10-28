<template>
  <div>
    <h1>Впорос:</h1>
    <p>{{question.text}}</p>
    <el-button @click.native=alertAnswer >Посмотреть ответ</el-button>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component({})
export default class Questions extends Vue {
  question = [];

  answer = '';

  alertAnswer() {
    this.$alert(this.answer, 'Ответ', {
      confirmButtonText: 'OK',
    });
  }

  mounted() {
    this.id = this.$route.params.id;
    this.ind = this.id - 1;
    axios.get(`http://localhost:9090/question/${this.id}`).then((response) => {
      this.question = response.data[this.ind];
      this.answer = response.data.answer;
    });
  }
}
</script>

<style scoped>

</style>
