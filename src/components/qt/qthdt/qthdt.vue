<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <div
        v-if="dataSet&&dataSet.length>0"
        style="padding:20px;display:flex;justify-content: space-between"
      >
        <div>{{dataSet&&dataSet[0].inputVal}}</div>
        <div>{{dataSet&&dataSet[dataSet.length-1].inputVal}}</div>
      </div>
      <a-slider :marks="marks" id="test" :defaultValue="0" @change="onChange" />
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
    return {
      marks: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: {
          style: {
            color: '#f50'
          },
          label: <strong>100</strong>
        }
      },
      msg: '标题'
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    onChange(e) {
      this.$emit('updateSelectResult', { index: this.index, SelectResult: { value: e, flag: true } })
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

