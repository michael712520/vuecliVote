<template>
  <div id="topnav" class="overflowBarStyle">
    <ul class="tabQTypet" id="divNormal">
      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>选择题</span>
        </div>
        <ul class="navlist">
          <li>
            <a id="hrefChoice" href="javascript:void(0);">
              <i class="iconfont">&#xe607;</i>
              <span>单选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60e;</i>
              <span>多选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" title="下拉单选题">
              <i class="iconfont">&#xe615;</i>
              <span>下拉框</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="open">
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
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>矩阵题</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60f;</i>
              <span>矩阵单选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe613;</i>
              <span>矩阵多选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" title="可以设置分数">
              <i class="iconfont">&#xe612;</i>
              <span>矩阵量表</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe608;</i>
              <span>矩阵滑动条</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe610;</i>
              <span>表格数值</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe60d;</i>
              <span>表格填空</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe609;</i>
              <span>表格下拉框</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe605;</i>
              <span>表格组合</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe616;</i>
              <span>自增表格</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="open">
        <div class="classifyTitle">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>评分题</span>
        </div>
        <ul class="navlist">
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe61a;</i>
              <span>量表题</span>
            </a>
          </li>

          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe61c;</i>
              <span>评分单选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe61d;</i>
              <span>评分多选</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe612;</i>
              <span>矩阵量表</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div class="classifyTitle" id="hrefInfo">
          <i class="iconfont down">&#xe633;</i>
          <i class="iconfont right">&#xe635;</i>
          <span>个人信息</span>
        </div>
        <ul class="navlist">
          <li id="liName">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe626;</i>
              <span>姓名</span>
            </a>
          </li>
          <li id="liBaseInfo">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe624;</i>
              <span>基本信息</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62e;</i>
              <span>性别</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
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
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62d;</i>
              <span>手机</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe628;</i>
              <span>日期</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62a;</i>
              <span>时间</span>
            </a>
          </li>
          <!--<li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('地图','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('地图');return false;"><i class="iconfont">&#xe623;</i><span>地图</span></a>
          </li>-->
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62b;</i>
              <span>职业</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe62f;</i>
              <span>行业</span>
            </a>
          </li>
          <li>
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
  }
}
</script>
