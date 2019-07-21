<style scoped>
.left_c {
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <div v-if="tListLat&&tListLat.length>0">
    <a-list :dataSource="tListLat">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <div style="padding :10px">
          <div
            style="text-align:left;font-size:18px;color:rgba(0, 0, 0, 0.65);padding-bottom:10px"
          >{{item.name}}</div>
          <div
            style="color: rgba(0, 0, 0, 0.45);
            text-align:left;
            font-size: 14px;
            line-height: 22px;
            letter-spacing:2px"
            v-html="item.describe"
          ></div>
        </div>
      </a-list-item>
    </a-list>
    <!-- <a-table
      :columns="columns"
      :dataSource="tListLat"
      bordered
      :pagination="false"
      :rowKey="record => record.id"
    >
      <template slot="describe" slot-scope="text, record, index">
        <div key="describe">
          <div v-html="text"></div>
        </div>
      </template>
    </a-table>-->
  </div>
</template>
<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: '40%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '分数',
    dataIndex: 'score',
    width: '20%',
    scopedSlots: { customRender: 'score' }
  },
  {
    title: '结果与建议',
    dataIndex: 'describe',
    width: '40%',
    scopedSlots: { customRender: 'describe' }
  }
]
export default {
  props: {
    tListLat: Array
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
 
