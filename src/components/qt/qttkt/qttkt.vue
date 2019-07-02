<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <a-form :form="form">
        <a-form-item :label="dataSet[0].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['ktt', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
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
        return {
          ktt: this.$form.createFormField({
            value: ''
          })
        }
      },
      onValuesChange: (props, values) => {
        if (values.hasOwnProperty('ktt')) {
          this.SelectResult.ktt = values.ktt
        }

        if (this.SelectResult.hasOwnProperty('ktt')) {
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

