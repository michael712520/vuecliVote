<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <a-form :form="form" v-for="(item,index) in dataSet" :key="index">
        <a-form-item :label="item.inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="[item.value, {rules:item.rules }]"/>
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
    return { msg: '标题',  labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },   form: this.$form.createForm(this)}
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

