 <template>
  <div
    id="divId"
    class="surveyhead"
    style="margin-top: 18px; width: 800px; cursor: pointer; padding: 10px 0px; background: rgb(255, 255, 255);"
  >
    <h1 id="pater_title" style="cursor: pointer;">{{title}}</h1>
    <div id="pater_desc" class="surveydescription" style="cursor: pointer;">{{content}}</div>
  </div>
</template>
 <script>
import api from '@/api'
export default {
  name: 'Danxuan',
  components: {},
  props: {
    dataInfo: Object,
    index: Number
  },
  data() {
    return { visible: false, confirmLoading: false, title: '', content: '' }
  },
  computed: {
    item: function() {
      return this.$store.state.question.item
    }
  },
  async mounted() {
    let id = this.$route.query.id
    let data = await api.tp.Get(id)
    this.$store.commit('question/item', data)
  },
  methods: {
    showModal() {
      this.visible = true
    },
    async handleOk(e) {
      let form = { ...this.item, ...{ title: this.title, content: this.content } }
      let data = await api.tp.SaveUpdate(form)
      this.$store.commit('question/item', data)
      this.visible = false
    },
    handleCancel(e) {
      this.visible = false
    }
  },
  watch: {
    item: {
      handler(nVal, oVal) {
        if (nVal && nVal.hasOwnProperty('title')) {
          this.title = nVal.title
          this.content = nVal.content
        }
      },
      // immediate: true,
      deep: true
    }
  }
}
</script>
 <style lang="less" scoped>
</style>
 
 
