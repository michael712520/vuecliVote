<template>
  <div>
    <div v-for="(item ,index) in datas" :key="index">
      <a-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
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
      datas: []
    }
  },
  methods: {},
  watch: {
    dataSet: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          this.data = nVal
        }
      },
      deep: true
    }
  }
}
</script>
<style>
</style>
