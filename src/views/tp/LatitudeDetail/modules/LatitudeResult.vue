<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="任务添加"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <div class="row" style="padding:20px;">
      <div class="row">纬度:{{record.name}}</div>
      <div class="row ty">
        <div>得分范围:</div>
        <a-input-group style="width:100px;margin-left:10px;margin-right:10px">
          <a-input style="width: 50%" defaultValue="0" />
          <a-input style="width: 50%" defaultValue="0" />
        </a-input-group>
        <div>总分:</div>
      </div>
    </div>
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
      record: {}
    }
  },
  methods: {
    add(record) {
      this.record = record
      this.visible = true
    },
    edit(record) {},
    handleSubmit() {}
  }
}
</script>
<style lang="stylus" scoped>
.ty {
  display: flex;
  flex-direction: row;
  padding: 10px;
  line-height: 30px;
}
</style>

