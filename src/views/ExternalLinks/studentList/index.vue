<template>
  <div class="preview">
    <div class="blockquote">
      <div class="ztc">
        <div class="titile">
          <div v-html="msg"></div>
          <div class="row" style="padding:20px;">
            <a-table :columns="columns" :dataSource="data" bordered>
              <div slot="action" slot-scope="text, record">
                <a @click="checkResult(record)">查看结果</a>
                <a-divider type="vertical" />
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
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
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
      msg: '学生列表',
      columns,
      data: [],
      pagination: {},
      current: 1,
      pageSize: 10,
      id: null,
      loading: false
    }
  },
  computed: {},
  async mounted() {
    await this.init((this.current - 1) * this.pageSize, this.pageSize)
  },
  methods: {
    checkResult(record) {
      
      this.$router.push({ path: '/ExternalLinks/result', query: { id: record.id, batchNumber: record.batchNumber } })
    },
    viewinfo(record) {},

    async init(Start, Length) {
      this.loading = true
      let id = null

      if (this.$route.query.studentIdCard) {
        id = this.$route.query.studentIdCard
      } else {
        this.loading = true
        this.$message.success('没有用户信息')
        return
      }
      let form = {
        studentIdCard: id,
        Start: Start,
        Length: Length
      }

      let data = await api.qtDetail.GetStudentAll(form)
      console.log('data', data)
      const pagination = { ...this.pagination }
      pagination.total = data.total
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

