<template>
  <div class="uic" ref="elememt" v-if="data&&data.length>0" :style="suic">
    <div
      v-for="(item,index) in data"
      :class="{ 'deselect1': deselect1, 'deselect2': deselect2,'zdyitemcc':item&&item.zdyitem&&item.zdyitem===true?true:false }"
      :style="style_zdyitem"
      :key="index"
      @click="divclick(index)"
    >{{item.score}}</div>
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
        marginLeft: '0' + 'px'
      }
    }
  },
  computed: {
    suic: function() {
      return {
        width: 32 * this.data.length + 'px'
      }
    }
  },
  mounted() {
    // let clientWidth = this.$refs.elememt.clientWidth //100
    // var itwidth = (clientWidth - this.dataSet.length * 22) / this.dataSet.length
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
            d.zdyitem = false
          } else {
            d.zdyitem = true
          }
        }
        return d
      })
      this.$emit('updateSelectResult', index)
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
  background-image: url('./img/piont_lv.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-color: #ffffff;
  overflow: hidden;
  border: solid 1px #dbdbdb;
  text-align: center;
  /* color: #ffffff; */
}
.deselect1 {
  width: 30px;
  height: 30px;
  border: solid 1px white;
  line-height: 30px;
  /* background: url('./img/praise-nor@2x.png') no-repeat; */
  /* background-size: cover; */
  /* padding: 12px; */
}
.zdyitemcc {
  width: 30px;
  height: 30px;
  border: solid 1px white;
  line-height: 30px;
  background-color: #ffffff;
  /* background: url('./img/praise-pre@2x.png') no-repeat; */
  /* background-size: cover; */
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

