<template>
  <div class="about">
     <div id="ss-header">
	<div id="divMenu">
		<div style="display: none;">
			<a href="javascript:void(0);" onclick="save_paper('edit',true);"><span><strong>保存</strong></span></a>(<input id="chkAutoSave" type="checkbox" checked="checked" onclick="chkAutoSave_Click(this);" />自动保存)
		</div>
		<div style="float: right;">
			<a href="#" onclick="return save_paper('pub',true);" class="newBtn overEdit" id="hrefFiQ"><i class="iconfont">&#xe636;</i><span>完成编辑</span></a>
		</div>
		<div style="float:left;display:none;" id="divKsSet">
			<span class="ksCount"><span id="showtotalscore">&nbsp;&nbsp;试卷总分：<strong id="totalscore"></strong>分</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span id="showtotalques">试卷题目数：<strong id="totalquestions"></strong></span> </span>
			<a href="javascript:void(0);" style="margin-right:0" onclick="setTikuRandom();return false;" class="newBtn grayBtn">
				<i class="iconfont">&#xe634;</i><span>题库随机设置</span></a>
			<a href="javascript:void(0);" style="margin-right:0" class="newBtn grayBtn" onclick="PDF_launch('/wjx/design/settime.aspx?activity=36416073',660,430);return false;"><i class="iconfont">&#xe634;</i><span>考试常用设置</span></a>
			<span class="hideTopic" style="padding:0 12px;"><input type="checkbox" id="chkUseTopic" class="checkbox" style="vertical-align: middle;" /><label for="chkUseTopic">隐藏系统题号</label></span>
		</div>
		<div style="float: left;display:none" id="divCp360Set">
			<a href="###" onclick="PDF_launch('/newwjx/design/categorysettings.aspx?activity=36416073&type=1',732,620,getcategoryinf);" class="newBtn grayBtn"><i class="iconfont">&#xe634;</i><span>维度设置</span></a>
		</div>
		<div style="float:left;margin-right:20px;">
			<a href="javascript:void(0);" class="newBtn grayBtn" onclick="setTikuRandom();return false;">
				<i class="iconfont">&#xe634;</i><span id="spanRandom" style="vertical-align: middle;">题目随机设置</span></a>
			<span class="hideTopic">
                    <input class="checkbox" type="checkbox" id="chkUseSelfTopic" style="vertical-align: middle;" />
                    <label for="chkUseSelfTopic">隐藏系统题号</label>
                </span>
		</div>

	</div>
