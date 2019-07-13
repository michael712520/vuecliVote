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
      <div class="row">
        <a-col :span="4">ax</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ax.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.ax.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">bx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.bx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.bx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">cx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.cx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.cx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">dx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.dx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.dx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">ex</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ex.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.ex.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">fx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.fx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.fx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">gx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.gx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.gx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">hx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.hx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.hx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">ix</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ix.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.ix.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">gx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.gx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.gx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">hx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.hx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.hx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">tx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.tx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.tx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">ox</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ox.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.ox.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">px</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.px.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.px.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">qx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.qx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.qx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">rx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.rx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.rx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">sx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.sx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.sx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">tx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.tx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.tx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">ux</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.ux.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.ux.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">vx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.vx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.vx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">wx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.wx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.wx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">xx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.xx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.xx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">yx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.yx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.yx.v" />
        </a-col>
      </div>
      <div class="row">
        <a-col :span="4">zx</a-col>
        <a-col :span="10">
          <a-cascader
            :options="options"
            @change="onChange"
            placeholder="Please select"
            v-model="rows.zx.s"
          />
        </a-col>
        <a-col :span="10">
          <a-input placeholder="输入值" v-model="rows.zx.v" />
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
      }
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
      let form = { id: this.record.id, relationship: JSON.stringify(this.rows) }
      let data = await api.latitudeDetail.Add(form)
      this.visible = false
      this.confirmLoading = false
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

