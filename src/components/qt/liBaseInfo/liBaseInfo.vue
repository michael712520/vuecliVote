<template>
  <a-card>
    <div class="titile">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <a-form :form="form">
        <a-form-item :label="dataSet[0].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['xingming', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
          />
        </a-form-item>
        <a-form-item :label="dataSet[1].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['bumeng', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
          />
        </a-form-item>
        <a-form-item :label="dataSet[2].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['yuangong', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
          />
        </a-form-item>
      </a-form>
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
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      dataSet: []
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {}
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

