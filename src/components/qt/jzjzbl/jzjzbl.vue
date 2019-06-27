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
import yx from '@/views/tp/Quest/components/com/comp/lbt/yx'
import wjx from '@/views/tp/Quest/components/com/comp/lbt/wjx'
import ding from '@/views/tp/Quest/components/com/comp/lbt/ding'
import sz from '@/views/tp/Quest/components/com/comp/lbt/sz'
import fx from '@/views/tp/Quest/components/com/comp/lbt/fx'
import jztMCDisplay from '@/views/tp/Quest/components/com/comp/module/jztMCDisplay'
import api from '@/api'
export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  components: { yx, wjx, ding, sz, fx },
  data() {
    return { msg: '标题' }
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {}
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {},
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
</style>

