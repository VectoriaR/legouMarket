$('#loginBox ol li').on('click',function(){
    //获取索引
    let index=$(this).index();
    //点击相应的li改变样式,其他的兄弟元素去掉样式
    $(this).addClass('red').siblings().removeClass('red');
    // 显示对应的二级菜单---先干掉所有，再救活一个
    $('#loginBox div.subMenu').hide();
    $('#loginBox div.subMenu').eq(index).show();
})