<template>
  <div class="page">
    <div class></div>
    <div class></div>
    <div class></div>
    <div class></div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    showModal() {}
  },
  watch: {
    content: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
        }
      },
      // immediate: true,
      deep: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.page {
  display: flex;
  flex-direction: row;
}

.deselect1 {
  width: 22px;
  height: 22px;
  text-decoration: none;
  border-radius: 30px;
  color: #333;
  border: 1px solid #cacece;
  cursor: default;
  display: inline-block;
  background: #fff;
  line-height: 19px;
  margin-bottom: 6px;
  line-height: 22px;
  font-size: 14px;
}
</style>
 