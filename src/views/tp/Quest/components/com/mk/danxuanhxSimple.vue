<template>
  <div>
    <a-card>
      <div class="titile">
        {{(index+1)}}、
        <div v-html="titile"></div>
      </div>
      <div class="row">
        <a-radio-group buttonStyle="solid" @change="onChange" v-model="value">
          <a-radio-button
            v-for="(item ,index) in datas"
            :key="index"
            :style="radioStyle"
            :value="item.value"
            size="large"
          >{{item.inputVal}}</a-radio-button>
        </a-radio-group>
      </div>
    </a-card>
  </div>
</template>
<script>
import defaultSettings from '@/config/defaultSettings'
export default {
  props: {
    dataSet: Array,
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
        lineHeight: '30px',
        float: 'left',
        marginLeft: '5px'
      }
    }
  },
  methods: { onChange(e) {} },
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

