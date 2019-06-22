<template>
  <div class="clearfix">
    <a-upload
      :action="actionUrl"
      listType="picture-card"
      :fileList="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 3">
        <a-icon type="plus"/>
        <div class="ant-upload-text">上传图片</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage">
    </a-modal>
  </div>
</template>
<script>
import defaultSettings from '@/config/defaultSettings'
/* eslint-disable */
// const baseUrl = 'http://192.168.70.47:9003'

export default {
  props: {
    imgs: Array
  },
  model: {
    prop: 'imgs',
    event: 'returnBack'
  },
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      actionUrl: defaultSettings.baseUrl + '/api/streaming',
      confirmLoading: false,
      aModelVisible: false
    }
  },
  methods: {
    handleCancel() {
      this.previewVisible = false
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    },
    showModal() {
      this.aModelVisible = true
    },
    aModelHandleOk(e) {
      let imgs = []

      this.fileList.map(d => {
        return d.response.map(e => {
          imgs.push(e.fileId)
        })
      })
      console.log('this.fileList', imgs)
      this.$emit('returnBack', imgs)
      this.aModelVisible = false
    },
    aModelHandleCancel(e) {
      this.aModelVisible = false
    }
  },
  watch: {
    imgs: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
        }
      },
      immediate: true,
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
