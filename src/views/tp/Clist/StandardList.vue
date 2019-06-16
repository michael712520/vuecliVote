<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="我的待办" content="8个任务" :bordered="true"/>
        </a-col>
      </a-row>
    </a-card>

    <a-card style="margin-top: 24px" :bordered="false" title="标准列表">
      <div slot="extra">
        <a-radio-group>
          <a-radio-button>全部</a-radio-button>
          <a-radio-button>进行中</a-radio-button>
          <a-radio-button>等待中</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;"/>
      </div>

      <div class="operate">
        <a-button type="dashed" style="width: 100%" icon="plus" @click="$refs.taskForm.add()">添加</a-button>
      </div>

      <a-list size="large">
        <a-list-item :key="index" v-for="(item, index) in data">
          <a-list-item-meta :description="item.content">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>纬度设置</a>
          </div>
          <div slot="actions">
            <a>发布问卷</a>
          </div>
          <div slot="actions">
            <a @click="preview(item)">预览</a>
          </div>
          <div slot="actions">
            <a>发送问卷</a>
          </div>
          <div slot="actions">
            <a @click="bj(item)">编辑</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a>编辑</a>
                </a-menu-item>
                <a-menu-item>
                  <a>删除</a>
                </a-menu-item>
              </a-menu>
              <a>
                更多
                <a-icon type="down"/>
              </a>
            </a-dropdown>
          </div>
        </a-list-item>
        <a-pagination
          :pageSizeOptions="pageSizeOptions"
          :total="total"
          showSizeChanger
          :pageSize="pageSize"
          v-model="current"
          @showSizeChange="onShowSizeChange"
        >
          <template slot="buildOptionText" slot-scope="props">
            <span v-if="props.value!=='50'">{{props.value}}条/页</span>
            <span v-if="props.value==='50'">全部</span>
          </template>
        </a-pagination>
      </a-list>

      <task-form ref="taskForm"/>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'
import api from '@/api'

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data() {
    return {
      data: [],
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 10
    }
  },
  async mounted() {
    await this.init((this.current - 1) * this.pageSize, this.pageSize)
  },
  methods: {
    add() {
      this.$router.push({
        path: `/dashboard/Question`
      })
    },
    async init(Start, Length) {
      let form = {
        userId: 1,
        Start: Start,
        Length: Length
      }

      let data = await api.tp.GetList(form)

      this.data = data.list
      this.total = data.total
    },
    async onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      await init((current - 1) * pageSize, pageSize)
    },
    bj(item) {
      this.$store.commit('question/item', item)
      this.$router.push({ path: '/dashboard/Question', query: { id: item.id } })
    },
    preview(item) {
      debugger
      this.$store.commit('preview/item', item)
      debugger
      this.$router.push({ path: '/preview/index', query: { id: item.id } })
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
