 <template >
  <tr>
    <td style="width: 340px;">
      <input
        type="text"
        class="choicetxt choicetxt"
        tabindex="1"
        title="回车添加新选项，上下键编辑前后选项"
        style="width: 265px;"
        v-model="dataInfo.inputVal"
      >
      <span
        title="在此选项下面插入一个新的选项"
        class="choiceimg design-icon design-add"
        style="cursor: pointer; margin-left: 3px;"
        @click="addLine"
      ></span>
      <span title="删除当前选项（最少保留2个选项）" class="choiceimg design-icon design-minus" @click="deleteLine"></span>
    </td>
    <td align="center">
      <input type="hidden" value>
      <span
        title="添加图片"
        @click="$refs.zdyUpload.showModal()"
        class="choiceimg design-icon design-img"
      ></span>
      <span style="display: none;">
        <input type="checkbox" tabindex="-1" title="是否显示选项文字" class="checkbox">
      </span>
    </td>
    <td align="center">
      <span
        @click="$refs.zdyText.showModal()"
        title="选项说明，支持HTML，图片，视频等"
        class="choiceimg design-icon design-desc"
      ></span>
    </td>
    <td align="center">
      <span style="vertical-align: bottom; font-size: 12px;">
        <input
          type="checkbox"
          title="允许填空"
          class="checkbox"
          v-model="dataInfo.checked"
          style="vertical-align: bottom;"
        >
        <span style="display: none;">
          <span style="font-size:16px;">|</span>
          <span>
            <input type="checkbox" title="文本框必填" class="checkbox">
            <label for="cbr2_2">必填</label>
          </span>
        </span>
      </span>
    </td>
    <td align="left">
      <span>
        <input
          type="text"
          class="choicetxt"
          maxlength="5"
          v-model="dataInfo.score"
          title="在此可以设置每个选项的分数（请输入整数）"
        >
      </span>
    </td>
    <td align="left" style="padding-left: 15px;">
      <span title="将当前选项上移一个位置" class="choiceimg design-icon design-cup" style="cursor: pointer;"></span>
      <span title="将当前选项下移一个位置" class="choiceimg design-icon design-cdown" style="cursor: pointer;"></span>
    </td>
    <zdyUpload ref="zdyUpload" v-model="item.imgs"></zdyUpload>
    <zdyText ref="zdyText" v-model="item.explain"></zdyText>
  </tr>
</template>
<script>
// @ is an alias to /src
import zdyUpload from './zdyUpload'
import zdyText from './zdyText'
export default {
  components: { zdyUpload, zdyText },
  props: {
    dataInfo: Object,
    index: Number
  },
  data() {
    return {
      visible: false,
      title: '',
      note: '',
      item: {
        inputVal: '',
        imgs: [],
        explain: '',
        score: null,
        checked: null
      },
      flage: 1
    }
  },
  computed: {},
  mounted() {},
  methods: {
    addLine() {},
    deleteLine() {},
    addimg() {
      this.visible = true
    },
    addExplain() {},
    update() {
      this.dataInfo = this.item
    },
    handleOk(e) {},
    handleCancel(e) {
      this.visible = false
    }
  },
  watch: {
    dataInfo: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          if (
            !(
              this.item.inputVal == nVal.inputVal &&
              this.item.imgs == nVal.imgs &&
              this.item.explain == nVal.explain &&
              this.item.score == nVal.score &&
              this.item.checked == nVal.checked
            )
          ) {
            this.$emit('dataInfo_handler', { ...nVal })
            this.item = { ...nVal }
            this.flage = 2
          }
        }
      },
      immediate: true,
      deep: true
    },
    item: {
      handler(nVal, oVal) {
        if (nVal && Object.keys(nVal).length != 0) {
          this.$emit('updateitem', { ...nVal })
          if (this.flage != 1) {
          }
        }
      },
      // immediate: true,
      deep: true
    }
  }
}
</script>
<style scoped>
tr {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
