<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px;word-wrap:break-word">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div style="display:flex;margin-bottom:10px;flex-direction:row">
      <a-checkbox-group @change="onCheckAllChange">
        <a-row v-for="(item ,index) in dataSet " :key="index">
          <a-checkbox :style="radioStyle" :value="item.value">{{item.inputVal}}</a-checkbox>
        </a-row>
      </a-checkbox-group>
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
      msg: '标题',
      radioStyle: {
        display: 'block',
        height: '30px',
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'row'
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    onCheckAllChange(e) {
      this.$emit('updateSelectResult', { index: this.index, SelectResult: { value: e, flag: true } })
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        console.log('dataInfo', nVal)
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

