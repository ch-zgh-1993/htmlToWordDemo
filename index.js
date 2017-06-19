  var myChart1 = echarts.init(document.getElementById('chart1'));
	var option1 = {
		title: {
			text: '问题类型分布柱状图',
			x: 'left'
		},
		tooltip: {
			trigger: 'axis'
		},
		toolbox: {
			show: true,
			color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
			backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
			borderColor: '#ccc',       // 工具箱边框颜色
			borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
			padding: 5,
			itemSize: 23,
			feature: {
				dateView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line','bar']},
				restore: {show: true, color: 'black'},
				saveAsImage: {show: true}
			}
		},
		calculable: true,
		grid: {
			borderWidth: 0,
			y: 80,
			y2: 100
		},
		xAxis: [
			{
				type : 'category',
				data: ['操作系统服务','用户帐号配置','安全审计', '口令配置策略', '网络通信配置','系统防火墙安全','自定义安全配置','操作系统文件安全防护', '日志审计配置'],
				axisLabel: {
					interval: 0,
					rotate: 40,
				}
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series: [
			{
				name: '问题',
				type: 'bar',
				itemStyle: {
					normal: {
						color: function(params){
							var colorList = [
								'#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
								'#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
								'#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
							];
							return colorList[params.dataIndex];
						}
					},
					label: {
						show: true,
						position: 'top',
						formatter: "{b}\n{c}",
						textStyle: {
							color: 'blue',
							fontSize: '20',
							fontFamily : '微软雅黑',
							fontWeight : 'bold'
						}
					}
				},
				data: [1, 3, 5, 7, 9, 11, 13, 15, 17]
			},
		]
	};
	myChart1.setOption(option1);

	var myChart2 = echarts.init(document.getElementById('chart2'));
	var optioin2= {
		title : {
			text: '问题类型分布饼图',
			x:'left'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'right',
			data: ['操作系统服务','用户帐号配置','安全审计', '口令配置策略', '网络通信配置','系统防火墙安全','自定义安全配置','操作系统文件安全防护', '日志审计配置'],
		},
		series : [
			{
				name: '问题类型',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				data:[
						{name: '操作系统服务', value: 1},
						{name: '用户帐号配置', value: 2},
						{name: '安全审计', value: 3},
						{name:'口令配置策略', value: 4},
						{name:'网络通信配置', value: 5},
						{name:'系统防火墙安全', value: 6},
						{name:'自定义安全配置', value: 7},
						{name: '操作系统文件安全防护', value: 8},
						{name: '日志审计配置', value: 9},

					]
			}
		]
	};
	myChart2.setOption(optioin2);

	var text = '给你这雨后的彩虹';
	var mytext = document.getElementById('text');
	mytext.innerHTML += text; 
	//表格内容一般为生成的
	var data = [[1, 3, 5, 7], [2, 4, 6, 8]];//可以组成，thead可选择前n行
<!-- 使用jsFiddle生成Word -->
	var result = document.getElementById('toWord');
	result.addEventListener('click', function(){
		
		//img类推
		var imgs = [],canvasArr = [myChart1, myChart2];
		// need dataurl
		for(var i = 0; i < canvasArr.length; i++){
			var canvasIndex = canvasArr[i].getRenderedCanvas({
				pixelRatio: 1,
				backgroundColor: '#FFFFFF'
			});
			imgs.push(canvasIndex.toDataURL('image/jpeg'));
		}

		//虚拟创建各种需要的DOM内容，不加入文档流，但使用, style需要在节点中添加
		var $div = $('<div id="myDoc"></div>');
		var $homeTitle = $('<p class="homeTitle" style="font-size: 30px; font-weight: 600; text-align: center; margin: 140px 300px 270px 300px;">' + '首页头部' +'</p>');
		var $homeInfo = $(
				'<p class="homeInfo" style="font-size: 23px; margin: 50px 0 0 30px; font-weight: 600;">' + 'exportConfig.homePage.programInfo1' + '</p>' +
				'<p class="homeInfo" style="font-size: 23px; margin: 50px 0 0 30px; font-weight: 600;">' + 'exportConfig.homePage.programInfo2' + '</p>' +
				'<p class="homeInfo" style="font-size: 23px; margin: 50px 0 0 30px; font-weight: 600;">' + 'exportConfig.homePage.programInfo3' + '</p>' +
				'<p class="homeInfo" style="font-size: 23px; margin: 50px 0 0 30px; font-weight: 600;">' + 'exportConfig.homePage.programInfo4' + '</p>'
		);
		var $homeFooter = $('<p class="homeFooter" style="text-align: center; font-size: 13px; page-break-after: always; margin-top: 40px;">' + 'exportConfig.homePage.footer' + '</p>');
		var $firstPointTitle = $('<p class="pointTitle" style="page-break-before: always; font-weight: 600; font-size: 25px; margin-bottom: 25px;">' + 'exportConfig.theFirst.title'+ '</p>');
		var $firstPointFirPara = $('<p class="pointParagraph">' + '&nbsp;&nbsp;&nbsp;' + 'requestData.LevelSummary' + 'exportConfig.theFirst.paragraph1p7' + '</p>');
		var $firstPointFirImg = $('<div style="text-align: center;">' + '<img class="pointImg" style="width: 350px; margin-top: 20px; margin-bottom: 10px;" />'+ '\n' + '<img class="pointImg" style="width: 350px; margin-top: 20px; margin-bottom: 10px;"/>' + '<p style="font-size: 20px; font-weight: 600;">图 1 危害等级分布柱状图、饼图</p>' + '</div>');
		var $firstPointSecPara = $('<p class="pointParagraph">' + '&nbsp;&nbsp;&nbsp;' + 'requestData.TypeSummary' + 'exportConfig.theFirst.paragraph2p11'+ '</p>');
		var $firstPointSecImg = $('<div style="text-align: center;">' + '<img class="pointImg" style="width: 350px; margin-top: 20px; margin-bottom: 10px;"/>' + '\n' + '<img class="pointImg" style="width: 350px; margin-top: 20px; margin-bottom: 10px;"/>' + '<p style="font-size: 20px; font-weight: 600;">图 1 问题类型分布柱状图、饼图</p>' + '</div>');
		var $secondPointTitle = $('<p class="pointTitle" style="font-size: 25px; font-weight: 600; margin-bottom: 25px;">' + 'exportConfig.theSecond.title' + '</p>' + '<p class="tableTitle" style="text-align: center;">' + 'exportConfig.theSecond.tableTitle' +'</p>');
		var $resultTable = structureTable();
		// 构造表格，structure table ,这里的data.length 需改为项目的表格内容，如requestData.ProblemList.length
		function structureTable() {
			var $table = $('<table style="border-collapse: collapse; text-align: left; word-wrap: break-word; word-break: break-all;"></table>');
			var $thead = $('<thead style="text-align: center;"><tr><td style="width: 10%; border: 1px solid black;">检测目标</td><td style="width: 10%; border: 1px solid black;">问题类型</td><td style="width: 10%; border: 1px solid black;">危害等级</td><td style="border: 1px solid black; width: auto;">建议方案</td></tr></thead>');
			var tbody = '<tbody>';
			for(var i = 0; i < data.length; i++){
				tbody +='<tr>' + '<td style="border: 1px solid black;">' + data[i][0] + '</td>' + '<td style="border: 1px solid black;">' + data[i][1] + '</td>' + '<td style="border: 1px solid black;">' + data[i][2] + '</td>' + '<td style="border: 1px solid black;">' + data[i][3] + '</td>' + '</tr>';
			}
			tbody += '</tbody>';
			var $tbody = $(tbody);
			$table.append($thead, $tbody);
			return $table;
		}
		$div.append($homeTitle, $homeInfo, $homeFooter, $firstPointTitle, $firstPointFirPara, $firstPointFirImg, $firstPointSecPara, $firstPointSecImg, $secondPointTitle, $resultTable);

		//主体函数，即将内容加入到word中
		$.fn.wordExport = function(fileName) {
			fileName = typeof fileName !== 'undefined' ? fileName : "导出";
			var static = {
				mhtml: {
					top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
					head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n+ '_styles_' + \n</style>\n</head>\n",
					body: "<body>_body_</body>"
				}
			};
			var options = {
				maxWidth: 624
			};
			// Clone selected element before manipulating it
			var markup = $(this).clone();

			// Remove hidden elements from the output
			markup.each(function() {
				var self = $(this);
				if (self.is(':hidden'))
					self.remove();
			});

			// Embed all images using Data URLs
			// img如果再文档流中，上面可以不用处理，使用这儿的内容先去创建canvas 然后toDataURL获取uri再进行使用，这里注释是因为上面我们已经将内容转为uri，故不需要做无用功
			var images = Array();
			var img = markup.find('img');
			for (var i = 0; i < imgs.length; i++) {
				// Calculate dimensions of output image
//				var w = Math.min(img[i].width, options.maxWidth);
//				var h = img[i].height * (w / img[i].width);
				// Create canvas for converting image to data URL
//				var canvas = document.createElement("CANVAS");
//				canvas.width = w;
//				canvas.height = h;
				// Draw image to canvas
//				var context = canvas.getContext('2d');
//				context.drawImage(img[i], 0, 0, w, h);
				// Get data URL encoding of image
				var uri = imgs[i];
				$(img[i]).attr("src", imgs[i]);
//				img[i].width = w;
//				img[i].height = h;
				// Save encoded image to array
				images[i] = {
					type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
					encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
					location: $(img[i]).attr("src"),
					data: uri.substring(uri.indexOf(",") + 1)
				};
			}
			// Prepare bottom of mhtml file with image data
			var mhtmlBottom = "\n";
			for (var i = 0; i < images.length; i++) {
				mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
				mhtmlBottom += "Content-Location: " + images[i].location + "\n";
				mhtmlBottom += "Content-Type: " + images[i].type + "\n";
				mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
				mhtmlBottom += images[i].data + "\n\n";
			}
			mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

//			 TODO: load css from included stylesheet
//			 styles如果再文档流中可用，否则通过这种方式，无法查找到元素，无法添加样式，故上面将样式内联在dom结构中
			var styles = 'table {border-collapse:collapse; border: 1px solid #000;} td { border: 1px solid #000;} h1 { font-size: 30px; color: red; }'
			// Aggregate parts of the file together
			var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", markup.html())) + mhtmlBottom;

			// Create a Blob with the file contents
			var blob = new Blob([fileContent], {
				type: "application/msword;charset=utf-8"
			});
			saveAs(blob, fileName + ".doc");
		}
		$div.wordExport('docName');
	},false);
