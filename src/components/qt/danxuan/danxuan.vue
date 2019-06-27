<template>
  <a-card>
    <div class="titile">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <a-radio-group @>
      <div class="rdion" v-for="(item ,index) in dataSet" :key="index">
        <a-radio :key="index" :value="item.value" size="large">{{item.inputVal}}</a-radio>
        <br>
      </div>
    </a-radio-group>
  </a-card>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'

export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  data() {
    return { msg: '标题' }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {}
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {},
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
</style>

