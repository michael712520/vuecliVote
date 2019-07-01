<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div style="display:flex;margin-bottom:10px">
      职业：
      <a-select style="width: 240px" @change="selectChange">
        <a-select-option
          v-for="(item ,index) in dataSet"
          :key="index"
          :value="item.value"
        >{{item.inputVal}}</a-select-option>
      </a-select>
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
    return { msg: '标题' }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    selectChange(e) {
      this.$emit('updateSelectResult', {
        index: this.index,
        SelectResult: { value: e, flag: true }
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

