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
    @ok="handleSubmit"
    @cancel="visible = false"
    :confirmLoading="confirmLoading"
  >
    <div style="width:100%;height:20px"></div>
    <a-tabs defaultActiveKey="1" @tabClick="tabClick">
      <a-tab-pane tab="关联题目" key="1">
        <div class="row">
          <LatTable v-show="fVisable" :tListLat="tListLat" @clickEdit="clickEdit()"></LatTable>
          <div v-if="tListLat&&tListLat.mbDetailItems.length>0">
            <a-table
              v-show="!fVisable"
              :columns="columns"
              :dataSource="tListLat.mbDetailItems"
              bordered
              :pagination="false"
              :rowKey="record => record.id"
            >
              <template v-for="col in ['titleTag']" :slot="col" slot-scope="text, record, index">
                <div :key="col" class="left_c">
                  <div style="width:auto;min-width:20px;">{{record.rowKey}}、</div>
                  <div v-html="text">{{text}}</div>
                </div>
              </template>
              <template slot="operation" slot-scope="text, record, index">
                <div class="editable-row-operations">
                  <a-cascader
                    :defaultValue="cascaderDefaultValue(record.latitudeDetailId)"
                    :options="options"
                    @change="onChangeCascader($event,record,index)"
                    placeholder="选择维度"
                  />
                </div>
              </template>
            </a-table>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import api from '@/api'
import LatTable from './LatTable'
const columns = [
  {
    title: '题目',
    dataIndex: 'titleTag',
    width: '70%',
    scopedSlots: { customRender: 'titleTag' }
  },
  {
    title: '已选择纬度',
    dataIndex: 'operation',
    width: '30%',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  components: { LatTable },
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
      confirmLoading: false,
      visible: false,
      record: {},
      id: null,
      data: [],
      columns: columns,
      CascaderData: [],
      tListLat: null,
      fVisable: true
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
        data = [latitudeDetailIds]
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
    onChangeCascader(e, record, index) {
      this.tListLat.mbDetailItems[index]['selectlatitudeDetailId'] = e
    },
    async init() {
      try {
        this.tListLat = await api.latitudeDetail.GetListLat({ mbDetailId: this.id })
      } catch (error) {
        console.log('latitudeDetail.GetListLat', error)
      }
    },
    edit(record) {},
    async handleSubmit() {
      this.confirmLoading = true
      let data = []
      this.tListLat.mbDetailItems.forEach(element => {
        let str = null
        if (element.selectlatitudeDetailId && element.selectlatitudeDetailId.length > 0) {
          str = JSON.stringify(element.selectlatitudeDetailId)
        } else if (element.latitudeDetailId && element.latitudeDetailId.length > 0) {
          str = JSON.stringify([element.latitudeDetailId])
        }
        data.push({ id: element.id, latitudeDetailIds: str })
      })

      let rest = await api.latitudeDetail.UpdateItemMbDetailItem(data)
      console.log('rest', rest)
      this.confirmLoading = false
      this.visible = false
    },
    tabClick(key) {
      if (key == 1) {
        this.fVisable = true
      }
    },
    clickEdit() {
      this.fVisable = false
    }
  }
}
</script>
