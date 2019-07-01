<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <a-form :form="form">
      <a-form-item :label="dataSet[0].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input
          v-decorator="['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
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
        // debugger
        // this.$emit('change', changedFields)
      },
      mapPropsToFields: () => {
        debugger
        return {
          name: this.$form.createFormField({
            value: ''
          })
        }
      },
      onValuesChange: (props, values) => {
        this.SelectResult.push(values)
        if (values.hasOwnProperty('name')) {
          this.SelectResult.name = values.name
        }

        if (this.SelectResult.hasOwnProperty('name')) {
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

