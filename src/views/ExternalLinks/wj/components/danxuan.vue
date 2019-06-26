<template>
  <div>
    <a-card>
      <div class="titile">
        {{(index+1)}}、
        <div v-html="titile"></div>
      </div>

      <a-radio-group @change="onChange" v-model="value">
        <a-radio
          v-for="(item ,index) in datas"
          :key="index"
          :style="radioStyle"
          :value="item.value"
          size="large"
        >{{item.inputVal}}</a-radio>
      </a-radio-group>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    dataInfo: Object,
    index: Number
  },
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted: {},
  methods: {
    onChange(e) {}
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
          if (nVal.latitudeDetailIds && nVal.latitudeDetailIds.length > 0) {
            this.CascaderData = JSON.parse(nVal.latitudeDetailIds)
          }
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>
.titile {
  display: flex;
  flex-direction: row;
}
</style>
