$.ajax({
    url: serverUrl + 'data/industry',
    type: 'get',
    dataType: 'json',
    data: {},
    success: function (data) {
        var myCharts = echarts.init(document.getElementById('box3'));
        console.log(data.data);
        var option = {
            title: {
                text: '各个行业的分布情况',
                left: 'left',
                top: 20,
                textStyle: {
                    color: 'white'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            series: [
                {
                    name: '行业占比',
                    type: 'pie',
                    clockwise: 'true',
                    startAngle: '0',
                    radius: '60%',
                    center: ['50%', '50%'],
                    data:data.data,
                }
            ]
        };
        myCharts.setOption(option);
    }
})