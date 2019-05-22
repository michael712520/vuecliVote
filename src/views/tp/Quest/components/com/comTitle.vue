<template >
  <div
    id="divId"
    class="surveyhead"
    style="margin-top: 18px; width: 800px; cursor: pointer; padding: 10px 0px; background: rgb(255, 255, 255);"
    title="编辑问卷标题与问卷说明"
    @click="divClick"
  >
    <h1 id="pater_title" style="cursor: pointer;">{{title}}</h1>
    <div id="pater_desc" class="surveydescription" style="cursor: pointer;">{{note}}</div>
    <a-modal title="标题" v-model="visible" @ok="handleOk">
      <div>
        <div>
          标题
          <a-input v-model="title" :defaultValue="title" placeholder="填写标题内容"/>
        </div>
        <div>
          内容
          <a-textarea placeholder="内容" :rows="4" :defaultValue="note" v-model="note"/>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'title',
  components: {},
  props: {
    dataInfo: Object,
    index: Number
  },
  data() {
    return {
      visible: false,
      title: '标题',
      note: '内容'
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleOk(e) {
      console.log(e)
      this.visible = false
      debugger
      this.$store.commit('question/listData', {
        index: this.index,
        listData: { title, note }
      })
    },
    divClick() {
      this.title = this.data && this.data.title ? this.data.title : ''
      this.note = this.data && this.data.note ? this.data.note : ''
      this.visible = true
    }
  },
  watch: {
    dataInfo: {
      handler: function(newVal, oldVal) {
        if (Object.keys(newVal).length > 0 && Object.keys(newVal.data).length > 0) {
          this.title = newVal.data.title
          this.note = newVal.data.note
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>