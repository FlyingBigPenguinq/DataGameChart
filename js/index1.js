$.ajax({
    url: 'http://127.0.0.1:9000/zl/data/main_v1',
    type: 'get',
    dataType: 'json',
    data: {},
    success: function (data) {
        let xline = data.data.timeline;
        let yline = data.data.nums;
        let myChart = echarts.init(document.getElementById("box1"));
        var option = {
            xAxis : [
                {
                    data : xline,
                    splitLine:{
                        show:false
                    },
                    name:"时间序列",
                    show:true,
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
                }
            ],

            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
            },
            series : [
                {
                    name: '参加活动人数',
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
                }
            ],

            title: {
                text: '2019-12　至　2020-3　市场招聘体量',
                subtext: '数据来源：长风大数据',
                textStyle: {                 //---主标题内容样式
                    color: '#fff'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            //图例名
            legend: {
                data:['Excel03','分享人数','关注人数','注册人数','领取红包人数'],
                textStyle:{                 //---主标题内容样式
                    color:'#fff'
                },
            },
            grid: {
                left: '1%',   //图表距边框的距离
                right: '1%',
                bottom: '8%',
                containLabel: true
            },
            //工具框，可以选择
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
        }
        myChart.setOption(option);
    }
})
