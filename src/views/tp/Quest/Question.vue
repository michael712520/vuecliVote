<template>
  <div>
    <div class="ss-cont clearfix" id="ss-cont">
      <left-menu></left-menu>
      <div class="survey editContainBox">
        <com-title></com-title>
        <!-- <div @click="testClick">asdasdasdasdasddasda</div> -->
        <div v-for="(item,index) in ListComponent" :key="index">
          <component
            :is="item.comp"
            :dataInfo="item.dataInfo"
            :index="index"
            @complete="complete(item,index,$event)"
            @rowOperate="rowOperate(item,index,$event)"
            :pageInfo="item.dataInfo&&item.dataInfo.pageInfo&&JSON.parse(item.dataInfo.pageInfo)"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import LeftMenu from './LeftMenu.vue'
import comTitle from './components/com/comTitle.vue'
import danxuan from './components/com/danxuan/danxuan.vue'
import duoxuan from './components/com/duoxuan/duoxuan.vue'
import danxuanhx from './components/com/danxuanhx.vue'
import liName from './components/com/liName/liName.vue'
import liBaseInfo from './components/com/liBaseInfo/liBaseInfo'
import lixingbie from './components/com/lixingbie/lixingbie'
import linianlingduan from './components/com/linianlingduan/linianlingduan'
import lishouji from './components/com/lishouji/lishouji.vue'
import liriqi from './components/com/liriqi/liriqi.vue'
import lishijian from './components/com/lishijian/lishijian.vue'
import lizhiye from './components/com/lizhiye/lizhiye'
import lihangye from './components/com/lihangye/lihangye.vue'
import pfdanxuan from './components/com/pfdanxuan/pfdanxuan.vue'
import pfduoxuan from './components/com/pfduoxuan/pfduoxuan.vue'
import JzLbt from './components/com/JzLbt/JzLbt.vue'
import JzNPSlb from './components/com/JzNPSlb/JzNPSlb.vue'
import Jzjzbl from './components/com/Jzjzbl/Jzjzbl.vue'
import qttkt from './components/com/qttkt/qttkt.vue'
import qtjztk from './components/com/qtjztk/qtjztk.vue'
import qiwjsc from './components/com/qiwjsc/qiwjsc.vue'
import qtpaixu from './components/com/qtpaixu/qtpaixu.vue'
import qthdt from './components/com/qthdt/qthdt.vue'
import qtdjxl from './components/com/qtdjxl/qtdjxl.vue'
import pageduanluo from './components/com/pageduanluo/pageduanluo.vue'

import api from '@/api'
import { debug } from 'util'
export default {
  name: 'question',
  components: {
    LeftMenu,
    comTitle,
    danxuan,
    duoxuan,
    danxuanhx,
    liName,
    liBaseInfo,
    lixingbie,
    linianlingduan,
    lishouji,
    liriqi,
    lishijian,
    lizhiye,
    lihangye,
    pfdanxuan,
    pfduoxuan,
    JzLbt,
    JzNPSlb,
    Jzjzbl,
    qttkt,
    qtjztk,
    qiwjsc,
    qtpaixu,
    qthdt,
    qtdjxl,
    pageduanluo
  },
  data() {
    return {
      compName: this.name,
      selectVal: 'danxuan'
    }
  },
  async mounted() {
    await this.init()
    this.$store.dispatch('latitudeDetail/getPicker', this.$route.query.id)
    setTimeout(this.tickFunction(), 1000 * 60 * 1)
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.question.listData
    },
    refresh: function() {
      return this.$store.state.question.refresh
    }
  },
  methods: {
    tickFunction() {
      this.$store.dispatch('question/ListSaveItem')
      this.$message.success('请点击编辑项的的完成编辑已方便自动保存全部数据', 4)
    },
    complete(item, index, $event) {
      this.$store.commit('question/listData', { comp: item.comp, dataInfo: $event })
    },
    selecthandleChange() {
      this.$store.commit('question/addListData', this.selectVal)
    },
    async rowOperate(item, index, event) {
      if (event == 3) {
        if (index >= 1) {
          let params = { detailId: this.$route.query.id, sort: index, type: 0 }
          await api.tp.UpdateMbDetail(params)
          await this.init()
        } else {
        }
      } else if (event == 4) {
        if (this.ListComponent.length - 1 > index) {
          let params = { detailId: this.$route.query.id, sort: index, type: 1 }
          console.log('UpdateMbDetail', params)
          await api.tp.UpdateMbDetail(params)
          await this.init()
        }
      }
    },
    handleChangeselect(value) {
      this.selectVal = value
    },
    async init() {
      let params = {
        detailId: this.$route.query.id
      }
      let data = await api.tp.GetListItem(params)

      if (data && data.length > 0) {
        data = data.map(d => {
          return d
        })

        this.$store.commit('question/updateListData', data)
      } else {
        this.$store.commit('question/updateListData', [])
      }
    },
    testClick(d) {
      this.$store.dispatch('question/ytyy')
    }
  },
  watch: {
    refresh(nVal, oVal) {
      this.init()
    }
  }
}
</script>
<style scoped>
.editContainBox {
  float: right;
}
</style>
