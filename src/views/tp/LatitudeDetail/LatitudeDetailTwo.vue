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
        <a-button
          type="dashed"
          style="width: 33%"
          icon="plus"
          @click="$refs.TaskFormTwo.add()"
        >添加二维纬度</a-button>
        <a-button type="dashed" style="width: 33%" icon="up" @click="linkTo()">返回一维</a-button>
      </div>
      <a-table :columns="columns" :dataSource="data">
        <div slot="action" slot-scope="text, record">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item>
                <a @click="$refs.TaskFormTwo.add(record)">编辑</a>
              </a-menu-item>

              <a-menu-item>
                <a @click="Delete(record)">删除</a>
              </a-menu-item>
            </a-menu>
            <a>
              更多
              <a-icon type="down"/>
            </a>
          </a-dropdown>
        </div>
      </a-table>

      <TaskFormTwo ref="TaskFormTwo"/>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskFormTwo from './modules/TaskFormTwo'
import api from '@/api'
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  // {
  //   title: '分数',
  //   dataIndex: 'score',
  //   key: 'score'
  // },
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
    TaskFormTwo
  },
  data() {
    return {
      columns,
      data: [],
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 10,
      id: null
    }
  },
  computed: {
    ItemRefresh: function() {
      return this.$store.state.latitudeDetail.ItemRefresh
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
    async Delete(record) {
      let data = await api.latitudeDetailItem.Delete({ id: record.id })
      this.$store.commit('latitudeDetail/ItemRefresh')
    },
    returnOne() {
      this.$router.push({ path: '/dashboard/LatitudeDetailTwo' })
      this.id = null
      this.$store.commit('latitudeDetail/ItemRefresh')
    },
    addItem(record) {
      this.$router.push({ path: '/dashboard/LatitudeDetailTwo', query: { id: record.id } })
      this.id = record.id
      this.$store.commit('latitudeDetail/ItemRefresh')
    },
    add() {
      this.$router.push({
        path: `/dashboard/Question`
      })
    },
    async init(Start, Length) {
      let id = null
      if (this.id) {
        id = this.id
      }
      if (this.$route.query.id) {
        id = this.id
      }
      let form = {
        id: id,
        Start: Start,
        Length: Length
      }
      let data = await api.latitudeDetailItem.List(form)
      console.log('api.latitudeDetailItem.List(form)_data', data)
      this.data = data.list
      this.total = data.total
    },
    async onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      await init((current - 1) * pageSize, pageSize)
    },

    linkTo() {
      this.$store.commit('question/item', this.$store.state.question.item)
      this.$router.push({ path: '/dashboard/latitudeDetail', query: { id: this.$store.state.question.item.id } })
    }
  },
  watch: {
    async ItemRefresh(nVal, oVal) {
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
