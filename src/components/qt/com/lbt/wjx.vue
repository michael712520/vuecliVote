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
  },
  methods: {
    divclick(index) {
      for (var i = 0; i <= index; i++) {}
      this.data = this.data.map((d, i) => {
        if (d) {
          if (i <= index) {
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
  margin-right: 20px;
}
.deselect1 {
  width: 22px;
  height: 22px;
  background: url('./img/stars-nor@2x.png') no-repeat;
  background-size: cover;
  /* padding: 12px; */
}
.zdyitemcc {
  width: 22px;
  height: 22px;
  background: url('./img/stars-pre@2x.png') no-repeat;
  background-size: cover;
}
/* .zdyitemcc::after {
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
} */
</style>

