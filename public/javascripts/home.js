var telReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
$(function () {
    var provinceData = JSON.parse($('#provinceData').val());
    var cityData = provinceData[0].children;
    var areaData = cityData[0].children;
    var provinceHtml = '', cityHtml = '', areaHtml = '';
    provinceData.map(v => {
        provinceHtml += `<option value=${v.label}>${v.value}</option>`
    })
    cityData.map(v => {
        cityHtml += `<option value=${v.label}>${v.value}</option>`
    })
    areaData.map(v => {
        areaHtml += `<option value=${v.label}>${v.value}</option>`
    })
    $("#province").html(provinceHtml)
    $("#city").html(cityHtml)
    $("#area").html(areaHtml)
    // banner
    layui.use('carousel', function () {
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#hui_carousel',
            width: '100%', //设置容器宽度
            arrow: 'hover', //始终显示箭头
            anim: 'fade'
        });
    });
    // form
    layui.use('form', function () {
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        //但是，如果你的HTML是动态生成的，自动渲染就会失效
        //因此你需要在相应的地方，执行下述方法来手动渲染，跟这类似的还有 element.init();
        form.render();
        // 选择省
        form.on('select(province)', function (data) {
            var a = provinceData.find(v => v.label == data.value)
            if (a) {
                cityData = a.children;
                areaData = cityData[0].children;

                var cityHtml = '', areaHtml = '';
                cityData.map(v => {
                    cityHtml += `<option value=${v.label}>${v.value}</option>`
                })
                areaData.map(v => {
                    areaHtml += `<option value=${v.label}>${v.value}</option>`
                })
                $("#city").html(cityHtml)
                $("#area").html(areaHtml)
                form.render('select');
            }
        });
        // 选择市
        form.on('select(city)', function (data) {
            var provinceValue = $('#province').val();
            var a = provinceData.find(v => v.label == provinceValue)
            if (a) {
                var b = a.children.find(m => m.label == data.value)
                areaData = b.children;

                var areaHtml = '';
                areaData.map(v => {
                    areaHtml += `<option value=${v.label}>${v.value}</option>`
                })
                $("#area").html(areaHtml)
                form.render('select');
            }
        });

        // 获取表单的值
        form.on('submit(btnSubmit)', function (data) {
            var formData = data.field;
            console.log(formData)
            if(telReg.test(formData.phone)){
                return layer.msg('请输入正确格式的手机号'); 
            }
        });
    });
})