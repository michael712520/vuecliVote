<template>
  <div>
    <div v-for="(item ,index) in datas">
      <a-card class="acard">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        >
        <input @click="Onclickdx(item ,index)" name="danxuan" type="radio" :value="item.value">
        <a-card-meta :title="item.inputVal" :description="item.explain"></a-card-meta>
      </a-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataSet: Array
  },
  data() {
    return {
      datas: [],
      acardheadStyle: 'acardheadStyle',
      acardbodyStyle: 'acardbodyStyle'
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
          debugger
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

