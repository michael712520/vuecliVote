<template>
  <div class="about">
     <div id="ss-header">
	<div id="divMenu">
	</div>
</div>
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
</div>
 

 
 
 

  
	 
</div>

 
 
</template>
