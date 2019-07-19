<template>
  <div>
    <!-- <layHeader></layHeader> -->
    <div class="preview">
      <div class="blockquote">
        <div class="ztc">
          <div>
            <h1 v-if="this.title" class="h1cclass">{{this.title}}</h1>
            <div class="row" v-html="content">{{content}}</div>
            <div v-for="(item,index) in ListComponent" :key="index">
              <component
                :is="item.comp"
                :dataInfo="item.dataInfo"
                :index="index"
                @complete="complete(item,index,$event)"
                @updateSelectResult="updateSelectResult($event)"
              ></component>
            </div>
          </div>
          <div v-if="false" style="display:flex;flex-direction:row;justify-content:center">
            <a-button>下一页</a-button>
          </div>
          <div class="row">
            <a-button size="large" type="primary" @click="clickSub">提交</a-button>
          </div>
        </div>
        <div class="dfoot">技术提供</div>
      </div>
    </div>
  </div>
</template>

<script>
import layHeader from './components/layHeader'
import danxuan from '@/components/qt/danxuan/danxuan'
import duoxuan from '@/components/qt/duoxuan/duoxuan'
import Jzjzbl from '@/components/qt/Jzjzbl/Jzjzbl'
import JzLbt from '@/components/qt/JzLbt/JzLbt'
import JzNPSlb from '@/components/qt/JzNPSlb/JzNPSlb'
import liBaseInfo from '@/components/qt/liBaseInfo/liBaseInfo'
import lihangye from '@/components/qt/lihangye/lihangye'
import liName from '@/components/qt/liName/liName'
import linianlingduan from '@/components/qt/linianlingduan/linianlingduan'
import liriqi from '@/components/qt/liriqi/liriqi'
import lishijian from '@/components/qt/lishijian/lishijian'
import lishouji from '@/components/qt/lishouji/lishouji'
import lixingbie from '@/components/qt/lixingbie/lixingbie'
import lizhiye from '@/components/qt/lizhiye/lizhiye'
import pfdanxuan from '@/components/qt/pfdanxuan/pfdanxuan'
import pfduoxuan from '@/components/qt/pfduoxuan/pfduoxuan'
import qiwjsc from '@/components/qt/qiwjsc/qiwjsc'
import qtdjxl from '@/components/qt/qtdjxl/qtdjxl'
import qthdt from '@/components/qt/qthdt/qthdt'
import qtjztk from '@/components/qt/qtjztk/qtjztk'
import qtpaixu from '@/components/qt/qtpaixu/qtpaixu'
import qttkt from '@/components/qt/qttkt/qttkt'
import pageduanluo from '@/components/qt/pageduanluo/pageduanluo'
import api from '@/api'
import { debug, debuglog } from 'util'
export default {
  props: {},
  components: {
    layHeader,
    danxuan,
    duoxuan,
    Jzjzbl,
    JzLbt,
    JzNPSlb,
    liBaseInfo,
    lihangye,
    liName,
    linianlingduan,
    liriqi,
    lishijian,
    lishouji,
    lixingbie,
    lizhiye,
    pfdanxuan,
    pfduoxuan,
    qiwjsc,
    qtdjxl,
    qthdt,
    qtjztk,
    qtpaixu,
    qttkt,
    pageduanluo
  },
  data() {
    return {
      title: null,
      content: null,
      page: {
        start: 0,
        length: 0
      },
      model: null
    }
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.ExternalLinks.listData
    },
    refresh: function() {
      return this.$store.state.ExternalLinks.refresh
    }
  },
  mounted() {
    var callBack = this.$route.query.callBack
    callBack = decodeURIComponent(callBack)
    console.log('callBack', callBack)
    this.$store.commit('ExternalLinks/callBack', callBack)
    this.init().then()
  },
  methods: {
    updateSelectResult(data) {
      this.$store.commit('ExternalLinks/updateSelectResult', data)
    },
    async clickSub() {
      let data = this.$store.state.ExternalLinks.listData

      console.log('data', data)
      for (let i = 0; i < data.length; i++) {
        let model = data[i]
        if (model.dataInfo && model.dataInfo.type === 'pageduanluo') {
        } else if (
          model.dataInfo &&
          JSON.parse(model.dataInfo.selectResult) &&
          JSON.parse(model.dataInfo.selectResult).flag === true
        ) {
          // window.location.href = this.model.callBack + `&&result=1`
        } else {
          this.$message.error(`行号${i + 1}没有填写值清正确填写`)
          return
        }
      }

      let list = data.map(d => {
        return d.dataInfo
      })
      console.log('{ list: list }', JSON.stringify({ list: list }))
      let hbk = []
      list.forEach(element => {
        hbk.push({ id: element.id, selectResult: element.selectResult })
      })
      await api.tp.UpdateSelectResult(hbk)

      window.location.href = this.$store.state.ExternalLinks.callBack + '?result=1'
    },
    async init() {
      let params = {
        id: this.$route.query.qtDetailId
      }
      let data = await api.qtDetail.Get(params)
      if (data.state === 1) {
        this.$store.commit('ExternalLinks/qtDetail', data)
        this.$router.push({ path: '/ExternalLinks/studentListSimple', query: { id: data.id } })
        return
      }
      this.title = data.title
      this.content = data.content
      this.model = data
      if (data && data.qtDetailItem && data.qtDetailItem.length > 0) {
        let list = data.qtDetailItem.map(d => {
          // if (d.type == 'JzNPSlb') {
          //   console.log('d.type', d)
          //   return d
          // }
          return d
        })

        this.$store.commit('ExternalLinks/updateListData', list)
      } else {
        this.$store.commit('ExternalLinks/updateListData', [])
      }
    },
    complete(item, index, $event) {}
  },
  watch: {
    refresh(nVal, oVal) {
      this.init()
    }
  }
}
</script>

<style scoped>
.preview {
  display: flex;
  background-color: #f3f6fa;
  background-image: url('../../../../public/rimg/dream-seeker-bg@2x.jpg');
  background-repeat: repeat-x;
  background-size: 1px 100%px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.blockquote {
  display: flex;
  flex-direction: column;
  width: 920px;
  padding-top: 120px;
  margin: 0 auto;
  background-image: url('../../../../public/rimg/dream-seeker@2x.jpg');
  background-size: 910px 144px;
  min-height: 800px;
  background-repeat: no-repeat;
}
.ztc {
  font-size: 15px;
  color: #333333;
  background-color: #fff;
  width: 100%;
  min-height: 500px;
  border-radius: 1px;
  box-shadow: 0 0 15px 0 rgba(29, 50, 71, 0.1);
}
.dfoot {
  color: #666666;
  font-family: Tahoma, 宋体;
  border-top: 1px #f3f3f3 solid;
  background-color: #fff;
  width: 100%;
  min-height: 100px;
}
.h1cclass {
  padding: 20px;
}
</style>
