<template>
  <div class="preview">
    <div class="blockquote">
      <div class="ztc">
        <div class="titile">
          <!-- <div v-html="msg"></div> -->
          <div class="row" style="padding:20px;" v-if="data">
            <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
              <div slot="action" slot-scope="text, record">
                <a @click="checkResult(record)">查看结果</a>
                <a-divider type="vertical" />
                <!-- <a @click="del(record)">删除</a> -->
                <!-- <a-divider type="vertical" />
                <a @click="simpleResult(record)">重新评估</a>-->
                <!-- <a @click="viewinfo(record)">查看试卷内容</a> -->
              </div>
            </a-table>
          </div>
        </div>
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
    dataIndex: 'title',
    key: 'title'
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
      id: this.$route.query.qtDetailId
    }
    this.qtDetail = await api.qtDetail.Get(params)
  },
  methods: {
    checkResult(record) {
      this.$router.push({
        path: '/ExternalLinks/result',
        query: { id: record.qtDetailId, batchNumber: record.batchNumber }
      })
    },
    simpleResult(record) {
      this.$router.push({ path: '/ExternalLinks/repeatwj', query: { ...this.$route.query } })
    },
    del(record) {},
    viewinfo(record) {},
    goBack() {
      window.location.href = this.$route.query.callBack
    },
    async init(Start, Length) {
      this.loading = true
      let id = null
      let form = {
        Start: Start,
        Length: Length,
        mbDetailId: this.$route.query.mbDetailId
      }

      let data = await api.qt.SelectResult(form)

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
</style>

