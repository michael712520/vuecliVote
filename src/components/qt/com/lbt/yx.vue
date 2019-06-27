<template>
  <div class="uic" ref="elememt" v-if="data&&data.length>0">
    <div
      v-for="(item,index) in data"
      :class="{ 'deselect1': deselect1, 'deselect2': deselect2,'zdyitemcc':item&&item.zdyitem&&item.zdyitem===true?true:false }"
      :style="style_zdyitem"
      :key="index"
      @click="divclick(index)"
    ></div>
  </div>
</template>
<script>
import { debug } from 'util'
export default {
  props: {
    dataSet: Array
  },
  data() {
    return {
      data: [],
      deselect1: true,
      deselect2: false,
      style_zdyitem: {
        marginLeft: '10' + 'px'
      }
    }
  },
  mounted() {
    let clientWidth = this.$refs.elememt.clientWidth //100
    var itwidth = (clientWidth - this.dataSet.length * 22) / this.dataSet.length
    // if (itwidth > 20) {
    //   this.style_zdyitem.marginLeft = '20px'
    // } else {
    //   this.style_zdyitem.marginLeft = itwidth + 'px'
    // }
    this.style_zdyitem.marginLeft = '10px'
  },
  methods: {
    divclick(index) {
      for (var i = 0; i <= index; i++) {}
      this.data = this.data.map((d, i) => {
        if (d) {
          if (i == index) {
            d.zdyitem = true
          } else {
            d.zdyitem = false
          }
        }
        return d
      })
    }
  },
  watch: {
    dataSet: {
      handler(nVal, oVal) {
        if (nVal && nVal.length > 0) {
          this.data = nVal
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
.uic {
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
}
.deselect1 {
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  width: 22px;
  height: 22px;
  text-decoration: none;
  border-radius: 30px;
  color: #333;
  border: 1px solid #cacece;
  cursor: default;
  display: inline-block;
  background: #fff;
  line-height: 19px;
  margin-bottom: 6px;
  line-height: 22px;
  font-size: 14px;
}
.zdyitemcc {
  background-color: #1ea0fa;
  border: 1px solid #1ea0fa;
  position: relative;
  color: #fff;
  font-size: 14px;
}
.zdyitemcc::after {
  content: ' ';
  width: 10px;
  height: 10px;
  border-radius: 50px;
  position: absolute;
  top: 5px;
  background: #fff;
  text-shadow: 0px;
  left: 5px;
  font-size: 32px;
}
</style>

