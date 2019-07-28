<template>
  <div class="div_title_attr_question">
    <a-card>
      <div class="titile">
        {{(this.$store.state.question.thVisible?index+1+'、':'')}}
        <div v-html="msg"></div>
      </div>
      <a-cascader :options="dataSet" @change="onChange" placeholder="下拉选择" :changeOnSelect="true" />
    </a-card>
    <div
      class="row"
      style="padding:20px;margin-left：20px;text-align:center;"
      v-if="pageInfo&&pageInfo.display===true"
    >
      <span
        style="font-size:14px; font-weight:normal;"
      >[&nbsp;第{{pageInfo.page}}页/共{{this.$store.state.question.listData.length}}页&nbsp;]</span>
    </div>
    <div class="row bjt">
      <div>
        <a-tag color="#f50" @click="rowOperate(1)">编辑</a-tag>
        <a-tag color="#2db7f5" @click="rowOperate(2)">删除</a-tag>
        <a-tag color="#87d068" @click="rowOperate(3)">上移</a-tag>
        <a-tag color="#108ee9" @click="rowOperate(4)">下移</a-tag>
        <a-tag color="#108dd9" @click="rowOperate(5)">向下插入</a-tag>

        <a-tag
          v-if="pageInfo&&pageInfo.display===true"
          color="#51ada8"
          @click="pageInfoClick(false)"
        >删除分页</a-tag>
        <a-tag v-else color="#51ada8" @click="pageInfoClick(true)">添加分页</a-tag>
        <!-- <a-cascader
          :options="options"
          @change="onChangeCascader"
          :defaultValue="CascaderData"
          placeholder="选择维度"
        />-->
      </div>
    </div>
    <div class="row" v-show="bjdisplay">
      <div class="row">
        <div class="div_editor">
          <a-textarea placeholder="Basic usage" :rows="4" v-model="msg" />
        </div>
      </div>
      <div class="row" style="margin-left:20px;padding:20px;">
        <a-col :span="5">
          <a-cascader
            :options="dataSet"
            @change="onChange"
            :changeOnSelect="true"
            placeholder="下拉选择"
          />
        </a-col>
        <a-col :span="10">
          <div v-if="this.editeData">
            <a-radio-group @change="radioOnChange($event)">
              <div style="padding-bottom:10px;" v-for="(item,index) in editeData" :key="index">
                {{item.label}}
                <a-radio-button :value="{type:'bj',item:item}">添加本级</a-radio-button>
                <a-radio-button :value="{type:'zj',item:item}">添加子级</a-radio-button>
                <a-radio-button :value="{type:'sc',item:item}">删除</a-radio-button>
              </div>
            </a-radio-group>
          </div>
        </a-col>
        <a-col :span="9">
          <div style="padding-left:10px;padding-right:20px">
            <div>
              <a-input placeholder="添加" style="padding-bottom:10px;" v-model="djxlTextInfo" />
            </div>
            <div style="height:10px"></div>
            <div>
              <a-button type="primary" @click="tjprimary">确定</a-button>
            </div>
          </div>
        </a-col>
      </div>
      <div style="clear: both;"></div>
      <div class="container" style="position: relative;">
        <div class="divclear"></div>
        <div style="margin: 12px 0px 5px;">
          <div style="width: 100%;">
            <!-- <span
              class="spanLeft"
              style=" line-height: 28px; height: 28px; margin: 0px 0px 0px 4px; text-align: left; width: 340px;"
            >
              <a
                href="javascript:"
                onclick="cur.addNewItem();return false;"
                class="link-U00a6e6"
                style="text-decoration:none;"
              >
                <span class="choiceimg design-icon design-singleadd"></span>
                <span style="color: #1ea0fa;">添加选项</span>
              </a>&nbsp;&nbsp;
            </span>-->
            <div class="divclear"></div>
          </div>
        </div>
      </div>
      <div style="margin: 14px 36px 20px;">
        <div style="color: red; font-size: 14px; display: inline-block; margin: 0px 0px 6px 10px;"></div>
        <input
          @click="completed()"
          type="button"
          value="完成编辑"
          class="submitbutton"
          style="width: 100%;"
        />
      </div>
    </div>
  </div>
