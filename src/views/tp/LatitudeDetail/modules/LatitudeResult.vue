<template>
  <a-modal
    :width="800"
    :visible="visible"
    title="任务添加"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <div class="row" style="padding:20px;">
      <!-- <div class="row">纬度:{{record.name}}</div> -->
      <a-divider orientation="left">纬度:{{record.name}}</a-divider>
      <div class="row">
        <a-table :columns="columns" :dataSource="data" bordered>
          <template
            v-for="col in ['upScore', 'downScore','titile']"
            :slot="col"
            slot-scope="text, record, index"
          >
            <div :key="col">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.id, col)"
              />
              <template v-else>{{text}}</template>
            </div>
          </template>
          <template slot="operation" slot-scope="text, record, index">
            <div class="editable-row-operations">
              <span v-if="record.editable">
                <a @click="() => save(record.id)">保存</a>
                <a-divider type="vertical" />
                <a-popconfirm title="确定要取消吗?" @confirm="() => cancel(record.id)">
                  <a>取消</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="() => edit(record.id)">编辑</a>
                <a-divider type="vertical" />
                <a @click="() => del(record.id)">删除</a>
              </span>
            </div>
          </template>
        </a-table>
      </div>
      <div class="row ty">
        <div>得分范围:</div>
        <a-input-group style="width:100px;margin-left:10px;margin-right:10px">
          <a-input style="width: 50%" defaultValue="0" v-model="addItem.upScore" />
          <a-input style="width: 50%" defaultValue="0" v-model="addItem.downScore" />
        </a-input-group>
        <div>总分:</div>
      </div>
      <div class="row ty">
        <a-col :span="4" style="line-height:100px">结果与建议</a-col>
        <a-col :span="20">
          <a-textarea placeholder :rows="4" v-model="addItem.titile" />
        </a-col>
      </div>
      <div class="row ty">
        <a-col :span="8"></a-col>
        <a-col :span="8">
          <a-button type="primary" @click="SaveUpdate()">新增结果与建议</a-button>
        </a-col>
        <a-col :span="8"></a-col>
      </div>
    </div>
  </a-modal>
</template>
<script>
import api from '@/api'
import { init } from 'echarts/lib/echarts'
import { debug } from 'util'
const columns = [
  {
    title: '得分(起)',
    dataIndex: 'upScore',
    width: '15%',
    scopedSlots: { customRender: 'upScore' }
  },
  {
    title: '得分(止)',
    dataIndex: 'downScore',
    width: '15%',
    scopedSlots: { customRender: 'downScore' }
  },
  {
    title: '测评结果与建议',
    dataIndex: 'titile',
    width: '50%',
    scopedSlots: { customRender: 'titile' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  name: 'TaskForm',
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      record: {},
      data: [],
      columns: columns,
      addItem: { titile: null, upScore: 0, downScore: 0 }
    }
  },
  methods: {
    async add(record) {
      this.record = record
      this.visible = true
      await this.init()
    },
    async init() {
      let data = await api.LatitudeGrade.GetMbDetail({ id: this.record.id })

      this.data = data.latitudeGrade
    },

    async SaveUpdate() {
      let httpData = {
        titile: this.addItem.titile,
        upScore: this.addItem.upScore,
        downScore: this.addItem.downScore,
        mbDetailId: this.record.id
      }
      await api.LatitudeGrade.SaveUpdate(httpData)
      await this.init()
    },
    async del(id) {
      await api.LatitudeGrade.Delete({ id: id })
      await this.init()
    },
    handleSubmit() {
      this.visible = false
    },
    handleChange(value, id, column) {
      const newData = [...this.data]
      const target = newData.filter(item => id === item.id)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    async edit(id) {
      const newData = [...this.data]
      const target = newData.filter(item => id === item.id)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    async save(id) {
      const newData = [...this.data]
      const target = newData.filter(item => id === item.id)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
        let httpData = {
          id: target.id,
          titile: target.titile,
          upScore: target.upScore,
          downScore: target.downScore,
          mbDetailId: this.record.id
        }
        await api.LatitudeGrade.SaveUpdate(httpData)
        await this.init()
      }
    },
    cancel(id) {
      const newData = [...this.data]
      const target = newData.filter(item => id === item.id)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => id === item.id)[0])
        delete target.editable
        this.data = newData
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.ty {
  display: flex;
  flex-direction: row;
  padding: 10px;
  line-height: 30px;
}
</style>

