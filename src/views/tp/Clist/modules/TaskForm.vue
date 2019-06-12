<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="任务添加"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item label="标题" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-decorator="['title', {rules:[{required: true, message: '请输入任务标题'}]}]"/>
      </a-form-item>

      <a-form-item label="内容描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-textarea v-decorator="['content']"></a-textarea>
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
      form: this.$form.createForm(this)
    }
  },
  methods: {
    add() {
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
          let model = { title: values.title, content: values.content }

          api.tp.SaveUpdate(model).then()
        }
      })
    }
  }
}
</script>
