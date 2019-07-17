
<template>
  <div class="div_title_attr_question">
    <a-card>
      <div class="titile">
        {{(index+1)}}、
        <div v-html="msg"></div>
      </div>
      <table v-if="dataltb&&dataltb.data&&dataSet&&dataSet.length>0">
        <tr>
          <th></th>
          <th style="display:flex;flex-direction:row">
            <div
              style="margin-left:10px;width:22px;height22px;text-align:center"
              v-for="(item,index) in dataSet"
              :key="index"
            >{{item.score}}</div>
          </th>
        </tr>
        <tr v-for="(ditem,dindex) in jzjzbl.left" :key="dindex">
          <th>
            <div style="margin-ruight:10px">{{jzjzbl.left[dindex]}}</div>
          </th>
          <td>
            <component :is="dataltb.name" :dataSet="dataSet"></component>
          </td>
          <th>
            <div style="margin-ruight:10px">{{jzjzbl.right&&jzjzbl.right[i]&&jzjzbl.right[dindex]}}</div>
          </th>
        </tr>
      </table>
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
        /> -->
      </div>
    </div>

    <div class="row cf" v-show="bjdisplay">
      <div class="spanLeft spanLeftdvf">
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
            style="width: 162px; height: 172px; overflow: auto; padding: 2px; margin-top: 7px; border: 1px solid rgb(205, 205, 205);line-height: initial;"
            v-model="leftTest"
            @blur.prevent="preventChangeCount()"
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
            style="width: 162px; height: 172px; overflow: auto; padding: 2px; margin-top: 7px; border: 1px solid rgb(205, 205, 205);line-height: initial;"
            v-model="rightTest"
            @blur.prevent="preventChangeCount()"
          ></textarea>
        </div>

        <div class="row cf" v-show="bjdisplay">
          <div style="display:flex;flex-direction:row;padding-left:20px">
            <div style="line-height: 32px;">样式</div>
            <div style="padding-left:20px">
              <jztMCDisplay @jztMCDisplay="jztMCDisplay"></jztMCDisplay>
            </div>
          </div>
        </div>
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
import fx from '@/views/tp/Quest/components/com/comp/lbt/fx'
import jztMCDisplay from '@/views/tp/Quest/components/com/comp/module/jztMCDisplay'
import api from '@/api'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Danxuan',
  components: { simpleLine, VueUeditorWrap, yx, wjx, ding, sz, jztMCDisplay, fx },
  props: {
    dataInfo: Object,
    index: Number,
    pageInfo: Object
  },
  data() {
    return {
      dataltb: {
        name: 'yx',
        data: ['yx', 'wjx', 'ding', 'sz', 'fx']
      },
      leftTest: '功能\n外观',
      rightTest: '',
      jzjzbl: {
        left: ['功能', '外观'],
        rigt: []
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
          bcontemt: JSON.stringify({ dataSet: this.dataSet, Jzjzbl: this.jzjzbl }),
          detailId: this.$store.state.question.item.id,
          order: this.index,
          type: 'Jzjzbl',
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
    },
    jztMCDisplay(e) {
      this.dataltb.name = e
      this.dataSet = this.dataSet.map(d => {
        d.zdyitem = false
        return d
      })
    },
    preventChangeCount() {
      while (this.leftTest.indexOf('\n\n') >= 0) {
        this.leftTest = this.leftTest.replace('\n\n', '\n')
      }
      while (this.rightTest.indexOf('\n\n') >= 0) {
        this.rightTest = this.rightTest.replace('\n\n', '\n')
      }
      this.jzjzbl.left = this.leftTest.split('\n').map(d => {
        if (d.length >= 1) {
          return d
        }
      })
      this.jzjzbl.rigt = this.rightTest.split('\n').map(d => {
        if (d.length >= 1) {
          return d
        }
      })
      console.log(' this.jzjzbl', this.jzjzbl)
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (nVal.bcontemt && Array.isArray(JSON.parse(nVal.bcontemt))) {
            let data = JSON.parse(nVal.bcontemt)
            if (data) {
              this.dataSet = data.dataSet
              this.jzjzbl = data.jzjzbl
            }
            // this.dataSet = JSON.parse(nVal.bcontemt)
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
    },
    leftTest: {
      handler(nVal, oVal) {}
    },
    rightTest: {
      handler(nVal, oVal) {}
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
  padding: 10px;
  height: 80px;
  width: auto;
  background-color: #f3f3f3;
  box-shadow: 1 #888888;
}
.rdion {
  margin: 10px;
}
.jzt {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e8e8e8;
  padding-left: 20px;
  padding-right: 20px;
}
.cf {
  background-color: #ffffff;
  padding: 10px;
}
.spanLeftdvf {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 20px;
}
</style>