</template>
<script>
import simpleLine from '../comp/simpleLine'
import api from '@/api'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Danxuan',
  components: { simpleLine, VueUeditorWrap },
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  data() {
    return {
      itemSelectWb: null,
      djxlTextInfo: '',
      aRadioOnValue: null,
      radioDefaultValue: 'bj',
      msg: '标题',
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 100,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://sljhhzzapi.mas.gov.cn/net/controller.ashx',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: '/UEditor/'
      },
      visible: false,
      editorText: '',
      value: 1,

      dataSet: [
        {
          value: Guid.NewGuid().ToString('N'),
          label: '一级',
          children: [
            {
              value: Guid.NewGuid().ToString('N'),
              label: '一级一级',
              children: [
                {
                  value: Guid.NewGuid().ToString('N'),
                  label: '一级一级一级'
                }
              ]
            }
          ]
        },
        {
          value: Guid.NewGuid().ToString('N'),
          label: '二级',
          children: [
            {
              value: Guid.NewGuid().ToString('N'),
              label: '二级一级',
              children: [
                {
                  value: Guid.NewGuid().ToString('N'),
                  label: '二级一级一级'
                }
              ]
            }
          ]
        }
      ],
      bjdisplay: false,
      CascaderData: [],
      editeData: [],
      onChangeE: []
    }
  },
  computed: {
    imgurl: function() {},
    radioName: function() {
      return 'radioName_' + this.index
    },
    options: function() {
      return this.$store.state.latitudeDetail.ListPicker
    }
  },
  async mounted() {
    setTimeout(this.initcompleted(), 3000)
  },
  methods: {
    initcompleted() {
      if (!this.dataInfo.id) {
        this.completed()
      }
    },
    onContentChange(val) {
      this.editorText = val
    },
    afterChange() {},
    updateitem(item, index, $event) {
      let data = this.dataSet.map((d, i) => {
        if (index === i) {
          //  有同事指出应该声明一个新变量来存储map的结果，这个建议我认为是对的。
          return {
            ...d,
            ...$event
          }
        } else {
          return { ...d }
        }
      })
      // this.$emit('complete', data)
    },
    pageInfoClick(f) {
      if (f === true) {
        let data = { pageInfo: JSON.stringify({ ...this.pageInfo, display: true }) }
        this.completed(data)
      } else if (f === false) {
        let data = { pageInfo: JSON.stringify({ ...this.pageInfo, display: false }) }
        this.completed(data)
      }
    },
    async completed(paramInfo) {
      this.display = false
      let latitudeDetailIds = []
      this.CascaderData.forEach(d => {
        latitudeDetailIds.push(d)
      })
      let params = {
        ...this.dataInfo,
        ...{
          title: this.msg,
          bcontemt: JSON.stringify(this.dataSet),
          detailId: this.$store.state.question.item.id,
          order: this.index,
          type: 'qtdjxl',
          latitudeDetailIds: latitudeDetailIds
        }
      }
      console.log('api.tp.SaveItem(params)', params)
      if (paramInfo) {
        params = {
          ...params,
          ...paramInfo
        }
      }
      this.$store.dispatch('question/upListData', { index: this.index, item: params })

      this.$store.commit('question/refresh')
      this.$message.success('提交成功', 2)
      this.bjdisplay = false
    },
    operate(event) {
      if (event.type == 1) {
        this.$message.error('不可操作')
        return
        let item = {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '单选2',
          imgs: [],
          checked: null,
          explain: '说明2',
          score: 0
        }
        let arr = []
        this.dataSet.forEach((d, index) => {
          arr.push(d)
          if (event.index == index) {
            arr.push(item)
          }
        })
        this.dataSet = arr
      } else if (event.type == 2) {
        this.$message.error('不可操作')
        return
        let arr = []
        this.dataSet.forEach((d, index) => {
          if (event.index != index) {
            arr.push(d)
          }
        })
        this.dataSet = arr
      } else if (event.type == 3) {
        this.$message.error('不可操作')
        return
        if (event.index != 0) {
          let item = this.dataSet[event.index - 1]
          this.dataSet[event.index - 1] = this.dataSet[event.index]
          this.dataSet[event.index] = item
          this.dataSet = this.dataSet.map(d => {
            return d
          })
        }
      } else if (event.type == 4) {
        this.$message.error('不可操作')
        return
        if (event.index != this.dataSet.length - 1) {
          let item = this.dataSet[event.index]
          this.dataSet[event.index] = this.dataSet[event.index + 1]
          this.dataSet[event.index + 1] = item
          this.dataSet = this.dataSet.map(d => {
            return d
          })
        }
      }
    },
    async rowOperate(event) {
      if (event === 1) {
        this.bjdisplay = !this.bjdisplay
      } else if (event === 2) {
        await api.tp.DeleteItem(this.dataInfo.id)

        this.$store.commit('question/refresh')
      } else if (event === 3) {
        this.$emit('rowOperate', 3)
      } else if (event === 4) {
        this.$emit('rowOperate', 4)
      } else if (event === 5) {
        this.$emit('rowOperate', 5)
      }
    },
    onChangeCascader(e) {
      this.CascaderData = e
      this.bjdisplay = true
    },
    onChange(e) {
      let dds = this.dataSet
      let temp = dds
      e.forEach(d => {
        for (var i = 0; i < dds.length; i++) {
          if (dds[i].value == d) {
            temp = dds
            if (dds[i].hasOwnProperty('children')) {
              dds = dds[i].children
            }
          }
        }
      })
      this.onChangeE = e
      this.editeData = temp
      this.itemSelectWb = null
    },
    radioOnChange($event) {
      this.radioDefaultValue = $event.target.value.type
      this.itemSelectWb = $event.target.value.item
      let item = this.itemSelectWb
      if (this.radioDefaultValue == 'sc') {
        this.dataSet = this.dataSet.filter((d, d_i, d_arr) => {
          if (d.value == item.value) {
            return false
          } else if (d.hasOwnProperty('children')) {
            d.children = d.children.filter(e => {
              if (e.value == item.value) {
                return false
              } else if (e.hasOwnProperty('children')) {
                e.children = e.children.filter(f => {
                  if (f.value == item.value) {
                    return false
                  } else {
                    return true
                  }
                })
              }
              return true
            })
          }
          return true
        })

        this.onChange(this.onChangeE)
      }
    },
    tjprimary() {
      if (this.itemSelectWb) {
        let item = this.itemSelectWb
        if (this.radioDefaultValue === 'bj') {
          this.dataSet.forEach(d => {
            if (d.value == item.value) {
              this.dataSet.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
            } else if (d.hasOwnProperty('children')) {
              d.children.forEach(e => {
                if (e.value == item.value) {
                  d.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                } else if (e.hasOwnProperty('children')) {
                  e.children.forEach(f => {
                    if (f.value == item.value) {
                      e.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                    }
                  })
                }
              })
            }
          })
          this.$message.success('添加成功')
        } else if (this.radioDefaultValue === 'zj') {
          this.dataSet.forEach(d => {
            if (d.value == item.value) {
              if (d.hasOwnProperty('children')) {
                d.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
              } else {
                d.children = []
                d.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
              }
            } else if (d.hasOwnProperty('children')) {
              d.children.forEach(e => {
                if (e.value == item.value) {
                  if (e.hasOwnProperty('children')) {
                    e.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                  } else {
                    e.children = []
                    e.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                  }
                } else if (e.hasOwnProperty('children')) {
                  e.children.forEach(f => {
                    if (f.value == item.value) {
                      this.$message.error('3级下拉啦！不能添加子项了')
                      return
                      f.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                    } else {
                      f.children = []
                      f.children.push({ value: Guid.NewGuid().ToString('N'), label: this.djxlTextInfo })
                    }
                  })
                }
              })
            }
          })
          this.$message.success('添加成功')
        }
      } else {
        this.$message.error('请选择操作步骤')
        return
      }
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
          if (nVal.latitudeDetailIds && nVal.latitudeDetailIds.length > 0) {
            this.CascaderData = JSON.parse(nVal.latitudeDetailIds)
          }
        }
      },
      immediate: true,
      deep: true
    }
  }
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
.div_editor {
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
}
.wbd {
  margin: 10px;
}
.bjt {
  padding: 20px;
  height: 80px;
  width: auto;
  background-color: #f3f3f3;
  box-shadow: 1 #888888;
}
.rdion {
  margin: 10px;
}
</style>
