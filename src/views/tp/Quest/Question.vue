<template>
  <div>
    <div class="ss-cont clearfix" id="ss-cont">
      <left-menu></left-menu>
      <div class="survey editContainBox">
        <com-title></com-title>
        <div v-for="(item,index) in ListComponent" :key="index">
          <component
            :is="item.comp"
            :dataInfo="item.dataInfo"
            :index="index"
            @complete="complete(item,index,$event)"
          ></component>
        </div>

        <div class="container" style="margin-top: 10px;">
          <a-card>
            <a-select defaultValue="danxuan" style="width: 120px" v-model="selectVal">
              <a-select-option value="danxuan">单选</a-select-option>
              <!-- <a-select-option value="radio_down">下拉框单选</a-select-option> -->
              <a-select-option value="duoxuan">多选</a-select-option>
              <!-- <a-select-option value="likert">量表题</a-select-option>
              <a-select-option value="order">排序</a-select-option>
              <a-select-option value="toupiaoradio">量表题</a-select-option>
              <a-select-option value="ceshiradio">考试单选</a-select-option>
              <a-select-option value="cepingradio">评分单选</a-select-option>
              <a-select-option value="question">填空</a-select-option>-->
            </a-select>
            <span style="padding-left:10px">
              <a-tag color="#2db7f5" @click="selecthandleChange">添加</a-tag>
            </span>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import LeftMenu from './LeftMenu.vue'
import comTitle from './components/com/comTitle.vue'
import danxuan from './components/com/danxuan.vue'
import api from '@/api'
export default {
  name: 'question',
  components: {
    LeftMenu,
    comTitle,
    danxuan
  },
  data() {
    return {
      compName: this.name,
      selectVal: 'danxuan'
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.question.listData
    },
    refresh: function() {
      return this.$store.state.question.refresh
    }
  },
  methods: {
    complete(item, index, $event) {
      this.$store.commit('question/listData', { comp: item.comp, dataInfo: $event })
    },
    selecthandleChange() {
      this.$store.commit('question/addListData', this.selectVal)
    },
    async init() {
      let params = {
        detailId: this.$route.query.id
      }
      let { data } = await api.tp.GetListItem(params)

      if (data && data.length > 0) {
        data = data.map(d => {
          return d
        })
        this.$store.commit('question/updateListData', data)
      }
    }
  },
  watch: {
    refresh(nVal, oVal) {
      this.init()
    }
  }
}
</script>
<style scoped>
.editContainBox {
  float: right;
}
</style>
