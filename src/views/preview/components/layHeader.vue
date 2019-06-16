<template>
  <div class="headercss">
    <div class="item">
      <a>
        <i class="icon web"></i>
        <h5>电脑预览</h5>
      </a>
    </div>
    <div class="split_line"></div>
    <div class="item">
      <a>
        <i class="icon close"></i>
        <h5>关闭</h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      iconhaver: 'iconhaver'
    }
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style scoped>
.headercss {
  position: fixed;
  width: 100%;
  left: 0px;
  z-index: 1;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(29, 50, 71, 0.1);
  display: flex;
  justify-content: center;
}
.item {
  display: flex;
  width: 88px;
  height: 70px;
  text-align: center;
}
.web {
  background-image: url('../../../../public/rimg/web.png');
}
.web:hover {
  background-image: url('../../../../public/rimg/web-hover.png');
}
.close {
  background-image: url('../../../../public/rimg/close.png');
}
.item a {
  display: block;
  width: 100%;
  height: 100%;
}
.item:hover {
  background-color: #1ea0fa;
  color: #fff;
}
.split_line {
  margin: 9px 40px 0;
  width: 1px;
  height: 46px;
  background: #f5f5f5;
}
.icon {
  display: block;
  width: 100%;
  height: 45px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 12px;
}
.imageweb {
  /* background-image: url('rimg/web.png'); */
}
.imageweb {
  /* background-image: url('rimg/web.png'); */
}
</style>
