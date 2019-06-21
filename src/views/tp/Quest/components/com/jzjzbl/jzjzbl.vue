<template>
  <div class="div_title_attr_question">
    <a-card>
      <div class="titile">
        {{(index+1)}}、
        <div v-html="msg"></div>
      </div>
      <div v-if=" dataltb&&dataltb.data">
        <component
          v-for="(item,index) in  dataltb.data"
          :key="index"
          :is="item.name"
          :dataSet="item.data"
          :index="index"
        ></component>
      </div>

      <a-radio-group style="display:flex">
        <div style="margin: 10px;">{{dataSet&&dataSet[0].inputVal}}</div>
        <a-rate :count="dataSet.length"/>
        <div style="margin: 10px;">{{dataSet&&dataSet[dataSet.length-1].inputVal}}</div>
      </a-radio-group>
    </a-card>
    <div class="row bjt">
      <div>
        <a-tag color="#f50" @click="rowOperate(1)">编辑</a-tag>
        <a-tag color="#2db7f5" @click="rowOperate(2)">删除</a-tag>
        <a-tag color="#87d068" @click="rowOperate(3)">上移</a-tag>
        <a-tag color="#108ee9" @click="rowOperate(4)">下移</a-tag>
        <a-cascader
          :options="options"
          @change="onChangeCascader"
          :defaultValue="CascaderData"
          placeholder="选择维度"
        />
      </div>
    </div>
    <div class="row" v-show="bjdisplay">
      <div class="row">
        <div class="div_editor">
          <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
        </div>
        <div class="container" style="margin-top: 10px; display:none">
          <span>
            <select style="width:120px;" onchange="javascript:cur.selChangeType(this.value);">
              <option value="0">单选</option>
              <option value="radio_down">下拉框单选</option>
              <option value="check">多选</option>
              <option value="likert">量表题</option>
              <option value="order">排序</option>
              <option value="toupiaoradio">投票单选</option>
              <option value="ceshiradio">考试单选</option>
              <option value="cepingradio">评分单选</option>
              <option value="question">填空</option>
            </select>
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              tabindex="-1"
              title="用户在填写问卷时必须回答这道题"
              class="checkbox"
              id="req_2_3944705790"
            >
            <label for="req_2_3944705790">必答</label>
            <span style="display: none;">
              &nbsp;&nbsp;&nbsp;&nbsp;将所有题目设为：
              <a
                href="javascript:setAllRequired(true);"
                class="link-U00a6e6"
              >必答</a>&nbsp;
              <a href="javascript:setAllRequired(false);" class="link-U00a6e6">非必答</a>
            </span>
          </span>
          <span>
            <span>
              &nbsp;
              <input
                type="text"
                class="choicetxt"
                style="width: 140px; height: 15px; display: none;"
              >
              <span style="margin-left: 30px;"></span>
              <a class="link-new" title="填写提示可以作为副标题" href="javascript:">填写提示</a>
            </span>
          </span>
        </div>
      </div>
      <div style="clear: both;"></div>
      <div class="container" style="position: relative;">
        <div style="padding-top: 10px;"></div>
        <div style="clear: both;">
          <div class="selScrrol" style="text-align: center;">
            <div class="choise_bg"></div>
            <div class="spanLeft" style="position: relative; z-index: 1; width: 344px;">
              <div class="matrixtitle" style="width: 172px;">
                <div class="matrixhead" style="padding-left: 4px;">
                  <span style="float:left;">
                    <b>
                      行标题
                      <span
                        class="fullScreen"
                        style="display:inline-block;vertical-align:middle;margin-left:3px;"
                        title="放大文本框进行编辑"
                        onclick="cur.enlargeRowTitle();"
                      ></span>
                    </b>
                  </span>
                  <span class="spanRight" style="padding-right: 20px;">
                    <input type="checkbox" tabindex="-1" style="display: none;">
                    <span style="display: none;">右行标题</span>
                  </span>
                  <div class="divclear"></div>
                </div>
                <textarea
                  wrap="off"
                  rows="7"
                  class="inputtext"
                  tabindex="1"
                  title="相当于每个小题的标题"
                  style="width: 162px; height: 172px; overflow: auto; padding: 2px; margin-top: 7px; border: 1px solid rgb(205, 205, 205);"
                ></textarea>
              </div>
              <div class="spanLeft matrixhead" style="width: 172px;">
                <div>
                  <input type="checkbox" tabindex="-1">
                  <span>右行标题(可选)</span>
                </div>
                <textarea
                  wrap="soft"
                  rows="7"
                  class="inputtext"
                  title="适用于“语义差异法”等场景"
                  style="width: 156px; height: 172px; overflow: auto; padding: 2px; margin: 7px 0px 0px 4px;"
                ></textarea>
              </div>
              <div class="divclear"></div>
              <div style="margin: 12px 0px 8px;">
                <span>
                  <a
                    href="javascript:;"
                    onclick="cur.addLabel();return false;"
                    class="link-U666"
                  >分组设置</a>&nbsp;&nbsp;
                  <input
                    type="checkbox"
                    tabindex="-1"
                    class="checkbox"
                    id="rowrn_111_4406327723"
                  >
                  <label for="rowrn_111_4406327723" title="标题随机显示">行标题随机&nbsp;</label>
                </span>
                <span style="display: none; margin-left: 20px;">
                  <span>最小值：</span>
                  <input
                    type="text"
                    class="choicetxt"
                    title="用户可以选择的最小值"
                    maxlength="3"
                    style="width: 30px;"
                  >
                  <span style="margin-left: 20px;">最大值：</span>
                  <input
                    type="text"
                    class="choicetxt"
                    title="用户可以选择的最大值"
                    maxlength="3"
                    style="width: 30px;"
                  >
                </span>
              </div>
            </div>
            <div class="spanLeft" style="text-align: center; width: 460px;">
              <table class="tableoption" cellspacing="0" cellpadding="0" width="98%">
                <tbody>
                  <tr>
                    <td style="width: 340px; padding: 3px 5px;">
                      <span>
                        <a
                          title="交换选项文字"
                          href="javascript:;"
                          style="color: rgb(34, 34, 34); margin-left: 7px; text-decoration: none;"
                        >
                          选项文字
                          <i class="design-icon design-ctext"></i>
                        </a>
                      </span>
                    </td>
                    <td align="center" style="width: 30px; padding: 3px 5px;">
                      <span style="border-bottom: 1px solid rgb(140, 140, 140);">图片</span>
                    </td>
                    <td style="width: 50px; padding: 3px 5px;">
                      <div style="overflow: hidden; text-align: center;">说明</div>
                    </td>
                    <td align="center" style="letter-spacing: 1px; width: 70px; padding: 3px 5px;">
                      <span>允许填空</span>
                    </td>
                    <td style="width: 50px; padding: 3px 5px;">
                      <span>
                        <span style="cursor: pointer;">
                          &nbsp;分数
                          <span
                            class="bordCss bordBottomCss"
                            style="border-color:#333 transparent transparent;"
                          ></span>
                        </span>
                      </span>
                    </td>
                    <!-- <td style="width: 30px; padding: 3px 5px;">
                  <span>
                    <span>默认</span>
                  </span>
                    </td>-->
                    <td align="left" style="padding: 3px 5px 3px 15px;">
                      <span>上移下移</span>
                    </td>
                  </tr>
                  <simpleLine
                    v-for="(item ,index) in dataSet"
                    :key="index"
                    :index="index"
                    :dataInfo="item"
                    @updateitem="updateitem(item ,index,$event)"
                    @operate="operate"
                  ></simpleLine>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
          @click="completed"
          type="button"
          value="完成编辑"
          class="submitbutton"
          style="width: 100%;"
        >
      </div>
    </div>
  </div>
