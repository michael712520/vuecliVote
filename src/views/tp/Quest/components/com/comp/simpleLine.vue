 <template ></template>
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