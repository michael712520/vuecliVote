<template>
  <div class="page">
    <div
      :class="{'sz_displayTrue':sz.displayTrue,'sz_displayFalse':sz.displayFalse}"
      @click="szClick()"
    >123</div>
    <div
      :class="{'yx_displayTrue':yx.displayTrue,'yx_displayFalse':yx.displayFalse}"
      @click="yxClick()"
    ></div>
    <div
      :class="{'ding_displayTrue':ding.displayTrue,'ding_displayFalse':ding.displayFalse}"
      @click="dingClick()"
    ></div>
    <div
      :class="{'wjx_displayTrue':wjx.displayTrue,'wjx_displayFalse':wjx.displayFalse}"
      @click="wjxClick()"
    ></div>
    <div
      :class="{'fx_displayTrue':fx.displayTrue,'fx_displayFalse':fx.displayFalse}"
      @click="fxClick()"
    ></div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      yx: {
        displayTrue: true,
        displayFalse: false
      },
      // yx: {
      //   displayTrue: true,
      //   displayFalse: false
      // },
      sz: {
        displayTrue: true,
        displayFalse: false
      },
      ding: {
        displayTrue: true,
        displayFalse: false
      },
      wjx: {
        displayTrue: true,
        displayFalse: false
      },
      fx: {
        displayTrue: true,
        displayFalse: false
      }
    }
  },
  methods: {
    yxClick() {
      this.yx.displayFalse = true
      this.sz.displayFalse = false
      this.ding.displayFalse = false
      this.wjx.displayFalse = false
      this.fx.displayFalse = false
      this.$emit('jztMCDisplay', 'yx')
    },
    szClick() {
      this.yx.displayFalse = false
      this.sz.displayFalse = true
      this.ding.displayFalse = false
      this.wjx.displayFalse = false
      this.fx.displayFalse = false
      this.$emit('jztMCDisplay', 'sz')
    },
    dingClick() {
      this.yx.displayFalse = false
      this.sz.displayFalse = false
      this.ding.displayFalse = true
      this.wjx.displayFalse = false
      this.fx.displayFalse = false
      this.$emit('jztMCDisplay', 'ding')
    },
    wjxClick() {
      this.yx.displayFalse = false
      this.sz.displayFalse = false
      this.ding.displayFalse = false
      this.wjx.displayFalse = true
      this.fx.displayFalse = false
      this.$emit('jztMCDisplay', 'wjx')
    },
    fxClick() {
      this.yx.displayFalse = false
      this.sz.displayFalse = false
      this.ding.displayFalse = false
      this.wjx.displayFalse = false
      this.fx.displayFalse = true
      this.$emit('jztMCDisplay', 'fx')
    }
  },
  watch: {
    content: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
        }
      },
      // immediate: true,
      deep: true
    }
  }
}
</script>
<style  scoped>
.page {
  display: flex;
  flex-direction: row;
}

.sz_displayTrue {
  color: #666;
  /* border: #f3f3f3 solid 1px; */
  padding: 1px;
  font-size: 16px;
  font: bold;
  line-height: 30px;
}
.sz_displayFalse {
  color: #1ea0fa;
  /* border: #f3f3f3 solid 1px; */
  padding: 1px;
  font-size: 16px;
  font: bold;
}
.yx_displayTrue {
  margin: 5px;
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
.yx_displayFalse {
  background-color: #1ea0fa;
  border: 1px solid #1ea0fa;
  position: relative;
  color: #fff;
  font-size: 14px;
}
.yx_displayFalse::after {
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
.ding_displayTrue {
  margin: 5px;
  width: 22px;
  height: 22px;
  background: url('../lbt/img/praise-nor@2x.png') no-repeat;
  background-size: cover;
  /* padding: 12px; */
}
.ding_displayFalse {
  width: 22px;
  height: 22px;
  background: url('../lbt/img/praise-pre@2x.png') no-repeat;
  background-size: cover;
}
.wjx_displayTrue {
  margin: 5px;
  width: 22px;
  height: 22px;
  background: url('../lbt/img/stars-nor@2x.png') no-repeat;
  background-size: cover;
  /* padding: 12px; */
}
.wjx_displayFalse {
  width: 22px;
  height: 22px;
  background: url('../lbt/img/stars-pre@2x.png') no-repeat;
  background-size: cover;
}
.fx_displayTrue {
  margin: 5px;
  width: 28px;
  height: 26px;
  background: url('../lbt/img/wjxlb.png') no-repeat;
  background-size: cover;

  /* padding: 12px; */
}
.fx_displayFalse {
  background: url('../lbt/img/wjxlb.png') no-repeat;
  background-position: 0 -29px;
}
</style>
 