</div>
<input name="hfData" type="hidden" id="hfData" value="cf§§0§0§0§false§false§0¤page§1§§0§§§" />
<input name="hfCategore" type="hidden" id="hfCategore" />
<div class="ss-cont clearfix" id="ss-cont">
	<div id="topnav" class="overflowBarStyle">
		<ul class="tabQTypet" id="divNormal">
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>选择题</span>
				</div>
				<ul class="navlist">
					<li>
						<a id="hrefChoice" href="javascript:void(0);" onmouseover="createFreQ('radio','','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('radio');return false;"><i class="iconfont">&#xe607;</i><span>单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('check','','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('check');return false;"><i class="iconfont">&#xe60e;</i><span>多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('radio_down','','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('radio_down');return false;" title="下拉单选题"><i class="iconfont">&#xe615;</i><span>下拉框</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>填空题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('question','','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('question');return false;"><i class="iconfont">&#xe606;</i><span>单项填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('gapfill','','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('gapfill');return false;"><i class="iconfont">&#xe60a;</i><span>多项填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix',201,'',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('matrix',201);return false;"><i class="iconfont">&#xe60c;</i><span>矩阵填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','302','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('matrix','302'); return false;"><i class="iconfont">&#xe60d;</i><span>表格填空</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>分页说明</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="sb_setmenunav('divAllPage', true,this)" onmouseout="sb_setmenunav('divAllPage', false,this)" onclick="createFreQ('page');return false;"><i class="iconfont">&#xe614;</i><span>分页</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onclick="createFreQ('cut');return false;"><i class="iconfont">&#xe60b;</i><span>段落说明</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>矩阵题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','103','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',103);return false;"><i class="iconfont">&#xe60f;</i><span>矩阵单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','102','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',102);return false;"><i class="iconfont">&#xe613;</i><span>矩阵多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','101','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',101);return false;" title="可以设置分数"><i class="iconfont">&#xe612;</i><span>矩阵量表</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','202','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',202);return false;"><i class="iconfont">&#xe608;</i><span>矩阵滑动条</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','301','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','301'); return false;"><i class="iconfont">&#xe610;</i><span>表格数值</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','302','',true,this);return false;" onmouseout="hidePrev(); return false;" onclick="createFreQ('matrix','302'); return false;"><i class="iconfont">&#xe60d;</i><span>表格填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','303','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','303'); return false;"><i class="iconfont">&#xe609;</i><span>表格下拉框</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','302','1',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','302',1); return false;"><i class="iconfont">&#xe605;</i><span>表格组合</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','302','2',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','302',2); return false;"><i class="iconfont">&#xe616;</i><span>自增表格</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>评分题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('likert','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('likert');return false;"><i class="iconfont">&#xe61a;</i><span>量表题</span></a>
					</li>

					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','1','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',1);return false;"><i class="iconfont">&#xe61c;</i><span>评分单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',2);return false;"><i class="iconfont">&#xe61d;</i><span>评分多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','101','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',101);return false;"><i class="iconfont">&#xe612;</i><span>矩阵量表</span></a>
					</li>
				</ul>
			</li>
			<!--<li class="open">
                <div class="classifyTitle" onclick="toggleNav(this)">
                    <i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>高级题型</span>
                </div>
                <ul class="navlist">
                    <li>
                        <a href="javascript:;" onmouseover="createFreQ('check','','1',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('check','','1');return false;"><i class="iconfont">&#xe61b;</i><span>排序</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('sum','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('sum');return false;"><i class="iconfont">&#xe617;</i><span>比重题</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('slider','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('slider');return false;"><i class="iconfont">&#xe619;</i><span>滑动条</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('qingjing','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('qingjing');return false;"><i class="iconfont">&#xe61e;</i><span>情景随机</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('shop','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('shop');return false;"><i class="iconfont">&#xe620;</i><span>商品题型</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('多级下拉','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('多级下拉');return false;" title="多级下拉框进行联动"><i class="iconfont">&#xe618;</i><span>多级下拉</span></a>
                    </li>
                </ul>
            </li>-->
			<li>
				<div class="classifyTitle" onclick="toggleNav(this)" id="hrefInfo">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>个人信息</span>
				</div>
				<ul class="navlist">
					<li id="liName">
						<a href="javascript:void(0);" onmouseover="createFreQ('姓名','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('姓名');return false;"><i class="iconfont">&#xe626;</i><span>姓名</span></a>
					</li>
					<li id="liBaseInfo">
						<a href="javascript:void(0);" onmouseover="createFreQ('基本信息','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('基本信息');return false;"><i class="iconfont">&#xe624;</i><span>基本信息</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('性别','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('性别');return false;"><i class="iconfont">&#xe62e;</i><span>性别</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('年龄段','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('年龄段');return false;"><i class="iconfont">&#xe625;</i><span>年龄段</span></a>
					</li>
					<!--<li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('城市单选','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('城市单选');return false;"><i class="iconfont">&#xe627;</i><span>省市</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('省市区','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('省市区');return false;"><i class="iconfont">&#xe627;</i><span>省市区</span></a>
                    </li>-->
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('手机','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('手机');return false;"><i class="iconfont">&#xe62d;</i><span>手机</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('日期','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('日期');return false;"><i class="iconfont">&#xe628;</i><span>日期</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('时间','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('时间');return false;"><i class="iconfont">&#xe62a;</i><span>时间</span></a>
					</li>
					<!--<li>
                        <a href="javascript:void(0);" onmouseover="createFreQ('地图','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('地图');return false;"><i class="iconfont">&#xe623;</i><span>地图</span></a>
                    </li>-->
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('职业','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('职业');return false;"><i class="iconfont">&#xe62b;</i><span>职业</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('行业','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('行业');return false;"><i class="iconfont">&#xe62f;</i><span>行业</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('高校','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('高校');return false;"><i class="iconfont">&#xe62c;</i><span>高校</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('密码','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('密码');return false;"><i class="iconfont">&#xe629;</i><span>密码</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('邮寄地址','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('邮寄地址');return false;"><i class="iconfont">&#xe630;</i><span>邮寄地址</span></a>
					</li>
				</ul>
			</li>
		</ul>
		<div id="divCepingTip" style="display: none;">
		</div>
		<ul class="tabQTypet" id="divCeping" style="display: none;">
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>题型</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','101','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',101);return false;" title="可以设置分数"><i class="iconfont">&#xe612;</i><span>矩阵量表题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','202','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',202);return false;"><i class="iconfont">&#xe608;</i><span>矩阵滑动条</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','303','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','303'); return false;"><i class="iconfont">&#xe609;</i><span>表格下拉框</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','301','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix','301'); return false;"><i class="iconfont">&#xe610;</i><span>表格数值</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','201','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',201);return false;"><i class="iconfont">&#xe60c;</i><span>矩阵填空题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','103','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',103);return false;"><i class="iconfont">&#xe60f;</i><span>矩阵单选题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','102','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',102);return false;"><i class="iconfont">&#xe613;</i><span>矩阵多选题</span></a>
					</li>
				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>分页说明</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="sb_setmenunav('divAllPage', true,this)" onmouseout="sb_setmenunav('divAllPage', false,this)" onclick="createFreQ('page');return false;"><i class="iconfont">&#xe614;</i><span>分页</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onclick="createFreQ('cut');return false;"><i class="iconfont">&#xe60b;</i><span>段落说明</span></a>
					</li>
				</ul>
			</li>
			<li>
				<a href="javascript:void(0);" onclick="PDF_launch('addbatch360.aspx',792,646,null,'批量添加题目');return false;" class="pladd">批量添加</a>
			</li>
		</ul>
		<ul class="tabQTypet" id="divKaoShiT" style="display: none;">
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>考生信息</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('姓名','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('姓名');return false;"><i class="iconfont">&#xe626;</i><span>姓名</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('基本信息','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('基本信息');return false;"><i class="iconfont">&#xe624;</i><span>基本信息</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('部门','','',true,this);return false;" onmouseout="" onclick="createFreQ('部门');return false;"><i class="iconfont">&#xe643;</i><span>部门</span></a>
					</li>

					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('其它信息','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('其它信息');return false;"><i class="iconfont">&#xe630;</i><span>其它信息</span></a>
					</li>

				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>考试题型</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','1','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',1);return false;"><i class="iconfont">&#xe607;</i><span>考试单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','5','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',5);return false;"><i class="iconfont">&#xe63c;</i><span>考试判断</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',2);return false;"><i class="iconfont">&#xe60e;</i><span>考试多选</span></a>
					</li>

					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','3','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',3);return false;"><i class="iconfont">&#xe606;</i><span>单项填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','4','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',4);return false;"><i class="iconfont">&#xe60a;</i><span>多项填空</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','6','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',6);return false;"><i class="iconfont">&#xe63b;</i><span>考试简答</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','7','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',7);return false;"><i class="iconfont">&#xe611;</i><span>考试文件</span></a>
					</li>
					<li id="liWanXing" style="display:none;">
						<a href="javascript:void(0);" onmouseover="createFreQ('ceshi','9','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceshi',9);return false;"><i class="iconfont">&#xe621;</i><span>完型填空</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>分页说明</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="sb_setmenunav('divAllPage', true,this)" onmouseout="sb_setmenunav('divAllPage', false,this)" onclick="createFreQ('page');return false;"><i class="iconfont">&#xe614;</i><span>分页</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onclick="createFreQ('cut');return false;"><i class="iconfont">&#xe60b;</i><span>段落说明</span></a>
					</li>
				</ul>
			</li>
			<li>
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>其他题型</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('radio','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('radio');return false;"><i class="iconfont">&#xe607;</i><span>普通单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('check','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('check');return false;"><i class="iconfont">&#xe60e;</i><span>普通多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('question','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('question');return false;"><i class="iconfont">&#xe606;</i><span>填空题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','201','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',201);return false;"><i class="iconfont">&#xe60c;</i><span>矩阵填空</span></a>
					</li>
					<li id="liDropDownList">
						<a href="javascript:void(0);" onmouseover="createFreQ('radio_down','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('radio_down');return false;" title="下拉单选题"><i class="iconfont">&#xe615;</i><span>下拉单选</span></a>
					</li>
					<li id="liDuoJi">
						<a href="javascript:void(0);" onmouseover="createFreQ('多级下拉','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('多级下拉');return false;" title="多级下拉框进行联动"><i class="iconfont">&#xe618;</i><span>多级下拉</span></a>
					</li>
					<li id="liPingFen">
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','1','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',1);return false;"><i class="iconfont">&#xe61c;</i><span>评分单选</span></a>
					</li>
					<li id="liPingFenDuo">
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',2);return false;"><i class="iconfont">&#xe61d;</i><span>评分多选</span></a>
					</li>
					<li id="liksqj" style="display:none;">
						<a href="javascript:void(0);" onmouseover="createFreQ('qingjing','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('qingjing');return false;"><i class="iconfont">&#xe61e;</i><span>情景随机</span></a>
					</li>
				</ul>
			</li>
			<li>
				<a href="javascript:void(0);" onclick="PDF_launch('addbatchq.aspx?ks=1',840,640,null,'批量添加考试题');return false;" class="pladd">批量添加</a>
			</li>
		</ul>
		<ul id="divTouPiao" class="tabQTypet" style="display: none;">
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>个人信息</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('姓名','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('姓名');return false;"><i class="iconfont">&#xe626;</i><span>姓名</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('基本信息','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('基本信息');return false;"><i class="iconfont">&#xe624;</i><span>基本信息</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('性别','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('性别');return false;"><i class="iconfont">&#xe62e;</i><span>性别</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('question','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('question');return false;"><i class="iconfont">&#xe630;</i><span>其它信息</span></a>
					</li>
				</ul>
			</li>

			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>选择题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('toupiao','1','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('toupiao',1);return false;"><i class="iconfont">&#xe607;</i><span>投票单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('toupiao','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('toupiao',2);return false;"><i class="iconfont">&#xe60e;</i><span>投票多选</span></a>
					</li>
				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>分页说明</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="sb_setmenunav('divAllPage', true,this)" onmouseout="sb_setmenunav('divAllPage', false,this)" onclick="createFreQ('page');return false;"><i class="iconfont">&#xe614;</i><span>分页</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onclick="createFreQ('cut');return false;"><i class="iconfont">&#xe60b;</i><span>段落说明</span></a>
					</li>
				</ul>
			</li>

			<li>
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>其他题型</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('radio','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('radio');return false;"><i class="iconfont">&#xe607;</i><span>普通单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('check','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('check');return false;"><i class="iconfont">&#xe60e;</i><span>普通多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('question','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('question');return false;"><i class="iconfont">&#xe606;</i><span>填空题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','201','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',201);return false;"><i class="iconfont">&#xe60c;</i><span>矩阵填空</span></a>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="tabQTypet" id="divPingCe" style="display: none;">
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>个人信息</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('姓名','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('姓名');return false;"><i class="iconfont">&#xe626;</i><span>姓名</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('基本信息','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('基本信息');return false;"><i class="iconfont">&#xe624;</i><span>基本信息</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('性别','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('性别');return false;"><i class="iconfont">&#xe62e;</i><span>性别</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('年龄段','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('年龄段');return false;"><i class="iconfont">&#xe625;</i><span>年龄段</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('城市单选','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('城市单选');return false;"><i class="iconfont">&#xe627;</i><span>省市</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('手机','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('手机');return false;"><i class="iconfont">&#xe62d;</i><span>手机</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('日期','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('日期');return false;"><i class="iconfont">&#xe628;</i><span>日期</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('时间','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('时间');return false;"><i class="iconfont">&#xe62a;</i><span>时间</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('职业','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('职业');return false;"><i class="iconfont">&#xe62b;</i><span>职业</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('行业','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('行业');return false;"><i class="iconfont">&#xe62f;</i><span>行业</span></a>
					</li>
				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>选择题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','1','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',1);return false;"><i class="iconfont">&#xe607;</i><span>评分单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('ceping','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('ceping',2);return false;"><i class="iconfont">&#xe60e;</i><span>评分多选</span></a>
					</li>
				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>矩阵题</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('likert','2','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('likert');return false;"><i class="iconfont">&#xe61a;</i><span>量表题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('likert','11','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('likert',11);return false;"><i class="iconfont">&#xe631;</i><span>NPS量表</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','101','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',101);return false;"><i class="iconfont">&#xe612;</i><span>矩阵量表</span></a>
					</li>
				</ul>
			</li>
			<li class="open">
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>分页说明</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="sb_setmenunav('divAllPage', true,this)" onmouseout="sb_setmenunav('divAllPage', false,this)" onclick="createFreQ('page');return false;"><i class="iconfont">&#xe614;</i><span>分页</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onclick="createFreQ('cut');return false;"><i class="iconfont">&#xe60b;</i><span>段落说明</span></a>
					</li>
				</ul>
			</li>
			<li>
				<div class="classifyTitle" onclick="toggleNav(this)">
					<i class="iconfont down">&#xe633;</i><i class="iconfont right">&#xe635;</i><span>其他题型</span>
				</div>
				<ul class="navlist">
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('radio','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('radio');return false;"><i class="iconfont">&#xe607;</i><span>普通单选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('check','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('check');return false;"><i class="iconfont">&#xe60e;</i><span>普通多选</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('question','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('question');return false;"><i class="iconfont">&#xe606;</i><span>填空题</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('matrix','201','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('matrix',201);return false;"><i class="iconfont">&#xe60c;</i><span>矩阵填空</span></a>
					</li>
					<li>
						<a href="javascript:;" onmouseover="createFreQ('check','','1',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('check','','1');return false;"><i class="iconfont">&#xe61b;</i><span>排序</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('多级下拉','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('多级下拉');return false;" title="多级下拉框进行联动"><i class="iconfont">&#xe618;</i><span>多级下拉</span></a>
					</li>
					<li>
						<a href="javascript:void(0);" onmouseover="createFreQ('qingjing','','',true,this);return false;" onmouseout="hidePrev();" onclick="createFreQ('qingjing');return false;"><i class="iconfont">&#xe61e;</i><span>情景随机</span></a>
					</li>
				</ul>
			</li>
		</ul>

	</div>
	<div class="survey editContainBox" id="sur">
		<div>
			<div class="surveycontent">
				<div id="divId" class="surveyhead" style="margin-top: 18px; width: 800px; cursor: pointer; padding: 10px 0;" title="编辑问卷标题与问卷说明">
					<h1 id="pater_title" style="cursor: pointer;">正在加载问卷...</h1>
					<div id="pater_desc" class="surveydescription" style="cursor: pointer;">
					</div>
				</div>
				<div id="question"></div>
			</div>
			<div style="clear: both;">
			</div>
		</div>
		<!--<div id="divbatchq" style="margin: 20px auto 0px; text-align:center; padding-bottom: 20px;">
            <a href="###" class="sumitbutton" style="text-align: center; display: none;">批量添加题目</a>
            <a href="###" id="addCommonQue" class="sumitbutton cancle" style="text-align: center;display: none;height:35px;line-height:35px;margin-left:20px;width:80px;">维度设置</a>
            <span style="display: none;" id="divKsSet2">
            <a href="javascript:void(0);" onclick="setTikuRandom();return false;" class="sumitbutton cancle" style="margin-left: 10px;">题库随机设置</a>
            <a href="javascript:void(0);" class="sumitbutton cancle" onclick="PDF_launch('/wjx/design/settime.aspx?activity=36416073',660,430,null,'考试常用设置');return false;" style="margin-left: 10px; ">考试常用设置</a>
        </span>

            <div style="clear: both;"></div>
        </div>-->
		<div id="divSetUser" style="display:none;margin:20px auto 0px;width:200px;">
			<a href="javascript:void(0);" onclick="PDF_launch('/wjx/design/setuseractivity.aspx?activity=36416073',560,320,null,'题目&属性字段绑定');" class="sumitbutton" style="text-align: center;">题目&属性字段绑定</a>
		</div>
	</div>
	<div id="prev_box">
		<i class="triangle"></i>
	</div>
	<div id="m-rightbar">
		<div class="m-menu">
			<ul>
				<li class="m-top">
					<a href="javascript:;" onclick="gotop();return false;" title="返回顶部"><i class="iconfont">&#xe639;</i></a>
				</li>
				<li class="m-help">
					<a href="/help/help.aspx?catid=65&h=1" title="帮助中心" target="_blank"><i class="iconfont">&#xe637;</i></a>
				</li>
				<li class="m-comment">
					<a href="https://www.sobot.com/chat/pc/index.html?sysNum=02aa1bd26e3b499aa36f147f5d84f78e&moduleType=4&groupId=167fc0cc2f56459bbde0477511c9a20d&uname=%e6%89%8b%e6%9c%ba%e7%94%a8%e6%88%b7jcpnjoj6jkixd0ltmcfz3q&remark=%e4%bc%81%e4%b8%9a%e7%89%88%e8%87%b32019-04-13&tel=13164883553&params=%7b%22UserName%22%3a%22%e6%89%8b%e6%9c%ba%e7%94%a8%e6%88%b7jcpnjoj6jkixd0ltmcfz3q%22%7d" title="在线咨询" target="_blank"><i class="iconfont">&#xe632;</i></a>
				</li>
				<li class="m-bottom">
					<a href="javascript:;" onclick="gobottom();return false;" title="返回底部"><i class="iconfont">&#xe63a;</i></a>
				</li>
			</ul>
		</div>
	</div>
	<div id="status_tip" style="height: auto;">
	</div>
</div>
<div id="divInsertQ" class="sidebarbox" style="display: none;width:500px;">
	<em></em><span></span>
	<ul class="sidebarlistb" id="divIdiaocha" style="display:none;">
		<li>
			<a href="javascript:" onclick="createFreQ('cut');return false;">段落说明</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('page');return false;">分页</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('radio');return false;">单选</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('check');return false;">多选</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('question');return false;">填空题</a>
		</li>
	</ul>
	<ul class="sidebarlistb" id="divIKaoShi" style="display:none;">
		<li>
			<a href="javascript:" onclick="createFreQ('cut');return false;">段落说明</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('page');return false;">分页</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceshi',1);return false;">
				单选</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceshi',5);return false;">
				判断</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceshi',2);return false;">
				多选</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceshi',4);return false;">
				多项填空</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceshi',6);return false;">
				简答</a>
		</li>
	</ul>
	<ul class="sidebarlistb" id="divITouPiao" style="display:none;">
		<li>
			<a href="javascript:" onclick="createFreQ('cut');return false;">段落说明</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('page');return false;">分页</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('姓名');return false;">姓名</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('toupiao',1);return false;">投票单选</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('toupiao',2);return false;">投票多选</a>
		</li>
	</ul>
	<ul class="sidebarlistb" id="divI360" style="display:none;">
		<li>
			<a href="javascript:" onclick="createFreQ('cut');return false;">段落说明</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('page');return false;">分页</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('matrix',101);return false;">矩阵量表题</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('matrix',202);return false;">矩阵滑动条</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('matrix',301);return false;">表格数值题</a>
		</li>
	</ul>
	<ul class="sidebarlistb" id="divICeping" style="display:none;">
		<li>
			<a href="javascript:" onclick="createFreQ('cut');return false;">段落说明</a>
		</li>
		<li>
			<a href="javascript:" onclick="createFreQ('page');return false;">分页</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceping',1);return false;">评分单选</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('ceping',2);return false;">评分多选</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('likert');return false;">量表题</a>
		</li>
	</ul>
	<div style="clear:both;padding-top:15px;text-align:left;font-size:14px;"><b>提示：</b>如需添加其它题型，请在页面左侧添加。</div>
</div>
<div id="toolTipLayer" class="toolTipLayerMenu tipcenter">
</div>
<div id="toolTipLayerMenu" class="toolTipLayerMenu">
</div>
<div id="toolTipLayerTop" class="toolTipLayerMenu tiptop">
</div>

<div id="batchDeleteMenu" style="position:absolute; display: none; border-radius:2px;width:50px; border:1px solid #B1B1B1;background:#fff; z-index: 20000; overflow:auto; padding:2px 4px;color:#222;">
</div>
<div id="divQAttr" style="width:640px; text-align: left; display: none;">
	<div style="padding: 10px 0 0 10px; margin: 0px; background:#fff; font-size:14px;">
		<table>
			<tr>
				<td>
					<strong>标题：</strong>
				</td>
				<td>
					<input id="paper_attr_title" onblur="paper_attr_title_onblur(this);" type="text" value="请输入您的问卷的标题" style="border: 1px solid #dadada; line-height: 22px; width:494px; height: 22px; padding: 0 2px; font-size: 14px;" maxlength="100" />
				</td>
			</tr>
			<tr>
				<td valign="middle">
					<strong>说明：</strong>
				</td>
				<td>
					<textarea id="paper_attr_desc" onblur="paper_attr_desc_onblur(this);" rows="10" title="在此输入问卷说明，可以使用HTML格式插入图片或者音乐，Google地图等"></textarea><br />
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<div style="color: Red;">提示：问卷说明不能超过10000个字符<span id="spanDTip" style="display: none;">，已经输入<span id="spanHInput"></span>字符,还可以输入<span id="spanLeftInput"></span>字符</span>
					</div>
				</td>
			</tr>
		</table>
	</div>
	<div style="text-align: center; margin-top: 10px;">
		<a href="javascript:;" onclick="PDF_close();return false;" class="sumitbutton">确定</a>
	</div>
</div>
<div id="divAllPage" class="sidebarbox" style="display: none;width:95px;">
	<ul class="sidebarlistb">
		<li>
			<a href="javascript:void(0);" onclick="createFreQ('page');return false;" style="width:75px">分页栏</a>
		</li>
		<li>
			<a href="javascript:void(0);" onclick="addpages();return false;" style="width:75px">一题一页</a>
		</li>
	</ul>
</div>
<div id="divScore" class="sidebarbox" style="display: none;width:140px;">
	<em style="left:70px;"></em><span style="left:70px;"></span>
	<div style="font-size:14px;color:#58595b;">
		可设置<b>每个选项的分数</b><br /> 适合满意度调查与测评
	</div>
</div>

<div id="moretype" class="sidebarbox" style="display: none;width:180px;">
	<em style="left:90px;"></em><span style="left:90px;"></span>
</div>
<div id="qType" class="sidebarbox" style="display: none;width:450px;">
	<em style="left:225px;"></em><span style="left:225px;"></span>
</div>
<div style="display: none;" id="divTitleEditor">
	<div style="margin: 10px 0 0 15px;">
		<textarea style="width: 650px; height: 300px; text-align: center;" id="textTitleId"></textarea>
		<div style="text-align: center;margin-top:15px;">
			<input class="finish cancle" type="button" value=" 取 消 " onclick="clickCancel();" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input class="finish save" type="button" value=" 保 存 " onclick="clickOK();" style="background:#1ea0fa;" />
		</div>
	</div>
</div>
<div style="display: none;" id="divTextAreaEditor">
	<div style="margin: 10px 0 0 15px;text-align:left;">
		<div style="width:770px; height:502px; overflow-y: hidden; position: relative;">
			<div id="lineObj" style="position: absolute; top: 4px; left: 0px; width: 27px; line-height:20px; text-align: right;"></div>
			<textarea wrap="off" style="width: 730px; height: 496px; text-align: left; border: solid 1px #cdcdcd; overflow:auto;resize: none; line-height: 20px;position: absolute; left: 30px;" id="txtEnlarge"></textarea>
		</div>
		<div style="text-align: center;margin-top:15px;">
			<input class="finish" type="button" value=" 保 存 " onclick="clickOktxt();" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input class="finish cancle" type="button" value=" 取 消 " onclick="window.parent.PDF_close();" />
		</div>
	</div>
</div>
<div style="display: none;" id="divUpgradeVip">
	<div style="margin: 30px 0 0 20px;">
		<div id="divUpTip">
		</div>
		<div style="margin-top: 15px;">
			<a href="javascript: save_paper('upgrade', true);" class="btnbgbig"><span>立即升级</span></a>
		</div>
		<div id="divHighSchool"></div>
	</div>
</div>
<div id="divDescPop" style="display: none;">
	<div style="padding: 10px;overflow: auto;text-align:left;font-size:14px;" id="divDescPopData"></div>
</div>

<input name="hfKeyword" type="hidden" id="hfKeyword" value="%e7%99%bd%e7%b2%89%7c%e6%af%92%e8%8d%af%7c%e7%82%b8%e5%bc%b9%7c%e9%b8%a6%e7%89%87%7c%e6%b5%b7%e6%b4%9b%e5%9b%a0%7c%e7%bf%bb%e5%a2%99%7c%e6%80%a7%e4%ba%a4%7c%e6%96%87%e9%9d%a9%7cfuck%7ck%e7%b2%89%7c%e6%af%9b%e7%89%87%7c%e7%bb%9f%e7%8b%ac%7c%e5%8f%b0%e7%8b%ac%7c%e6%b3%95%e8%bd%ae%7c%e6%89%93%e7%82%ae%7c%e9%9b%86%e8%b5%9e%7c%e6%9e%aa%7c%e6%89%93%e7%a0%b8%7c%e6%96%87%e5%8c%96%e5%a4%a7%e9%9d%a9%e5%91%bd%7c%e9%a2%90%e4%bd%bf%e6%b0%94%e6%8c%87%7c%e6%8b%89%e6%b8%85%e5%8d%95" />
 
<div id="sumbitHandleBoxWrap">
	<div class="stu-wrap stu-wrap1" id="handle-wrap1">
		<img src="__PUBLIC__/wj/images/stu/according-text.png" alt="" />
		<div class="text-tit">
			<div class="pull-left"><strong>01.填写并提交问卷</strong></div>
			<div class="pull-right"><strong>02.提交后显示您自定义的文案</strong></div>
		</div>
	</div>
	<div class="stu-wrap stu-wrap2" id="handle-wrap2">
		<img src="__PUBLIC__/wj/images/stu/transcript.png" alt="" />
		<div class="text-tit">
			<div class="pull-left"><strong>01.填写并提交问卷</strong></div>
			<div class="pull-right"><strong>02.提交答卷后显示成绩单</strong></div>
		</div>
	</div>
	<div class="stu-wrap stu-wrap3" id="handle-wrap3">
		<img src="__PUBLIC__/wj/images/stu/jump-web.png" alt="" />
		<div class="text-tit clearfix">
			<div class="pull-left"><strong>01.填写并提交问卷</strong></div>
			<div class="pull-right"><strong>02.提交后跳转到您指定的一个页面</strong></div>
		</div>
	</div>
	<div class="stu-wrap stu-wrap4 handle-style-wrap" id="handle-wrap4">
		<img src="__PUBLIC__/wj/images/stu/conditional-processing.png" alt="" />
		<div class="text-tit clearfix">
			<div class="pull-left"><strong>得0-59分显示自定义文案</strong></div>
			<div class="pull-right"><strong>得81-100分跳转指定页面</strong></div>
			<div class="pull-right"><strong>得60-80分显示成绩单</strong></div>
		</div>
	</div>
</div>

 
  </div>
</template>
