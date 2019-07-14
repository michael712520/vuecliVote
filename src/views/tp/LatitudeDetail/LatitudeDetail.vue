<template>
  <div>
    <a-card style="margin-top: 24px" :bordered="false" title="纬度列表">
      <!-- <div slot="extra">
        <a-radio-group>
          <a-radio-button>全部</a-radio-button>
          <a-radio-button>进行中</a-radio-button>
          <a-radio-button>等待中</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;"/>
      </div>-->

      <div class="operate">
        <a-button type="dashed" style="width: 33%" icon="plus" @click="$refs.taskForm.add()">添加一维纬度</a-button>
        <a-button type="dashed" style="width: 33%" icon="right" @click="linkTo()">查看二维</a-button>
      </div>
      <a-table
        :rowKey="record => record.id"
        :columns="columns"
        :dataSource="data"
        :pagination="pagination"
        @change="handleTableChange"
        :loading="loading"
      >
        <div slot="action" slot-scope="text, record">
          <a @click="$refs.LatitudeResult.add(record)">纬度结果与建议</a>
          <a-divider type="vertical" />
          <a @click="$refs.LatitudeDetailItem.add(record)">纬度公式设置</a>
          <a-divider type="vertical" />
          <a @click="editor(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="Delete(record)">删除</a>
          <a-dropdown v-if="false">
            <a-menu slot="overlay">
              <a-menu-item>
                <a @click="$refs.taskForm.add(record)">编辑</a>
              </a-menu-item>
              <a-menu-item v-show="!computed_id">
                <a @click="$refs.LatitudeDetailItem.add(record)">纬度公式设置</a>
              </a-menu-item>
              <a-menu-item>
                <a @click="Delete(record)">删除</a>
              </a-menu-item>
            </a-menu>
            <a>
              更多
              <a-icon type="down" />
            </a>
          </a-dropdown>
        </div>
      </a-table>

      <task-form ref="taskForm" />
      <TaskFormTwo ref="TaskFormTwo" />
      <TaskFormTwo ref="TaskFormTwo" />
      <LatitudeDetailItem ref="LatitudeDetailItem"></LatitudeDetailItem>
      <LatitudeResult ref="LatitudeResult"></LatitudeResult>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'
import TaskFormTwo from './modules/TaskFormTwo'
import LatitudeDetailItem from './modules/LatitudeDetailItem'
import LatitudeResult from './modules/LatitudeResult'

import api from '@/api'
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '最大分值',
    dataIndex: 'score',
    key: 'score'
  },
  {
    title: '基础分数XXX',
    dataIndex: 'baseScore',
    key: 'baseScore'
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
  components: {
    HeadInfo,
    TaskForm,
    TaskFormTwo,
    LatitudeDetailItem,
    LatitudeResult
  },
  data() {
    return {
      columns,
      data: [],
      pagination: {},
      current: 1,
      pageSize: 10,
      id: null,
      loading: false
    }
  },
  computed: {
    refresh: function() {
      return this.$store.state.latitudeDetail.refresh
    },
    computed_id: function() {
      let id = null
      if (this.id) {
        id = this.id
      }
      if (this.$route.query.id) {
        id = this.id
      }
      return id
    }
  },
  async mounted() {
    await this.init((this.current - 1) * this.pageSize, this.pageSize)
  },
  methods: {
    editor(record) {
      if (record.state >= 1) {
        this.$message.error('问卷已发布允许修改')
        return
      }
      this.$refs.taskForm.add(record)
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.init(pagination.current, pagination.pageSize)
    },
    clickLatitude() {},
    async Delete(record) {
      if (record.state >= 1) {
        this.$message.error('问卷已发布允许修改')
        return
      }
      let data = await api.latitudeDetail.Delete({ id: record.id })
      this.$store.commit('latitudeDetail/refresh')
    },
    returnOne() {
      this.$router.push({ path: '/dashboard/latitudeDetail' })
      this.id = null
      this.$store.commit('latitudeDetail/refresh')
    },
    addItem(record) {
      this.$router.push({ path: '/dashboard/latitudeDetail', query: { id: record.id } })
      this.id = record.id
      this.$store.commit('latitudeDetail/refresh')
    },
    add() {
      this.$router.push({
        path: `/dashboard/Question`
      })
    },
    async init(Start, Length) {
      this.loading = true
      let id = null
      if (this.id) {
        id = this.id
      }
      if (this.$route.query.id) {
        id = this.$route.query.id
      }
      let form = {
        id: id,
        Start: Start,
        Length: Length
      }

      let data = await api.latitudeDetail.List(form)
      console.log('data', data)
      const pagination = { ...this.pagination }
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = data.total
      this.loading = false
      this.data = data.list
      this.pagination = pagination
    },
    async onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      await init((current - 1) * pageSize, pageSize)
    },
    bj(item) {
      this.$store.commit('question/item', item)
      this.$router.push({ path: '/dashboard/latitudeDetail', query: { id: item.id } })
    },
    linkTo() {
      this.$store.commit('question/item', this.$store.state.question.item)
      this.$router.push({ path: '/dashboard/LatitudeDetailTwo', query: { id: this.$store.state.question.item.id } })
    }
  },
  watch: {
    async refresh(nVal, oVal) {
      await this.init((this.current - 1) * this.pageSize, this.pageSize)
    }
  }
}
</script>

<style lang="less" scoped>
.ant-avatar-lg {
  width: 48px;
  height: 48px;
  line-height: 48px;
}

.list-content-item {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
  span {
    line-height: 20px;
  }
  p {
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 22px;
  }
}
</style>
