<template>
  <div></div>
</template>
<script>
import defaultSettings from '@/config/defaultSettings'

export default {
  props: {
    dataSet: Array
  },
  data() {
    return {
      datas: [],
      acardheadStyle: 'acardheadStyle',
      acardbodyStyle: 'acardbodyStyle',
      actionUrl: defaultSettings.baseUrl + '/api/streaming'
    }
  },
  methods: {
    Onclickdx(item, index) {
      item.checked = 'checked'
      this.$emit('Onclickdx', item)
    }
  },
  watch: {
    dataSet: {
      handler(nVal, oVal) {
        if (Array.isArray(nVal)) {
          this.datas = nVal
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style>
.acard {
  max-width: 400px;
}
.acard .ant-card-body {
  padding-left: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>

