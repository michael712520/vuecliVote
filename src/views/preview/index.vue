<template>
  <div>
    <layHeader></layHeader>
    <div class="preview">
      <div class="blockquote">
        <div class="ztc">
          <div>
            <h1 v-if="this.title" class="h1cclass">{{this.title}}</h1>
            <div class="row" v-html="content">{{content}}</div>

            <component
              v-for="(item,index) in ListComponent"
              :key="index"
              :is="item.comp"
              :dataInfo="item.dataInfo"
              :index="index"
              @complete="complete(item,index,$event)"
            ></component>
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
      }
    }
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.question.listData
    },
    refresh: function() {
      return this.$store.state.ExternalLinks.refresh
    }
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      let data = await api.tp.Get(this.$route.query.id)

      if (!data) {
        return
      }
      this.title = data.title
      this.content = data.content
      if (data && data.mbDetailItem && data.mbDetailItem.length > 0) {
        this.$store.commit('question/updateListData', data.mbDetailItem)
      } else {
        this.$store.commit('question/updateListData', [])
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
  background-image: url('../../../public/rimg/dream-seeker-bg@2x.jpg');
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
  background-image: url('../../../public/rimg/dream-seeker@2x.jpg');
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