</template>
<script>
import simpleLine from '../comp/simpleLine'
import yx from '@/views/tp/Quest/components/com/comp/lbt/yx'
import wjx from '@/views/tp/Quest/components/com/comp/lbt/wjx'
import ding from '@/views/tp/Quest/components/com/comp/lbt/ding'
import sz from '@/views/tp/Quest/components/com/comp/lbt/sz'

import api from '@/api'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Danxuan',
  components: { simpleLine, VueUeditorWrap, yx, wjx, ding, sz },
  props: {
    dataInfo: Object,
    index: Number
  },
  data() {
    return {
      dataltb: {
        name: 'yx',
        data: ['yx', 'wjx', 'ding', 'sz']
      },
      aRadioOnValue: null,
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
          inputVal: '很不满意',
          imgs: [],
          checked: null,
          explain: '说明1',
          score: 1
        },
        {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '不满意',
          imgs: [],
          checked: null,
          explain: '2',
          score: 2
        },
        {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '一般',
          imgs: [],
          checked: null,
          explain: '2',
          score: 3
        },
        {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '满意',
          imgs: [],
          checked: null,
          explain: '2',
          score: 4
        },
        {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '很满意',
          imgs: [],
          checked: null,
          explain: '2',
          score: 5
        }
      ],
      bjdisplay: false,
      CascaderData: []
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
  async mounted() {},
  methods: {
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
    async completed() {
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
          type: 'jzjzbl',
          latitudeDetailIds: latitudeDetailIds
        }
      }
      console.log('api.tp.SaveItem(params)', params)

      let data = await api.tp.SaveItem(params)
      this.$store.commit('question/refresh')
      this.$message.success('提交成功', 2)
      this.bjdisplay = false
    },
    operate(event) {
      if (event.type == 1) {
        let item = {
          value: Guid.NewGuid().ToString('N'),
          inputVal: '非常满意',
          imgs: [],
          checked: null,
          explain: '说明2',
          score: 6
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
        let arr = []
        this.dataSet.forEach((d, index) => {
          if (event.index != index) {
            arr.push(d)
          }
        })
        this.dataSet = arr
      } else if (event.type == 3) {
        if (event.index != 0) {
          let item = this.dataSet[event.index - 1]
          this.dataSet[event.index - 1] = this.dataSet[event.index]
          this.dataSet[event.index] = item
          this.dataSet = this.dataSet.map(d => {
            return d
          })
        }
      } else if (event.type == 4) {
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
      }
    },
    aRadioOnChange(e) {},
    onChangeCascader(e) {
      this.CascaderData = e
      this.bjdisplay = true
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
