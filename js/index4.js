$.ajax({
    url: serverUrl + 'data/main_v2',
    type: 'get',
    dataType: 'json',
    data: {},
    success: function (data) {
        let xline = data.data.timeline;
        let yline = data.data.nums;
        var myChart = echarts.init(document.getElementById("box4"));
        var option = {
            // 标题
            title: {
                text: '2020-4 至　2020-5　招聘市场体量',
                /*subtext: '数据来源：华秉科技-dancer',*/
                textStyle: {                 //---主标题内容样式
                    color: '#fff'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '1%',   //图表距边框的距离
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            //工具框，可以选择
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            //x轴信息样式
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xline,
                //坐标轴颜色
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                //x轴文字旋转
                axisLabel: {
                    rotate: 30,
                    interval: 10
                },
            },

            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                }
            ],
            series: [
                //虚线
                {
                    name: '招聘人数',
                    type: 'line',
                    symbolSize: 4,   //拐点圆的大小
                    color: ['red'],  //折线条的颜色
                    data: yline,
                    smooth: false,   //关键点，为true是不支持虚线的，实线就用true
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 2,
                                type: 'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                    }
                },
                //实线
                /*{
                    name: '分享人数',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 4,
                    itemStyle: {
                        normal: {
                            color: 'red',
                            borderColor: 'red'  //拐点边框颜色
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310]
                },*/
            ]
        };
        myChart.setOption(option);
    }
})