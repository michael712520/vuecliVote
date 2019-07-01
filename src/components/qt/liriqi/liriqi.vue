<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div style="display:flex">
      {{dataSet&&dataSet[0]&&dataSet[0].inputVal}}&nbsp;&nbsp;&nbsp;&nbsp;
      <a-date-picker @change="onChange" />
    </div>
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
    return { msg: '日期' }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    onChange(date, dateString) {
      console.log(date, dateString)
      this.$emit('updateSelectResult', {
        index: this.index,
        SelectResult: { value: dateString, flag: true }
      })
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && Array.isArray(JSON.parse(nVal.bcontemt))) {
            this.dataSet = JSON.parse(nVal.bcontemt)
          }
          this.msg = nVal.title
          this.bjdisplay = nVal.display
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
</style>

