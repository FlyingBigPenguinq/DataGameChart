$.ajax({
    url: serverUrl + 'data/jobSalary',
    type: 'get',
    dataType: 'json',
    data: {},
    success: function (data) {
        var myCharts1 = echarts.init(document.getElementById('box5'));
        var option1 = {
            title: {
                text: '主标题',
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
        myCharts1.setOption(option1);
    }
})