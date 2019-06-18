<template>
  <div>
    <layHeader></layHeader>
    <div class="preview">
      <div class="blockquote">
        <div class="ztc">
          <div>
            <h1 v-if="data" class="h1cclass">{{this.data.title}}</h1>
            <div v-for="(item,index) in ListComponent" :key="index">{{JSON.stringify(item.title)}}</div>
          </div>
        </div>
        <div class="dfoot">技术提供</div>
      </div>
    </div>
  </div>
</template>

<script>
import layHeader from './components/layHeader'
import api from '@/api'
export default {
  props: {},
  components: { layHeader },
  data() {
    return { data: null }
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.question.listData
    }
  },
  async mounted() {
    var id = this.$route.query.id
    this.data = await api.tp.Get(id)
    await this.init()
  },
  methods: {
    async init() {
      let params = {
        detailId: this.$route.query.id
      }
      let data = await api.tp.GetListItem(params)
      debugger
      if (data && data.length > 0) {
        data = data.map(d => {
          return d
        })
        debugger
        this.$store.commit('question/updateListData', data)
      }
    }
  },
  watch: {}
}
</script>

<style scoped>
.preview {
  display: flex;
  background-color: #f3f6fa;
  background-image: url('../../../public/rimg/dream-seeker-bg@2x.jpg');
  background-repeat: repeat-x;
  background-size: 1px 100%px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.blockquote {
  display: flex;
  flex-direction: column;
  width: 920px;
  padding-top: 120px;
  margin: 0 auto;
  background-image: url('../../../public/rimg/dream-seeker@2x.jpg');
  background-size: 910px 144px;
  min-height: 800px;
  background-repeat: no-repeat;
}
.ztc {
  font-size: 15px;
  color: #333333;
  background-color: #fff;
  width: 100%;
  min-height: 500px;
  border-radius: 1px;
  box-shadow: 0 0 15px 0 rgba(29, 50, 71, 0.1);
}
.dfoot {
  color: #666666;
  font-family: Tahoma, 宋体;
  border-top: 1px #f3f3f3 solid;
  background-color: #fff;
  width: 100%;
  min-height: 100px;
}
.h1cclass {
  padding: 20px;
}
</style>
