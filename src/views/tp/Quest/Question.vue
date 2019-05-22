<template>
  <div>
    <div class="ss-cont clearfix" id="ss-cont">
      <left-menu></left-menu>
      <div class="survey editContainBox">
        <div v-for="(item,index) in ListComponent">
          <component :is="item.comp" :dataInfo="item.dataInfo" :index="index"></component>
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
export default {
  name: 'question',
  components: {
    LeftMenu,
    comTitle,
    danxuan
  },
  data() {
    return {
      compName: this.name
    }
  },
  computed: {
    ListComponent: function() {
      return this.$store.state.question.listData
    }
  }
}
</script>
<style scoped>
.editContainBox {
  float: right;
}
</style>
