<template>
  <div>
    <a-card>
      <div class="titile">
        {{(index+1)}}、
        <div v-html="titile"></div>
      </div>

      <a-checkbox-group @change="onChangecheckbox">
        <a-row v-for="(item ,index) in datas " :key="index">
          <a-checkbox :value="item.value">{{item.inputVal}}</a-checkbox>
        </a-row>
      </a-checkbox-group>
    </a-card>
  </div>
</template>
<script>
import defaultSettings from '@/config/defaultSettings'
export default {
  props: {
    dataInfo: Object,
    titile: String,
    index: Number
  },
  data() {
    return {
      datas: [],
      value: '',
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: { onChange(e) {}, onChangecheckbox(checkedValues) {} },
  watch: {
    dataSet: {
      handler(nVal, oVal) {
        if (Array.isArray(nVal)) {
          this.datas = nVal
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style>
.acard {
  max-width: 400px;
}
.acard .ant-card-body {
  padding-left: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.titile {
  display: flex;
  flex-direction: row;
}
</style>

