<style scoped>
.left_c {
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <div v-if="tListLat&&tListLat.latitudeDetailItem.length>0">
    <a-table
      :columns="columns"
      :dataSource="tListLat.latitudeDetailItem"
      bordered
      :pagination="false"
      :rowKey="record => record.id"
    >
      <template slot="linkName" slot-scope="text, record, index">
        <div v-if="tListLat&&tListLat.mbDetailItems.length>0">
          <div
            v-for="(item,index) in choiceType(tListLat.mbDetailItems,record.id)"
            class="left_c"
            :key="index"
          >
            <div style="width:auto;min-width:20px;">{{item.rowKey}}.</div>
            <div v-html="item.titleTag"></div>
          </div>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div @click="clickEdit">
          <a-icon type="edit" />
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: '35%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '关联题名',
    dataIndex: 'linkName',
    width: '50%',
    scopedSlots: { customRender: 'linkName' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '15%',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  props: {
    tListLat: Object
  },
  data() {
    return {
      columns
    }
  },
  computed: {},
  methods: {
    choiceType(data, type) {
      try {
        return data.filter(d => d.latitudeDetailId === type)
      } catch (error) {}
      return []
    },
    clickEdit() {
      this.$emit('clickEdit', true)
    }
  }
}
</script>
 
