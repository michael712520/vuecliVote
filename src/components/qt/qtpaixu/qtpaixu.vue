<template>
  <a-card>
    <div class="titile" style="display:flex;margin-bottom:10px">
      {{(index+1)}}、
      <div v-html="msg"></div>
    </div>
    <div class="row">
      <a-radio-group style="display:flex;margin-bottom:10px" @change="radioChange">
        <div class="rdion" v-for="(item ,index) in dataSet" :key="index">
          <a-radio :key="index" :value="item.value" size="large">{{item.inputVal}}</a-radio>
          <br />
        </div>
      </a-radio-group>
    </div>
  </a-card>
</template>
<script>
import api from '@/api'
import { setTimeout } from 'timers'

export default {
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  data() {
    return { msg: '标题', dataSet: {} }
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        //
        // this.$emit('change', changedFields)
      },
      mapPropsToFields: () => {
        return {}
      },
      onValuesChange: (props, values) => {
        let key = Object.keys(values)[0]
        if (values.hasOwnProperty(key)) {
          this.SelectResult[key] = values[key]
        }
        console.log('this.SelectResult', this.SelectResult)
        if (Object.keys(this.SelectResult).length == this.dataSet.length) {
          this.$emit('updateSelectResult', {
            index: this.index,
            SelectResult: { value: this.SelectResult, flag: true }
          })
        }
      }
    })
  },
  computed: {},
  mounted() {},
  methods: {
    divclick(index) {},
    radioChange(e) {
      this.$emit('updateSelectResult', {
        index: this.index,
        SelectResult: { value: e.target.value, flag: true }
      })
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && Array.isArray(JSON.parse(nVal.bcontemt))) {
            this.dataSet = JSON.parse(nVal.bcontemt)
          }
          this.msg = nVal.title
          this.bjdisplay = nVal.display
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
</style>

