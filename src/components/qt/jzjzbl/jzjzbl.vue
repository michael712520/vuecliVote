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
      <tr v-for="(ditem,dindex) in Jzjzbl.left" :key="dindex">
        <th>
          <div style="margin-ruight:10px">{{Jzjzbl.left[dindex]}}</div>
        </th>
        <td>
          <component
            @updateSelectResult="updateSelectResult(dindex,$event)"
            :is="dataltb.name"
            :dataSet="dataSet"
          ></component>
        </td>
        <th>
          <div style="margin-ruight:10px">{{Jzjzbl.right&&Jzjzbl.right[i]&&Jzjzbl.right[dindex]}}</div>
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
      },
      SelectResult: {},
      Jzjzbl: {}
    }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    updateSelectResult(index, e) {
      
      this.SelectResult[index] = e
      if (this.Jzjzbl.left.length == Object.keys(this.SelectResult).length) {
        this.$emit('updateSelectResult', { index: this.index, SelectResult: { list: this.SelectResult, flag: true } })
      } else {
        this.$emit('updateSelectResult', { index: this.index, SelectResult: { list: this.SelectResult, flag: false } })
      }
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && JSON.parse(nVal.bcontemt)) {
            let data = JSON.parse(nVal.bcontemt)
            if (data) {
              this.dataSet = data.dataSet
              this.Jzjzbl = data.Jzjzbl
              console.log('this.Jzjzbl', this.Jzjzbl)
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

