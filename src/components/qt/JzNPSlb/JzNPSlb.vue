<template>
  <a-card>
    <div class="titile">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="titile">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div
      v-if="dataltb&&dataltb.data&&this.dataSet&&this.dataSet.length>0"
      style="padding:20px;display:flex;flex-direction:row"
    >
      <div>{{dataSet&&dataSet[0].inputVal}}</div>
      <component :key="index" :is="dataltb.name" :dataSet="this.dataSet"></component>
      <div>{{dataSet&&dataSet[dataSet.length-1].inputVal}}</div>
    </div>
  </a-card>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'
import yx from '@/components/qt/com/lbt/yx'
import wjx from '@/components/qt/com/lbt/wjx'
import ding from '@/components/qt/com/lbt/ding'
import sz from '@/components/qt/com/lbt/sz'
import fx from '@/components/qt/com/lbt/fx'
import api from '@/api'
export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  components: { yx, wjx, ding, sz, fx },
  data() {
    return { msg: '标题', dataSet: [] }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {}
  },
  watch: {
     handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && Array.isArray(JSON.parse(nVal.bcontemt))) {
            let data = JSON.parse(nVal.bcontemt)
            if (data) {
              this.dataSet = data.dataSet
              this.jzjzbl = data.jzjzbl
            }
            // this.dataSet = JSON.parse(nVal.bcontemt)
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
    },
    leftTest: {
      handler(nVal, oVal) {}
    },
    rightTest: {
      handler(nVal, oVal) {}
    }
  }
}
</script>
<style scoped>
</style>

