<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <a-form :form="form" @onValuesChange="onValuesChange(props, values)">
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
import { debug } from 'util'

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
      dataSet: [],
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
          xingming: this.$form.createFormField({
            value: ''
          }),
          bumeng: this.$form.createFormField({
            value: ''
          }),
          yuangong: this.$form.createFormField({
            value: ''
          })
        }
      },
      onValuesChange: (props, values) => {
        if (values.hasOwnProperty('xingming')) {
          this.SelectResult.xingming = values.xingming
        } else if (values.hasOwnProperty('bumeng')) {
          this.SelectResult.bumeng = values.bumeng
        } else if (values.hasOwnProperty('yuangong')) {
          this.SelectResult.bumeng = values.bumeng
        }

        if (
          this.SelectResult.hasOwnProperty('xingming') &&
          this.SelectResult.hasOwnProperty('bumeng') &&
          this.SelectResult.hasOwnProperty('yuangong')
        ) {
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
    divclick(index) {},
    onValuesChange(props, values) {}
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

