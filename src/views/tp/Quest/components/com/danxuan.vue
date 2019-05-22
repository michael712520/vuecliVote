<template>
  <div class="c_div">
    <div class="row">{{index}}单选题{{dataInfo}}</div>
    <div v-if="dataSet" v-for="(item,index) in dataSet" @click="aCardClick(item,index)">
      <div>
        <img v-if="item.img" alt="example" :src="item.img" slot="cover" class="img">
      </div>
      <div>
        <input :name="radioName" type="radio" :value="item.value" :checked="item.checked">
      </div>
      <div>{{item.name}}</div>
    </div>
    <div>
      <a-tag color="#2db7f5" @click="divClick">修改</a-tag>
      <a-tag color="#87d068">删除</a-tag>
      <a-tag color="#108ee9">上一个</a-tag>
      <a-tag color="#f50">下一个</a-tag>
      <a-tag color="#1056e9">插入</a-tag>
    </div>
    <a-modal title="标题" v-model="visible" @ok="handleOk">
      <div>
        <div>
          标题
          <a-input v-model="title" :defaultValue="title" placeholder="填写标题内容"/>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'danxuan',
  components: {},
  props: {
    dataInfo: Object,
    index: Number
  },
  data() {
    return {
      visible: false,
      title: '',
      note: '',
      value: 1,
      radioStyle: {
        display: 'block',
        height: '300px',
        lineHeight: '300px'
      },
      dataSet: this.dataInfo.data
        ? this.dataInfo.data
        : [
            {
              value: '1',
              name: 'AAAAAAAA',
              img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
              checked: null
            },
            {
              value: '2',
              name: 'BBBBBBBB',
              img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
              checked: null
            },
            {
              value: '3',
              name: 'CCCCCCCC',
              img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
              checked: null
            },
            {
              value: '4',
              name: 'CCCCCCC',
              img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
              checked: 'checked'
            }
          ]
    }
  },
  computed: {
    radioName: function() {
      return 'radioName_' + this.index
    }
  },
  mounted() {},
  methods: {
    handleOk(e) {
      console.log(e)
      this.visible = false

      this.$store.commit('question/listData', {
        comp: 'danxuan',
        index: this.index,
        dataInfo: this.dataSet
      })
    },
    onChange(e) {
      console.log('radio checked', e.target.value)
    },
    divClick() {
      this.visible = true
    },
    aCardClick(item, index) {
      this.dataSet.forEach(element => {
        element.checked = null
      })
      item.checked = 'checked'
      debugger
    }
  }
  // watch: {
  //   'dataInfo.data': {
  //     handler: function(newVal, oldVal) {
  //       debugger
  //       if (newVal && newVal) {
  //         if (Object.keys(newVal).length > 0) {
  //           this.dataSet = JSON.parse(newVal)
  //         }
  //       }
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // }
}
</script>
<style scoped>
.c_div {
  padding: 20px;
}
.a_card_c {
  max-height: 200px;
  height: auto;
  width: 240px;
}
.img {
  height: 200px;
}
</style>
