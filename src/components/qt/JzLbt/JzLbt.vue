<template>
  <a-card>
    <div class="titile" style="display:flex">
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
      <template v-if="jzjzbl">
        <tr v-for="(ditem,dindex) in jzjzbl.left" :key="dindex">
          <th>
            <div style="margin-ruight:10px">{{jzjzbl.left[dindex]}}</div>
          </th>
          <td>
            <component :is="dataltb.name" :dataSet="dataSet"></component>
          </td>
          <th>
            <div style="margin-ruight:10px">{{jzjzbl.right&&jzjzbl.right[i]&&jzjzbl.right[dindex]}}</div>
          </th>
        </tr>
      </template>
    </table>
  </a-card>
</template>
<script>
import { setTimeout } from 'timers'
import yx from '@/components/qt/com/lbt/yx'
import wjx from '@/components/qt/com/lbt/wjx'
import ding from '@/components/qt/com/lbt/ding'
import sz from '@/components/qt/com/lbt/sz'
import fx from '@/components/qt/com/lbt/fx'
import api from '@/api'
import { debug } from 'util'
export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  components: { yx, wjx, ding, sz, fx },
  data() {
    return {
      msg: '标题',
      dataSet: [],
      dataltb: {
        name: 'yx',
        data: ['yx', 'wjx', 'ding', 'sz', 'fx']
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {}
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && JSON.parse(nVal.bcontemt)) {
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

