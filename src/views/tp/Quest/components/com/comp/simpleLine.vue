 <template >
  <tr>
    <td style="width: 340px;">
      <input
        type="text"
        class="choicetxt choicetxt"
        tabindex="1"
        title="回车添加新选项，上下键编辑前后选项"
        style="width: 265px;"
        v-model="item.inputVal"
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
      <span title="添加图片" @click="addimg" class="choiceimg design-icon design-img"></span>
      <span style="display: none;">
        <input type="checkbox" tabindex="-1" title="是否显示选项文字" class="checkbox">
      </span>
    </td>
    <td align="center">
      <span
        @click="addExplain"
        title="选项说明，支持HTML，图片，视频等"
        class="choiceimg design-icon design-desc"
      ></span>
    </td>
    <td align="center">
      <span style="vertical-align: bottom; font-size: 12px;">
        <input type="checkbox" title="允许填空" class="checkbox" style="vertical-align: bottom;">
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
          title="在此可以设置每个选项的分数（请输入整数）"
          style="width: 30px;"
        >
      </span>
    </td>
    <td>
      <span>
        &nbsp;
        <input type="checkbox" tabindex="-1" class="checkbox" title="若选中，用户在填问卷时此选项会默认被选中">
      </span>
    </td>
    <td align="left" style="padding-left: 15px;">
      <span title="将当前选项上移一个位置" class="choiceimg design-icon design-cup" style="cursor: pointer;"></span>
      <span title="将当前选项下移一个位置" class="choiceimg design-icon design-cdown" style="cursor: pointer;"></span>
    </td>
  </tr>
</template>
<script>
// @ is an alias to /src
export default {
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
      item: {
        inputVal: '',
        imgs: [],
        explain: ''
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    addLine() {},
    deleteLine() {}
  },
  watch: {}
}
</script>
<style scoped>
tr {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
