<template>
  <div id="topnav" class="overflowBarStyle">
    <ul class="tabQTypet" id="divNormal">
      <li>
        <div class="classifyTitle" id="hrefInfo" @click="selectChange('hrefInfo')">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>个人信息</span>
        </div>
        <ul class="navlist">
          <li id="liName" @click="selectChange('liName')">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe626;</i>
              <span>姓名</span>
            </a>
          </li>
          <li id="liBaseInfo" @click="selectChange('liBaseInfo')">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe624;</i>
              <span>基本信息</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('lixingbie')">
              <i class="iconfont">&#xe62e;</i>
              <span>性别</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('linianlingduan')">
              <i class="iconfont">&#xe625;</i>
              <span>年龄段</span>
            </a>
          </li>
          <!--<li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('城市单选','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('城市单选');return false;"><i class="iconfont">&#xe627;</i><span>省市</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('省市区','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('省市区');return false;"><i class="iconfont">&#xe627;</i><span>省市区</span></a>
          </li>-->
          <li>
            <a href="javascript:void(0);" @click="selectChange('lishouji')">
              <i class="iconfont">&#xe62d;</i>
              <span>手机</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('liriqi')">
              <i class="iconfont">&#xe628;</i>
              <span>日期</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('lishijian')">
              <i class="iconfont">&#xe62a;</i>
              <span>时间</span>
            </a>
          </li>
          <!--<li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('地图','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('地图');return false;"><i class="iconfont">&#xe623;</i><span>地图</span></a>
          </li>-->
          <li>
            <a href="javascript:void(0);" @click="selectChange('lizhiye')">
              <i class="iconfont">&#xe62b;</i>
              <span>职业</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('lihangye')">
              <i class="iconfont">&#xe62f;</i>
              <span>行业</span>
            </a>
          </li>
          <!-- <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62c;</i>
              <span>高校</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe629;</i>
              <span>密码</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe630;</i>
              <span>邮寄地址</span>
            </a>
          </li>-->
        </ul>
      </li>
      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down"></i>
          <i class="iconfont right"></i>
          <span>选择题</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);" @click="selectChange('pfdanxuan')">
              <i class="iconfont"></i>
              <span>评分单选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('pfduoxuan')">
              <i class="iconfont"></i>
              <span>评分多选</span>
            </a>
          </li>
        </ul>
      </li>
      <!-- <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>填空题</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe606;</i>
              <span>单项填空</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60a;</i>
              <span>多项填空</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60c;</i>
              <span>矩阵填空</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60d;</i>
              <span>表格填空</span>
            </a>
          </li>
        </ul>
      </li>-->
      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down"></i>
          <i class="iconfont right"></i>
          <span>矩阵题</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);" @click="selectChange('JzLbt')">
              <i class="iconfont"></i>
              <span>量表题</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('JzNPSlb')">
              <i class="iconfont"></i>
              <span>NPS量表</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>矩阵量表</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>分页说明</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe614;</i>
              <span>分页</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60b;</i>
              <span>段落说明</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down"></i>
          <i class="iconfont right"></i>
          <span>其他题型</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);" @click="selectChange('danxuan')">
              <i class="iconfont"></i>
              <span>普通单选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="selectChange('duoxuan')">
              <i class="iconfont"></i>
              <span>普通多选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>填空题</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>矩阵填空</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>文件上传</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont"></i>
              <span>排序</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>滑动条</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont"></i>
              <span>多级下拉</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'LeftMenu',
  components: {},
  data() {
    return {}
  },
  methods: {
    selectChange(selectVal) {
      this.$store.commit('question/addListData', selectVal)
    }
  }
}
</script>
