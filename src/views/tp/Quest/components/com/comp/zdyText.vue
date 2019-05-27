<template>
  <a-modal
    title="文本描述"
    :visible="aModelVisible"
    @ok="aModelHandleOk"
    :confirmLoading="confirmLoading"
    @cancel="aModelHandleCancel"
  >
    <a-textarea placeholder="内容" v-model="content" :rows="4"/>
  </a-modal>
</template>
<script>
export default {
  props: {
    explain: String
  },
  model: {
    prop: 'explain',
    event: 'returnBack'
  },
  data() {
    return {
      aModelVisible: false,
      confirmLoading: false,
      content: '说明'
    }
  },
  methods: {
    showModal() {
      this.aModelVisible = true
    },
    aModelHandleOk(e) {
      this.$emit('returnBack', this.content)
      this.aModelVisible = false
    },
    aModelHandleCancel(e) {
      this.aModelVisible = false
    }
  },
  watch: {
    content: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          this.$emit('updateitem', { ...nVal })
          if (this.flage != 1) {
          }
        }
      },
      // immediate: true,
      deep: true
    }
  }
}
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
