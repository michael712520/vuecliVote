<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="任务添加"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item label="名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['name', {rules:[{required: true, message: '请输入名称'}]}]"/>
      </a-form-item>
      <!-- <a-form-item label="分数" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['score', {rules:[{required: false, message: '请输入分数'}]}]"/>
      </a-form-item>
      <a-form-item label="系数（百分比）" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['coefficient', {rules:[{required: false, message: '请输入系数（百分比）'}]}]"/>
      </a-form-item>
      <a-form-item label="基础分数" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['baseScore', {rules:[{required: false, message: '请输入基础分数'}]}]"/>
      </a-form-item>
      <a-form-item label="排序" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['sort', {rules:[{required: false, message: '请输入基础排序'}]}]"/>
      </a-form-item>-->
    </a-form>
  </a-modal>
</template>

<script>
import api from '@/api'
export default {
  name: 'TaskFormTwo',
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },

      visible: false,
      form: this.$form.createForm(this),
      record: {}
    }
  },
  methods: {
    add(record) {
      this.visible = true
      console.log('form', this.form)
      if (record) {
        setTimeout(() => {
          this.form.setFieldsValue({
            name: record.name,
            score: record.score,
            coefficient: record.coefficient,
            baseScore: record.baseScore,
            sort: record.sort
          })
        }, 0)
      } else {
        setTimeout(() => {
          this.form.setFieldsValue({
            name: '',
            score: '',
            coefficient: '',
            baseScore: '',
            sort: ''
          })
        }, 0)
      }

      this.record = record
    },
    edit(record) {
      const {
        form: { setFieldsValue }
      } = this
      this.visible = true
      this.$nextTick(() => {
        setFieldsValue({ taskName: 'test' })
      })
    },
    handleSubmit() {
      const {
        form: { validateFields }
      } = this
      this.visible = true
      let _api = api
      validateFields((errors, values) => {
        if (!errors) {
          let model = {
            id: this.record && this.record.id ? this.record.id : null,
            name: values.name,
            mbDetailId: this.$store.state.question.item.id
          }
          
          this.visible = false
          api.latitudeDetailItem.Add(model).then(d => {
            this.$store.commit('latitudeDetail/ItemRefresh')
          })
        }
      })
    }
  }
}
</script>
