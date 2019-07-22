<template>
  <a-modal
    :width="960"
    :visible="visible"
    :title="record.title"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <div class="row" style="padding:20px;">
      <!-- <div class="row">纬度:{{record.name}}</div> -->
      <a-divider orientation="left">问卷标题:{{record.title}}</a-divider>
      <div class="row">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
          <template slot="name" slot-scope="text, record, index">
            <div key="name">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.id, 'name')"
              />
              <template v-else>{{text}}</template>
            </div>
          </template>
          <template slot="link" slot-scope="text, record, index">
            <div
              class="row"
              key="link"
              v-if="pickData&&pickData.latitudeDetailItem&&pickData.latitudeDetailItem.length>0"
            >
              <a-checkbox-group
                @change="recordonChange($event,record,index,'latitudeDetails')"
                :disabled="!record.editable"
                :value="spiltstr(record.latitudeDetails)"
              >
                <a-col
                  :span="8"
                  v-for="(item, itemindex) in pickData.latitudeDetailItem"
                  :key="itemindex"
                >
                  <a-checkbox :value="item.id">{{item.name}}</a-checkbox>
                </a-col>
              </a-checkbox-group>
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
        <div style="width: 20%">名称:</div>
        <a-input style="width: 50%" v-model="addItem.name" />
      </div>
      <div class="row ty">
        <a-col :span="4" style="line-height:100px">选择关联纬度</a-col>
        <a-col :span="20">
          <div
            class="row"
            v-if="pickData&&pickData.latitudeDetailItem&&pickData.latitudeDetailItem.length>0"
          >
            <a-checkbox-group @change="onChangeCheckboxAdd" v-model="onChangeCheckboxModel">
              <a-col
                :span="8"
                v-for="(item, itemindex) in pickData.latitudeDetailItem"
                :key="itemindex"
              >
                <a-checkbox :value="item.id+''">{{item.name}}</a-checkbox>
              </a-col>
            </a-checkbox-group>
          </div>
        </a-col>
      </div>
      <div class="row ty">
        <a-col :span="8"></a-col>
        <a-col :span="8">
          <a-button type="primary" @click="SaveUpdate()">提交</a-button>
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
    title: '分类名称',
    dataIndex: 'name',
    width: '30%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '关联纬度',
    dataIndex: 'link',
    width: '50%',
    scopedSlots: { customRender: 'link' }
  },

  {
    title: '操作',
    dataIndex: 'operation',
    width: '20%',
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
      addItem: { name: '' },
      pickData: [],
      latitudeDetails: null,
      onChangeCheckboxModel: []
    }
  },
  methods: {
    async add(record) {
      this.record = record
      this.visible = true
      await this.init()
    },
    async init() {
      this.onChangeCheckboxModel = []
      this.addItem.name = ''
      this.data = await api.latitudeDetailCategory.List({ mbDetailId: this.record.id })
      this.pickData = await api.latitudeDetail.GetListLat({ mbDetailId: this.record.id })
    },

    async SaveUpdate() {
      let httpData = {
        mbDetailId: this.record.id,
        name: this.addItem.name,
        latitudeDetails: this.latitudeDetails
      }
      let da = await api.latitudeDetailCategory.SaveOrUpdate(httpData)
      await this.init()
    },
    async del(id) {
      await api.latitudeDetailCategory.Delete({ id: id })
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
          mbDetailId: target.mbDetailId,
          name: target.name,
          latitudeDetails: target.latitudeDetails
        }
        await api.latitudeDetailCategory.SaveOrUpdate(httpData)
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
    },
    onChangeCheckboxAdd(e) {
      this.latitudeDetails = e.join(',')
    },
    recordonChange($event, record, index, column) {
      const newData = [...this.data]
      const target = newData.filter(item => record.id === item.id)[0]
      if (target) {
        target[column] = $event.join(',')
        this.data = newData
      }
    },
    spiltstr(str) {
      if (str) {
        try {
          return str.split(',')
        } catch (error) {
          return []
        }
      }
      return []
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

