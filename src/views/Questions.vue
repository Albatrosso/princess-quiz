<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import { Vue, Component} from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';

  @Component
  export default class Questions extends Vue {

};
</script>
