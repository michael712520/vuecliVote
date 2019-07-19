<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、22
      <div v-html="msg"></div>
    </div>
    <a-form :form="form">
      <a-form-item :label="dataSet[0].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input
          v-decorator="[dataSet[0].inputVal, {rules: [{required: true, pattern: /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/, message: '请填写正确的手机号码！'}]}]"
        />
      </a-form-item>
    </a-form>
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
      labelCol: {
        xs: { span: 12 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 8 }
      },
      msg: '标题',
      form: null,
      SelectResult: {}
    }
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        //
        // this.$emit('change', changedFields)
      },
      mapPropsToFields: () => {
        return {}
      },
      onValuesChange: (props, values) => {
        let key = Object.keys(values)[0]
        if (values.hasOwnProperty(key)) {
          this.SelectResult[key] = values[key]
        }
        console.log('this.SelectResult', this.SelectResult)
        console.log('this.dataSet', Object.keys(this.SelectResult).length)

        if (Object.keys(this.SelectResult).length === this.dataSet.length) {
          console.log(' 111', this.dataSet.length)
          this.$emit('updateSelectResult', {
            index: this.index,
            SelectResult: { value: this.SelectResult, flag: true }
          })
        }
      }
    })
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

