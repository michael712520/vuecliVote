<style scoped>
.left_c {
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <div v-if="tListLat&&tListLat.length>0">
    <a-table
      :columns="columns"
      :dataSource="tListLat"
      bordered
      :pagination="false"
      :rowKey="record => record.id"
    ></a-table>
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
 
