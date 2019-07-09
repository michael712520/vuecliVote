<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="关联题目"
    @ok="handleSubmit"
    @cancel="visible = false"
  ></a-modal>
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
      record: {}
    }
  },
  methods: {
    add(record) {
      this.visible = true
      console.log('form', this.form)
      this.record = record
    },
    edit(record) {},
    handleSubmit() {}
  }
}
</script>
