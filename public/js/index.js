 var option = {
     title: {
         text: 'ECharts 入门示例'
     },
     tooltip: {},
     legend: {
         data: ['销量']
     },
     xAxis: {
         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
     },
     yAxis: {},
     series: [{
         name: '销量',
         type: 'bar',
         data: [5, 20, 36, 10, 10, 20]
     }]
 };

 var mapChart = echarts.init(document.getElementById('map'));
 mapChart.setOption(option);
 var cChar = echarts.init(document.getElementById('char'));
 cChar.setOption({
     series: [{
         name: '访问来源',
         type: 'pie',
         radius: '55%',
         data: [{
             value: 235,
             name: '视频广告'
         }, {
             value: 274,
             name: '联盟广告'
         }, {
             value: 310,
             name: '邮件营销'
         }, {
             value: 335,
             name: '直接访问'
         }, {
             value: 400,
             name: '搜索引擎'
         }]
     }]
 })
 echarts.init(document.getElementById('map1')).setOption({
     xAxis: {
         type: 'value'
     },
     yAxis: {
         type: 'value'
     },
     dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
         type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
         start: 10, // 左边在 10% 的位置。
         end: 60 // 右边在 60% 的位置。
     }],
     series: [{
         type: 'scatter', // 这是个『散点图』
         itemStyle: {
             normal: {
                 opacity: 0.8
             }
         },
         symbolSize: function(val) {
             return val[2] * 40;
         },
         data: [
             ["14.616", "7.241", "0.896"],
             ["3.958", "5.701", "0.955"],
             ["2.768", "8.971", "0.669"],
             ["9.051", "9.710", "0.171"],
             ["14.046", "4.182", "0.536"],
             ["12.295", "1.429", "0.962"],
             ["4.417", "8.167", "0.113"],
             ["0.492", "4.771", "0.785"],
             ["7.632", "2.605", "0.645"],
             ["14.242", "5.042", "0.368"]
         ]
     }]
 })
