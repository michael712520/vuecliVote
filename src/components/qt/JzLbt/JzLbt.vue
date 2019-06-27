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
    <table v-if="dataltb&&dataltb.data&&dataSet&&dataSet.length>0">
      <tr>
        <th></th>
        <th style="display:flex;flex-direction:row">
          <div
            style="margin-left:10px;width:22px;height22px;text-align:center"
            v-for="(item,index) in dataSet"
            :key="index"
          >{{item.score}}</div>
        </th>
      </tr>
      <tr v-for="(ditem,dindex) in zbltest.left" :key="dindex">
        <th>
          <div style="margin-ruight:10px">{{zbltest.left[dindex]}}</div>
        </th>
        <td>
          <component :is="dataltb.name" :dataSet="dataSet"></component>
        </td>
        <th>
          <div style="margin-ruight:10px">{{zbltest.right&&zbltest.right[i]&&zbltest.right[dindex]}}</div>
        </th>
      </tr>
    </table>
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

