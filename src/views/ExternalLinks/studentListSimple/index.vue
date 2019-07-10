<template>
  <div class="preview">
    <div class="blockquote">
      <div class="ztc">
        <div class="titile">
          <div v-html="msg"></div>
          <div class="row" style="padding:20px;" v-if="data">
            <a-button-group>
              <a-button type="primary" @click="goBack(data[0])">
                <a-icon type="left" />返 回
              </a-button>
              <a-button type="primary" @click="simpleResult(data[0])">
                重新评估
                <a-icon type="right" />
              </a-button>
            </a-button-group>

            <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
              <div slot="action" slot-scope="text, record">
                <a @click="checkResult(record)">查看结果</a>
                <!-- <a-divider type="vertical" />
                <a @click="simpleResult(record)">重新评估</a>-->
                <!-- <a @click="viewinfo(record)">查看试卷内容</a> -->
              </div>
            </a-table>
          </div>
        </div>
        <div class="dfoot">技术提供</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'
const columns = [
  {
    title: '问卷名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
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
  data() {
    return {
      msg: '单个问卷结果列表',
      columns,
      data: [],
      pagination: {},
      current: 1,
      pageSize: 10,
      id: null,
      loading: false,
      qtDetail: null
    }
  },
  computed: {},
  async mounted() {
    await this.init((this.current - 1) * this.pageSize, this.pageSize)
    let params = {
      id: this.$route.query.id
    }
    this.qtDetail = await api.qtDetail.Get(params)
  },
  methods: {
    checkResult(record) {
      this.$router.push({ path: '/ExternalLinks/result', query: { id: record.id, batchNumber: record.batchNumber } })
    },
    simpleResult(record) {
      this.$router.push({ path: '/ExternalLinks/repeatwj', query: { qtDetailId: record.id } })
    },
    viewinfo(record) {},
    goBack() {
      window.location.href = this.$store.state.ExternalLinks.callBack
    },
    async init(Start, Length) {
      this.loading = true
      let id = null
      let studentIdCard = null
      let mbId = null
      if (this.$route.query.id) {
        id = this.$route.query.id
      }
      if (this.$route.query.studentIdCard) {
        studentIdCard = this.$route.query.studentIdCard
      }
      if (this.$route.query.mbId) {
        mbId = this.$route.query.mbId
      }
      if (id == null && (studentIdCard == null || mbId == null)) {
        this.$message.error(`无效的地址参数无法获取数据`)
        return
      }
      let form = {
        id: id,
        studentIdCard: studentIdCard,
        mbId: mbId
      }

      let data = await api.qt.SelectResultSimple(form)

      const pagination = { ...this.pagination }
      pagination.total = data.list.Length
      this.loading = false
      this.data = data.list
      this.pagination = pagination
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
</style>

