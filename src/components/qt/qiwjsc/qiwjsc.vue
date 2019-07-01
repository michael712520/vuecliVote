<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <imgUpload
        ref="imgUpload"
        v-model="imgs"
        @change="handleChange"
        name="file"
        :multiple="true"
        action="https://api.iu1314.com/api/streaming"
        :headers="headers"
      ></imgUpload>
    </div>
  </a-card>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'
import imgUpload from '../com/imgUpload'

export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  components: { imgUpload },
  data() {
    return {
      msg: '标题',
      imgs: [],
      headers: {
        authorization: 'authorization-text'
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    handleChange(info) {
      debugger
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    }
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

