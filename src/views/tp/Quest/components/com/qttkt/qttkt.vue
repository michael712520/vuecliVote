<template>
  <div class="div_title_attr_question">
    <a-card>
      <div class="row">
        <div class="titile">
          {{(this.$store.state.question.thVisible?index+1+'、':'')}}
          <div v-html="msg">{{msg}}</div>
        </div>
        <a-form :form="form">
          <a-form-item :label="dataSet[0].inputVal" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input
              v-decorator="['desc', {rules: [{required: true, min: 2, message: '请输入至少2个字符的姓名！'}]}]"
            />
          </a-form-item>
        </a-form>
      </div>
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
        />-->
      </div>
    </div>
    <div class="row" v-show="bjdisplay">
      <div class="row">
        <div class="div_editor">
          <a-textarea placeholder="Basic usage" :rows="4" v-model="msg" />
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
        <div style="padding:10px">
          <span>
            <select @change="xlSelectType" v-model="couponSelected">
              <option value="0">属性验证</option>
              <option value>不验证</option>
              <option value="数字">整数</option>
              <option value="小数">小数</option>
              <option value="日期">日期</option>
              <option value="手机">手机</option>
              <option value="固话">固话</option>
              <option value="电话">手机或固话</option>
              <option value="Email">邮件</option>
              <option value="密码">密码</option>
              <option value="城市单选">省份城市</option>
              <option value="省市区">省市区</option>
              <option value="高校">高校</option>
              <option value="地图">地图</option>
              <option value="网址">网址</option>
              <option value="身份证号">身份证号</option>
              <option value="学号">学号</option>
              <option value="QQ">QQ</option>
              <option value="汉字">汉字</option>
              <option value="姓名">中文姓名</option>
              <option value="英文">英文</option>
            </select>
          </span>
          <span style @click="d=>{
            this.maxMinType=!this.maxMinType
            }">
            &nbsp;&nbsp;
            <input
              type="checkbox"
              tabindex="-1"
              id="mma_635532226126"
              class="checkbox"
              :checked="maxMinType"
            />
            <label for="mma_635532226126">限制范围&nbsp;</label>
          </span>
          <span style v-if="maxMinType">
            &nbsp;&nbsp;
            <span>最小字数：</span>
            <input type="text" class="choicetxt" title="不填表示无限制" style="width: 40px;" />
            <span style="margin-left: 10px;">最大字数：</span>
            <input type="text" class="choicetxt" title="不填表示无限制" style="width: 40px;" />
          </span>
          <span title="要求每个人填写的答案是唯一的">
            &nbsp;&nbsp;
            <input
              type="checkbox"
              tabindex="-1"
              id="only_632129816636"
              class="checkbox"
            />
            <label for="only_632129816636">不允许重复&nbsp;</label>
          </span>
          <span style="display: none;">
            &nbsp;&nbsp;
            <input
              type="checkbox"
              tabindex="-1"
              id="sms_63_6236375306"
              class="checkbox"
            />
            <label for="sms_63_6236375306">使用短信验证</label>
            <span style="display: none;">
              &nbsp;&nbsp;此功能需要购买短信：
              <a
                href="/corphome/account/prepaysms.aspx?amount=500"
                target="_blank"
                class="link-set"
              >立即购买</a>
            </span>
          </span>
          <span style="display: none;">&nbsp;&nbsp;提示：密码会通过MD5加密存储，不会对任何人公开。</span>
          <span>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              tabindex="-1"
              id="def_63_4863383262"
              class="checkbox"
            />
            <label for="def_63_4863383262">默认值</label>
            <textarea
              wrap="soft"
              rows="1"
              class="inputtext"
              maxlength="20"
              title="最多输入20个字符"
              style="width: 160px; overflow: auto; margin-left: 4px; display: none; vertical-align: middle;"
            ></textarea>
          </span>
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
import danxuanYL from '../mk/danxuanYL'
import danxuanSimple from '../mk/danxuanSimple'

import api from '@/api'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Danxuan',
  components: { simpleLine, VueUeditorWrap, danxuanYL, danxuanSimple },
  props: {
    dataInfo: Object,
    titile: String,
    index: Number,
    pageInfo: Object
  },
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
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
      radioStyle: {
        display: 'block',
        height: '300px',
        lineHeight: '300px'
      },
      dataSet: [
        {
          value: Guid.NewGuid().ToString('N'),
          inputVal: 'XX',
          imgs: [],
          checked: null,
          explain: '说明1',
          score: 0
        }
      ],
      bjdisplay: false,
      CascaderData: [],
      form: this.$form.createForm(this),
      maxMinType: false,
      couponSelected: 0
    }
  },
  computed: {
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
          type: 'qttkt',
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
      }
    },
    aRadioOnChange(e) {},
    onChangeCascader(e) {
      this.CascaderData = e
      this.bjdisplay = true
    },
    xlSelectType(e) {
      if (this.couponSelected == '数字' || this.couponSelected == '小数') {
        this.maxMinType = true
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
.title {
  margin-top: 20px;
  font-size: 20px;
}
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
.titile {
  display: flex;
  flex-direction: row;
}
</style>
