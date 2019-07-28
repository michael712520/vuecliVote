<template>
  <a-modal
    title="纬度设置"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <div class="page">
      <a-list v-if="record">
        <a-list-item>纬度名称：{{this.record.name}}</a-list-item>
        <a-list-item>
          XXX：
          <a-input-number
            :min="0"
            :defaultValue="this.record.baseScore"
            placeholder="输入值"
            v-model="baseScore"
          />
        </a-list-item>
        <a-list-item>纬度计算：Ｘ＝ a*ax+b*bx+c*cx、、、、、、、、、+z*zx+xxx</a-list-item>
      </a-list>

      <div class="row">
        <a-col :span="2">a</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ax.s"
          />
        </a-col>
        <a-col :span="2">ax</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.ax.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">b</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.bx.s"
          />
        </a-col>
        <a-col :span="2">bx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.bx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">c</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.cx.s"
          />
        </a-col>
        <a-col :span="2">cx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.cx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">d</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.dx.s"
          />
        </a-col>
        <a-col :span="2">dx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.dx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">e</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ex.s"
          />
        </a-col>
        <a-col :span="2">ex</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.ex.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">f</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.fx.s"
          />
        </a-col>
        <a-col :span="2">fx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.fx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">g</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.gx.s"
          />
        </a-col>
        <a-col :span="2">gx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.gx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">h</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.hx.s"
          />
        </a-col>
        <a-col :span="2">hx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.hx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">i</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ix.s"
          />
        </a-col>
        <a-col :span="2">ix</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.ix.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">g</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.gx.s"
          />
        </a-col>
        <a-col :span="2">gx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.gx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">h</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.hx.s"
          />
        </a-col>
        <a-col :span="2">hx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.hx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">t</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.tx.s"
          />
        </a-col>
        <a-col :span="2">tx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.tx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">o</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ox.s"
          />
        </a-col>
        <a-col :span="2">ox</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.ox.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">p</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.px.s"
          />
        </a-col>
        <a-col :span="2">px</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.px.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">q</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.qx.s"
          />
        </a-col>
        <a-col :span="2">qx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.qx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">r</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.rx.s"
          />
        </a-col>
        <a-col :span="2">rx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.rx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">s</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.sx.s"
          />
        </a-col>
        <a-col :span="2">sx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.sx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">t</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.tx.s"
          />
        </a-col>
        <a-col :span="2">tx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.tx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">u</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ux.s"
          />
        </a-col>
        <a-col :span="2">ux</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.ux.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">v</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.vx.s"
          />
        </a-col>
        <a-col :span="2">vx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.vx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">w</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.wx.s"
          />
        </a-col>
        <a-col :span="2">wx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.wx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">x</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.xx.s"
          />
        </a-col>
        <a-col :span="2">xx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.xx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">y</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.yx.s"
          />
        </a-col>
        <a-col :span="2">y</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.yx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="2">z</a-col>
        <a-col :span="8">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.zx.s"
          />
        </a-col>
        <a-col :span="2">zx</a-col>
        <a-col :span="8">
          <a-input-number :min="0" placeholder="输入值" v-model="rows.zx.v" />
        </a-col>
      </div>
    </div>
  </a-modal>
</template>

<script>
import api from '@/api'
export default {
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
      visible: false,
      confirmLoading: false,
      record: null,
      options: [],
      rows: {
        ax: { s: null, v: 0 },
        bx: { s: null, v: 0 },
        cx: { s: null, v: 0 },
        dx: { s: null, v: 0 },
        ex: { s: null, v: 0 },
        fx: { s: null, v: 0 },
        gx: { s: null, v: 0 },
        hx: { s: null, v: 0 },
        ix: { s: null, v: 0 },
        gx: { s: null, v: 0 },
        kx: { s: null, v: 0 },
        mx: { s: null, v: 0 },
        nx: { s: null, v: 0 },
        ox: { s: null, v: 0 },
        px: { s: null, v: 0 },
        qx: { s: null, v: 0 },
        rx: { s: null, v: 0 },
        sx: { s: null, v: 0 },
        tx: { s: null, v: 0 },
        ux: { s: null, v: 0 },
        vx: { s: null, v: 0 },
        wx: { s: null, v: 0 },
        xx: { s: null, v: 0 },
        yx: { s: null, v: 0 },
        zx: { s: null, v: 0 }
      },
      baseScore: 0
    }
  },
  async mounted() {},
  methods: {
    async add(record) {
      this.record = record
      this.visible = true

      console.log('record.relationship', record.relationship)
      if (record.relationship && JSON.parse(record.relationship)) {
        this.rows = JSON.parse(record.relationship)
        this.baseScore = record.baseScore
      } else {
        this.rows = {
          ax: { s: null, v: 0 },
          bx: { s: null, v: 0 },
          cx: { s: null, v: 0 },
          dx: { s: null, v: 0 },
          ex: { s: null, v: 0 },
          fx: { s: null, v: 0 },
          gx: { s: null, v: 0 },
          hx: { s: null, v: 0 },
          ix: { s: null, v: 0 },
          gx: { s: null, v: 0 },
          kx: { s: null, v: 0 },
          mx: { s: null, v: 0 },
          nx: { s: null, v: 0 },
          ox: { s: null, v: 0 },
          px: { s: null, v: 0 },
          qx: { s: null, v: 0 },
          rx: { s: null, v: 0 },
          sx: { s: null, v: 0 },
          tx: { s: null, v: 0 },
          ux: { s: null, v: 0 },
          vx: { s: null, v: 0 },
          wx: { s: null, v: 0 },
          xx: { s: null, v: 0 },
          yx: { s: null, v: 0 },
          zx: { s: null, v: 0 }
        }
      }
      await this.init()
    },
    async init() {
      let form = { id: this.$route.query.id }
      let data = await api.latitudeDetailItem.GetPicker(form)

      this.options = data
    },
    async handleSubmit() {
      this.confirmLoading = true
      let form = { id: this.record.id, relationship: JSON.stringify(this.rows), baseScore: this.baseScore }
      let data = await api.latitudeDetail.Add(form)
      this.visible = false
      this.confirmLoading = false
      this.$emit('refreshItem', true)
    },
    handleCancel() {
      this.visible = false
    },
    onChange() {}
  }
}
</script>
<style lang="stylus" scoped>
.page {
  height: auto;
  min-height: 800px;
}

.row {
  margin: 10px;
  height: 30px;
}
</style>

