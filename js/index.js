/* 二级菜单栏 */
$('#logo ul>li').on('mouseenter',function(){
    let index=$(this).index();
    $('#logo .subMenu').eq(index).show();
})
$('#logo ul>li').on('mouseleave',function(){
    $('#logo .subMenu').hide();
})
// 轮播
$("#demo3").slideBox({
    duration: 0.3, //滚动持续时间，单位：秒

    easing: "linear", //swing,linear//滚动特效

    delay: 5, //滚动延迟时间，单位：秒

    hideClickBar: false, //不自动隐藏点选按键

    clickBarRadius: 10
  });