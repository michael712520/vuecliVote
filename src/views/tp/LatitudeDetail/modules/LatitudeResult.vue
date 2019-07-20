<template>
  <a-modal
    :width="960"
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
          <template slot="upScore" slot-scope="text, record, index">
            <div key="upScore">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.id, 'upScore')"
              />
              <template v-else>{{text}}</template>
            </div>
          </template>
          <template slot="downScore" slot-scope="text, record, index">
            <div key="downScore">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.id, 'downScore')"
              />
              <template v-else>{{text}}</template>
            </div>
          </template>
          <template slot="titile" slot-scope="text, record, index">
            <div key="titile">
              <template v-if="record.editable">
                <vue-ueditor-wrap v-model="record.titile" :config="myConfig"></vue-ueditor-wrap>
              </template>
              <template v-else>
                <div v-html="text"></div>
              </template>
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
          <vue-ueditor-wrap v-model="titile" :config="myConfig"></vue-ueditor-wrap>
          <!-- <a-textarea placeholder :rows="4" v-model="addItem.titile" /> -->
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
import VueUeditorWrap from 'vue-ueditor-wrap'

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
  components: { VueUeditorWrap },
  data() {
    return {
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 100,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://sljhhzzapi.mas.gov.cn/net/controller.ashx',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: '/UEditor/'
      },
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
      titile: '',
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
        titile: this.titile,
        upScore: this.addItem.upScore,
        downScore: this.addItem.downScore,
        mbDetailId: this.record.id
      }
      debugger
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

