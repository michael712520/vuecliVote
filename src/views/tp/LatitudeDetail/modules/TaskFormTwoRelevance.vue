<style scoped>
.left_c {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <a-modal
    :width="640"
    :visible="visible"
    title="关联题目"
    @ok="handleSubmit"
    @cancel="visible = false"
  >
    <div class="row">
      <a-table :columns="columns" :dataSource="data" bordered :rowKey="record => record.id">
        <template v-for="col in ['titile']" :slot="col" slot-scope="text, record, index">
          <div :key="col" class="left_c">
            <div>{{record.rowKey}}、</div>
            <div v-html="text">{{text}}</div>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <a-cascader
              :defaultValue="cascaderDefaultValue(record.latitudeDetailIds)"
              :options="options"
              @change="onChangeCascader"
              placeholder="选择维度"
            />
          </div>
        </template>
      </a-table>
    </div>
  </a-modal>
</template>

<script>
import api from '@/api'

const columns = [
  {
    title: '标题',
    dataIndex: 'titile',
    width: '30%',
    scopedSlots: { customRender: 'titile' }
  },

  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  name: 'TaskFormTwo',
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
      id: null,
      data: [],
      columns: columns,
      CascaderData: []
    }
  },
  computed: {
    options: function() {
      return this.$store.state.latitudeDetail.ListPicker
    }
  },
  methods: {
    cascaderDefaultValue(latitudeDetailIds) {
      let data = []
      try {
        data = JSON.parse(latitudeDetailIds)
      } catch (error) {}
      return data
    },
    async add(id, record) {
      this.visible = true
      console.log('form', this.form)
      this.id = id
      this.record = record
      this.$store.dispatch('latitudeDetail/getPicker', this.id)
      await this.init()
    },
    onChangeCascader(e) {
      this.CascaderData = e
    },
    async init() {
      let data = await api.tp.Get(this.id)

      let temData = []
      data &&
        data.mbDetailItem &&
        data.mbDetailItem.forEach((item, index) => {
          if (item.type === 'pfdanxuan' || item.type === 'pfduoxuan') {
            temData.push({ ...item, titile: item.title, rowKey: index + 1 })
          }
        })

      this.data = [...temData]
      console.log('data', this.data)
    },
    edit(record) {},
    handleSubmit() {}
  }
}
</script>
