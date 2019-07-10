<template>
  <div class="preview">
    <div class="blockquote">
      <div class="ztc">
        <div class="titile" v-if="model">
          <div v-html="msg"></div>
          <ldt :data="this.model.qtLatitudeDetail"></ldt>
          <div class="row divc" v-for="(item,index) in this.model.qtLatitudeDetail">
            <div>
              {{item.latitudeDetail.name}}
              <a-tag color="blue">{{item.score}}</a-tag>
            </div>
          </div>
          <div class="row" style="padding:20px;"></div>
        </div>
        <div class="dfoot">技术提供</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'
import ldt from './../result/ldt.vue'
const columns = [
  {
    title: '问卷结果',
    dataIndex: 'title',
    key: 'title'
  },
  // {
  //   title: '系数（百分比）',
  //   dataIndex: 'coefficient',
  //   key: 'coefficient'
  // },
  // {
  //   title: '基础分数',
  //   dataIndex: 'baseScore',
  //   key: 'baseScore'
  // },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  props: {},
  components: { ldt },
  data() {
    return {
      msg: '结果页',
      data: [],
      current: 1,
      pageSize: 10,
      total: 10,
      columns,
      model: null
    }
  },
  computed: {},
  async mounted() {
    await this.init()
  },
  methods: {
    checkResult(record) {},
    viewinfo(record) {},
    async init() {
      let form = {
        studentIdCard: this.$route.query.studentIdCard,
        mbDetailId: this.$route.query.mbDetailId
      }

      console.log(' api.qtDetail', api.qtDetail)
      
      let data = await api.qt.GetByStudentAndMbDetailId(form)
      this.model = data
      console.log('data', data)
    }
  },
  watch: {}
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
.divc {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 5px;
  padding-right: 20px;
  text-align: left;
}
</style>

