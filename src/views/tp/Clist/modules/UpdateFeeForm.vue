<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="问卷金额"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item label="金额" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input-number
          :min="0"
          :max="100000"
          :step="0.2"
          v-decorator="['fee', {rules:[{required: true, message: '请输入金额'}]}]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import api from '@/api'
export default {
  name: 'TaskForm',
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
      record: null
    }
  },
  methods: {
    add(record) {
      this.record = record
      if (record) {
        setTimeout(() => {
          this.form.setFieldsValue({
            fee: record.fee
          })
        }, 0)
      } else {
        setTimeout(() => {
          this.form.setFieldsValue({
            fee: 0
          })
        }, 0)
      }
      this.visible = true
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
          let model = { id: this.record.id, fee: values.fee }
          api.tp.UpdateFree(model).then(d => {
            this.form.setFieldsValue({
              fee: 0
            })
            this.visible = false
            this.$emit('refresh',true)
          })
        }
      })
    }
  }
}
</script>
